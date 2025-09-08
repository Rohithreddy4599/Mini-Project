'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * A highly reusable client-side component for creating horizontal-scrolling carousels.
 * It manages scroll state, button disabling, and optional progress bar functionality.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the carousel.
 * @param {number|function} props.scrollAmount - The distance to scroll per click. Can be a number or a function that takes the container element.
 * @param {boolean} [props.showProgressBar=false] - Whether to display a scroll progress bar.
 */
export default function Carousel({ children, scrollAmount, showProgressBar = false }) {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [progress, setProgress] = useState(0);

  const updateScrollUI = useCallback(() => {
    const container = containerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const maxScrollLeft = scrollWidth - clientWidth;

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.round(scrollLeft) < Math.round(maxScrollLeft));

      if (showProgressBar && maxScrollLeft > 0) {
        setProgress((scrollLeft / maxScrollLeft) * 100);
      }
    }
  }, [showProgressBar]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleScroll = () => {
        window.requestAnimationFrame(updateScrollUI);
      };

      container.addEventListener('scroll', handleScroll);
      updateScrollUI();

      const handleResize = () => {
        updateScrollUI();
      };
      window.addEventListener('resize', handleResize);

      return () => {
        container.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [updateScrollUI]);

  const scrollHorizontally = (direction) => {
    const container = containerRef.current;
    if (container) {
      const distance = typeof scrollAmount === 'function' ? scrollAmount(container) : scrollAmount;
      container.scrollBy({ left: direction * distance, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 z-10 flex items-center">
        <button
          onClick={() => scrollHorizontally(-1)}
          disabled={!canScrollLeft}
          className="p-2 bg-white rounded-full shadow-lg transition-transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
        </button>
      </div>

      <div
        ref={containerRef}
        className="flex overflow-x-auto gap-4 p-4 scrollbar-hide"
      >
        {children}
      </div>

      <div className="absolute inset-y-0 right-0 z-10 flex items-center">
        <button
          onClick={() => scrollHorizontally(1)}
          disabled={!canScrollRight}
          className="p-2 bg-white rounded-full shadow-lg transition-transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10l-3.293-3.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
        </button>
      </div>

      {showProgressBar && (
        <div className="w-full h-1 bg-gray-200 mt-4 rounded-full">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}