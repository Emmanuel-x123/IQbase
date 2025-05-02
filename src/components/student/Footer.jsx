import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 md:px-10 lg:px-20 xl:px-36 text-left w-full mt-10">
        <div className="flex flex-col md:flex-row items-start px-4 md:px-0 justify-center gap-5 md:gap-10 lg:gap-20 py-10 border-b border-white/30">
          <div className="flex flex-col md:items-start items-center w-full md:w-1/3">
            <img src={assets.logo_IQ2} alt="logo" className="w-32 md:w-40" />
            <p className="mt-6 text-center md:text-left text-sm text-white/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id velit
              delectus re laborum esse assumenda ea veritatis reprehenderit!
            </p>
          </div>
          <div className="flex flex-col md:items-start items-center w-full md:w-1/3">
            <h2 className="font-semibold text-white mb-5">Company</h2>
            <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Privacy & policy</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start w-full md:w-1/3 mt-5 md:mt-0">
            <h2 className="font-semibold text-white mb-5">
              Subscribe to our newsletter
            </h2>
            <p className="text-sm text-white/80">
              The latest news, articles and resources sent to your inbox weekly
            </p>
            <div className="flex items-center gap-2 pt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-full md:w-64 h-9 rounded px-2 text-sm"
              />
              <button className="bg-blue-600 w-24 h-9 text-white rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <p className="py-4 text-center text-xs md:text-sm text-white/60">
          Copyright 2025 @ IQbase. All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
