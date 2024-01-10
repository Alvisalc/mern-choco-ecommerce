import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { About } from '../Components/About/About'
import { Footer } from '../Components/Footer/Footer'
import { NewCollection } from '../Components/NewCollection/NewCollection'
import Newsletter from '../Components/Newsletter/Newsletter'

export const Home = () => {
  return (
    <div>
    <Hero/>
    <About/>
    <NewCollection/>
    <Newsletter/>
    <Footer/>
    </div>
  )
}
