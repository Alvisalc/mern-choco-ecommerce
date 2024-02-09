import React from 'react'
import './Banner.css'
import {Link} from 'react-router-dom'
import banner from'../Assets/banner-3.jpg';

export const BannerBtm = () => {
  return (
    <div className="banner">
      <div className="container">
          <div className="banner-container">
              <div className="img-side">
                  <img src={banner} alt="banner3" />
              </div>
              <div className="text-side">
                <div className="text">
                  <h2>Discover Your Perfect Gift: An Assorted Selection</h2>
                  <p>Embark on a journey of joy and surprise with our curated collection of gifts.</p>
                  <Link to="/assorted"><button>Explore More</button></Link>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}
