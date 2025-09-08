'use client';

import Image from 'next/image';
import Link from 'next/link';

const FeaturedBrands = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <header className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm text-red-600 font-medium">Names you know and love</p>
          <h2 className="text-3xl font-bold text-gray-900">Featured brands</h2>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-sm font-semibold text-gray-800 hover:text-black hidden sm:block">
            Explore all brands
          </Link>
          {/* Navigation Buttons */}
          <div className="flex items-center space-x-2">
            <button id="prev-btn" className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button id="next-btn" className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Brands Carousel Container */}
      <div id="brands-container" className="relative overflow-x-auto no-scrollbar scroll-smooth">
        <div className="flex space-x-4 pb-4">
          {/* Brand Item 1: Ninja */}
          <Link href="#" className="flex-shrink-0 w-48 h-48 relative rounded-lg overflow-hidden group">
            <Image
              src="https://res.cloudinary.com/dlwdq84ig/image/upload/v1755235904/c2blshb4lgf5mejsbkpf.webp"
              alt="Ninja"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white font-bold text-lg">NINJA</div>
          </Link>
          {/* Brand Item 2: Victoria */}
          <Link href="#" className="flex-shrink-0 w-48 h-48 relative rounded-lg overflow-hidden group">
            <Image
              src="https://res.cloudinary.com/dlwdq84ig/image/upload/v1742533824/is9jfggnrhakss8tynat.webp"
              alt="Victoria"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white font-bold text-lg">VICTORIA</div>
          </Link>
          {/* Brand Item 3: Global */}
          <Link href="#" className="flex-shrink-0 w-48 h-48 relative rounded-lg overflow-hidden group">
            <Image
              src="https://res.cloudinary.com/dlwdq84ig/image/upload/v1739354686/pl60mmkmcasijhebwm59.webp"
              alt="Global"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white font-bold text-lg">GLOBAL</div>
          </Link>
          {/* Brand Item 4: De'Longhi */}
          <Link href="#" className="flex-shrink-0 w-48 h-48 relative rounded-lg overflow-hidden group">
            <Image
              src="https://res.cloudinary.com/dlwdq84ig/image/upload/v1755235950/urdyiyn8xphebw3g911i.webp"
              alt="De'Longhi"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white font-bold text-lg">De'Longhi</div>
          </Link>
          {/* Brand Item 5: Scanpan */}
          <Link href="#" className="flex-shrink-0 w-48 h-48 relative rounded-lg overflow-hidden group">
            <Image
              src="https://res.cloudinary.com/dlwdq84ig/image/upload/v1739354686/lxysbi4kkrjxufn6x8zy.webp"
              alt="Scanpan"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white font-bold text-lg">SCANPAN</div>
          </Link>
          {/* Brand Item 6: Wolstead */}
          <Link href="#" className="flex-shrink-0 w-48 h-48 relative rounded-lg overflow-hidden group">
            <Image
              src="https://res.cloudinary.com/dlwdq84ig/image/upload/v1755236036/tahpdvc05m0hnu0wqtt7.webp"
              alt="Wolstead"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white font-bold text-lg">WOLSTEAD</div>
          </Link>
          {/* Brand Item 7: KitchenAid */}
          <Link href="#" className="flex-shrink-0 w-48 h-48 relative rounded-lg overflow-hidden group">
            <Image
              src="https://res.cloudinary.com/dlwdq84ig/image/upload/v1739354986/imnfyahcns7g6jhweixk.webp"
              alt="KitchenAid"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white font-bold text-lg">KitchenAid</div>
          </Link>
          {/* Brand Item 8: Joseph Joseph */}
          <Link href="#" className="flex-shrink-0 w-48 h-48 relative rounded-lg overflow-hidden group">
            <Image
              src="https://res.cloudinary.com/dlwdq84ig/image/upload/v1739354986/txbqhrgexiibxwza0ium.webp"
              alt="Joseph Joseph"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white font-bold text-lg">Joseph Joseph</div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;