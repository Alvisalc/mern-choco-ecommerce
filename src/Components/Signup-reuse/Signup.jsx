import React from 'react';
import './Signup.css';

export const Signup = () => {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
