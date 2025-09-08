'use client';
import Image from 'next/image';
import Link from 'next/link';

const ShopByCategory = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Browse your way</p>
        <h2 className="text-3xl font-bold text-gray-900 mt-1">Shop by category</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <Link href="#" className="group block aspect-square rounded-md overflow-hidden relative">
          <Image
            src="https://media.kitchenwarehouse.com.au/image/upload/t_1000x1000%20Category%20Tile/v1748319312/Kitchen%20Warehouse%20Images%20/Wolstead_Rapido_1000x1000px.jpg"
            alt="Appliances"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white text-base font-semibold">Appliances</div>
        </Link>

        <Link href="#" className="group block aspect-square rounded-md overflow-hidden relative">
          <Image
            src="https://media.kitchenwarehouse.com.au/image/upload/v1741665304/Kitchen%20Warehouse%20Images%20/All_Cookware_Autumn.webp"
            alt="Cookware"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white text-base font-semibold">Cookware</div>
        </Link>

        <Link href="#" className="group block aspect-square rounded-md overflow-hidden relative">
          <Image
            src="https://media.kitchenwarehouse.com.au/image/upload/t_1000x1000%20Category%20Tile/v1744275202/Kitchen%20Warehouse%20Images%20/Wolstead-Calibre-6pc-Knife-Block-Set-LS_01.jpg"
            alt="Knives"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white text-base font-semibold">Knives</div>
        </Link>

        <Link href="#" className="group block aspect-square rounded-md overflow-hidden relative">
          <Image
            src="https://media.kitchenwarehouse.com.au/image/upload/t_1000x1000%20Category%20Tile/v1748319304/Kitchen%20Warehouse%20Images%20/Salisbury_Co_Luca_1000x1000px.jpg"
            alt="Tableware"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white text-base font-semibold">Tableware</div>
        </Link>

        <Link href="#" className="group block aspect-square rounded-md overflow-hidden relative">
          <Image
            src="https://media.kitchenwarehouse.com.au/image/upload/v1740718006/Kitchen%20Warehouse%20Images%20/New_In_Drinkware.webp"
            alt="Drinkware"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white text-base font-semibold">Drinkware</div>
        </Link>

        <Link href="#" className="group block aspect-square rounded-md overflow-hidden relative">
          <Image
            src="https://media.kitchenwarehouse.com.au/image/upload/v1740707516/Kitchen%20Warehouse%20Images%20/Mix_and_Measure.webp"
            alt="Kitchenware"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white text-base font-semibold">Kitchenware</div>
        </Link>

        <Link href="#" className="group block aspect-square rounded-md overflow-hidden relative">
          <Image
            src="https://media.kitchenwarehouse.com.au/image/upload/v1741679131/Kitchen%20Warehouse%20Images%20/New_In_Bakeware_Autumn.webp"
            alt="Bakeware"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white text-base font-semibold">Bakeware</div>
        </Link>

        <Link href="#" className="group block aspect-square rounded-md overflow-hidden relative">
          <Image
            src="https://media.kitchenwarehouse.com.au/image/upload/v1740722649/Kitchen%20Warehouse%20Images%20/Health_and_Wellness.webp"
            alt="Home and living"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white text-base font-semibold">Home and living</div>
        </Link>

        <Link href="#" className="group aspect-square rounded-md overflow-hidden relative bg-gray-100 flex flex-col items-center justify-center text-center p-4">
          <h3 className="text-xl font-bold text-gray-900 leading-none">HALF PRICE</h3>
          <p className="text-sm text-gray-700 mt-1 leading-none">OR BETTER</p>
        </Link>

        <Link href="#" className="group aspect-square rounded-md overflow-hidden relative bg-red-600 flex items-center justify-center p-4">
          <h3 className="text-3xl font-bold text-white">SALE</h3>
        </Link>
      </div>
    </div>
  );
};

export default ShopByCategory;