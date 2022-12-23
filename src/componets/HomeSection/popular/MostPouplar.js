import React from 'react'
import "./MostPouplar.css"
import Cards from "./Cards"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
export const MostPopuler = () => {
  return (
    <>
<section className='popular top'>
        <div className='full_container'>
          <div className='heading'>
            <h1>Most Popular Hotel</h1>
            <div className='line'></div>
          </div>
          <div className='content'>
            <Cards />
          </div>
        </div>
      </section>
    </>
  )
}
export default MostPopuler