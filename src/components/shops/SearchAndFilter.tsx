// components/SearchAndFilter.tsx

const SearchAndFilter: React.FC = () => {
    return (
      <div className="flex justify-between items-center mb-4">
        {/* Search Input */}
        <div className="flex items-center border border-gray-300 rounded overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 outline-none"
          />
          <button className="bg-blue-500 p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.41-1.41l4.29 4.29a1 1 0 01-1.42 1.42l-4.28-4.3zM8 14A6 6 0 108 2a6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
  
        {/* Showing Results */}
        <p className="text-gray-600">Showing 1–9 of 12 results</p>
  
        {/* Sorting Dropdown */}
        <select className="border border-gray-300 rounded p-2">
          <option>Default sorting</option>
          <option>Sort by popularity</option>
          <option>Sort by latest</option>
          <option>Sort by price: low to high</option>
          <option>Sort by price: high to low</option>
        </select>
      </div>
    );
  };
  
  export default SearchAndFilter;
  