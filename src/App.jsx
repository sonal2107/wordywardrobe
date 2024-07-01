import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'
import Aboutme from './Components/Aboutme/Aboutme'
import Mywork from './Components/Mywork/Mywork'
import Contact from './Components/Contact/Contact'
import Skills from './Components/Skills/Skills'
import Testimonials from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'
import Timeline from './Components/Timeline/Timeline'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Aboutme/>
      <Mywork/>
      <Timeline/>
      <Skills/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
