import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import locationMarker from '../assets/images/location-mark.png';
import home1 from '../assets/images/home 1.jpg';
import home2 from '../assets/images/home 2.jpg';
import home3 from '../assets/images/home-3.jpg';
import bathIcon from '../assets/images/bathtub.png';
import { FaBath } from "react-icons/fa";
import bedIcon from '../assets/images/double-bed.png';
import areaIcon from '../assets/images/maximize.png';
import Slider from "react-slick";
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { motion } from 'framer-motion';

const ListingProperties = () => {
    const list = [
        {
            price: '$7899999',
            address: '148-37 88th Ave,Torronto 11435',
            beds: '4',
            baths: '3',
            sqft: '2000',
            image: home1,
            name: 'Archers Insight'
        },
        {
            price: '$9450000',
            address: '148-37 88th Ave,Torronto 11435',
            beds: '5',
            baths: '4',
            sqft: '3000',
            image: home2,
            name: 'Oakwood Villa'
        },
        {
            price: '$5200000',
            address: '148-37 88th Ave,Torronto 11435',
            beds: '3',
            baths: '2',
            sqft: '1500',
            image: home3,
            name: 'Maple Heights'
        },
        // {
        //     price: '$10750000',
        //     address: '654 Oak Ln',
        //     beds: '6 Beds',
        //     baths: '5 Baths',
        //     sqft: '3500 - 4000 sqft',
        //     image: home1,
        //     name: 'cedar view mansion'
        // },
        // {
        //     price: '$9450000',
        //     address: '456 Elm St',
        //     beds: '5 Beds',
        //     baths: '4 Baths',
        //     sqft: '3000 - 3500 sqft',
        //     image: home2,
        //     name: 'oakwood villa'
        // }

    ];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeIn' }}
    >
        <div className='xl:px-5 px-20 mt-36 max-sm:px-2'>
            <h1 className='text-[2.875rem] max-sm:text-2xl font-merriweather text-center'>Discover Our Featured Listings</h1>
            <div className='mt-20'>
                <div className='flex justify-evenly max-sm:flex-col max-sm:gap-4'>
                    {list.map((item, index) => (
                        <div key={index} className='w-[420px] xl:w-[380px] max-sm:w-full   rounded-xl shadow-lg'>
                            <div className='h-[500px] relative bg-cover bg-center rounded-2xl overflow-hidden'>
                
                                <img src={item.image} alt='home'
                                    className='rounded-2xl w-full h-full object-cover transform hover:scale-105'
                                    style={{
                                        transition: 'all 1s cubic-bezier(.3,1,.35,1) 0s, transform .5s ease'
                                    }}/>
                                <div className='p-4 rounded-b-xl absolute top-[64%]
                                w-full'>
                                    <div className='w-full bg-white px-5 py-3 flex flex-col rounded-xl gap-2 text-sm'>
                                    <div className='flex justify-start items-center'>
                                        <h1 className='text-xl font-semibold'>{item.name}</h1>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <img src={locationMarker} alt='location' width={20} />
                                    <h2 className='text-[16px] font-normal text-[#5B8B8B]'>{item.address}</h2>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <div>
                                        <h2 className='text-xl font-bold text-[#5B8B8B]'>{item.price}</h2>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                        <div className='flex gap-1'>
                                            <IoBedOutline size={25} color='rgb(113 113 113)'/>
                                            <h4>{item.beds}</h4>
                                        </div>
                                        <span className='text-gray-300'>|</span>
                                        <div className='flex gap-1'>
                                            <LiaBathSolid size={25} color='rgb(113 113 113)'/>
                                            <h4>{item.baths}</h4>
                                        </div>
                                        <span className='text-gray-300'>|</span>
                                        <div className='flex gap-1'>
                                            <img src={areaIcon} alt='area' width={23} />
                                            <h4>{item.sqft}</h4>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
        </motion.div>
    );
};

export default ListingProperties;


// import React from 'react';

// const PropertyCard = ({ property }) => {
//     return (
//         <div className="property-card">
//             <img src={property.image} alt={property.title} className="property-image" />
//             <div className="property-details">
//                 <h3 className="property-title">{property.title}</h3>
//                 <p className="property-location">{property.location}</p>
//                 <p className="property-price">${property.price}</p>
//                 <p className="property-description">{property.description}</p>
//                 <button className="view-details">View Details</button>
//             </div>
//         </div>
//     );
// };

// export default PropertyCard