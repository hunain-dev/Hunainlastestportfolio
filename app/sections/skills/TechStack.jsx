'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Myskillss = () => {
  const skillsimg = [
    { img: "/Assets/images/html.png" },
    { img: "/Assets/images/css.png" },
    { img: "/Assets/images/js.png" },
    { img: "/Assets/images/react.png" },
    { img: "/Assets/images/framer.png" },
    { img: "/Assets/images/gsap.png" },
    { img: "/Assets/images/nextjs.jpeg" },
  ];

  const constraintsRef = useRef(null);

  return (
    <div id="stack" className="myskills mt-[20vh] w-full px-[3vw] text-center">
      <h1 className="Satoshi font-medium text-[3vw] text-[#242627] mb-8">
        My Skills
      </h1>

      <motion.div
        className="skills flex flex-wrap justify-center items-center gap-[3.5vw] w-[70%] mx-auto py-[2vh] mt-[1vw]"
        ref={constraintsRef}
      >
        {skillsimg.map((elem, index) => (
          <motion.div
            key={index}
            className="skill-item flex justify-center items-center h-[10vh] w-[10vh] rounded-[10vw] cursor-pointer"
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.2}
          >
            <Image
              src={elem.img}
              alt={`Skill ${index + 1}`}
              loading="lazy"
              width={100}
              height={100}
              className="w-full h-full object-cover rounded-[2vw]"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Myskillss;
