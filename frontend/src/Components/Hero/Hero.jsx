import React from 'react'
import './Hero.css'

export const Hero = () => {
  return (
    <div className="hero-container">
      {/* Hero image */}
      <div className="hero-background"></div>
      {/* Content in the middle */}
      <div className="hero-content">
        <h1>Discover the Sweet World of Chocolates</h1>
        <p>Indulge in the finest chocolates crafted just for you</p>
        <button onClick={() => window.location.href = '/Chocolates'}>Shop Now</button>
      </div>
    </div>


  )
}
