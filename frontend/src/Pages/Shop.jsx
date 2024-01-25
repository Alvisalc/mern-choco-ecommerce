import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Popular } from '../Components/Popular/Popular'
import { NewCollections } from '../Components/NewCollections/NewCollections'
import { Newsletter } from '../Components/Newsletter/Newsletter'
import { BannerTop } from '../Components/Banner/BannerTop'
import { BannerBtm } from '../Components/Banner/BannerBtm'

export const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <BannerTop/>
        <NewCollections/>
        <BannerBtm/>
        <Newsletter/>
    </div>
  )
}
