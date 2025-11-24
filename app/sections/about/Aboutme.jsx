import Image from 'next/image'
import React from 'react'

const Aboutme = () => {
  return (
    <div className='min-h-full  bg-black flex items-center justify-start flex-col text-white w-full'>
      <div className='h-[70vw] w-full bg-red-400 relative'>


        <div className='absolute top-0 left-0  flex items-center justify-center flex-col w-full bg-red-800'>
      <h2 className='ppneuemontreal font-[600] flex items-center justify-center uppercase text-[21vw] leading-[4%]'>
        Huna 
        <span className="h-full   w-fit  ">
        <Image
    src="/assets/videos/hunainvideo-unscreen.gif"
    width={130}
    height={110}
    alt="Hunain GIF"
    className="object-cover"
  />        
        </span>
        n
      </h2> 
       <h4 className='actay leading-25 text-5xl'>Creative Developer</h4>
        </div>
      </div>


    </div>
  )
}

export default Aboutme
