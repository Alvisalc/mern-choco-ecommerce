import React from 'react'
import './BannerBtm.css'
import banner from '../Assets/banner-3.jpg'
import {Link} from 'react-router-dom'

export const BannerBtm = () => {
  return (
    <div className="banner-bottom">
        <div className="banner-bottom-container-reverse">
            <div className="banner-bottom-left">
                <img src={banner} alt="banner3" />
            </div>
            <div className="banner-bottom-right">
            <h2>Discover Your Perfect Gift: An Assorted Selection of Delight</h2>
            <p>Embark on a journey of joy and surprise with our curated collection of gifts. Each item is a carefully chosen expression of love and thoughtfulness, waiting to bring delight to your special moments.</p>
            <Link to="/assorted"><button>Explore More</button></Link>
            </div>
        </div>
    </div>
  )
}
