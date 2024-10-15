import { IoMdHeartEmpty } from "react-icons/io";
import { IoShareOutline } from "react-icons/io5";
import { IoPrintOutline } from "react-icons/io5";
import home1 from '../assets/images/home 1.jpg';
import home2 from '../assets/images/home 2.jpg';
import home3 from '../assets/images/home-3.jpg';
import DialogModal from "../components/photosDialog";
import { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";
import { IoHammerOutline } from "react-icons/io5";
import { BiArea } from "react-icons/bi";
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { GiHomeGarage } from "react-icons/gi";
import MapComponent from "../components/map";


const PropertyView = ({ property }) => {
  const images = [home1, home2, home3, home1, home2];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [indexValue, setIndexValue] = useState(0);

  const handleShowAllPhotos = (index) => {
    setIndexValue(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }
  return (
    <div className="px-14 pt-32">
      <div className="flex gap-3 justify-end p-5">
        <div className="flex items-center gap-3">
          <div className="p-2 border rounded-full border-gray-300">
            <IoMdHeartEmpty />
          </div>
          <span>Save</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 border rounded-full border-gray-300">
            <IoShareOutline />
          </div>
          <span>Share</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 border rounded-full border-gray-300">
            <IoPrintOutline />
          </div>
          <span>Print</span>
        </div>

      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${index === 0 ? 'col-span-2 row-span-2' : 'col-span-1'
              } relative overflow-hidden rounded-lg`}
            onClick={() => handleShowAllPhotos(index)}
          >
            <img
              src={image}
              alt={`image-${index}`}
              className="object-cover w-full h-full"
            />
            {index === 4 && (
              <div className="absolute inset-0 flex items-end justify-end p-5">
                <button
                  onClick={() => handleShowAllPhotos(0)}
                  className="bg-black bg-opacity-50 text-white text-lg font-bold rounded-lg px-4 py-2"
                >
                  Show All Photos
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <DialogModal isOpen={isModalOpen} title={'imageDialog'} onClose={closeModal} value={images} index={indexValue} />

      <div className="flex flex-row mt-10  font-roboto gap-10">
        <div className="w-[70%]">
          <div className="flex flex-col w-full">
            <div><h1 className="text-start text-3xl font-bold">Villa Property</h1></div>
            <div className="flex justify-between">
              <div className="flex gap-3 items-center text-xl text-gray-500">
                <span className="text-gray-400"><HiOutlineLocationMarker /></span>
                <h1>1 mac street torronto</h1>
              </div>
              <h1 className="text-3xl font-semibold">$ 47869509</h1>
            </div>
          </div>
          <div className="w-full grid-cols-3 grid gap-3 mt-8">
            <div className="flex gap-3 p-3 bg-gray-100 rounded-lg items-center">
              <span><IoHomeOutline size={22} /></span>
              <p>Detached Type</p>
            </div>
            <div className="flex gap-3 p-3 bg-gray-100 rounded-lg items-center">
              <span><IoHammerOutline size={22} /></span>
              <p>Building Age 51-99</p>
            </div>
            <div className="flex gap-3 p-3 bg-gray-100 rounded-lg items-center">
              <span><BiArea size={22} /></span>
              <p>41 X 155 Ft Lot</p>
            </div>
            <div className="flex gap-3 p-3 bg-gray-100 rounded-lg items-center">
              <span><IoBedOutline size={22} /></span>
              <p>3 Bedrooms</p>
            </div>
            <div className="flex gap-3 p-3 bg-gray-100 rounded-lg items-center">
              <span><LiaBathSolid size={22} /></span>
              <p>2 Bathrooms</p>
            </div>
            <div className="flex gap-3 p-3 bg-gray-100 rounded-lg items-center">
              <span><GiHomeGarage size={22} /></span>
              <p>1 Garage</p>
            </div>
          </div>
          <div className="mt-20 text-start">
            <h1 className="text-xl font-semibold">Description</h1>
            <p className="text-gray-500 mt-6 text-base leading-8">Enchanting three bedroom, three bath home with spacious one bedroom, one bath cabana, in-laws quarters.
              Charming living area features fireplace and fabulous art deco details. Formal dining room.
            </p>
            <p className="text-gray-500 mt-4 text-base leading-8">Remodeled kitchen with granite countertops, white cabinetry and stainless appliances. Lovely master bedroom has updated bath, beautiful view of the pool. Guest bedrooms have walk-in, cedar closets. Delightful backyard; majestic oaks surround the free form pool and expansive patio, wet bar and grill.</p>
          </div>
          
          <div className="mt-20 text-start">
            <h1 className="text-xl font-semibold">Property Details</h1>
            <div className="w-full grid-cols-2 grid mt-6 gap-3 gap-x-12">
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">MLS No:</p>
                <p className="text-gray-500">C9392231</p>
              </div>

              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Property Style</p>
                <p className="text-gray-500">Bungalow</p>
              </div>
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">List Price</p>
                <p className="text-gray-500">$ 47869509</p>
              </div>
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Bedrooms</p>
                <p className="text-gray-500">4</p>
              </div>
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Parking</p>
                <p className="text-gray-500">3</p>
              </div>
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Garage</p>
                <p className="text-gray-500">Double Detached</p>
              </div>
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Building Age</p>
                <p className="text-gray-500">51 - 99 </p>
              </div>
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Lot Size</p>
                <p className="text-gray-500">41 x 152 ft Lot </p>
              </div>
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Sewer</p>
                <p className="text-gray-500">Sewers</p>
              </div>
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Construction</p>
                <p className="text-gray-500">Bricks</p>
              </div>
              </div>
          </div>
          <div className="mt-20 text-start">
            <h1 className="text-xl font-semibold">Address</h1>
            <div className="w-full grid-cols-2 grid mt-6 gap-3 gap-x-12">
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Street</p>
                <p className="text-gray-500">Eglinton</p>
              </div>
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Zip/Postal Code</p>
                <p className="text-gray-500">110129</p>
              </div>
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">City</p>
                <p className="text-gray-500">Toronto</p>
              </div>
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Area</p>
                <p className="text-gray-500">Toronto</p>
              </div>
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">District</p>
                <p className="text-gray-500">Toronto C11</p>
              </div>
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">State</p>
                <p className="text-gray-500">Ontario</p>
              </div>
            </div>
          </div>
          <div className="mt-20 text-start">
            <h1 className="text-xl font-semibold"> Listing Details</h1>
            <div className="w-full grid-cols-2 grid mt-6 gap-3 gap-x-12">
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Brokerage</p>
                <p className="text-black font-normal">INTERNATIONAL REALTY FIRM, INC.</p>
              </div>
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Data Source</p>
                <p className="text-black font-normal">TREBB</p>
              </div>
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Listed On</p>
                <p className="text-black font-normal">Oct 10, 2024 </p>
              </div>
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Updated On</p>
                <p className="text-black font-normal">Oct 11, 2024 </p>
              </div>
              </div>
          </div>
          <div className="mt-20 text-start">
          <h1 className="text-xl font-semibold">Interior Details</h1>
            <div className="w-full grid-cols-2 grid mt-6 gap-3 gap-x-12">
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Bedrooms</p>
                <p className="text-black font-normal">3</p>
              </div>
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Bathrooms</p>
                <p className="text-black font-normal">6</p>
              </div>
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Rooms</p>
                <p className="text-black font-normal">8</p>
              </div>
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Kitchen</p>
                <p className="text-black font-normal">1</p>
              </div>
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Bathroom Detail</p>
                <p className="text-black font-normal">
                1, 4pc Ground floor</p>
              </div>
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Basement Type</p>
                <p className="text-black font-normal">
                Apartment</p>
              </div>
              </div>
          </div>
          <div className="mt-20 text-start">
            <h1 className="text-xl font-semibold">Utilities Central</h1>
            <div className="w-full grid-cols-2 grid mt-6 gap-3 gap-x-12">
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Heating</p>
                <p className="text-black font-normal">Gas Hot Water</p>
              </div>
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Water</p>
                <p className="text-black font-normal">Muncipal</p>
              </div>
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Cooling</p>
                <p className="text-black font-normal">Central Air</p>
              </div>
              </div>
          </div>
          <div className="mt-20 text-start">
            <h1 className="text-xl font-semibold">Parking Details</h1>
            <div className="w-full grid-cols-2 grid mt-6 gap-3 gap-x-12">
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Driveway</p>
                <p className="text-black font-normal">Private</p>
              </div>
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Garage Type</p>
                <p className="text-black font-normal">Double Detached</p>
              </div>
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Garage</p>
                <p className="text-black font-normal">1</p>
              </div>
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Parking Spaces</p>
                <p className="text-black font-normal">4</p>
              </div>
              </div>
          </div>
          <div className="mt-20 text-start">
            <h1 className="text-xl font-semibold">Other Details</h1>
            <div className="w-full grid-cols-2 grid mt-6 gap-3 gap-x-12">
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Den</p>
                <p className="text-black font-normal">No</p>
              </div>
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Swimming Pool</p>
                <p className="text-black font-normal">yes</p>
              </div>
              <div className="flex items-center justify-between p-3 border border-b-gray-300 border-r-0 border-l-0 border-t-0">
                <p className="font-medium">Fire Places</p>
                <p className="text-black font-normal">yes</p>
              </div>
              </div>
          </div>
          <div className="mt-20 text-start">
            <h1 className="text-xl font-semibold">Map View</h1>
            <div className="w-full rounded-lg mt-10 p-7">
              <MapComponent />
            </div>
          </div>
        </div>

        <div className="flex flex-col p-10 gap-4 w-[30%] border border-gray-300 rounded-lg h-72 font-open-sans">
          <p>Request a Tour as early as Today</p>
          <button className="bg-Amber-400/70 font-semibold text-black p-3 rounded-lg">Request Tour</button>
          <button className="bg-white border-Amber-400 border text-black p-3 rounded-lg">Request Info</button>

        </div>
      </div>

    </div>
  );
}

export default PropertyView;