import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/educator/NavBar';
import Sidebar from '../../components/educator/SideBar';


const Educator = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex flex-1 pt-16">
        <Sidebar 
          isMobileMenuOpen={sidebarOpen}
          setIsMobileMenuOpen={setSidebarOpen}
        />
        
        <main className={`flex-1 p-4 transition-all duration-300 ${
          sidebarOpen ? 'ml-0 lg:ml-64' : 'ml-0 lg:ml-64'
        }`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Educator;