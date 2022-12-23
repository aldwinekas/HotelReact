import React from 'react'
import AboutCard from '../About/AboutCard'
import Hero from "../HomeSection/Hero"
import DestinationHome from "../HomeSection/Destina/DestinationHome"
import MostPopuler from '../HomeSection/popular/MostPouplar'
import Download from "../HomeSection/Download/Download"
import Works from "../HomeSection/work/Works"
import Gallery from "../HomeSection/gallery/Gallery"

function Home() {
  return (
    <>
      <Hero />
      <AboutCard />
      <MostPopuler />
      <DestinationHome />
      <Download />
      <Works />
      <Gallery />

    </>
  )
}
export default Home