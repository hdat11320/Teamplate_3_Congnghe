'use client'
import React from 'react';

const WhatWeOffer = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left content */}
        <div className="flex flex-col justify-center">
          <h4 className="text-purple-600 font-bold"> // WHAT WE OFFER</h4>
          <h1 className="text-3xl font-bold mt-4">Your Partner for Software Innovation</h1>
          <p className="text-gray-600 mt-6">
            Engitech is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.
          </p>
          <p className="mt-4 italic font-bold text-black">
            We can help to maintain and modernize your IT infrastructure and solve various infrastructure-specific issues a business may face.
          </p>
          <div className="flex items-center mt-8">
  <div className="w-16 h-16 rounded-full border-4 border-purple-300 flex items-center justify-center relative">
    <span
      className="text-white text-2xl relative z-10 animate-pulseEffect"
    >
      &#9654;
    </span>
    {/* Vòng tròn hiệu ứng loang */}
    <span className="absolute w-full h-full rounded-full  bg-purple-800 animate-pulseEffect"></span>
  </div>
  <span className="ml-4 font-bold">VIDEO SHOWCASE</span>

  <style jsx>{`
    @keyframes pulseEffect {
      0% {
        transform: scale(1);
        opacity: 0.8;
      }
      100% {
        transform: scale(2);
        opacity: 0;
      }
    }
    .animate-pulseEffect {
      animation: pulseEffect 1s ease-out infinite;
    }
  `}</style>
</div>

        </div>

        {/* Right content - grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative group">
            <img
              src="/images/image-box1.jpg"
              alt="Our Mission"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center group-hover:bg-opacity-70 transition-all">
              <h3 className="text-white text-xl font-bold">Our Mission</h3>
            </div>
          </div>

          <div className="relative group">
            <img
              src="/images/image-box2.jpg"
              alt="Our Vision"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center group-hover:bg-opacity-70 transition-all">
              <h3 className="text-white text-xl font-bold">Our Vision</h3>
            </div>
          </div>

          <div className="relative group">
            <img
              src="/images/image-box3.jpg"
              alt="Our Philosophy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center group-hover:bg-opacity-70 transition-all">
              <h3 className="text-white text-xl font-bold">Our Philosophy</h3>
            </div>
          </div>

          <div className="relative group">
            <img
              src="/images/image-box4.jpg"
              alt="Our Strategy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center group-hover:bg-opacity-70 transition-all">
              <h3 className="text-white text-xl font-bold">Our Strategy</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
