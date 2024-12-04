import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import {  faCog, faAward } from "@fortawesome/free-solid-svg-icons"
export default function AboutCompany() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        {/* Main Section: Image and Text */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Section: Image */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-start mb-8 lg:mb-0">
            <Image
              src="/images/man1.png"
              alt="Man thinking"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          {/* Right Section: Text and Info */}
          <div className="lg:w-1/2 w-full">
            {/* About Company Text */}
            <h5 className="text-purple-700 text-sm font-semibold mb-4">  ABOUT COMPANY</h5>
            <h2 className="text-4xl font-bold mb-6">Your Partner for Software Innovation</h2>
            <p className="text-gray-600 mb-8">
              Engitech is the partner of choice for many of the worlds leading enterprises, SMEs, and technology challengers.
              We help businesses elevate their value through custom software development, product design, QA, and consultancy services.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div className="flex flex-col md:flex-row md:items-start space-x-0 md:space-x-4">
    <div className="text-purple-700 mb-2 md:mb-0">
      <FontAwesomeIcon icon={faAward} className="text-4xl" /> {/* Icon huân chương lớn hơn */}
    </div>
    <div className=" md:text-left">
      <h4 className="text-lg font-semibold">Experience</h4>
      <hr />
      <p className="text-gray-500">Our great team of more than 1400 software experts.</p>
    </div>
  </div>

  <div className="flex flex-col md:flex-row md:items-start space-x-0 md:space-x-4">
    <div className="text-purple-700 mb-2 md:mb-0">
      <FontAwesomeIcon icon={faCog} className="text-4xl" /> {/* Icon bánh răng lớn hơn */}
    </div>
    <div className=" md:text-left">
      <h4 className="text-lg font-semibold">Quick Support</h4>
      <hr />
      <p className="text-gray-500">We’ll help you test bold new ideas while sharing your.</p>
    </div>
  </div>
</div>

          </div>
        </div>

        {/* Bottom Section: Stats */}
  <div className="bg-gradient-to-r from-cyan-500 to-purple-800 py-12 ">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white my-16">
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
    </section>
  );
}
