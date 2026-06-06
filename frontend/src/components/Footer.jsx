import React from 'react';
import {assets} from '../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <footer className="w-full text-gray-700 mt-10">
      <div className=" mx-auto w-full px-4 py-10 flex flex-col md:flex-row justify-between gap-8">

        {/* Left Side - Logo + Text */}
        <div className="flex-1">
          <img src={assets.logo} alt="Shop Logo" className="w-32 h-auto" />
          <p className="mt-2 text-sm">
            We provide the best quality products at affordable prices. Shop with confidence and style.
          </p>
        </div>

        {/* Middle - Company */}
        <div className="flex-1">
          <h2 className="font-semibold mb-3">Company</h2>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Collection</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Right Side - Contact */}
        <div className="flex-1">
          <h2 className="font-semibold mb-3">Get in Touch</h2>
          <p className="text-sm">+92 300 1234567</p>
          <p className="text-sm">support@shop.com</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs py-4 border-t">
        © {new Date().getFullYear()} Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;