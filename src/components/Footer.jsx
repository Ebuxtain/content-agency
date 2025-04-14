import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#121E28] text-white py-16 ">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-10 ">

        {/* Office Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">Office</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>Germany — 785 15h Street, Office 478</li>
            <li>Berlin, De 81566</li>
            <li className='hover:underline cursor-pointer'>info@email.com</li>
            <li className="text-white font-bold">+1 840 841 25 69</li>
          </ul>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <ul className="space-y-4 text-sm ">
            <li><a href="#home" className="hover:underline cursor-pointer">Home</a></li>
            <li><a href="#about" className="hover:underline cursor-pointer">About Us</a></li>
            <li><a href="#services" className="hover:underline cursor-pointer">Services</a></li>
            <li><a href="#team" className="hover:underline cursor-pointer">Our Team</a></li>
            <li><a href="#contact" className="hover:underline cursor-pointer">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Social</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:underline cursor-pointer">Facebook</a></li>
            <li><a href="#" className="hover:underline cursor-pointer">Twitter</a></li>
            <li><a href="#" className="hover:underline cursor-pointer">Dribbble</a></li>
            <li><a href="#" className="hover:underline cursor-pointer">Instagram</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-3/4 mb-3 px-4 py-2 rounded-3xl bg-gray-800 text-sm border border-gray-600"
          />

          <button className="bg-blue-600 text-white px-6 py-2 rounded-3xl hover:bg-gray-800 transition">
            <FaArrowRight />
          </button>
          <div className="flex items-start mb-3">
            <input type="checkbox" id="policy" className="mr-2 mt-1" />
            <label htmlFor="policy" className="text-sm text-gray-400">I agree to the Privacy Policy.</label>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-lef text-sm text-gray-500 mt-12 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} AxiomThemes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
