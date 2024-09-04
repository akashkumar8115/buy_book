import { useState, useEffect, useCallback } from 'react';
import React from 'react'
import '../css/Crousel.css'

const Carousel = ({ slides, autoPlay = true, autoPlayTime = 3000 }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, [slides.length]);

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        let interval;
        if (autoPlay) {
            interval = setInterval(nextSlide, autoPlayTime);
        }
        return () => clearInterval(interval);
    }, [autoPlay, autoPlayTime, nextSlide]);

    return (
        <div className="carousel">
            <div
                className="carousel-inner"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                    >
                        <img src={slide.imageSrc} alt={slide.title} />
                        <div className="carousel-caption">
                            {/* <h3>{slide.title}</h3>
                            <p>{slide.subtitle}</p> */}
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control prev" onClick={prevSlide}>
                &#10094;
            </button>
            <button className="carousel-control next" onClick={nextSlide}>
                &#10095;
            </button>
        </div>
    );
};

export default Carousel;
