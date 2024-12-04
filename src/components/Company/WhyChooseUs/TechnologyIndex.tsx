// components/TechnologyIndex.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faMobileAlt, faCloud, faDatabase,  faTelevision, faStopwatch } from '@fortawesome/free-solid-svg-icons';

export default function TechnologyIndex() {
  return (
    <div className="relative bg-cover bg-center py-5" style={{ backgroundImage: 'url(/images/background/bg-tech-home1.jpg)' }}>
      <div className="container mx-auto text-center text-white pt-20 pb-24">
        <h3 className="text-white text-sm leading-tight"> TECHNOLOGY INDEX</h3>
        <h2 className="text-5xl font-sans font-bold mb-2 text-white">We Deliver Solution with the Goal of Trusting Relationships</h2>
        <div className=" justify-center grid-cols-1 md:grid-cols-6 grid">
          {/* Box 1 */}
          <div className="relative group bg-opacity-25 transition-all duration-300 p-6 w-full h-40 flex flex-col items-center justify-center hover:bg-blue-500 border border-gray-400 my-7">
            <FontAwesomeIcon icon={faLaptopCode} className="text-5xl mb-2 text-cyan-500" />
            <p className="text-sm uppercase font-bold">Web</p>
          </div>
          
          {/* Box 2 */}
          <div className="relative group bg-opacity-25 transition-all duration-300 p-6 w-full h-40 flex flex-col items-center justify-center hover:bg-blue-500 border border-gray-400 my-7">
            <FontAwesomeIcon icon={faMobileAlt} className="text-5xl mb-2 text-cyan-500" />
            <p className="text-sm uppercase font-bold">Andoid</p>
          </div>
          
          {/* Box 3 */}
          <div className="relative group bg-opacity-25 transition-all duration-300 p-6 w-full h-40 flex flex-col items-center justify-center hover:bg-blue-500 border border-gray-400 my-7">
            <FontAwesomeIcon icon={faCloud} className="text-5xl mb-2 text-cyan-500" />
            <p className="text-sm uppercase font-bold">IOS</p>
          </div>
          
          {/* Box 4 */}
          <div className="relative group bg-opacity-25 transition-all duration-300 p-6 w-full h-40 flex flex-col items-center justify-center hover:bg-blue-500 border border-gray-400 my-7">
            <FontAwesomeIcon icon={faDatabase} className="text-5xl mb-2 text-cyan-500" />
            <p className="text-sm">IOT</p>
          </div>
          
          {/* Box 5 */}
          <div className="relative group bg-opacity-25 transition-all duration-300 p-6 w-full h-40 flex flex-col items-center justify-center hover:bg-blue-500 border border-gray-400 my-7">
            <FontAwesomeIcon icon={faStopwatch} className="text-5xl mb-2 text-cyan-500" />
            <p className="text-sm">Wearalables</p>
          </div>
          
          {/* Box 6 */}
          <div className="relative group bg-opacity-25 transition-all duration-300 p-6 w-full h-40 flex flex-col items-center justify-center hover:bg-blue-500 border border-gray-400 my-7">
            <FontAwesomeIcon icon={faTelevision} className="text-5xl mb-2 text-cyan-500" />
            <p className="text-sm">TV</p>
          </div>
        </div>
      </div>
    </div>
  );
}
