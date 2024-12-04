'use client';

import React from 'react';

const Banner = () => {
  return (
    <div id="content" className="site-content">
            <div className="page-header flex items-center justify-center py-8 bg-gray-100">
                <div className="container mx-auto px-2">
                    <div className="inner flex items-center justify-between">
                        <h1 className="page-title text-3xl font-bold">Single Product</h1>
                        <ul id="breadcrumbs" className="breadcrumbs flex space-x-2">
                            <li><a href="index.html" className="text-blue-500 hover:underline">Home</a></li>
                            <li className="text-gray-500">Shop</li>
                            <li className="text-gray-500">Single Product</li>
                        </ul>    
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Banner;
