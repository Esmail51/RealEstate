import Img from '../assets/images/6699e967f8e9588b2686764d_hero-background.jpg'
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import React, { useState} from 'react';
import ListView from '../components/listview';
import MapComponent from '../components/map';
import { FaAngleDown } from "react-icons/fa6";
import { CiFilter } from "react-icons/ci";
import DialogModal from "../components/photosDialog";




const Buypage = () => {
    const properties = [
        'All Property Types',
        "Detached",
        "Semi - Detached",
        "Condo Apt",
        "Freehold Townhouse",
        "Condo Townhouse",
        "Link,",
        "Duplex",
        "Multiplex",
        "Vacant Land",
        "Farm",
        "Others"
    ]

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeView, setActiveView] = useState('list');
    const [showPriceRange, setShowPriceRange] = useState(false)
    const [showBedrooms, setShowBedrooms] = useState(false)
    const [showBaths, setShowBaths] = useState(false)
    const [priceRange, setPriceRange] = useState(50); // initial value for slider
    const [minPrice, setMinPrice] = useState(0); // minimum price input state
    const [maxPrice, setMaxPrice] = useState(100); // maximum price input stat

    // Update slider value based on range input
    const handleRangeChange = (e) => {
        setPriceRange(e.target.value);
    };

    const handleToggle = (view) => {
        setActiveView(view);
    };
    const toggleView = (view) => {
        if (view === 'price') {
            setShowPriceRange(!showPriceRange)
        } else if (view === 'beds') {
            setShowBedrooms(!showBedrooms)
        } else if (view === 'baths') {
            setShowBaths(!showBaths)
        } else if (view === 'filter') {
            setIsModalOpen(!isModalOpen)
        }
    };
    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div className='bg-Stone-100'>
            <div className='relative w-full h-screen'>
                <div className='absolute inset-0 z-10'>
                    <img src={Img} alt="buy" className='opacity-70 w-full h-full object-cover' />
                </div>

                <div className="relative z-20 flex flex-col gap-5 p-5 bg-black/70 text-white h-full justify-center items-center">
                    <p className="text-4xl font-bold">Explore all Feature Properties</p>
                    <p className="text-lg">Explore our extensive range of properties and find your perfect home.</p>
                </div>
                <div className='absolute rounded-2xl inset-0 flex h-16 bg-white top-[84%] mx-auto my-0 z-30 w-[30%]'>
                    <button
                        className={`p-2 font-semibold rounded-l-2xl w-full ${activeView === 'list' ? 'bg-[#545350] text-white' : 'bg-gray-200 text-black'}`}
                        onClick={() => handleToggle('list')}
                    >
                        List View
                    </button>
                    <button
                        className={`p-2 font-semibold rounded-r-2xl w-full ${activeView === 'map' ? 'bg-[#545350] text-white' : 'bg-gray-200'}`}
                        onClick={() => handleToggle('map')}
                    >
                        Map View
                    </button>
                </div>
                <div className='w-full p-5 flex flex-col'>
                    <div className='flex flex-col p-8 shadow-md w-[97%] bg-white gap-4 absolute top-[92%] box-border rounded-2xl z-30'>
                        <div className='flex'>
                            <div className='w-full rounded-lg bg-Stone-100 p-2 shadow-md'>
                                <input type="text" placeholder="Search for properties" className="p-3 w-full bg-Stone-100 outline-none"></input>
                            </div>
                            <div className='w-full rounded-lg bg-Stone-100 shadow-md p-2'>
                                <select className="p-3 w-full bg-Stone-100 outline-none">
                                    <option disabled>Property Type</option>
                                    {properties.map((property, index) => (
                                        <option key={index} value={property}>{property}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='w-full rounded-lg bg-Stone-100 p-2 shadow-md'>
                                <input type="text" placeholder="locations" className="p-3 w-full bg-Stone-100 outline-none"></input>
                            </div>
                            <div className='w-full rounded-lg bg-[#545350] shadow-md p-2'>
                                <button className="p-3 w-full bg-[#545350] text-white">Search</button>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex gap-4'>
                                <div className='relative'>
                                    <div className='p-3 border border-gray-300 rounded-xl flex items-center gap-5 cursor-pointer' onClick={() => toggleView('price')}>
                                        <p className='text-xl'>$ Price</p>
                                        <FaAngleDown />
                                    </div>
                                    {showPriceRange && (
                                        <div className='absolute p-5 bg-white top-[87%] border w-64 border-gray-300 rounded-lg shadow-lg'>
                                            <div>
                                                <label
                                                    htmlFor="medium-range"
                                                    className="block mb-2 text-sm font-medium text-black dark:text-white"
                                                >
                                                    Price range
                                                </label>
                                                <input
                                                    id="medium-range"
                                                    type="range"
                                                    value={priceRange}
                                                    min={minPrice}
                                                    max={maxPrice}
                                                    onChange={handleRangeChange}
                                                    className="w-full h-2 mb-6 bg-gray-900 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                                                />
                                                <p className='text-sm'>Selected Price: ${priceRange}</p>
                                            </div>
                                            <div className='flex gap-2 mt-4'>
                                                <div className='flex flex-col items-start'>
                                                    <label
                                                        htmlFor='min-price'
                                                        className='text-sm font-medium'
                                                    >
                                                        Minimum Price
                                                    </label>
                                                    <input
                                                        id='min-price'
                                                        type="number"
                                                        value={minPrice}
                                                        onChange={(e) => setMinPrice(e.target.value)}
                                                        className='p-2 border border-gray-300 rounded-md w-full'
                                                    />
                                                </div>
                                                <div className='flex flex-col items-start'>
                                                    <label
                                                        htmlFor='max-price'
                                                        className='text-sm font-medium'
                                                    >
                                                        Maximum Price
                                                    </label>
                                                    <input
                                                        id='max-price'
                                                        type="number"
                                                        value={maxPrice}
                                                        onChange={(e) => setMaxPrice(e.target.value)}
                                                        className='p-2 border border-gray-300 rounded-md w-full'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="relative">
                                    <div
                                        className="p-3 border border-gray-300 rounded-xl flex items-center gap-5 cursor-pointer"
                                        onClick={() => toggleView('beds')}
                                    >
                                        <p className="text-xl">Beds</p>
                                        <FaAngleDown />
                                    </div>
                                    {showBedrooms && (
                                        <div className="flex w-44 flex-col absolute p-1 bg-white top-[89%] left-0 border border-gray-300 rounded-lg shadow-lg z-10">
                                            {[1, 2, 3, 4, '5+'].map((bed, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center border-b border-gray-200 py-1 gap-3 cursor-pointer hover:bg-gray-100"
                                                >
                                                    <IoBedOutline />
                                                    <span>{bed}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="relative">
                                    <div
                                        className="p-3 border border-gray-300 rounded-xl flex items-center gap-5 cursor-pointer"
                                        onClick={() => toggleView('baths')}
                                    >
                                        <p className="text-xl">Baths</p>
                                        <FaAngleDown />
                                    </div>
                                    {showBaths && (
                                        <div className="flex w-44 flex-col absolute p-1 bg-white top-[89%] left-0 border border-gray-300 rounded-lg shadow-lg z-30">
                                            {[1, 2, 3, 4, '5+'].map((bed, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center border-b border-gray-200 py-1 gap-3 cursor-pointer hover:bg-gray-100"
                                                >
                                                    <LiaBathSolid />
                                                    <span>{bed}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='relative'>
                                <div className='p-3 border border-gray-300 rounded-xl flex items-center gap-5 cursor-pointer' onClick={() => toggleView('filter')}>
                                    <p className='text-xl'>Filters</p>
                                    <CiFilter />
                                </div>
                            </div>
                            <DialogModal isOpen={isModalOpen} onClose={closeModal} value={''} index={''} title={'filter'} />
                        </div>

                    </div>
                    <div className='flex p-2 top-[98%] z-30 absolute'>

                    </div>
                </div>
            </div>
            {activeView === 'list' && (
                <ListView />)}
            {activeView === 'map' && (
                <div className='mt-52 h-[500px]'><MapComponent /></div>)}



        </div>


    )
}
export default Buypage