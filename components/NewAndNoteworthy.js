'use client';

import Image from 'next/image';
import Link from 'next/link';

const NewAndNoteworthy = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-8">
        <div className="mb-4 sm:mb-0">
          <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Trending Now</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-1">New and noteworthy</h2>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-sm font-bold text-gray-800 hover:underline whitespace-nowrap hidden md:block">
            Shop all new arrivals
          </Link>
          <div className="flex items-center space-x-2">
            <button id="scroll-left" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button id="scroll-right" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div id="product-scroller" className="flex overflow-x-auto space-x-4 sm:space-x-6 pb-4 no-scrollbar scroll-smooth">
        {/* Product Card 1 */}
        <div className="flex-shrink-0 w-64 group">
          <div className="relative bg-gray-100 rounded-md p-4 mb-2">
            <Image
              src="https://res.cloudinary.com/dlwdq84ig/image/upload/v1752025449/rfmcvspf1dt984qqynk2.webp"
              alt="Wolstead Teppanyaki Grill"
              width={384}
              height={384}
              className="w-full h-auto rounded-sm"
            />
            <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white hover:bg-gray-200 cursor-pointer">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"></path>
              </svg>
            </div>
            <div className="absolute bottom-3 left-3 bg-white text-gray-800 text-xs font-bold px-2 py-1 rounded-sm border border-gray-200">NEW</div>
          </div>
          <div className="text-sm px-1">
            <h3 className="font-semibold text-gray-800 leading-snug">Wolstead Teppanyaki Grill</h3>
            <p className="text-gray-500 mt-2 text-xs">RRP <span className="line-through">$199.95</span></p>
            <p className="font-bold text-lg text-gray-900">$199.95 <span className="text-red-600 font-semibold text-xs">(29% OFF RRP)</span></p>
            <div className="flex items-center mt-2 text-yellow-500">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span className="text-gray-500 text-xs ml-1 font-medium">5 (1)</span>
            </div>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="flex-shrink-0 w-64 group">
          <div className="relative bg-gray-100 rounded-md p-4 mb-2">
            <Image
              src="https://res.cloudinary.com/dlwdq84ig/image/upload/v1752025449/rfmcvspf1dt984qqynk2.webp"
              alt="Wolstead Bonn Steak Plate Set"
              width={384}
              height={384}
              className="w-full h-auto rounded-sm"
            />
            <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white hover:bg-gray-200 cursor-pointer">
              <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"></path>
              </svg>
            </div>
            <div className="absolute bottom-3 left-3 bg-white text-gray-800 text-xs font-bold px-2 py-1 rounded-sm border border-gray-200">NEW</div>
          </div>
          <div className="text-sm px-1">
            <h3 className="font-semibold text-gray-800 leading-snug">Wolstead Bonn Steak Plate 32x27cm Set of 2</h3>
            <p className="text-gray-500 mt-2 text-xs">RRP <span className="line-through">$49.95</span></p>
            <p className="font-bold text-lg text-gray-900">$49.95 <span className="text-red-600 font-semibold text-xs">(29% OFF RRP)</span></p>
            <div className="flex items-center mt-2 text-yellow-500">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span className="text-gray-500 text-xs ml-1 font-medium">5 (1)</span>
            </div>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="flex-shrink-0 w-64 group">
          <div className="relative bg-gray-100 rounded-md p-4 mb-2">
            <Image
              src="https://res.cloudinary.com/dlwdq84ig/image/upload/v1752025449/rfmcvspf1dt984qqynk2.webp"
              alt="Wolstead Crystal Ice Nugget Maker 1.7kg"
              width={384}
              height={384}
              className="w-full h-auto rounded-sm"
            />
            <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white hover:bg-gray-200 cursor-pointer">
              <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"></path>
              </svg>
            </div>
            <div className="absolute bottom-3 left-3 bg-white text-orange-600 text-xs font-bold px-2 py-1 rounded-sm border border-orange-200">BONUS OFFER</div>
          </div>
          <div className="text-sm px-1">
            <h3 className="font-semibold text-gray-800 leading-snug">Wolstead Crystal Ice Nugget Maker 1.7kg</h3>
            <p className="text-gray-500 mt-2 text-xs">RRP <span className="line-through">$549.95</span></p>
            <p className="font-bold text-lg text-gray-900">$399.95 <span className="text-red-600 font-semibold text-xs">(29% OFF RRP)</span></p>
            <div className="flex items-center mt-2 text-yellow-500">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span className="text-gray-500 text-xs ml-1 font-medium">5 (1)</span>
            </div>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="flex-shrink-0 w-64 group">
          <div className="relative bg-gray-100 rounded-md p-4 mb-2">
            <Image
              src="https://res.cloudinary.com/dlwdq84ig/image/upload/v1752025449/rfmcvspf1dt984qqynk2.webp"
              alt="Le Creuset Signature Cast Iron Round Casserole"
              width={384}
              height={384}
              className="w-full h-auto rounded-sm"
            />
            <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white hover:bg-gray-200 cursor-pointer">
              <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"></path>
              </svg>
            </div>
            <div className="absolute bottom-3 left-3 bg-white text-orange-600 text-xs font-bold px-2 py-1 rounded-sm border border-orange-200">BONUS OFFER</div>
          </div>
          <div className="text-sm px-1">
            <h3 className="font-semibold text-gray-800 leading-snug">Le Creuset Signature Cast Iron Round Casserole 24cm - 4.2L</h3>
            <p className="font-bold text-lg text-gray-900">$640</p>
            <div className="flex space-x-1 mt-2">
              <span className="w-4 h-4 rounded-full bg-[#18314F] border-2 border-gray-400 cursor-pointer"></span>
              <span className="w-4 h-4 rounded-full bg-gray-600 border-2 border-white ring-1 ring-gray-400 cursor-pointer"></span>
              <span className="w-4 h-4 rounded-full bg-pink-500 border-2 border-white ring-1 ring-gray-400 cursor-pointer"></span>
              <span className="w-4 h-4 rounded-full bg-red-600 border-2 border-white ring-1 ring-gray-400 cursor-pointer"></span>
              <span className="w-4 h-4 rounded-full bg-gray-300 border-2 border-white ring-1 ring-gray-400 cursor-pointer"></span>
              <span className="text-gray-500 text-xs ml-1 font-medium">+8</span>
            </div>
          </div>
        </div>

        {/* Product Card 5 */}
        <div className="flex-shrink-0 w-64 group">
          <div className="relative bg-gray-100 rounded-md p-4 mb-2">
            <Image
              src="https://res.cloudinary.com/dlwdq84ig/image/upload/v1752025449/rfmcvspf1dt984qqynk2.webp"
              alt="Wolstead StoneTek Ultra 10pc Cookware Set"
              width={384}
              height={384}
              className="w-full h-auto rounded-sm"
            />
            <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white hover:bg-gray-200 cursor-pointer">
              <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"></path>
              </svg>
            </div>
            <div className="absolute bottom-3 left-3 bg-white text-gray-800 text-xs font-bold px-2 py-1 rounded-sm border border-gray-200">NEW</div>
          </div>
          <div className="text-sm px-1">
            <h3 className="font-semibold text-gray-800 leading-snug">Wolstead StoneTek Ultra 10pc Cookware Set</h3>
            <p className="text-gray-500 mt-2 text-xs">RRP <span className="line-through">$799.95</span></p>
            <p className="font-bold text-lg text-gray-900">$499.95</p>
            <div className="flex items-center mt-2 text-yellow-500">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span className="text-gray-500 text-xs ml-1 font-medium">5 (1)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAndNoteworthy;