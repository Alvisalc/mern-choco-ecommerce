const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose"); // for MongoDB integration
const jwt = require("jsonwebtoken"); // for user authentication
const cors = require("cors"); // cross-origin resource sharing
const bcrypt = require('bcrypt'); // for password hashing and verification
require('dotenv').config(); // secure API key

app.use(express.json()); // enable middleware to parse incoming JSON data in requests
app.use(cors()); // enable middleware to cros for hanlding cross-origin requests

// Database Connection with MongoDB
const username = process.env.mongodb_username;
const password = process.env.mongodb_password;
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.g9uwwfh.mongodb.net/mern-choco-ecommerce`); // api seperate

// Stripe API
const stripe = require('stripe')(process.env.stripe_secret_key);

// Express server
app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

// Shema creating for User model
// sepearte the model
const Users = mongoose.model("Users",{
    name:{
        type:String,    
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

// SignUp 
app.post("/signup",async (req,res)=>{
    let check = await Users.findOne({email:req.body.email});
    if (check){
        return res.status(400).json({success:false,errors:"email has been registered"})
    }

    // If the user not register before, will create a cart
    // find the issue - for loop not 
    let cart = {};
    for (let i = 0; i < 300; i++){
        cart[i] = 0;
    }

    // Hash the password being saving
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // user will be created
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:hashedPassword,
        cartData:cart,
    })

    // user save 
    await user.save();

    // data
    const data = {
        user:{
            id:user.id
        }
    }

    // jwt sign method to encypted the token
    const token = jwt.sign(data,"secret_ecom");
    res.json({success:true,token})

})

// User login
app.post("/login", async (req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if (user) {
        // Compare hashed password
        const passCompare = await bcrypt.compare(req.body.password, user.password);
        // Check if password is correct
        if (passCompare) {
            const data ={
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,"secret_ecom");
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"Wrong Password"});
        }
    }
    else{
        res.json({success:false,errors:"Wrong Email Id"});
    }
})

// middleware to fetch user

// middleware sepearte
const fetchUser = async (req,res,next)=>{
    const token = req.header("auth-token");
    if (!token){
        res.status(401).send({errors:"Please use valid token"})
    }
    else{
        try{
            const data = jwt.verify(token,"secret_ecom");
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({errors:"Please use valid token"})
        }
    }
}

// add products to cart
app.post("/addtocart",fetchUser,async(req,res)=>{
    console.log("added",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
})

// remove product from cart
app.post("/removefromcart",fetchUser,async(req,res)=>{
    console.log("removed",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
})

// Stripe check-out
app.post('/create-checkout-session', async (req, res) => {
    try {
    // setup the session layout and content 
    const session = await stripe.checkout.sessions.create({
        line_items: req.body.lineItems, // important to pass the line item through the Stripe
        mode: 'payment',
        success_url: `${process.env.CLIENT_URL}/success`,
        cancel_url: `${process.env.CLIENT_URL}/cart`,
    });

    res.send({id: session.id}); // pass it to frontend to identify the checkout session
    
    } catch (error) {
        console.error("Error creating checkout session:", error);
        res.status(500).json({ success: false, errors: "Internal Server Error" });
    }
});

// check the server connection 
app.listen(port,(error)=>{
    if (!error) {
        console.log("Server Running on Port "+port)
    }
    else
    {
        console.log("Error : "+error)
    }
})

