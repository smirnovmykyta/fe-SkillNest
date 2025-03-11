import { HiX } from "react-icons/hi";

const Searchbar = ({ searchString, setSearchString }) => {
  const clearSearch = () => {
    setSearchString("");
  };

  return (
    <div className="flex justify-center">
      <div className="relative w-full max-w-xs">
        <input
          type="text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          placeholder="Search..."
          className="input input-bordered w-full pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
        {searchString && (
          <button
            onClick={clearSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            <HiX className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Searchbar;
