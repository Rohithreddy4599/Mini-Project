'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      {/* Trust badges */}
      <div className="footer-top">
        <ul>
          <li><i className="fa-solid fa-heart"></i> Trusted by 2.5 million customers</li>
          <li><i className="fa-solid fa-rotate-left"></i> 30 day money back guarantee</li>
          <li><i className="fa-solid fa-tag"></i> Price match promise</li>
          <li><i className="fa-solid fa-truck"></i> Free shipping on orders over $100*</li>
        </ul>
      </div>

      {/* Links + Join Section */}
      <div className="footer-links">
        {/* ... (rest of your footer code goes here) ... */}
        <div className="join-content">
          <h4><i className="fa-solid fa-heart"></i> JOIN OUR FAMILY TABLE</h4>
          <p>Don't miss out! Get special savings, recipes and more delivered to your inbox.</p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your email address" />
            <button>Sign up</button>
          </div>
          <div className="social-icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-tiktok"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-pinterest-p"></i>
          </div>
          <small>Your customer reference #: 1755274144365</small>
        </div>
      </div>

      {/* Payment methods */}
      <div className="payment-methods">
        <ul>
          <li><Image src="https://kwh-kitchenwarehouse.netlify.app/images/payment/visa.svg" alt="Visa" width={30} height={20} /></li>
          <li><Image src="https://kwh-kitchenwarehouse.netlify.app/images/payment/mastercard.svg" alt="Mastercard" width={30} height={20} /></li>
          <li><Image src="https://kwh-kitchenwarehouse.netlify.app/images/payment/amex.svg" alt="Amex" width={30} height={20} /></li>
          <li><Image src="https://kwh-kitchenwarehouse.netlify.app/images/payment/paypal.svg" alt="PayPal" width={30} height={20} /></li>
          <li><Image src="https://kwh-kitchenwarehouse.netlify.app/images/payment/applepay.svg" alt="Apple Pay" width={30} height={20} /></li>
          <li><Image src="https://kwh-kitchenwarehouse.netlify.app/images/payment/gpay.svg" alt="Google Pay" width={30} height={20} /></li>
          <li><Image src="https://kwh-kitchenwarehouse.netlify.app/images/payment/afterpay.svg" alt="Afterpay" width={30} height={20} /></li>
        </ul>
      </div>

      {/* Footer bottom */}
      <div className="footer-bottom">
        <ul className="legal-links">
          <li><Link href="#">Security and privacy</Link></li>
          <li><Link href="#">Terms and conditions</Link></li>
        </ul>
        <p className="copyright">© 2025 Kitchen Warehouse all rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;