import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Popular } from '../Components/Popular/Popular'
import { NewCollections } from '../Components/NewCollections/NewCollections'
import { Newsletter } from '../Components/Newsletter/Newsletter'
import { SubHero } from '../Components/SubHero/SubHero'
import { BannerBtm } from '../Components/BannerBtm/BannerBtm'

export const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <SubHero/>
        <NewCollections/>
        <BannerBtm/>
        <Newsletter/>
    </div>
  )
}
