'use client'

import React from 'react';

const Checkout = () => {
  return (
    <div className="container mx-auto my-10 p-6  rounded-lg shadow-md">
      <div className="text-right text-sm mb-4">
        <a href="#" className="text-blue-600 hover:underline">
          Have a coupon? Click here to enter your code
        </a>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-extrabold mb-4">Billing details</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <span>First name<span className="text-red-500">*</span></span>
              <input type="text" className="w-full p-2 border rounded-md" />
              <span>Last name<span className="text-red-500">*</span></span>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
            <span>Company name (optional)</span>
            <input type="text" placeholder="" className="w-full p-2 border rounded-md" />
            <span>Country / Region<span className="text-red-500">*</span></span>
            <select className="w-full p-2 border rounded-md">
              <option></option>
              <option>Vietnam</option>
            </select>
            <input type="text" placeholder="Street address *" className="w-full p-2 border rounded-md" />
            <input type="text" placeholder="Postcode / ZIP (optional)" className="w-full p-2 border rounded-md" />
            <input type="text" placeholder="Town / City *" className="w-full p-2 border rounded-md" />
            <input type="text" placeholder="Phone *" className="w-full p-2 border rounded-md" />
            <input type="email" placeholder="Email address *" className="w-full p-2 border rounded-md" />
          </form>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Additional information</h2>
          <span>Order notes(optional)</span>
          <textarea
            placeholder="Notes about your order, e.g. special notes for delivery."
            className="w-full p-2 border rounded-md h-32"
          ></textarea>
        </div>
      </div>
      <div className="my-8">
        <h2 className="text-3xl font-extrabold mb-4">Your order</h2>
        <table className="w-full bg-white rounded-lg shadow-md text-left">
          <thead className="">
            <tr >
              <th className="p-4 text-2xl font-bold text-black">Product</th>
              <th className="p-4 text-2xl text-left font-bold text-black">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4">Hoodie with Logo <span className="text-black font-bold"> x 1</span></td>
              <td className="p-4 text-left font-extrabold text-sky-400 ">$39.99</td>
            </tr>
            <tr>
              <td className="p-4">Dark T-Shirt with Logo <span className="text-black font-bold"> x 1</span></td>
              <td className="p-4 text-left font-extrabold text-sky-400">$59.99</td>
            </tr>
            <tr>
              <td className="p-4 text-xl font-bold text-black">Subtotal</td>
              <td className="p-4 text-left font-extrabold text-sky-400">$99.98</td>
            </tr>
            <tr>
              <td className="p-4 text-xl font-bold text-black">Total</td>
              <td className="p-4 text-left font-extrabold text-sky-400">$99.98</td>
            </tr>
          </tbody>
        </table>
      </div>
    <div className="bg-gray-200 pt-5">
      <div className="bg-sky-50 mx-5">
      <div className="h-1 bg-purple-800  "></div>
        <p className="px-8 py-5">
          Sorry, it seems that there are no available payment methods for your state. Please contact us if you
          require assistance or wish to make alternate arrangements.
        </p>
      </div>
      <hr></hr>
      <div className="text-right">
        <button className="bg-purple-800 text-white px-6 py-2 hover:bg-purple-700 transition duration-300 font-bold">
          PLACE ORDER
        </button>
      </div>
    </div>
  </div>
  );
};

export default Checkout;
