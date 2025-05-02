import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ data }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data ? data : '');

  const onSearchHandler = (e) => {
    e.preventDefault();
    navigate('/course-list/' + input);
  };

  return (
    <form
      onSubmit={onSearchHandler}
      className="max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded-full"
    >
      <img
        src={assets.search_icon}
        alt="search_icon"
        className="w-4 sm:w-5 md:w-6 mx-2 sm:mx-3 md:mx-4"
      />
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
        placeholder="Search for courses"
        className="w-full h-full outline-none text-gray-500/80 text-sm sm:text-base"
      />
      <button
        type="submit"
        className="bg-blue-600 rounded-full text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 mx-1 sm:mx-2"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
