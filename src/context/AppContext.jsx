// src/context/app-context.js
import { createContext, useState, useEffect } from "react";
import { dummyCourses } from "../assets/assets";




export const AppContext = createContext();

export const useAppContextValue = () => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [allCourses, setAllCourses] = useState([])
 
 

  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

 useEffect(() => {
    fetchAllCourses();
  }, []);

  return {
    currency,
    allCourses,
  };
};
