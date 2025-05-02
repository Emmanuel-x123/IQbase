import React from 'react';
import { assets } from '../../assets/assets';

const Companies = () => {
  return (
    <div className="pt-8 sm:pt-12 md:pt-16">
      <p className="text-sm sm:text-base text-gray-500 text-center">
        Trusted by learners from
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-16 mt-4 sm:mt-6 md:mt-10">
        <img src={assets.microsoft_logo} alt="microsoft" className="w-16 sm:w-20 md:w-24 lg:w-28" />
        <img src={assets.walmart_logo} alt="walmart" className="w-16 sm:w-20 md:w-24 lg:w-28" />
        <img src={assets.accenture_logo} alt="accenture" className="w-16 sm:w-20 md:w-24 lg:w-28" />
        <img src={assets.adobe_logo} alt="adobe" className="w-16 sm:w-20 md:w-24 lg:w-28" />
        <img src={assets.paypal_logo} alt="paypal" className="w-16 sm:w-20 md:w-24 lg:w-28" />
      </div>
    </div>
  );
};

export default Companies;
