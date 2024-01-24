import React from 'react'
import './SubHero.css'
import banner from "../Assets/banner-1.jpg"

export const SubHero = () => {
  return (
    <div className="subhero-container-box">
        <div className="subhero-container">
            <div className="subhero-left">
                <h2>Experience with Organic Chocolate Delights</h2>
                <p>Delight your senses with our luscious chocolate creations, meticulously crafted from the finest organic ingredients.</p>
            </div>
            <div className="subhero-right">
                <img src={banner} alt="banner1" />
            </div>
        </div>
    </div>
  )
}
