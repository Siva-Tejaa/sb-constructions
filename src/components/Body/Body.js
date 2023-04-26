import React from 'react'
import Services from './Services/Services'
import Projects from './Projects/Projects'
import About from './About/About'
import Contact from './Contact/Contact'
import Home from './Home/Home'

const Body = () => {
  return (
    <div className='pt-[5.7rem]'>
      <Home/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Body