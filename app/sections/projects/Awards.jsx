import Image from "next/image";
import React from "react";

const Awards = () => {
  const data = [
    {
      cardimg: "/Assets/images/winning.jpg",
    },
  ];

  return (
    <div className="h-screen mt-10 w-full flex flex-col items-center justify-center px-8">
      <h2 className="actay font-[400] text-center text-[1vw] md:text-4xl lg:text-3xl  mb-10">
        1st Runner-Up in Web Design | Techwiz Pakistan Web Design Competition
      </h2>

      <div className="flex flex-wrap justify-center gap-8  min-w-full">
        {data.map((elem, index) => (
          <div
            key={index}
            className=" sm:w-80  w-full h-full overflow-hidden rounded-xl shadow-lg"
          >
            <Image
              src={elem.cardimg}
              alt="Certification"
              loading="lazy"
              height={500}
              width={300}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
