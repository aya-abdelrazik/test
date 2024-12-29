import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Carousel from '../Components/Carousel'
import Facts from '../Components/Facts'
import Ab from '../Components/Ab'
import Ser from '../Components/Ser'
import Pro from '../Components/Pro'
import Testimonial from '../Components/Testimonial'

function Home() {
  return (
    <div>
        <Navbar/>
        <Carousel/>
        <Facts/>
        <Ab/>
        <Ser/>
        <Pro/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Home