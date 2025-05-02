import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const { currency } = useContext(AppContext);

  const calculateRating = (course) => {
    if (course.courseRatings.length === 0) {
      return 0;
    }
    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });
    return totalRating / course.courseRatings.length;
  };

  return (
    <Link
      to={'/course/' + course._id}
      onClick={() => scrollTo(0, 0)}
      className="border border-gray-500/30 pb-6 overflow-hidden rounded-lg hover:shadow-md transition"
    >
      <img className="w-full h-40 sm:h-48 md:h-56 object-cover" src={course.courseThumbnail} alt="" />
      <div className="p-3 text-left">
        <h3 className="text-sm sm:text-base font-semibold">{course.courseTitle}</h3>
        <p className="text-gray-500 text-xs sm:text-sm">Emmanuel Reuben</p>
        <div className="flex items-center space-x-2">
          <p className="text-xs sm:text-sm">{calculateRating(course).toFixed(1)}</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank}
                alt=""
                className="w-3 h-3 sm:w-3.5 sm:h-3.5"
              />
            ))}
          </div>
          <p className="text-gray-500 text-xs sm:text-sm">{course.courseRatings.length}</p>
        </div>
        <p className="text-sm sm:text-base font-semibold text-gray-800">
          {currency}
          {(course.coursePrice - (course.discount * course.coursePrice) / 100).toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
