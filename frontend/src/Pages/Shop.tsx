import React from 'react'
import { Hero } from '../Components/Hero/Hero.tsx'
import { About } from '../Components/About/About.tsx'
import { Popular } from '../Components/Popular/Popular.tsx'
import { NewCollections } from '../Components/NewCollections/NewCollections.tsx'
import { Newsletter } from '../Components/Newsletter/Newsletter.tsx'
import { BannerTop } from '../Components/Banner/BannerTop.tsx'
import { BannerBtm } from '../Components/Banner/BannerBtm'

export const Shop = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Popular/>
        <BannerTop/>
        <NewCollections/>
        <BannerBtm/>
        <Newsletter/>
    </div>
  )
}
