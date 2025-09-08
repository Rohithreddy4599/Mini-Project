'use client';

import Image from 'next/image';
import Link from 'next/link';

const WinterWonders = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <section>
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-800">
              Explore all winter edits
            </Link>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mt-1">Winter wonders</h2>
          </div>
          <div className="flex items-center space-x-2">
            <button id="winter-scroll-left" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button id="winter-scroll-right" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Wonders Scroller */}
        <div id="wonders-container" className="flex overflow-x-auto space-x-8 pb-4 no-scrollbar scroll-smooth">
          {/* Wonder Card 1 */}
          <div className="flex-shrink-0 w-80 group">
            <Image
              src="https://res.cloudinary.com/dlwdq84ig/image/upload/v1750671747/tnoz1pz52a1rezoonp1l.webp"
              alt="Chasseur enamelled cast iron cookware"
              width={320}
              height={192}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-xs font-bold text-gray-500 tracking-wider">French flavour and flair</p>
            <h3 className="text-xl font-bold text-gray-900 mt-1">Oh là là!</h3>
            <p className="text-gray-600 text-sm mt-2">Escape to the heart of France with rich, wintry classics and Chasseur enamelled cast iron.</p>
            <Link href="#" className="inline-flex items-center text-sm font-bold text-gray-900 mt-4">
              Explore now
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>

          {/* Wonder Card 2 */}
          <div className="flex-shrink-0 w-80 group">
            <Image
              src="https://res.cloudinary.com/dlwdq84ig/image/upload/v1750724862/homb40m78xvyqkduzsdb.webp"
              alt="Hot water dispenser and tea accessories"
              width={320}
              height={192}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-xs font-bold text-gray-500 tracking-wider">Essentials for the perfect cuppa</p>
            <h3 className="text-xl font-bold text-gray-900 mt-1">Time for tea</h3>
            <p className="text-gray-600 text-sm mt-2">Keep the cuppas coming all winter long with the Wolstead Instant Hot Water Dispenser and more accessories for beautiful brews.</p>
            <Link href="#" className="inline-flex items-center text-sm font-bold text-gray-900 mt-4">
              Explore now
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>

          {/* Wonder Card 3 */}
          <div className="flex-shrink-0 w-80 group">
            <Image
              src="https://res.cloudinary.com/dlwdq84ig/image/upload/v1750830217/whffvpqu9qxigmwo3mjs.webp"
              alt="Bowl of ragu with bread"
              width={320}
              height={192}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-xs font-bold text-gray-500 tracking-wider">Authentic Italian made simple</p>
            <h3 className="text-xl font-bold text-gray-900 mt-1">Go Italiano!</h3>
            <p className="text-gray-600 text-sm mt-2">MasterChef alumni Elise Pulbrook invites us into her Italian kitchen where slow cooked ragu melts in your mouth.</p>
            <Link href="#" className="inline-flex items-center text-sm font-bold text-gray-900 mt-4">
              Explore now
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>
          
          {/* Wonder Card 4 */}
          <div className="flex-shrink-0 w-80 group">
            <Image
              src="https://res.cloudinary.com/dlwdq84ig/image/upload/v1750317290/hucnnu3ugwzp3ehoc1bv.webp"
              alt="Bowl of soup"
              width={320}
              height={192}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-xs font-bold text-gray-500 tracking-wider">Stir up</p>
            <h3 className="text-xl font-bold text-gray-900 mt-1">Super soups</h3>
            <p className="text-gray-600 text-sm mt-2">All the inspiration you need to create delicious winter soups from scratch.</p>
            <Link href="#" className="inline-flex items-center text-sm font-bold text-gray-900 mt-4">
              Explore now
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Scroller Progress Bar */}
        <div className="mt-4 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
          <div id="wonders-progress-bar" className="h-1 bg-gray-800 rounded-full" style={{ width: '0%' }}></div>
        </div>
      </section>
    </div>
  );
};

export default WinterWonders;