import React from 'react';
import HeaderComponent from '../components/Header';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom'; // Import Outlet

const Layout = () => {
  return (
    <div className="layout">
      <HeaderComponent />
      <div className="content">
        <Outlet /> {/* This is where routed components will be rendered */}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
