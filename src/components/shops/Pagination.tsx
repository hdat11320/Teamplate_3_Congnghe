// components/Pagination.tsx

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination: React.FC = () => {
    return (
      <div className="flex justify-center mt-8">
        <button className="px-3 py-1 border m-2 group-hover:bg-blue-800"><FontAwesomeIcon icon={faArrowLeft} /></button>
        <button className="px-3 py-1 border m-2 group-hover:bg-blue-800">1</button>
        <button className="px-3 py-1 border m-2 group-hover:bg-blue-800">2</button>
        <button className="px-3 py-1 border m-2 group-hover:bg-blue-800">3</button>
        <button className="px-3 py-1 border m-2 group-hover:bg-blue-800"><FontAwesomeIcon icon={faArrowRight} /></button>
      </div>
    );
  };
  
  export default Pagination;
  