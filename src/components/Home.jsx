
import React from 'react';
import premium from "../assets/premium_photo-1742404280610-7da445cddfcf.avif"
import { FaSearch } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
const Home = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${premium})`}}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-10">
  <div className="container mx-auto px-6 py-4 flex justify-between items-center">
    <div className="flex items-center gap-x-6 ">
      <img src="/src/assets/logo-inverse1-nocopyright.webp" alt="Logo" className="h-10" />

      <nav className="flex items-center space-x-6">
  <a href="#" className="text-white hover:underline">About</a>
  <a href="#" className="text-white hover:underline">Pages</a>
  <a href="#" className="text-white hover:underline">Portfolio</a>
  <a href="#" className="text-white hover:underline ">Blog</a>
  <a href="#" className="text-white hover:underline">Contact</a>
  <span className="text-white text-xl hover:text-blue-400 cursor-pointer">
    <FaSearch />
  </span>
</nav>
      </div>
      <div className='flex items-center gap-x-6'>
      <FaPhoneAlt className="text-white text-xl cursor-pointer hover:text-orange-400" />
      <a href="tel:+18004585697" className="text-white font-semibold">1 800 458 56 97</a>
      <button className="bg-blue-800 text-white px-4 py-2 rounded-3xl hover:bg-blue-400 transition right-0 text-sm ">
          Let’s Talk
        </button>
    </div>
  </div>
</div>


      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 flex items-center justify-center h-full text-center text-white">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            We Build Creative Ideas
          </h1>
          <p className="text-lg md:text-xl mb-4">
            Helping you stand out and elevate your brand in the digital world.
          </p>
          <p className="mb-8 max-w-xl mx-auto">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua quis nostrud exerc.
          </p>
          <a
            href="#services"
            className="px-8 py-3 bg-cyan-400 text-white font-sm rounded-3xl text-md transition duration-300"
          >
            Discover now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
