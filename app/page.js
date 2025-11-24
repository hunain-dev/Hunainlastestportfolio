import React from 'react'
import Home from './sections/home/Home'
import Aboutus from './sections/about/Aboutus'
import TechStack from './sections/skills/TechStack'
import Ourservices from './sections/services/OurServices'
import Projects from './sections/projects/Projects'

const page = () => {
  return (
    <div>
    <div className='h-full pt-31 w-full '>
      <Home/>
      <Aboutus/>
      <TechStack/>
      <Ourservices/>
      <Projects/>
      
    </div>
      
    </div>
  )
}

export default page
