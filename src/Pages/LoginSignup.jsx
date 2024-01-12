import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className="loginsignup">
    <form className="loginsignup-container">
      <h2>Welcome back</h2>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" />
      </div>
      <button type="submit">Login</button>
      <p className="loginsignup-signup">New Registration? <span>Sign Up</span></p>
      
    </form>
  </div>
  )
}
