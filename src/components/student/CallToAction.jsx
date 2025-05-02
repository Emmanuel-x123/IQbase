import React from 'react';
import { assets } from '../../assets/assets';

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center gap-4 pt-10 pb-24 px-4 sm:px-6 md:px-10 lg:px-20">
      <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-gray-800 font-semibold text-center">
        Learn anything, anytime, anywhere
      </h1>
      <p className="text-gray-500 text-sm sm:text-base md:text-lg text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut, sunt
        quidem nulla iusto officia hic totam unde deserun inventore.
      </p>
      <div className="flex flex-col sm:flex-row items-center font-medium gap-5 mt-4">
        <button className="px-8 sm:px-10 py-3 rounded-md text-white bg-blue-600">
          Get started
        </button>
        <button className="flex items-center gap-2">
          Learn more
          <img src={assets.arrow_icon} alt="arrow_icon" />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
