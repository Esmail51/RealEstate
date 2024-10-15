import logo from '../assets/images/J_D-Logo_15_-WHITE-BG-Transparent-bg.png';
import InstagramIcon from '../assets/images/instagram.png';
import FacebookIcon from '../assets/images/facebook-app-symbol.png';
import TwitterIcon from '../assets/images/twitter.png';
import LinkedInIcon from '../assets/images/linkedin.png';
import tiktokIcon from '../assets/images/tik-tok.png';
import { FaPhone } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
    return (
        <footer className="footer text-white p-12 max-sm:p-0">

            <div className="flex flex-col divide-y gap-5">
                <div className='p-5 max-sm:order-1 max-sm:hidden'>
                <img src={logo} alt="logo" width={200}></img>
                </div>
                <div className="flex row justify-between p-5 max-sm:flex-wrap ">
                    <div className='flex flex-col gap-5 max-sm:hidden'>
                        
                        <h1 className='text-3xl text-white font-bold text-start'>
                            Browse Active <br /> and Sold listings<br /> like never before
                            Explore
                        </h1>
                        <ul className='flex gap-1 items-center'>
                            <li><button className='p-3 rounded-full w-28 xl:w-20 xl:p-2 text-white hover:text-white border border-white'>Log in</button></li>
                            <li><button className='p-3 bg-white text-black rounded-full w-28 xl:w-20 xl:p-2'>Join</button></li>
                        </ul>
                    </div>
                    <div className='grid grid-cols-2 xl:divide-x max-sm:grid-cols-1'>
                    <div className='flex row p-3  gap-7 flex-wrap max-sm:flex-row max-sm:gap-10 max-sm:justify-between'>
                        <ul className='text-base font-semibold text-start'>
                            <li className='text-xl'>Explore</li>
                            <li className='mt-4'>Buy</li>
                            <li>Sell</li>
                            <li>Our Team</li>
                            <li>Our Story</li>
                        </ul>
                        <ul className='text-base font-semibold text-start'>
                            <li className='text-xl'>Learn More</li>
                            <li className='mt-4'>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                        <ul className='text-base font-semibold text-start max-sm:flex max-sm:flex-col gap-4'>
                            <li className='text-xl'>My Account</li>
                            <div className='max-sm:flex max-sm:text-xs gap-8'>
                            <li className='mt-4 max-sm:mt-0'>Profile</li>
                            <li>Favourites</li>
                            <li>Watched Listings</li>
                            <li>Watched Areas</li>
                            </div>
                        </ul>

                    </div>
                    <div>
                        <ul className='text-start text-base font-semibold p-3'>
                            <li className='text-xl'>Get in Touch</li>
                            <li className='mt-4 flex gap-2 items-center'><span><FaPhone /></span>7879654644</li>
                            <li className='flex  gap-2 items-center'><span><FaPhone /></span> 59876946656</li>
                            <li className='flex flex-wrap gap-2 items-center'><span><HiOutlineMail /></span>INFO@JOHNSTONANDDANIEL.COM</li>
                            <li className='flex gap-2 items-center'><span><HiOutlineLocationMarker/></span>477 Mount Pleasant Road Toronto, ON, M4S 2L9</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className='flex flex-col p-3 max-sm:order-2'>
                    <div className='flex flex-row items-center justify-between max-sm:flex-col max-sm:gap-4'>
                      <p className='font-semibold max-sm:order-1 max-sm:text-lg'> © 2024 Copyright reserved </p>
                      <div className='flex flex-row gap-4 max-sm:order max-sm:gap-12'>
                        <img src={InstagramIcon} alt='instagram' width={20} ></img>
                        <img src={FacebookIcon} alt='FacebookIcon' width={20} ></img>
                        <img src={TwitterIcon} alt='TwitterIcon' width={20} ></img>
                        <img src={LinkedInIcon} alt='LinkedInIcon' width={20} ></img>
                        <img src={tiktokIcon} alt='tiktokIcon' width={20} ></img>
                      </div>
                      <div className='flex flex-row font-semibold p-5 gap-6 max-sm:order-2 max-sm:p-0' >
                        <p>Privacy</p>
                        <p>Term's of use</p>
                      </div>
                    </div>
                    <div>
                        <p className='text-start text-gray-300 max-sm:text-xs'>We are committed to providing the most personalized real estate services 
                            from listing to close. We have exceptional results which are confirmed by 
                            the number of clients we serve. Discover our selection of income-generating 
                            rental properties and commercial ventures.</p>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer