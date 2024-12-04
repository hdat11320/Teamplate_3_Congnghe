"use client"
import { useState } from 'react';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faSearch} from '@fortawesome/free-solid-svg-icons';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="container mx-auto py-16">
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row">
        <div className="flex flex-col items-center md:w-1/2 relative">
          <div className=" absolute flex justify-center items-center rounded-full bg-white w-10 h-10 right-5 top-5">
          <FontAwesomeIcon icon={faSearch} />
          </div>
          <img
            src="/images/product/single-product-1.jpg"
            alt="T-Shirt with Logo"
            className="w-full max-w-md"
          />
          <div className="flex space-x-4 mt-4">
            <img
              src="/images/product/single-product-1.jpg"
              alt="Thumbnail 1"
              className="w-24 h-24 object-cover cursor-pointer"
            />
            <img
              src="/images/product/single-product-2.jpg"
              alt="Thumbnail 2"
              className="w-24 h-24 object-cover cursor-pointer"
            />
            <img
              src="/images/product/single-product-3.jpg"
              alt="Thumbnail 3"
              className="w-24 h-24 object-cover cursor-pointer"
            />
            <img
              src="/images/product/single-product-4.jpg"
              alt="Thumbnail 4"
              className="w-24 h-24 object-cover cursor-pointer"
            />
          </div>
        </div>
        <div className="md:w-1/2 p-2">
          <h2 className="text-3xl font-bold mb-2">T-Shirt with Logo</h2>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-xl">
            <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
            </span>
            <span className="ml-2 text-gray-600">(1 customer review)</span>
          </div>
          <p className="text-xl font-semibold mb-4 text-cyan-500">$29.99</p>
          <p className="mb-6">
            In today’s online world, a brand’s success lies in combining
            technological planning and social strategies to draw customers in—
            and keep them coming back for more. Without a strong digital
            platform, time and money are wasted, content sits unnoticed, and
            prospective clients disappear.
          </p>
          <p className="mb-6">
            Fortunately, two seasoned digital marketers have a plan to make your brand succeed. In Faster, Smarter, Louder,
            Aaron Agius and Gián Clancey share the secrets that transformed their two-person agency.
          </p>
          <div className="flex items-center space-x-4 mb-6 uppercase">
            <button className="bg-gray-100 text-black px-10 py-3 ">1</button>
            <button className="bg-purple-800 text-white px-7 py-3 hover:bg-teal-600 uppercase font-bold">Add to Cart</button>
          </div>
          <div className="mt-6">
            <hr />
            <p>
              <strong className="font-bold text-black uppercase">SKU:</strong> 124224
            </p>
            <p>
              <strong className="font-bold text-black uppercase" >Categories:</strong> Case & Bags, Clothes
            </p>
            <p>
              <strong className="font-bold text-black uppercase">Tags:</strong> accessories, business
            </p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default ProductDetail;
