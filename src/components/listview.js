import locationMarker from '../assets/images/location-mark.png';
import home1 from '../assets/images/home 1.jpg';
import home2 from '../assets/images/home 2.jpg';
import home3 from '../assets/images/home-3.jpg';
import areaIcon from '../assets/images/maximize.png';
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ListView = () => {
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
        {
            price: '$10750000',
            address: '654 Oak Ln',
            beds: '6',
            baths: '5',
            sqft: '3500',
            image: home1,
            name: 'cedar view mansion'
        },
        {
            price: '$10750000',
            address: '654 Oak Ln',
            beds: '6',
            baths: '5',
            sqft: '3500',
            image: home1,
            name: 'cedar view mansion'
        },
        {
            price: '$9450000',
            address: '456 Elm St',
            beds: '5',
            baths: '4',
            sqft: '3000',
            image: home2,
            name: 'oakwood villa'
        },
        {
            price: '$7899999',
            address: '148-37 88th Ave,Torronto 11435',
            beds: '4',
            baths: '3',
            sqft: '2000',
            image: home1,
            name: 'Archers Insight'
        },

    ];
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);

    const handleNextPage = () => {
        if (currentPage < Math.ceil(list.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    
  return (
    <>
    <div className='grid grid-cols-4 gap-7 p-7 max-sm:grid-cols-1 max-md:grid-cols-2 mt-32 place-items-center bg-Stone-100'>
                {currentItems.map((item, index) => (
                    <div key={index} className='w-[420px] xl:w-[380px] max-sm:w-full   rounded-xl shadow-lg'>
                        <div className='h-[500px] relative bg-cover bg-center rounded-2xl overflow-hidden'>

                            <img src={item.image} alt='home'
                                className='rounded-2xl w-full h-full cursor-pointer object-cover transform hover:scale-105'
                                style={{
                                    transition: 'all 1s cubic-bezier(.3,1,.35,1) 0s, transform .5s ease'
                                }}
                                onClick={() => navigate('/property')} />
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
                                                <IoBedOutline size={25} color='rgb(113 113 113)' />
                                                <h4>{item.beds}</h4>
                                            </div>
                                            <span className='text-gray-300'>|</span>
                                            <div className='flex gap-1'>
                                                <LiaBathSolid size={25} color='rgb(113 113 113)' />
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
            <div className="flex gap-5 justify-center mt-8">
                <button
                    className="bg-[#545350]
                     p-4 rounded-full disabled:opacity-50"
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >
                    <FaArrowLeft color='#ffffff' />
                </button>

                <button
                    className="bg-[#545350] p-4 rounded-full disabled:opacity-50"
                    onClick={handleNextPage}
                    disabled={currentPage === Math.ceil(list.length / itemsPerPage)}
                >
                    <FaArrowRight color='#ffffff' />
                </button>
            </div>
            </>
  );
}

export default ListView;