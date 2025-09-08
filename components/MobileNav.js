'use client';

import { useState } from 'react';

/**
 * A client-side component for handling mobile navigation.
 * It manages the state of the mobile menu and toggles it on a button click.
 */
export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log('Mobile menu button clicked!');
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-100">
      <h1 className="text-xl font-bold">Store Name</h1>
      <button
        id="mobile-menu-btn"
        onClick={toggleMenu}
        className="block md:hidden p-2 rounded-md bg-white border border-gray-300"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <nav
        id="main-nav"
        className={`md:block absolute md:static top-16 left-0 right-0 p-4 transition-transform transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:translate-y-0`}
      >
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <li><a href="#" className="p-2 block text-gray-700 hover:text-gray-900 rounded-md">Home</a></li>
          <li><a href="#" className="p-2 block text-gray-700 hover:text-gray-900 rounded-md">Shop</a></li>
          <li><a href="#" className="p-2 block text-gray-700 hover:text-gray-900 rounded-md">About</a></li>
        </ul>
      </nav>
    </div>
  );
}