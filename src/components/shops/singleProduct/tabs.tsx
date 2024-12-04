'use client'
import { useState } from "react";

const ProductDetailTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Tabs Header */}
      <div className="grid grid-cols-1 md:grid-cols-3 mb-6 ">
        <button
          onClick={() => setActiveTab("description")}
          className={`${
            activeTab === "description"
              ? "bg-sky-400 text-white"
              : "bg-gray-100 text-black"
          } uppercase font-bold py-2 px-6 my-1 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50 hover:bg-sky-400 hover:text-white`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("information")}
          className={`${
            activeTab === "information"
              ? "bg-sky-400 text-white"
              : "bg-gray-100 text-black"
          } uppercase font-bold py-2 px-6 my-1 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50 hover:bg-sky-400 hover:text-white`}
        >
          Information
        </button>
        <button
          onClick={() => setActiveTab("review")}
          className={`${
            activeTab === "review"
              ? "bg-sky-400 text-white"
              : "bg-gray-100 text-black"
          } uppercase font-bold py-2 px-6 my-1 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50 hover:bg-sky-400 hover:text-white`}
        >
          Review <span className="text-gray-500">(01)</span>
        </button>
      </div>

      {/* Tabs Content */}
      <div>
        {/* Description Tab Content */}
        {activeTab === "description" && (
          <div className="text-gray-700">
            <p>
              While integrating the security with the DevOps approach has always
              been of high demand, this requires a completely different range of
              processes and tools. DevOps is already known to boast of an agile
              development methodology. Now when the inputs of the security experts
              I’ll be brought in a collaborative environment, the project will have
              an array of effective security safeguards.
            </p>
            <p className="mt-4">
              In spite of disturbing the agile development process of the DevOps
              approach, the additional security inputs only enhance the safeguards and
              reliability of the project. So, in a way, DevSecOps will only extend the
              benefits of a DevOps approach further with security inputs.
            </p>
          </div>
        )}

        {/* Information Tab Content */}
        {activeTab === "information" && (
          <div className="text-gray-700">
            <table className="table-auto w-full md:w-1/2">
              <tbody>
                <tr>
                  <td className="font-semibold py-2 w-1/6">Fabric</td>
                  <td className="py-2 w-5/6">Jacquad</td>
                </tr>
                <tr>
                  <td className="font-semibold py-2 w-1/6">Color</td>
                  <td className="py-2 w-5/6">Black, Red, Blue</td>
                </tr>
                <tr>
                  <td className="font-semibold py-2 w-1/6">Weight</td>
                  <td className="py-2 w-5/6">20oz / 0.75kg</td>
                </tr>
                <tr>
                  <td className="font-semibold py-2 w-1/6">Height</td>
                  <td className="py-2 w-5/6">13.75in / 35cm</td>
                </tr>
                <tr>
                  <td className="font-semibold py-2 w-1/6">Length</td>
                  <td className="py-2 w-5/6">9in / 23cm</td>
                </tr>
                <tr>
                  <td className="font-semibold py-2 w-1/6">Depth</td>
                  <td className="py-2 w-5/6">6in / 15cm</td>
                </tr>
                <tr>
                  <td className="font-semibold py-2 w-1/6">Size</td>
                  <td className="py-2 w-5/6">S, M, L</td>
                </tr>
                <tr>
                  <td className="font-semibold py-2 w-1/6">Other</td>
                  <td className="py-2 w-5/6">Duis ullamcorper arcu et ligula volutpat</td>
                </tr>
                <tr>
                  <td className="font-semibold py-2 w-1/6">Info</td>
                  <td className="py-2 w-5/6">imperdiet</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Review Tab Content */}
        {activeTab === "review" && (
          <div className="text-gray-700">
            <p>1 review for T-Shirt with Logo</p>
            {/* Review Content */}
            <div className="container mx-auto px-6 py-10">
      {/* Reviews Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold">1 review for T-Shirt with Logo</h2>
      </div>

      {/* Existing Reviews */}
      <div className="mb-6 flex">
        {/* Review 1 */}
        <div className="flex items-start mb-6">
          <img
            src="https://via.placeholder.com/50"
            alt="User"
            className="rounded-full w-12 h-12 mr-4"
          />
          <div>
            <p className="text-gray-800 font-semibold">Tom Black - <span>March 13, 2020</span></p>
            <div className="flex items-center mb-2">
              <span className="text-yellow-500">★★★★★</span>
            </div>
            <p className="text-gray-600">Nice product!</p>
          </div>
        </div>
      </div>
      <div className="items-center">
        <p>Add a preview</p>
        <p>Your email address will not be published. Required fields are marked *</p>
        </div>
       {/* Rating (Star) */}
       <div className="items-center">
            <label className="mr-2 ">Your Rating*</label>
            <div className="flex space-x-1 text-cyan-500 ">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className="cursor-pointer text-2xl text-gray-100 hover:text-yellow-500"
                >
                  ★
                </span>
              ))}
            </div>
          </div>
      {/* Add New Review Form */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Write a Review</h3>

        <form className="space-y-4">
            <div className="w-full md:w-1/2">
              <input
                type="text"
                placeholder="Name*"
                className="w-full px-4 py-2 border border-gray-100 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-full md:w-1/2">
              <input
                type="email"
                placeholder="Email*"
                className="w-full px-4 py-2 border border-gray-100 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          {/* Comment Section */}
          <div className="w-full md:w-1/2">
            <textarea
              placeholder="Your Comment*"
              className="w-full px-4 py-2 border border-gray-100 rounded-md focus:outline-none focus:border-blue-500"
              rows={5}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className=" font-bold uppercase px-7 py-3 bg-sky-400 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailTabs;
