import React, { useState, useEffect } from "react";
import "../assets/Css/slider.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Card, CardMedia, Button } from "@mui/material";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image:
        "https://e1.pxfuel.com/desktop-wallpaper/604/743/desktop-wallpaper-best-cards-to-pull-from-pokemon-tcg-fusion-strike-vmax-gengar.jpg",
      caption: "Gengar",
    },
    {
      image:
        "https://e0.pxfuel.com/wallpapers/244/435/desktop-wallpaper-pokemon-pokemon-lugia-pokemon-poster-pokemon-realistic-cool-lugia.jpg",
      caption: "Lugia",
    },
  ];

  const handleLeftClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handleRightClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handleLeftClick();
      } else if (event.key === "ArrowRight") {
        handleRightClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="slider-container">
      <h4 className="slider-title">2021</h4>
      <div className="left-arrow" onClick={handleLeftClick}>
        <KeyboardArrowLeftIcon className="arrow-icon" />
      </div>
      <div className="slider-content" id="slider-content">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${
              index === currentSlide
                ? "position-3"
                : index === (currentSlide + 1) % slides.length
                ? "position-4"
                : index === (currentSlide - 1 + slides.length) % slides.length
                ? "position-2"
                : "position-none"
            }`}
          >
            <Card>
              <CardMedia image={slide.image} className="media" />
            </Card>

            <div className="card-sections">
              <div className="upper-section"></div>
              <div className="lower-section">
                <div className="card-caption">{slide.caption}</div>
                <div className="card-button">know more</div>
              </div>
            </div>
          </div>
        ))}
        <div className="slider-content-background"></div>
      </div>
      <div className="right-arrow" onClick={handleRightClick}>
        <KeyboardArrowRightIcon className="arrow-icon" />
      </div>
    </div>
  );
};

export default Slider;
