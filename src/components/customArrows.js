import React from 'react';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`} // Add custom class for styling
      style={{ ...style, display: 'block', right: '10px', zIndex: 1 }} // Inline styles for positioning
      onClick={onClick}
    >
      ➡️ {/* You can replace this with an icon or custom SVG */}
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`} // Add custom class for styling
      style={{ ...style, display: 'block', left: '10px', zIndex: 1 }} // Inline styles for positioning
      onClick={onClick}
    >
    next
    </div>
  );
};

export { NextArrow, PrevArrow };
