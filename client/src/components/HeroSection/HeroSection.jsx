import React from "react";
import homeImage from "../../assets/home.jpg";

function HeroSection() {
  return (
    <>
      <div className="h-[600px] w-full rounded-3xl my-4 relative overflow-hidden">
        <img
          src={homeImage}
          alt=""
          className="h-full w-full rounded-3xl object-cover"
        />

        <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>

        <div className="absolute bottom-32 left-10 text-white z-10">
          <h1 className="text-4xl font-bold lg:w-[70%]">
            Building Progressive Web Apps: Bridging The Gap Between Web And
            Mobile
          </h1>
          <p className="text-lg lg:w-[80%] mt-5">
            Integrating mindfulness practices helps developers cultivate
            present-moment awareness, fostering focus, problem-solving, and
            work-life balance.
          </p>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
