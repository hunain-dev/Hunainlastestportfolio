import React from 'react'
import Aboutme from './Aboutme'
import ImpactfulDesign from './ImpactfulDesign'
import OurClients from './OurClients'

const Aboutus = () => {
  return (
    <div  id="aboutus" className='h-full  w-full '>
      <div className='pt-12 mt-12  w-full bg-[#4C00FF]'>
      <Aboutme/>
      </div>
      <OurClients/>
 <ImpactfulDesign/>
    </div>
  )
}

export default Aboutus
