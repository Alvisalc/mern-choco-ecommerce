import React from 'react'
import './Banner.css'

const banner: string = '../Assets/banner-1.jpg';

export const BannerTop = () => {
  return (
    <div className="banner">
        <div className="container">
            <div className="banner-container">
                <div className="text-side">
                    <div className="text">
                        <h2>Experience with Organic Chocolate Delights</h2>
                        <p>Delight your senses with our luscious chocolate creations, meticulously crafted from the finest organic ingredients.</p>
                    </div>
                </div>
                <div className="img-side">
                    <img src={banner} alt="banner1" />
                </div>
            </div>
        </div>
    </div>
  )
}
