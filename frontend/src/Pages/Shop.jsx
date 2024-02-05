import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { About } from '../Components/About/About'
import { Popular } from '../Components/Popular/Popular'
import { NewCollections } from '../Components/NewCollections/NewCollections.tsx'
import { Newsletter } from '../Components/Newsletter/Newsletter.tsx'
import { BannerTop } from '../Components/Banner/BannerTop'
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
