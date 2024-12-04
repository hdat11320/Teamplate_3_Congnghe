import React from 'react';


const Sidebar = () => {
    return (
      <div className="w-64 p-4">
        {/* Categories */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <ul>
            <li><a href="#" className="text-sm text-gray-700">Hoodies (3)</a></li>
            <li><a href="#" className="text-sm text-gray-700">Cases (2)</a></li>
            <li><a href="#" className="text-sm text-gray-700">T-Shirts (3)</a></li>
            <li><a href="#" className="text-sm text-gray-700">Accessories (4)</a></li>
          </ul>
        </div>
  
        {/* Popular */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Popular</h3>
          <ul>
            <li><a href="#" className="text-sm text-gray-700">Hoodie with Logo</a></li>
            <li><a href="#" className="text-sm text-gray-700">T-Shirt with Logo</a></li>
            <li><a href="#" className="text-sm text-gray-700">Case for iPhone</a></li>
          </ul>
        </div>
  
        {/* Filter by price */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Filter by price</h3>
          <input type="range" className="w-full" />
        </div>

        {/* Tags */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Tags</h3>
          <div className="flex items-center gap-2 w-full">
            <button className="bg-gray-100  px-2 py-1">Hoodies</button>
            <button className="bg-gray-100  px-2 py-1">Cases</button>
            <button className="bg-gray-100  px-2 py-1">Hoodies</button>
            <button className="bg-gray-100  px-2 py-1">Cases</button>
            <button className="bg-gray-100  px-2 py-1">Hoodies</button>
            <button className="bg-gray-100  px-2 py-1">Cases</button>
            <button className="bg-gray-100  px-2 py-1">Hoodies</button>
          </div>
        </div>
        {/* Shopping Cart */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Shopping Cart</h3>
          <ul>
            <li className="flex">
            <img
            src="/images/product/single-product-1.jpg"
            alt="T-Shirt with Logo"
            className="w-20"
           />
           <a href="#" className="text-sm text-gray-700">Hoodie with Logo - $49.99</a></li>
            <li className="flex">
            <img
            src="/images/product/single-product-1.jpg"
            alt="T-Shirt with Logo"
            className="w-20 "
           />
            <a href="#" className="text-sm text-gray-700">T-Shirt with Logo - $19.99</a>
            </li >
          </ul>
          <div className="mt-4">
            <button className="bg-cyan-400 text-white px-4 py-2 ">View Cart</button>
            <button className="border-cyan-500 px-4 py-2 ml-2">Checkout</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  