import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { isEducator } = useContext(AppContext);
  const isCourseListPage = location.pathname.includes('/course-list');
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 border-b border-gray-500 py-4 ${
        isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'
      }`}
    >
      <img
        onClick={() => navigate('/')}
        src={assets.logo_IQ}
        alt="Logo"
        className="w-20 sm:w-24 md:w-28 lg:w-32 cursor-pointer"
      />
      <div className="hidden md:flex items-center gap-2 lg:gap-5 text-gray-500">
        <div className="flex items-center gap-2 lg:gap-5">
          {user && (
            <>
              <button
                onClick={() => {
                  navigate('/educator');
                }}
              >
                {isEducator ? 'Educator Dashboard' : 'Become Educator'}
              </button>
              |
              <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm"
          >
            Create Account
          </button>
        )}
      </div>

      {/* for phone screen */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
          {user && (
            <>
              <button
                onClick={() => {
                  navigate('/educator');
                }}
              >
                {isEducator ? 'Educator Dashboard' : 'Become Educator'}
              </button>
              |
              <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button onClick={() => openSignIn()}>
            <img src={assets.user_icon} alt="" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
