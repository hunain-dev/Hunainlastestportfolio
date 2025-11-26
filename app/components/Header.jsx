'use client'
import React from 'react'
import Button from './Ui/Button';
import Link from 'next/link';
import Textanimation from './Ui/Textaniamtion';
const Header = () => {


  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Assets/images/Muhammad Hunain Resume.pdf";
    link.download = "Muhammad hunain.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="
    fixed top-0 left-1/2 -translate-x-1/2 
    h-[9vh] w-[93%] 
    flex items-center justify-between 
    z-999 mt-[1vw]">
  
    {/* BOTTOM LINKS */}
    <div className="
      flex items-center justify-center 
      gap-[2.2vw] 
      bg-[#f7f4f3] 
      rounded-[3vw] 
      px-[4vw] py-[1vw]
      shadow-[1px_1px_14px_rgba(29,28,28,0.5)]
      font-[Satoshi]
    ">
      
 <Link href="#home">
  <Textanimation
    text="Home"
    classname="text-black text-[1.2vw]"
  />
</Link>
<Link href="#aboutus">
  <Textanimation
    text="About us"
    classname="text-black text-[1.2vw]"
  />
</Link>
  
  
<Link href="#stack">
  <Textanimation
    text="Stack"
    classname="text-black text-[1.2vw]"
  />
</Link>
  
<Link href="#services">
  <Textanimation
    text="Services"
    classname="text-black text-[1.2vw]"
  />
</Link>
  
  
<Link href="#project">
  <Textanimation
    text="Project"
    classname="text-black text-[1.2vw]"
  />
</Link>
  
<Link href="#contact">
  <Textanimation
    text="Contact"
    classname="text-black text-[1.2vw]"
  />
</Link>
  
    </div>
  
    {/* RIGHT BUTTON */}
    <div className="flex items-center justify-end h-full">
    <Button   btntext="Resume"  link="/work" classname="uppercase px-5 py-2 bg-[#FFD900]"  />

    </div>
  
  </div>
  
  )
}

export default Header
