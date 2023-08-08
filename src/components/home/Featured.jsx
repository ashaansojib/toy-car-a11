import React from "react";

const Featured = () => {
  return (
    <div className="my-container lg:my-8">
        <h2 className="text-3xl font-bold">Featured Posts ---</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-between items-center gap-4 py-4">
        <div className="p-2">
          <img
            src="https://htmldemo.net/kidol/kidol/assets/img/blog/1.jpg"
            alt=""
          />
          <div className="py-4">
            <p>
              By, <span className="text-[#EF1D26]">June Cha</span> 25 August,
              2023
            </p>
            <h2 className="py-4 text-2xl font-semibold hover:text-[#EF1D26]">
              Baby Planet's toys makes learning so easy
            </h2>
            <button className="inline py-2 px-4 rounded-2xl transition bg-gray-200 hover:bg-[#EF1D26] hover:text-white">
              Read More
            </button>
          </div>
        </div>
        <div className="p-2">
          <img
            src="https://htmldemo.net/kidol/kidol/assets/img/blog/2.jpg"
            alt=""
          />
          <div className="py-4">
            <p>
              By, <span className="text-[#EF1D26]">June Cha</span> 25 August,
              2023
            </p>
            <h2 className="py-4 text-2xl font-semibold hover:text-[#EF1D26]">
            Mother revolves around her children
            </h2>
            <button className="inline py-2 px-4 rounded-2xl transition bg-gray-200 hover:bg-[#EF1D26] hover:text-white">
              Read More
            </button>
          </div>
        </div>
        <div className="p-2">
          <img
            src="https://htmldemo.net/kidol/kidol/assets/img/blog/3.jpg"
            alt=""
          />
          <div className="py-4">
            <p>
              By, <span className="text-[#EF1D26]">June Cha</span> 25 August,
              2023
            </p>
            <h2 className="py-4 text-2xl font-semibold hover:text-[#EF1D26]">
            Mother revolves around her children
            </h2>
            <button className="inline py-2 px-4 rounded-2xl transition bg-gray-200 hover:bg-[#EF1D26] hover:text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
