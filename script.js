'use client'; // This is a client component

import { useEffect, useRef, useState } from 'react';

const ProductCarousel = () => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (carouselRef.current) {
      setCanScrollLeft(carouselRef.current.scrollLeft > 0);
      setCanScrollRight(
        carouselRef.current.scrollLeft + carouselRef.current.clientWidth < carouselRef.current.scrollWidth
      );
    }
  };

  useEffect(() => {
    // Attach scroll listener when the component mounts
    const element = carouselRef.current;
    if (element) {
      element.addEventListener('scroll', handleScroll);
      return () => {
        element.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 220 + 16; // Based on your card width and gap
      if (direction === 'left') {
        carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="section-container">
      {/* ... your HTML structure for the carousel ... */}
      <div className="flex space-x-2">
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
        >
          &lt;
        </button>
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
        >
          &gt;
        </button>
      </div>
      <div ref={carouselRef} className="flex overflow-x-auto space-x-4 pb-4 custom-scrollbar scroll-smooth">
        {/* ... your product cards ... */}
      </div>
    </div>
  );
};