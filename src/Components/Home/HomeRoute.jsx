import React from 'react'
import { Nav } from '../Nav'
import BgImage from './BgImage'
import AlumniSlider from './AlumniSlider'
import Reunite from './Reunite'
import Testimonial from './Testimonial'
import Faq from './Faq'
import Guidelines from './Guidelines'
import Blog from './Blog'
import Footer from '../Footer'

function HomeRoute() {
  return (
    <div>
      <Nav />
      <BgImage />
      <AlumniSlider />
      <Reunite />
      <Testimonial />
      <Faq />
      <Guidelines />
      <Blog />
      <Footer />
    </div>
  )
}

export default HomeRoute
