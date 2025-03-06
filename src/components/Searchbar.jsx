import React from "react";

const Searchbar = () => {
  return (
    <div className="j">
      <label className="input ustify-center max-w-4xl lg:w-3xl mx-auto mb-5 flex items-center gap-2 p-2 border border-gray-200 rounded-full ">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" className="grow" placeholder="Search" />
      </label>
    </div>
  );
};

export default Searchbar;
