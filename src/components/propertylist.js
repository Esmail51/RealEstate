import React from 'react';
import PropertyCard from './listingProperties';
import home1 from '../assets/images/home 1.jpg';
import home2 from '../assets/images/home 2.jpg';
import home3 from '../assets/images/home-3.jpg';

const PropertyList = () => {
    const properties = [
        {
            id: 1,
            title: 'Luxury Villa',
            location: 'Beverly Hills, CA',
            price: 1200000,
            description: 'A beautiful luxury villa with stunning views.',
            image: home1, // Replace with your image URL
        },
        {
            id: 2,
            title: 'Modern Apartment',
            location: 'New York, NY',
            price: 850000,
            description: 'A spacious modern apartment in the heart of the city.',
            image: home2, // Replace with your image URL
        },
        {
            id: 2,
            title: 'villa',
            location: 'New York, NY',
            price: 850000,
            description: 'A spacious modern apartment in the heart of the city.',
            image: home3, // Replace with your image URL
        },
        // Add more properties as needed
    ];
    return (
        <div className="property-list flex p-5">
            {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
            ))}
        </div>
    );
};

export default PropertyList;