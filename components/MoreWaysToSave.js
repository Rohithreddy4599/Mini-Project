'use client';

import Image from 'next/image';
import Link from 'next/link';

const MoreWaysToSave = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-8">
        <div className="mb-4 sm:mb-0">
          <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">More ways to save</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-1">Check out these deals</h2>
        </div>
        <div className="flex items-center space-x-4">
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

      <div className="flex overflow-x-auto space-x-6 pb-4 no-scrollbar scroll-smooth">
        {/* Card 1 */}
        <div className="flex-shrink-0 w-[350px]">
          <div className="relative rounded-md overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dlwdq84ig/image/upload/v1753428065/rtt7flkpgfaqn9lvtjfa.webp"
              alt="Bundle and save"
              width={640}
              height={360}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Exclusive deals</h3>
            <h4 className="text-xl font-bold text-gray-900 mt-1">Bundle and save</h4>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Take advantage of our exclusive bundle and save offers! When you purchase selected items, you'll unlock special discounts that help you get more for less.
            </p>
            <Link href="#" className="mt-4 inline-block text-sm font-bold text-gray-800 hover:underline">
              Shop now &rarr;
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex-shrink-0 w-[350px]">
          <div className="relative rounded-md overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dlwdq84ig/image/upload/v1752025449/rfmcvspf1dt984qqynk2.webp"
              alt="Wolstead chopping boards"
              width={640}
              height={360}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Pair and save</h3>
            <h4 className="text-xl font-bold text-gray-900 mt-1">Wolstead chopping boards</h4>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Protect and condition with the Wolstead Cutting Board Food Safe Mineral Oil 250ml, now 30% off RRP when you purchase it together with selected Wolstead boards.
            </p>
            <Link href="#" className="mt-4 inline-block text-sm font-bold text-gray-800 hover:underline">
              Shop now &rarr;
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex-shrink-0 w-[350px]">
          <div className="relative rounded-md overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dlwdq84ig/image/upload/v1752114578/v4g7p4k9egj1rs82i0ge.webp"
              alt="Wolstead Cultivo Yoghurt Maker"
              width={640}
              height={360}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Bonus offer</h3>
            <h4 className="text-xl font-bold text-gray-900 mt-1">Wolstead Cultivo Yoghurt Maker</h4>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Receive a bonus Wolstead Cultivo Yoghurt Pot with Silicone Lid 170ml, set of 6 with every purchase of the Wolstead Cultivo Yoghurt Maker 1.5L.
            </p>
            <Link href="#" className="mt-4 inline-block text-sm font-bold text-gray-800 hover:underline">
              Shop now &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreWaysToSave;