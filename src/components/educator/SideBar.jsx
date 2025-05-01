import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { FiX } from 'react-icons/fi';

const Sidebar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const menuItems = [
    { path: '/educator/educator', icon: assets.home_icon, label: 'Dashboard' },
    { path: '/educator/add-course', icon: assets.add_icon, label: 'Add Courses' },
    { path: '/educator/my-courses', icon: assets.my_course_icon, label: 'My Courses' },
    { path: '/educator/student-enrolled', icon: assets.person_tick_icon, label: 'Students Enrolled' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`lg:w-64 w-3/4 bg-white border-r border-gray-400 lg:fixed lg:left-0 lg:top-16 lg:h-[calc(100vh-4rem)] 
          ${isMobileMenuOpen 
            ? 'fixed inset-y-0 left-0 z-50 h-screen pt-16 shadow-xl transform translate-x-0' 
            : 'hidden lg:block -translate-x-full lg:translate-x-0'
          } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col p-4 space-y-1 h-full overflow-y-auto">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="lg:hidden self-end p-2 text-gray-500 hover:text-gray-700"
          >
            <FiX size={24} />
          </button>

          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-blue-100 text-blue-600 font-medium border-l-4 border-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`
              }
            >
              <img 
                src={item.icon} 
                alt={item.label} 
                className="w-5 h-5 mr-3"
              />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;