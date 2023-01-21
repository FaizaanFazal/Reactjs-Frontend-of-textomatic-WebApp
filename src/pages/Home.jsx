import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Features  from '../components/hero/Features'
import Dowloadnow  from '../components/hero/Downloadnow'
import Testimonials from '../components/hero/Testimonials'
import Footer from '../components/footer/Footer'

export default function Home() {
  return (
    <>  
        <Navbar/>
        <Features/>
        <Dowloadnow/>
        <Testimonials/>
        <Footer/>
    
    </>
  )
}
