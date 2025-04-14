import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-left">
        {/* Title and Content Section */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            {/* Title */}
            <h2 className="text-sm font-light text-primary mb-4">
              Who We Are
            </h2>
            <h3 className="text-lg font-extrabold text-primary mb-4">
            We provide the best digital solutions
            </h3>

            {/* Content */}
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
            Nemo enim ipsam voluptatem Dicta sunt explicabo.<br/>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
              
            </p>

            {/* Discover Button */}
            <button className="bg-cyan-400 text-white px-6 py-3 rounded-3xl hover:bg-gray-800 transition">
              Discover now
            </button>
          </div>

          {/* Images Section */}
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-end relative">
            {/* Left Image - Overlapping Layer */}
            <div className="absolute left-0 top-6 w-2/3 z-10">
              <img
                src="/src/assets/h32l.webp"
                alt="Left Visual"
                className="w-full rounded-xl shadow-lg object-cover"
              />
            </div>

            {/* Right Image - Base Layer */}
            <div className="relative right-0 bottom-6 w-2/3">
              <img
                src="/src/assets/h32r.webp"
                alt="Right Visual"
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
