import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAllAdvertisement } from "../api/advertisementApi"; // ✅ Import function to get all ads

const Searchbar = ({ setAdList }) => {
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    if (!searchString) {
      getAllAdvertisement()
        .then((res) => setAdList(res))
        .catch((err) => console.error("Fehler beim Laden der Anzeigen:", err));
      return;
    }

    const delayDebounceFn = setTimeout(async () => {
      try {
        const response = await axios.get(
          `${import.meta.VITE_SERVER_URL}/api/search?q=${searchString}`
        );
        console.log("Live search results:", response.data);
        setAdList(response.data);
      } catch (error) {
        console.error("Fehler bei der Suche:", error);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchString]);

  return (
    <div className="searchbar p-4">
      <div className="input-group flex justify-center">
        <input
          type="text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          placeholder="Suche..."
        />
        <button className="btn btn-square" disabled>
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
  );
};

export default Searchbar;
