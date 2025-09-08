'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-links">
            <Link href="#">Brands</Link>
            <Link href="#">Click & Collect</Link>
            <Link href="#">Recipes & Tips</Link>
          </div>
          <div className="top-bar-links">
            <Link href="#"><i className="fas fa-location-dot"></i>Find a Store</Link>
            <Link href="#"><i className="fas fa-circle-question"></i>Help</Link>
            <Link href="tel:1800332934"><i className="fas fa-phone"></i>1800 332 934</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container">
        <header className="site-header">
          <div className="logo-container">
            <Image 
              src="https://kwh-kitchenwarehouse.netlify.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdlwdq84ig%2Fimage%2Fupload%2Fv1666849624%2Ftjrggjf4wynwrz6qw8na.png&w=256&q=75"
              alt="Kitchen Warehouse"
              width={200}
              height={40}
            />
          </div>
          <div className="search-container">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search for products, brands, FAQs and more..." />
          </div>
          <div className="user-actions">
            <Link href="#">
              <i className="fas fa-store"></i>
              <span>Set a store</span>
            </Link>
            <Link href="#">
              <i className="far fa-user"></i>
              <span>Account</span>
            </Link>
            <Link href="#">
              <i className="far fa-heart"></i>
              <span>Wishlist</span>
            </Link>
            <Link href="#">
              <i className="fas fa-shopping-cart"></i>
              <span>Cart</span>
            </Link>
          </div>
        </header>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav container">
        <Link href="#">New In</Link>
        <Link href="#">Appliances</Link>
        <Link href="#">Cookware</Link>
        <Link href="#">Knives</Link>
        <Link href="#">Tableware</Link>
        <Link href="#">Kitchenware</Link>
        <Link href="#">Drinkware</Link>
        <Link href="#">Bakeware</Link>
        <Link href="#">Home & Living</Link>
        <Link href="#" className="sale">Sale</Link>
      </nav>
    </>
  );
};

export default Header;