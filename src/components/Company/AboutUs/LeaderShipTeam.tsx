// components/LeadershipTeam.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin,  faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons';
const LeadershipTeam = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="container mx-auto">
        {/* Section Title */}
        <h4 className="text-purple-800 font-bold text-center text-sm">  OUR TEAM</h4>
        <h2 className="text-3xl text-center mt-2 font-extrabold">Our Leadership Team</h2>
        <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
          We help businesses elevate their value through custom software development, product design, QA, and consultancy services.
        </p>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 pb-20">
  {/* Member 1 */}
  <div className="relative group flex flex-col items-center text-center">
    <img
      src="/images/member1.jpg"
      alt="David Ferry"
      className="rounded-lg shadow-lg w-full h-auto"
    />
      <div className="absolute inset-0 flex justify-center  items-center ">
      <div className="flex space-x-4 bg-[#211E3B]  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <a href="#" className="h-10 mt-2 ml-3 text-gray-400 hover:text-bule-400">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className=" h-10 mt-2 ml-4 text-gray-400 hover:text-bule-200">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="#" className="h-10 mt-2 ml-4 text-gray-400 hover:text-bule-200">
          <FontAwesomeIcon icon={faPinterestP} />
        </a>
        <a href="#" className="h-10 mt-2  mr-2 text-gray-400 hover:text-bule-200">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
    <span className="text-xl font-bold mt-4 text-black">David Ferry</span>
    <span className="text-gray-500 font-bold">CO-FOUNDER OF COMPANY</span>
  </div>

  {/* Member 2 */}
  <div className="relative group flex flex-col items-center text-center">
    <img
      src="/images/member2.jpg"
      alt="Christina Torres"
      className="rounded-lg shadow-lg w-full h-auto"
    />
    <div className="absolute inset-0 flex justify-center items-center">
    <div className="flex space-x-4 bg-[#211E3B]  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <a href="#" className="h-10 mt-2 ml-3 text-gray-400 hover:text-bule-400">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className=" h-10 mt-2 ml-4 text-gray-400 hover:text-bule-200">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="#" className="h-10 mt-2 ml-4 text-gray-400 hover:text-bule-200">
          <FontAwesomeIcon icon={faPinterestP} />
        </a>
        <a href="#" className="h-10 mt-2  mr-2 text-gray-400 hover:text-bule-200">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
    <span className="text-xl font-bold mt-4 text-black">Christina Torres</span>
    <span className="text-gray-500 font-bold">CO-FOUNDER OF COMPANY</span>
  </div>

  {/* Member 3 */}
  <div className="relative group flex flex-col items-center text-center">
    <img
      src="/images/member3.jpg"
      alt="Amalia Bruno"
      className="rounded-lg shadow-lg w-full h-auto"
    />
    <div className="absolute inset-0 flex justify-center items-center">
    <div className="flex space-x-4 bg-[#211E3B]  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <a href="#" className="h-10 mt-2 ml-3 text-gray-400 hover:text-bule-400">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className=" h-10 mt-2 ml-4 text-gray-400 hover:text-bule-200">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="#" className="h-10 mt-2 ml-4 text-gray-400 hover:text-bule-200">
          <FontAwesomeIcon icon={faPinterestP} />
        </a>
        <a href="#" className="h-10 mt-2  mr-2 text-gray-400 hover:text-bule-200">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
    <span className="text-xl font-bold mt-4 text-black">Amalia Bruno</span>
    <span className="text-gray-500 font-bold">CTO OF COMPANY</span>
  </div>

  {/* Member 4 */}
  <div className="relative group flex flex-col items-center text-center">
    <img
      src="/images/member4.jpg"
      alt="David Ferry"
      className="rounded-lg shadow-lg w-full h-auto"
    />
    <div className="absolute inset-0 flex justify-center items-center">
    <div className="flex space-x-4 bg-[#211E3B]  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <a href="#" className="h-10 mt-2 ml-3 text-gray-400 hover:text-bule-400">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className=" h-10 mt-2 ml-4 text-gray-400 hover:text-bule-200">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="#" className="h-10 mt-2 ml-4 text-gray-400 hover:text-bule-200">
          <FontAwesomeIcon icon={faPinterestP} />
        </a>
        <a href="#" className="h-10 mt-2  mr-2 text-gray-400 hover:text-bule-200">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
    <span className="text-xl font-bold mt-4 text-black">David Ferry</span>
    <span className="text-gray-500 font-bold">CO-FOUNDER OF COMPANY</span>
  </div>
</div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-cyan-400 to-purple-700 py-6 ">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white my-14">
    <div className="leading-tight">
      <span className="text-5xl font-bold text-white">330+</span>
      <span className="flex items-center justify-center uppercase font-bold">
        <FontAwesomeIcon icon={faCircle} size="2xs" className="mr-2" /> Active Clients
      </span>
    </div>
    <div className="leading-tight">
      <span className="text-5xl font-bold text-white">850+</span>
      <span className="flex items-center justify-center uppercase font-bold">
        <FontAwesomeIcon icon={faCircle} size="2xs" className="mr-2" /> Projects Done
      </span>
    </div>
    <div className="leading-tight">
      <span className="text-5xl font-bold text-white">25+</span>
      <span className="flex items-center justify-center uppercase font-bold">
        <FontAwesomeIcon icon={faCircle} size="2xs" className="mr-2" /> Team Advisors
      </span>
    </div>
    <div className="leading-tight">
      <span className="text-5xl font-bold text-white">10+</span>
      <span className="flex items-center justify-center uppercase font-bold">
        <FontAwesomeIcon icon={faCircle} size="2xs" className="mr-2" /> Glorious Years
      </span>
    </div>
  </div>
</div>


      </div>
    </div>
  );
};

export default LeadershipTeam;
