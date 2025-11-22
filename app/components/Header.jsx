'use client'
import React from 'react'
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
    z-[999999] mt-[1vw]
  ">
  
    {/* BOTTOM LINKS */}
    <div className="
      flex items-center justify-center 
      gap-[2.2vw] 
      bg-[#f7f4f3] 
      rounded-[3vw] 
      px-[4vw] py-[1.2vw]
      shadow-[1px_1px_14px_rgba(29,28,28,0.5)]
      font-[Satoshi]
    ">
      <h2 className="relative text-[1.2vw] font-[500] text-[#262525] group">
        <a href="#home" className="no-underline text-black">Home</a>
        <span className="
          absolute left-0 bottom-0 h-[3px] w-0 
          bg-black transition-all duration-300
          group-hover:w-full
        "></span>
      </h2>
  
      <h2 className="relative text-[1.2vw] font-[500] text-[#262525] group">
        <a href="#aboutus" className="no-underline text-black">About Us</a>
        <span className="
          absolute left-0 bottom-0 h-[3px] w-0 
          bg-black transition-all duration-300
          group-hover:w-full
        "></span>
      </h2>
  
      <h2 className="relative text-[1.2vw] font-[500] text-[#262525] group">
        <a href="#stack" className="no-underline text-black">Stack</a>
        <span className="
          absolute left-0 bottom-0 h-[3px] w-0 
          bg-black transition-all duration-300
          group-hover:w-full
        "></span>
      </h2>
  
      <h2 className="relative text-[1.2vw] font-[500] text-[#262525] group">
        <a href="#services" className="no-underline text-black">Services</a>
        <span className="
          absolute left-0 bottom-0 h-[3px] w-0 
          bg-black transition-all duration-300
          group-hover:w-full
        "></span>
      </h2>
  
      <h2 className="relative text-[1.2vw] font-[500] text-[#262525] group">
        <a href="#project" className="no-underline text-black">Project</a>
        <span className="
          absolute left-0 bottom-0 h-[3px] w-0 
          bg-black transition-all duration-300
          group-hover:w-full
        "></span>
      </h2>
  
      <h2 className="relative text-[1.2vw] font-[500] text-[#262525] group">
        <a href="#contact" className="no-underline text-black">Contact</a>
        <span className="
          absolute left-0 bottom-0 h-[3px] w-0 
          bg-black transition-all duration-300
          group-hover:w-full
        "></span>
      </h2>
    </div>
  
    {/* RIGHT BUTTON */}
    <div className="flex items-center justify-end h-full">
      <button
        onClick={downloadResume}
        className="
          px-[2.2vw] py-[2.2vh] 
          text-[1.1vw] 
          rounded-[10px] 
          bg-[#1e1e1e] 
          text-white 
          cursor-pointer 
          shadow-[0_0_10px_#363636,inset_0_0_10px_#363636]
          transition 
          active:scale-95
        "
      >
        Resume
      </button>
    </div>
  
  </div>
  
  )
}

export default Header
