import Image from 'next/image'
import React from 'react'

const Aboutme = () => {
  return (
    <div className='min-h-full  flex items-center justify-start flex-col text-white w-full'>
      <div className='h-[70vw] w-full relative'>


        <div className='absolute  top-0 left-0  flex items-center justify-center flex-col w-full '>
      <h2 className='ppneuemontreal font-[600] flex items-center justify-center uppercase text-[24vw] leading-[4%]'>
        Huna 
        <span className="h-full   w-fit  ">
        <Image
    src="/assets/videos/hunainvideo-unscreen.gif"
    width={140}
    height={110}
    alt="Hunain GIF"
    className="object-cover"
  />        
        </span>
        n
      </h2> 
      <h4 className="group text-8xl mt-5">
  <span className="actay inline-block transition-transform duration-600 group-hover:-translate-x-50">
    Creative
  </span>
  <span className="mx-3"></span>
  <span className="actay inline-block transition-transform duration-600 group-hover:translate-x-50">
    Developer
  </span>
</h4>
        </div>
      </div>


    </div>
  )
}

export default Aboutme
