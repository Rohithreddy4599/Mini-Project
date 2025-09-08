'use client';
import { useRef } from 'react';
export default function LastChanceSale() {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-white p-4 sm:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <p className="text-sm text-red-600 font-semibold">Kitchen Frenzy sale ends tonight</p>
                        <h2 className="text-3xl font-bold text-gray-800">Last chance to save!</h2>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="#" className="text-red-600 font-semibold hover:underline hidden sm:block">Shop Kitchen Frenzy</a>
                        <div className="flex space-x-2">
                            <button onClick={() => scroll('left')} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button onClick={() => scroll('right')} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Horizontally Scrollable Product Container */}
                <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-4 pb-4 custom-scrollbar scroll-smooth">
                    {/* All your product cards go here... */}
                    {/* For brevity, only showing the first card */}
                    <div className="flex-shrink-0 w-64 bg-white rounded-lg group">
                        <div className="relative overflow-hidden rounded-t-lg">
                            <img src="https://res.cloudinary.com/dlwdq84ig/image/upload/v1752025449/rfmcvspf1dt984qqynk2.webp"
                                alt="Bakeware Set" className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">ONLINE ONLY</div>
                            <button className="absolute top-3 right-3 p-2 bg-white/70 rounded-full hover:bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            </button>
                        </div>
                        <div className="p-4">
                            <p className="text-xs font-bold text-green-700">KITCHEN FRENZY</p>
                            <h3 className="font-semibold text-gray-800 mt-1 truncate">Wolstead Mineral Non Stick Baking Tray & Pan Set 4pc</h3>
                            <div className="flex items-baseline mt-2">
                                <p className="text-xl font-bold text-red-600">$79.95</p>
                                <p className="text-sm text-gray-500 line-through ml-2">$159.95</p>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">55% OFF RRP</p>
                        </div>
                    </div>
                    {/* ... PASTE THE OTHER 5 PRODUCT CARDS HERE ... */}
                </div>
            </div>
        </div>
    );
}