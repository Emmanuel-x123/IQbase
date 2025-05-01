import { useState, useEffect } from "react";
import { AppContext } from "./AppContext";
import { dummyCourses } from "../assets/assets";
import humanizeDuration from "humanize-duration";
import { useNavigate } from "react-router-dom";


export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);
  const [enrolledCourses, setEnrollCourses] = useState([]);

  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  // function to calculate course chapter time
  const calculateCourseChapterTime = (chapter) => {
    let time = 0;
    chapter.chapterContent.map((lecture) => (time += lecture.lectureDuration));
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  // function to calculate course duration
  const calculateCourseDuration = (course) => {
    let time = 0;
    course.courseContent.map((chapter) =>
      chapter.chapterContent.map((lecture) => (time += lecture.lectureDuration))
    );
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  // function to calculate No of lecture in the course
  const calculateNoOfLectures = (course) => {
    let totalLectures = 0;
    course.courseContent.forEach((chapter) => {
      if (Array.isArray(chapter.chapterContent)) {
        totalLectures += chapter.chapterContent.length;
      }
    });
    return totalLectures;
  };

  const navigate = useNavigate()

   // function to firtch user enrolled courses 
   const firtchUserEnrolledCourses = async ()=> {
    setEnrollCourses(dummyCourses)
   }





  useEffect(() => {
    fetchAllCourses();
    firtchUserEnrolledCourses();
  }, []);

  const value = {
    currency,
    allCourses,
    isEducator,
    setIsEducator,
    calculateCourseChapterTime,
    calculateCourseDuration,
    calculateNoOfLectures,
    enrolledCourses,
    firtchUserEnrolledCourses,
    navigate,
  };

  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
);
};
