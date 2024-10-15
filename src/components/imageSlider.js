import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from './customArrows';
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";


const ImageSlider = ({ images,initialIndex }) => {
    const slider = React.useRef(null);
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1, // Show one image at a time
        slidesToScroll: 1,
        pauseOnHover: true,
        arrows: false,
        initialSlide: initialIndex || 0,
    };

    return (
        <div style={{ width: '80%', margin: 'auto', padding: '120px' }}>
            <Slider {...settings} ref={slider}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img
                            src={image}
                            alt={`Slide ${index}`}
                            style={{ width: '100%', height: 'auto' }} // Adjust the image to fit the container
                        />
                    </div>

                ))}


            </Slider>
            <div className='p-4 rounded-lg bg-Indigo-800/70 absolute top-[50%] left-[90%] cursor-pointer hover:opacity-70' onClick={() => slider?.current?.slickPrev()}>
                <FaArrowRight color='#ffffff '/>
            </div>
            <div className='p-4 rounded-lg bg-Indigo-800/70 absolute top-[50%] right-[90%] cursor-pointer hover:opacity-70' onClick={() => slider?.current?.slickNext()}>
                <FaArrowLeft color='#ffffff '/>
            </div>
        </div>
    );
}

export default ImageSlider;
