// components/WhatWeDo.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const WhatWeDo = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        {/* Left Image Section */}
        <div className="relative">
          {/* Main image */}
          <img
            src="/images/image1-about.png"
            alt="Team Working"
            className="relative w-full h-auto object-cover rounded-md"
          />
        </div>

        {/* Right Content Section */}
        <div className="flex flex-col justify-center">
          <h5 className="text-purple-400 font-bold text-sm">  EXPERIENCE. EXECUTION. EXCELLENCE.</h5>
          <h1 className="text-3xl font-bold text-white">What We Actually Do</h1>

          <div className="flex space-x-6 mt-8">
            {/* Icon Boxes */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-700  flex items-center justify-center">
                <img src="/images/php.jpg" alt="Icon 1" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-700  flex items-center justify-center">
                <img src="/images/sv.jpg" alt="Icon 2" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-700  flex items-center justify-center">
                <img src="/images/js.jpg" alt="Icon 3" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-700  flex items-center justify-center">
                <img src="/images/css.jpg" alt="Icon 4" />
              </div>
            </div>
          </div>

          <h5 className="text-white font-bold mt-4">
            PHP Website Development Services
          </h5>
          <p className="text-white">
            Engitech is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.
          </p>
          <a href="#" className="text-blue-400 mt-6 inline-block"><FontAwesomeIcon icon={faArrowRight} className="text-blue-500" /> LEARN MORE</a>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
