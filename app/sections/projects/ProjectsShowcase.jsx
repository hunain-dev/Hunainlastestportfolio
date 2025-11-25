"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Images
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ProjectsShowcase = () => {
  const cardsWrapperRef = useRef(null);

  useEffect(() => {
    const width = window.innerWidth;

    const isMobile = width < 768;
    const isTablet = width >= 768 && width <= 1024;
    const isDesktop = width >= 1025 && width <= 1280;
    const isLargeDesktop = width > 1280;

    const offRight = () => {
      if (isMobile) return width + 1600;
      if (isTablet) return width + 3200;
      if (isDesktop) return width + 2600;
      if (isLargeDesktop) return width + 200;
    };

    const offLeft = () => {
      if (isMobile) return -width - 1600;
      if (isTablet) return -width - 3200;
      if (isDesktop) return -width - 3800;
      if (isLargeDesktop) return -width - 4300;
    };

    const scrollEnd = () => {
      if (isMobile) return "+=2000";
      if (isTablet) return "+=3500";
      if (isDesktop) return "+=5000";
      if (isLargeDesktop) return "+=6000";
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".projectarea",
        start: "top top",
        end: scrollEnd(),
        scrub: 2,
        pin: true,
        markers: false,
      },
    });

    tl.fromTo(
      cardsWrapperRef.current,
      { x: offRight(), opacity: 1 },
      {
        x: offLeft(),
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, []);

  const cardcollection = [
    {
      status: "coming-soon",
      comingMessage: "🚧 Coming Soon! This website will be live in 4 days.",
      cardbg: "#080808",
      cardvideo: "/assets/Videos/commingsoon.mp4",
      desctittle: "Mammoth Murals",
      carddesc:
        "Unearthed agency is a mural and sign painting agency based in Irondale, Alabama.",
      link: "",
    },
    {
      cardbg: "#080808",
      cardimg: "/assets/images/Klearmindtherapy.png",
      desctittle: "Klearmind Clinics",
      carddesc:
        "A modern website for a Ketamine & IV therapy clinic in California.",
      link: "https://klearmind-therapy-clinics.netlify.app/",
    },
    {
      cardbg: "#080808",
      cardimg: "/Assets/images/Camille-Bas-1200x908.png",
      desctittle: "Digital Tobacco",
      carddesc:
        "Transforming traditional industry into digital excellence.",
      link: "https://tabaccino.netlify.app/",
    },
    {
      cardbg: "#080808",
      cardimg: "/Assets/images/jobs.jpg",
      desctittle: "Career Hunt",
      carddesc:
        "An interactive job-based game to test accuracy and focus.",
      link: "https://careerhant.netlify.app/",
    },
    {
      cardbg: "#080808",
      cardimg: "/Assets/images/ochi (2).png",
      desctittle: "Ochi Clone",
      carddesc:
        "A modern creative agency UI clone with animations.",
      link: "https://ochi-design-production.netlify.app/",
    },
    {
      cardbg: "#080808",
      cardimg: "/Assets/images/Christmas image.png",
      desctittle: "Santa Store",
      carddesc:
        "A magical, festive and interactive web website.",
      link: "https://santas-store.netlify.app/",
    },
    {
      cardbg: "#080808",
      cardimg: "/Assets/images/tictac.png",
      desctittle: "Tic Tac Toe",
      carddesc: "A fun and interactive game.",
      link: "https://reactxogame.netlify.app/",
    },
    {
      cardbg: "#080808",
      cardimg: "/Assets/images/spacer.png",
      desctittle: "Spencer Gabor",
      carddesc: "An animated portfolio project.",
      link: "https://spancer-gabor.netlify.app/",
    },
    {
      cardbg: "#080808",
      cardimg: "/Assets/images/weather.jpg",
      desctittle: "Weather App",
      carddesc: "Live weather updates web app.",
      link: "https://macro-weather-app.netlify.app/",
    },
    {
      cardbg: "#080808",
      cardimg: "/Assets/images/TwoGoodGoodSave.jpg",
      desctittle: "Two Good Co",
      carddesc: "Award-winning website clone.",
      link: "https://twogoodcompany.netlify.app/",
    },
    {
      cardbg: "#080808",
      cardimg: "/Assets/images/furniture.jpeg",
      desctittle: "Furni",
      carddesc: "Interior design website.",
      link: "https://furni-interior-design.netlify.app/",
    },
    {
      cardbg: "#080808",
      cardimg: "/Assets/images/hello.jpg",
      desctittle: "We Think Elastic",
      carddesc: "Awwwards inspired clone.",
      link: "https://myrejoucie.netlify.app/",
    },
    {
      cardbg: "#080808",
      cardimg: "/Assets/images/rejouices.jpeg",
      desctittle: "Rejouice",
      carddesc: "Creative animated website.",
      link: "https://wethinkelastic.netlify.app/",
    },
  ];

  return (
    <div className="projectarea relative w-full h-screen overflow-hidden">
      <div className="h-full w-full flex items-center justify-center relative">
        <h2 className="Garelin font-normal uppercase text-[14vw] ">
          Projects
        </h2>

        <div
          ref={cardsWrapperRef}
          className="absolute inset-0 z-50 flex items-center gap-[14vw] px-10"
        >
          {cardcollection.map((elem, index) => (
            <div
              key={index}
              className="
                bg-[#080808]
                p-3 rounded-xl
                text-white
                cursor-pointer
                min-w-[80vw] md:min-w-[40vw] lg:min-w-[21vw]
                h-[55vh] md:h-[60vh] lg:h-[62vh]
                flex flex-col
                overflow-hidden
                shadow-xl
                hover:scale-[1.03]
                transition-all duration-300
              "
              onClick={() => {
                if (elem.status === "coming-soon") {
                  alert(elem.comingMessage || "🚧 Coming Soon!");
                } else {
                  window.open(elem.link, "_blank");
                }
              }}
            >
              <div className="w-full h-[47%] rounded-xl overflow-hidden">
                {elem.cardvideo ? (
                  <video
                    src={elem.cardvideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  ></video>
                ) : (
                  <Image
                  src={elem.cardimg}
                  alt={elem.desctittle}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
                )}
              </div>

              <div className="mt-4 space-y-2">
                <h2 className="text-xl font-semibold uppercase">
                  {elem.desctittle}
                </h2>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {elem.carddesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
