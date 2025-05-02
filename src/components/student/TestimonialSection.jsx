import React from 'react';
import { assets, dummyTestimonial } from '../../assets/assets';

const TestimonialSection = () => {
  return (
    <div className="pb-14 px-4 sm:px-6 md:px-10 lg:px-20">
      <h2 className="text-2xl sm:text-3xl font-medium text-gray-800">
        Testimonials
      </h2>
      <p className="text-sm sm:text-base text-gray-500 mt-3">
        Here from our learners as they share their journey of transformation,
        success, and how our platform has made a difference in their lives.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className="text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden"
          >
            <div className="flex items-center gap-4 px-5 py-4 bg-gray-500/10">
              <img
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <h1 className="text-lg font-medium text-gray-800">
                  {testimonial.name}
                </h1>
                <p className="text-gray-800/80">{testimonial.role}</p>
              </div>
            </div>
            <div className="p-5 pb-7">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <img
                    className="h-4 sm:h-5"
                    key={i}
                    src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                    alt="star"
                  />
                ))}
              </div>
              <p className="text-gray-500 mt-5">{testimonial.feedback}</p>
            </div>
            <a href="#" className="text-blue-500 underline px-5">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
