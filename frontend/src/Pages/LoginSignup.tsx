import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import { responseData } from '../Types/type';

export const LoginSignup = () => {

  const [state,setState] = useState("Login");
  
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })


  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }


  const login = async () =>{
    console.log("Login Function Executed",formData);

    let responseData: responseData | undefined;
    // Server side - login
    await fetch(`${process.env.REACT_APP_SERVER_SIDE_URL}/login`,{
      method:"POST",
      headers:{
        Accept:"application/form-data",
        "Content-Type":"application/json",
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data: responseData)=>(responseData=data)) // this line of code is different from signup (need to test)

    if(responseData && responseData.success){
          localStorage.setItem("auth-token",responseData.token);
          localStorage.setItem("cart-data", JSON.stringify(responseData.cartData)); // Store cart data
          window.location.replace("/");
        }
        else{
          alert(responseData?.errors)
        }

  }


  const signup = async () =>{
    console.log("Signup Function Executed",formData);
    let responseData: responseData | undefined;
    // Server side - signup
    await fetch(`${process.env.REACT_APP_SERVER_SIDE_URL}/signup`,{
      method:"POST",
      headers:{
        Accept:"application/form-data",
        "Content-Type":"application/json",
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data) // this code is original code 

    if(responseData && responseData.success){
      localStorage.setItem("auth-token",responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData?.errors)
    }
  }
  

  return (
    <div className="loginsignup">
    <form className="loginsignup-container">
      <h2>{state}</h2>
      <div className="form-group">
        {state==="Sign Up"?<input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder="Username" />:<></>}
        <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Email address" />
        <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Enter your password" />
      </div>
      <button type="button" onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
      {state==="Sign Up"
      ?<p className="loginsignup-signup">Already has an account? <span onClick={()=>{setState("Login")}}>Login</span></p>
      :<p className="loginsignup-signup">New Registration? <span onClick={()=>{setState("Sign Up")}}>Sign Up</span></p>
      }
    </form>
  </div>
  )
}
