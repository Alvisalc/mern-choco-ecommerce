import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { About } from '../Components/About/About'
import { Footer } from '../Components/Footer/Footer'
import { Catalog } from '../Components/Catalog/Catalog'
import { NewCollection } from '../Components/NewCollection/NewCollection'

export const Home = () => {
  return (
    <div>
    <Hero/>
    <About/>
    <NewCollection/>
    <Catalog/>
    <Footer/>
    </div>
  )
}
