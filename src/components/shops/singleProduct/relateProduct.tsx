'use client'

import React from 'react';
const RelatedProducts = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h3 className="text-3xl font-extrabold text-center mb-8">Related Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Product 1 */}
        <div className="relative bg-white shadow-md rounded-lg overflow-hidden group transition-transform duration-300 text-center">
          <img
            src="/images/product/product-3.jpg"
            alt="Energy Drink"
            width={500}
            height={500}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-full text-center">
            <button className="bg-purple-600 text-white px-6 py-2 mt-2 w-full opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-300">
              Add to Cart
            </button>
          </div>
          <p className="font-extrabold text-black my-0">Your Energy Drink</p>
          <p className="text-lg font-bold text-sky-400 my-0">$39.99</p>
          
        </div>

        {/* Product 2 */}
        <div className="relative bg-white shadow-md rounded-lg overflow-hidden group transition-transform duration-300 text-center">
          <img
            src="/images/product/product-4.jpg"
            alt="Hoodie with Logo"
            width={500}
            height={500}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-full text-center">
            
            <button className="bg-purple-600 text-white px-6 py-2 mt-2 w-full opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-300">
              Add to Cart
            </button>
          </div>
          <p  className="font-extrabold text-black my-0">Hoodie with Logo</p>
          <p className="text-lg font-bold text-sky-400 my-0">$39.99</p>
           
        </div>

        {/* Product 3 */}
        <div className="relative bg-white shadow-md rounded-lg overflow-hidden group transition-transform duration-300 text-center">
          <img
            src="/images/product/product-5.jpg"
            alt="Case for iPhone 11 Pro"
            width={500}
            height={500}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-full text-center">
           
            <button className="bg-purple-600 text-white px-6 py-2 mt-2 w-full opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-300">
              Add to Cart
            </button>
          </div>
          <p  className="font-extrabold text-black my-0">Case for iPhone 11 Pro</p>
          <p className="text-lg font-bold text-sky-400 my-0">$29.99</p>
          
        </div>

        {/* Product 4 */}
        <div className="relative bg-white shadow-md rounded-lg overflow-hidden group transition-transform duration-300 text-center">
          <img
            src="/images/product/product-6.jpg"
            alt="T-Shirt with Logo"
            width={500}
            height={500}
            className="w-full h-48 object-cover"
          />
          {/* Sale Badge */}
          <div className="absolute top-0 left-0 bg-red-500 text-white px-3 py-1 text-xs font-semibold">
            Sale
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-full text-center">
            
            <button className="bg-purple-600 text-white px-6 py-2 mt-2 w-full opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-300">
              Add to Cart
            </button>
          </div>
          <p  className="font-extrabold text-black my-0">T-Shirt with Logo</p>
          <p className="text-lg font-bold text-sky-400 my-0">$59.99</p>
          
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
