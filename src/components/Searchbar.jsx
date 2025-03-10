import React from "react";

const Searchbar = () => {
  const [searchString, setSearchString] = React.useState("");
  const [results, setResults] = React.useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/search?q=${searchString}`);
      setResults(response.data);
    } catch (error) {
      console.error("Fehler bei der Suche:", error);
    }
  };

  return (
    <div className="searchbar p-4">
      <div className="form-control" onSubmit={handleSearch}>
        <div className="input-group flex justify-center">
          <input
            type="text"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            placeholder="Suche..."
          />
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
