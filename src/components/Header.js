import logo from '../assets/images/J_D-Logo_15_-WHITE-BG-Transparent-bg.png';
import balcklogo from '../assets/images/J_D-Logo_15_-black-BG-Transparent-bg.png'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
const HeaderComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
const currentPath = location.pathname; // Get the current path
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sidebarVariants = {
      open: {
        x: 0, // Slide to 0px from left (fully visible)
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 30,
        },
      },
      closed: {
        x: '100%', // Slide out of the screen
        opacity: 0,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 40,
        },
      },
    };
    const isPropertyPage = currentPath === '/property';
  return (
    <div>
      {/* mobile screen */}
      <div className={`flex md:hidden w-full xl:text-lg items-center px-3 justify-between z-30  ${isScrolled ? 'bg-white shadow-md text-[#545350] fixed' : 'bg-transparent text-white fixed'}`}>
      <img src={ isScrolled ? balcklogo : logo} width={150} alt='logo' className=''></img>
      <button className='p-2 border-gray-400 border' onClick={() => setIsOpen(!isOpen)}>Menu</button>

      {/* Sidebar */}
      <motion.div
        className="fixed top-0 right-0 w-full h-full bg-white p-6"
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
      >
        <h2 className="text-2xl mb-4 text-end font-bold text-gray-500 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>x</h2>
        <ul className='text-start text-gray-500 text-2xl font-bold'>
        <li className='p-2 cursor-pointer'>BUY</li>
        <li className='p-2 cursor-pointer'>SELL</li>
        <li className='p-2 cursor-pointer' >OUR TEAM</li>
        <li className='p-2 cursor-pointer'> OUR STORY</li>
        <li className='p-2 cursor-pointer'>BLOG</li>
        <li className='p-2 cursor-pointer'>CONTACT US</li>
        </ul>
      </motion.div>
    </div>

    <div className={`lg:flex w-full xl:text-lg items-center px-48 justify-between xl:px-20 z-30 fixed 
      ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'} 
      ${isPropertyPage ? 'text-black' : isScrolled ? 'text-[#545350]' : 'text-white'}`}

    >
        <div>
        <img src={ isScrolled || isPropertyPage ? balcklogo : logo} width={200} alt='logo' className='xl:w-56 cursor-pointer' onClick={()=>navigate('/')}></img>
        </div>
      <ul className={`flex items-center gap-14 font-semibold text-base`}>
        <li onClick={() => navigate('/buy')} className='cursor-pointer hover:text-Stone-800'>BUY</li>
        <li className='cursor-pointer'>SELL</li>
        <li className='cursor-pointer'>OUR TEAM</li>
        <li className='cursor-pointer'>OUR STORY</li>
        <li className='cursor-pointer'>BLOG</li>
        <li className='cursor-pointer'>CONTACT US</li>
      </ul>
      <ul className='flex gap-2 items-center'>
        <li><button className={`p-3 rounded-full w-24 xl:w-20 xl:p-2 hover:bg-black hover:text-white ${isScrolled ? 'bg-[#545350] text-white' : 'bg-white text-[#545350]'}`}>Log in</button></li>
        <li><button className='p-3 bg-white rounded-full text-[#545350] w-24 xl:w-20 xl:p-2 border border-[#F2CC2F]'>Join</button></li>
      </ul>
    </div>
    </div>


    
  );
};

export default HeaderComponent;