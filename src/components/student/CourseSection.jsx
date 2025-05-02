import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import CourseCard from './CourseCard';

const CourseSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-20">
      <h2 className="text-2xl sm:text-3xl font-medium text-gray-800">
        Learn from the best
      </h2>
      <p className="text-sm sm:text-base text-gray-500 mt-3">
        Discover our top-rated courses across various categories. From coding and
        design to business and wellness, our courses are crafted to deliver
        results.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 my-8 sm:my-10 md:my-16">
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
      <div className="text-center">
        <Link
          to="/course-list"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className="text-gray-500 border border-gray-500/30 px-6 sm:px-8 md:px-10 py-2 sm:py-3 rounded"
        >
          Show all courses
        </Link>
      </div>
    </div>
  );
};

export default CourseSection;
