'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const TopOffers = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Header with Navigation */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-gray-800">Top offers</h2>
        {/* Navigation Buttons */}
        <div className="flex items-center space-x-2">
          <button id="scroll-left" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors disabled:opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button id="scroll-right" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Horizontally Scrolling Container */}
      <div id="offers-container" className="flex overflow-x-auto space-x-6 py-4 no-scrollbar scroll-smooth">
        {/* Card 1 */}
        <div className="flex-shrink-0 w-64 group">
          <div className="relative bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dlwdq84ig/image/upload/v1739354686/pl60mmkmcasijhebwm59.webp"
              alt="Scangan Coppernox loose cookware"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">60% OFF RRP</div>
          </div>
          <div className="mt-3">
            <h3 className="text-base font-semibold text-gray-800">Scangan Coppernox loose cookware</h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex-shrink-0 w-64 group">
          <div className="relative bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dlwdq84ig/image/upload/v1739354686/lxysbi4kkrjxufn6x8zy.webp"
              alt="Salisbury & Co Brew sets of 2"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">UP TO 60% OFF RRP</div>
          </div>
          <div className="mt-3">
            <h3 className="text-base font-semibold text-gray-800">Salisbury & Co Brew sets of 2</h3>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex-shrink-0 w-64 group">
          <div className="relative bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dlwdq84ig/image/upload/v1739354986/imnfyahcns7g6jhweixk.webp"
              alt="Wolstead Superior+ loose cookware"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">60% OFF RRP</div>
          </div>
          <div className="mt-3">
            <h3 className="text-base font-semibold text-gray-800">Wolstead Superior+ loose cookware</h3>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex-shrink-0 w-64 group">
          <div className="relative bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dlwdq84ig/image/upload/v1739354986/txbqhrgexiibxwza0ium.webp"
              alt="Salisbury & Co Signatura crockery and glassware"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">UP TO 65% OFF RRP</div>
          </div>
          <div className="mt-3">
            <h3 className="text-base font-semibold text-gray-800">Salisbury & Co Signatura crockery and glassware</h3>
          </div>
        </div>

        {/* Card 5 */}
        <div className="flex-shrink-0 w-64 group">
          <div className="relative bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dlwdq84ig/image/upload/v1755235950/urdyiyn8xphebw3g911i.webp"
              alt="Selected Chasseur"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">60% OFF RRP</div>
          </div>
          <div className="mt-3">
            <h3 className="text-base font-semibold text-gray-800">Selected Chasseur</h3>
          </div>
        </div>
        
        {/* Card 6 */}
        <div className="flex-shrink-0 w-64 group">
          <div className="relative bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dlwdq84ig/image/upload/v1755236036/tahpdvc05m0hnu0wqtt7.webp"
              alt="Wolstead Palette stand mixers and attachments"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">50% OFF RRP</div>
          </div>
          <div className="mt-3">
            <h3 className="text-base font-semibold text-gray-800">Wolstead Palette stand mixers and attachments</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopOffers;