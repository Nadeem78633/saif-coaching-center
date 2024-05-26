import React, { useState } from "react";

import "../assets/Css/slider.css";

const Carousel = () => {
  const items = [
    { image: "https://example.com/image1.jpg", name: "Image 1" },
    { image: "https://example.com/image2.jpg", name: "Image 2" },
    { image: "https://example.com/image3.jpg", name: "Image 3" },
    // Add more items as needed
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === items.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-images">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${
              currentIndex === index ? "active" : "inactive"
            }`}
          >
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button className="left-btn" onClick={handlePrevious}>
          Left
        </button>
        <button className="right-btn" onClick={handleNext}>
          Right
        </button>
      </div>
      <div className="carousel-indicator">
        {items.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
