// components/RecentNews.js
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Icon mũi tên sang phải


export default function RecentNews() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between mb-6">
          <div className="">
            <h5 className="text-purple-800 font-bold mb-2 text-sm uppercase">  Ours recent news</h5>
            <h3 className="text-4xl">Read Our Latest News</h3>
          </div>
          <button className="mb-6 px-7 py-3 bg-sky-400 text-white hover:bg-purple-600  font-bold uppercase text-sm md:ml-auto">
          All News
        </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative bg-white overflow-hidden pb-10">
            <Image src="/images/blog1-601x520.jpg" alt="Article Image 1" layout="responsive" width={500} height={300} className="" />
            <div className="px-10">
            {/* <span className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white text-sm p-2 hover:bg-purple-600">Design</span> */}
            <p className="text-purple-800 mb-2 font-bold mt-11">_ November 21, 2019 _ Tom Black</p>
            <h4 className="text-2xl font-bold mb-2">Plan Your Project with Your Software</h4>
            <div className="text-white mb-4 absolute bottom-1/3 uppercase text-xs font-bold h-8">
              <span className="mr-2 bg-sky-400 p-2 ">Design</span>
              <span className="mr-2 bg-sky-400 p-2 ">Development</span>
            </div>
            <a href="#" className="text-sky-400 font-bold uppercase "><FontAwesomeIcon icon={faArrowRight}/> Learn More</a>
            </div>
          </div>
          
          <div className="relative bg-white overflow-hidden pb-10">
            <Image src="/images/blog3-601x520.jpg" alt="Article Image 2" layout="responsive" width={500} height={300} className="" />
            <div className="px-10">
            {/* <span className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white text-sm p-2 hover:bg-purple-600">Design</span> */}
            <p className="text-purple-800 mb-2 font-bold mt-11">_November 21, 2019 by Tom Black</p>
            <h4 className="text-2xl font-bold mb-2">You have a Great Business Idea?</h4>
            <div className="text-white mb-4 absolute bottom-1/3 uppercase text-xs font-bold h-8">
              <span className="mr-2 bg-sky-400 p-2 ">Design</span>
              <span className="mr-2 bg-sky-400 p-2 ">Development</span>
            </div>
            <a href="#" className="text-sky-400 font-bold uppercase"><FontAwesomeIcon icon={faArrowRight}/> Learn More</a>
            </div>
          </div>

          <div className="relative bg-white overflow-hidden pb-10">
            <Image src="/images/blog4-601x520.jpg" alt="Article Image 3" layout="responsive" width={500} height={300} className="" />
            <div className="px-10">
            {/* <span className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white text-sm p-2 hover:bg-purple-600">Development</span> */}
            <p className="text-purple-800 mb-2 font-bold mt-11">_September 24, 2019 by Tom Black</p>
            <h4 className="text-2xl font-bold mb-2">Building Data Analytics Software</h4>
            <div className="text-white mb-4 absolute bottom-1/3 uppercase text-xs font-bold h-8">
              <span className="mr-2 bg-sky-400 p-2 ">Design</span>
              <span className="mr-2 bg-sky-400 p-2 ">Development</span>
            </div>
            <a href="#" className="text-sky-400 font-bold uppercase"><FontAwesomeIcon icon={faArrowRight}/> Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
