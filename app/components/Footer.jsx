"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Button from "./Ui/Button";
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";
import Textanimation from "./Ui/Textaniamtion";

const Footer = () => {
  const icons = [
    { icon: <FaFacebookF /> },
    { icon: <FaLinkedin /> },
    { icon: <FaInstagram /> },
  ];
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const width = text.offsetWidth;

    gsap.fromTo(
      text,
      { x: 20 },
      {
        x: -width,
        duration: 140, // adjust speed
        repeat: -1,
        ease: "linear",
      }
    );
  }, []);

  return (
    <div id="contact" className="min-h-full mt-26 w-full">
      <div className="h-full w-full flex items-center overflow-hidden">
        {/* Duplicate text manually for seamless loop */}
        <div ref={textRef} className="flex whitespace-nowrap text-[11vw] actay">
          {`Let's talk  Let's talk Let's talk `}
          {`Let's talk  Let's talk Let's talk `}
        </div>

        <div className="flex whitespace-nowrap text-[11vw] actay">
          {`Let's talk  Let's talk Let's talk `}
          {`Let's talk  Let's talk Let's talk `}
        </div>
        <div className="flex whitespace-nowrap text-[11vw] actay">
          {`Let's talk  Let's talk Let's talk `}
          {`Let's talk  Let's talk Let's talk `}
        </div>
        <div className="flex whitespace-nowrap text-[11vw] actay">
          {`Let's talk  Let's talk Let's talk `}
          {`Let's talk  Let's talk Let's talk `}
        </div>
      </div>
      <div className="relative flex">
        {/* Main Content */}
        <div className=" w-full  mx-auto  grid grid-cols-2">
          <div className="actay w-full    h-full  px-3 py-3">
            <h2 className="uppercase text-lg">Mohammad hunain studio@</h2>
            <h2 className="uppercase text-lg">
              A 881, Phase 1, Gulshan e hadeed
            </h2>
            <h2 className="uppercase text-lg">Huniiali1122@gmail.com</h2>

            <div className="h-full mt-6 w-fit">
              <Button
                btntext="Contact us"
                link="/work"
                classname="uppercase px-15 py-2 bg-[#FFD900]"
              />
            </div>
          </div>
          <div className="h-full px-7 py-3  flex items-end justify-right flex-col">
            <h3 className="actay text-3xl">Follow us</h3>
            <div className="flex flex-row gap-4 mt-2 ">
              {icons.map((item, idx) => (
                <div
                  key={idx}
                  className="w-11 h-11 flex items-center justify-center rounded-full cursor-pointer shadow-lg transition-transform duration-500 border-1 border-black hover:scale-125 hover:rotate-12 hover:shadow-2xl"
                  style={{ backgroundColor: item.color }}
                >
                  <div className="text-black text-2xl">{item.icon}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="h-full py-10 w-full grid grid-cols-[1fr_1fr] px-3">
        <div className="h-full  flex items-center justify-start">
          <Textanimation
            text="Mohammad hunain studio@"
            classname="text-black actay  text-3xl"
          />{" "}
        </div>
        <div className="h-full  flex items-center justify-between">
          <Textanimation text="Home" classname="text-black actay  text-2xl" />
          <Textanimation
            text="About us"
            classname="text-black actay  text-2xl"
          />
          <Textanimation text="Stack" classname="text-black actay  text-2xl" />
          <Textanimation
            text="Services"
            classname="text-black actay  text-2xl"
          />
          <Textanimation
            text="Projects"
            classname="text-black actay  text-2xl"
          />
          <Textanimation
            text="Contact"
            classname="text-black actay  text-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
