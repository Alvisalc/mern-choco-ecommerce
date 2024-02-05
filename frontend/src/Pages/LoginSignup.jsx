import React, { useState } from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {

  const [state,setState] = useState("Login");
  
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })


  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }


  const login = async () =>{
    console.log("Login Function Executed",formData);
    let responseData;
    await fetch("http://localhost:4000/login",{
      method:"POST",
      headers:{
        Accept:"application/form-data",
        "Content-Type":"application/json",
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem("auth-token",responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }


  const signup = async () =>{
    console.log("Signup Function Executed",formData);
    let responseData;
    await fetch("http://localhost:4000/signup",{
      method:"POST",
      headers:{
        Accept:"application/form-data",
        "Content-Type":"application/json",
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem("auth-token",responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
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
