import React from 'react'
import './SubHero.css'
import banner from "../Assets/banner-1.jpg"

export const SubHero = () => {
  return (
    <div className="subhero-container-box">
        <div className="subhero-container">
            <div className="subhero-left">
                <h2>Discover the chocolate world</h2>
                <p>Your will find the most delighted sweets here.</p>
            </div>
            <div className="subhero-right">
                <img src={banner} alt="banner1" />
            </div>
        </div>
    </div>
  )
}
