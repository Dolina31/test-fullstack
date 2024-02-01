import React from "react";

const Hero = () => {
  return (
    <div className=" relative">
      <img
        src="../images/hero-image.png"
        alt="de nombreux aliments posés sur une table"
        className="h-90 w-full object-cover"
      />
      <p className="absolute flex top-24 left-3 items-center p-4 bg-white bg-opacity-70 font-inria text-2xl ">
        MANGEZ BIEN <br />
        MANGEZ SAINS <br />
        MAIGRIR <br />
        MAIS AVEC LE SOURIRE !
      </p>
    </div>
  );
};

export default Hero;
