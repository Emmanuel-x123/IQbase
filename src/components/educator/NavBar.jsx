import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { FiMenu } from 'react-icons/fi';

const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const { isEducator } = useContext(AppContext);

  return (
    <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-4 fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-500 shadow-sm">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          <FiMenu size={24} />
        </button>
        
        <img
          onClick={() => navigate('/')}
          src={assets.logo}
          alt="Logo"
          className="w-24 sm:w-28 md:w-32 cursor-pointer transition-transform hover:scale-105"
        />
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        {user && isEducator && (
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-gray-700 font-medium">
              Hi, {user.firstName || 'Educator'}!
            </span>
          </div>
        )}

        {user ? (
          <div className="flex items-center gap-2">
            <UserButton 
              afterSignOutUrl="/" 
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-8 h-8 sm:w-9 sm:h-9",
                  userButtonPopoverCard: "shadow-lg rounded-lg"
                }
              }}
            />
          </div>
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors flex items-center gap-1"
          >
            <span className="hidden sm:inline">Educator</span> Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;