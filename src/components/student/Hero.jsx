import React from 'react';
import { assets } from '../../assets/assets';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full pt-10 sm:pt-20 md:pt-36 pb-10 space-y-5 sm:space-y-7 text-center bg-gradient-to-b from-cyan-100/70">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 max-w-3xl mx-auto relative">
        Your tomorrow will only depend on the path{" "}
        <span className="text-blue-600">you chose today.</span>
        <img
          src={assets.sketch}
          alt="sketch"
          className="md:block hidden absolute -bottom-7 right-0"
        />
      </h1>
      <p className="hidden md:block text-gray-500 max-w-2xl mx-auto text-lg">
        We bring together great minds as instructors, with a strong passion for
        growth and development with interactive contents for young talents
      </p>
      <p className="md:hidden text-gray-500 max-w-sm mx-auto text-sm sm:text-base">
        We bring together the best instructors to help you achieve your
        professional goals.
      </p>
      <SearchBar />
    </div>
  );
};

export default Hero;
