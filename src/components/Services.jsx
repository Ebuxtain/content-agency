import React from 'react';
import TeamSlider from './teamslider';

const Services = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-20 space-y-16">
      
      {/* Team Members Section */}
      

      {/* Brand Logos */}
      <div className="overflow-hidden w-full py-8 bg-white">
  <div className="flex animate-scroll gap-8 w-max">
    <img src="/src/assets/image-14.webp" alt="Brand 1" className="h-72 w-72 object-contain" />
    <img src="/src/assets/image-15.webp" alt="Brand 2" className="h-72 w-72 object-contain" />
    <img src="/src/assets/image-16.png" alt="Brand 3" className="h-72 w-72 object-contain" />
    <img src="/src/assets/image-17.png" alt="Brand 4" className="h-72 w-72 object-contain" />
    {/* Duplicate to create seamless scrolling */}
    <img src="/src/assets/image-14.webp" alt="Brand 1" className="h-72 w-72 object-contain" />
    <img src="/src/assets/image-15.webp" alt="Brand 2" className="h-72 w-72 object-contain" />
    <img src="/src/assets/image-16.png" alt="Brand 3" className="h-72 w-72 object-contain" />
    <img src="/src/assets/image-17.png" alt="Brand 4" className="h-72 w-72 object-contain" />
  </div>
</div>


      {/* Subscription Section */}
      <div className="text-center p-8 rounded-xl max-w-2xl mx-auto">
     <h2 className="text-2xl font-semibold mb-6">Subscribe for exclusive updates!</h2>
  
  <form className="flex flex-col md:flex-row items-center justify-center gap-4">
    {/* Email Input */}
    <input
      type="email"
      placeholder="Enter your email"
      className="border border-gray-300 rounded-3xl px-4 py-2 w-full md:w-1/2 bg-white"
    />

    {/* Checkbox + Label */}
    <div className="flex items-center text-left">
      <input type="checkbox" id="agree" className="mr-2" />
      <div>
      <label htmlFor="agree" className="text-sm text-gray-700">
        I agree to the Privacy Policy.
      </label>
      </div>
    
    </div>

    {/* Button */}
    <button
      type="submit"
      className="bg-blue-600 text-white px-6 py-2 rounded-3xl hover:bg-gray-800 transition"
    >
      Subscribe
    </button>
  </form>

</div>
      
      <TeamSlider />
    </div>
  );
};

export default Services;
