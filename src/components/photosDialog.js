import React, { useState} from 'react';
import ImageSlider from '../components/imageSlider';

const Modal = ({ isOpen, onClose, value, index, title }) => {
  
  const [bedrooms, setBedrooms] = useState(null);
  const [bathrooms, setBathrooms] = useState(null);
  const [parking, setParking] = useState(null);
  const [propertyType, setPropertyType] = useState([]);
  const [price, setPrice] = useState([0, 3200000]);
  const [sqft, setSqft] = useState([0, 8000]);
  const [status, setStatus] = useState('Sold');
  const [maintenanceFee, setMaintenanceFee] = useState([0, 1000]);
  const propertyTypes = ['Detached', 'Semi Detached', 'Freehold Townhouse', 'Condo Townhouse', 'Condominium', 'Multiplex', 'Vacant Land'];
  if (!isOpen) return null;
  const clearFilters = () => {
    setBedrooms(null);
    setBathrooms(null);
    setParking(null);
    setPropertyType([]);
    setPrice([0, 3200000]);
    setSqft([0, 8000]);
    setStatus(null);
    setMaintenanceFee([0, 1000]);
  };
  return (
    <>
      {title === 'filter' && (
        <div className="fixed inset-0 overflow-hidden z-[2000] flex items-center justify-center bg-white bg-opacity-80 px-40"
        style={{ position: 'fixed', zIndex: 2000 }}>
           <div className="p-6 bg-white rounded-lg shadow-md">
           <button
            onClick={onClose}
            className="bg-Stone-700 p-3 font-bold text-white py-2 px-4 rounded absolute right-[24%]"
          >
            X
          </button>
      <h2 className="text-2xl font-bold mb-4">Filters</h2>
      

      {/* Property Types */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Property Type</h3>
        <div className="grid grid-cols-4 gap-4">
          {propertyTypes.map(type => (
            <button
              key={type}
              className={`p-2 border rounded-lg ${propertyType.includes(type) ? 'bg-Stone-500 text-white' : 'bg-white'}`}
              onClick={() => setPropertyType(prev =>
                prev.includes(type) ? prev.filter(item => item !== type) : [...prev, type]
              )}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Bedrooms, Bathrooms, Parking */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <h3 className="font-semibold mb-2">Bedrooms</h3>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map(num => (
              <button
                key={num}
                className={`p-3 border rounded-full w-[50px] ${bedrooms === num ? 'bg-Stone-500 text-white' : 'bg-white'}`}
                onClick={() => setBedrooms(num)}
              >
                {num}+
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Bathrooms</h3>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map(num => (
              <button
                key={num}
                className={`p-3 border rounded-full w-[50px] ${bathrooms === num ? 'bg-Stone-500 text-white' : 'bg-white'}`}
                onClick={() => setBathrooms(num)}
              >
                {num}+
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Parking</h3>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map(num => (
              <button
                key={num}
                className={`p-3 border w-[50px] rounded-full ${parking === num ? 'bg-Stone-500 text-white' : 'bg-white'}`}
                onClick={() => setParking(num)}
              >
                {num}+
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Price</h3>
        <input
          type="range"
          min="0"
          max="5000000"
          value={price[1]}
          onChange={(e) => setPrice([0, parseInt(e.target.value)])}
          className="w-full"
        />
        <div className="flex justify-between">
          <span>${price[0].toLocaleString()}</span>
          <span>${price[1].toLocaleString()}</span>
        </div>
      </div>

      {/* Square Footage */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Square Footage (sqft)</h3>
        <input
          type="range"
          min="0"
          max="10000"
          value={sqft[1]}
          onChange={(e) => setSqft([0, parseInt(e.target.value)])}
          className="w-full"
        />
        <div className="flex justify-between">
          <span>{sqft[0]} sqft</span>
          <span>{sqft[1]}+ sqft</span>
        </div>
      </div>

      {/* Property Status */}
      <div className="mb-4 flex flex-col items-center">
        <h3 className="font-semibold mb-2">Status</h3>
        <div className="flex space-x-4">
          {['Active', 'Sold', 'Delisted'].map(stat => (
            <button
              key={stat}
              className={`p-2 border rounded-lg ${status === stat ? 'bg-Stone-500 text-white' : 'bg-white'}`}
              onClick={() => setStatus(stat)}
            >
              {stat}
            </button>
          ))}
        </div>
      </div>

      {/* Apply and Clear Buttons */}
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-Stone-500 text-white rounded-lg" onClick={onClose}>Apply Filter</button>
        <button className="px-4 py-2 bg-gray-300 rounded-lg"onClick={clearFilters}>Clear All</button>
      </div>
    </div>
          
        </div>
      )}
      {title === 'imageDialog' && (
        <div className="fixed inset-0 overflow-hidden z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-Stone-600 rounded-lg w-full  p-5 relative flex flex-col">
            <div className="flex-grow">
              <ImageSlider images={value} initialIndex={index} />
            </div>
            <button
              onClick={onClose}
              className="absolute top-44 right-4 bg-Indigo-700/40 p-3 font-bold text-white py-2 px-4 rounded"
            >
              X
            </button>
          </div>
        </div>
      )}
    </>

  );
};

export default Modal;
