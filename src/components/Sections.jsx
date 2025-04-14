import React from 'react';
import { FaPaintBrush, FaInfinity } from 'react-icons/fa'; 


const Sections = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-20">
      {/* Flex Container for Images and Text */}
      <div className="flex flex-col md:flex-row items-start gap-12 mb-20 mr-11" >
        {/* Left Side: Overlapping Images */}
        <div className="relative w-full md:w-1/2">
          <div className="relative bottom-13 right-10 z-20 w-2/3">
            <img
              src="/src/assets/h3l.webp"
              alt="Left Decorative"
              className="w-full rounded-xl shadow-md"
            />
          </div>
          <div className="absolute top-15 left-10 z-20 w-2/3">
            <img
              src="/src/assets/h3r.webp"
              alt="Right Decorative"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2">
          {/* Headings */}
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-sm">
              Creative Agency
            </h1>
            <h2 className="text-4xl md:text-5xl font-blod text-black">
              We help your<br />business grow
            </h2>
          </div>

          {/* Description */}
          <div className="text-gray-700">
            <p className="mb-4">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.
            </p>
            <p className="mb-4">
            <FaPaintBrush className="text-primary mt-1 text-xl" />
              <strong>Creative design:</strong> <br />Natus error sit voluptatem accusantium doloremque.
            </p>
            <p>
            <FaInfinity className="text-primary mt-1 text-xl" />
              <strong>Endless possibilities:</strong> <br /> Sit voluptatem accusantium doloremque laudantium.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-gray-800 font-semibold mb-16">
        <div>
          <p className="text-4xl font-bold">98</p>
          <p>Projects</p>
        </div>
        <div>
          <p className="text-4xl font-bold">65</p>
          <p>People</p>
        </div>
        <div>
          <p className="text-4xl font-bold">10</p>
          <p>Years</p>
        </div>
        <div>
          <p className="text-4xl font-bold">15</p>
          <p>Awards</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="p-8 rounded-xl max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* Left Section - Headings */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold uppercase mb-2">Creative Solutions</h3>
            <h4 className="text-gray-600">We make unique & memorable brands.</h4>
          </div>

          {/* Right Section - Paragraph */}
          <div className="md:w-2/3 text-gray-600">
            <p className="mb-6">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque lorem in voluptate velit iusto odio dignissimos duci esse.
              <br /><br />
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
            <p className="text-blue-600 font-semibold cursor-pointer hover:underline">
              Read More
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections;
