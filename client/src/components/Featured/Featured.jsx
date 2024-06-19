import React from "react";
import mobile from "../../assets/mobile.jpg";
import laptop from "../../assets/laptop.jpg";
import headphone from "../../assets/headphone.jpg";

function Featured() {
  return (
    <div className="text-white p-8 md:px-20">
      <h1 className="text-3xl font-bold mb-8">Featured Posts</h1>
      <div className="flex h-[400px] gap-4">
        <div className="md:col-span-2 relative h-80 md:h-full rounded-3xl overflow-hidden w-1/2">
          <img src={headphone} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute bottom-4 left-4 z-10">
            <span className="bg-black text-white px-2 py-1 rounded-md">
              Productivity
            </span>
            <h2 className="mt-2 text-xl font-bold">
              Mindfulness And Meditation Techniques For Developers: Improving
              Focus And Clarity
            </h2>
          </div>
        </div>

        <div className="w-1/2 flex flex-col gap-4 h-full">
          <div className="flex items-center gap-4 rounded-3xl h-full">
            <img
              src={mobile}
              alt=""
              className="h-full w-56 object-fill rounded-xl"
            />
            <div>
              <span className="text-yellow-400 rounded-md uppercase font-medium">
                Code Quality
              </span>
              <h2 className="mt-2 text-xl font-bold">
                Best Practices For Writing Clean And Maintainable Code
              </h2>
              <p className="text-gray-300 mt-1">January 02, 2023</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-3xl h-full">
            <img
              src={laptop}
              alt=""
              className="h-full w-56 object-fill rounded-xl"
            />
            <div>
              <span className="text-yellow-400 rounded-md uppercase font-medium">
                Code Quality
              </span>
              <h2 className="mt-2 text-xl font-bold">
                Best Practices For Writing Clean And Maintainable Code
              </h2>
              <p className="text-gray-300 mt-1">January 02, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
