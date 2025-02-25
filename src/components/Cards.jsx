import React, { useState } from "react";

const Cards = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const cardDetails = [
    {
      id: 1,
      name: "Username",
      verifiedUser: "User is verified",
      rating: "Rating sign",
      biete: "Grafikdesign",
      suche: "Webentwicklung",
      img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      languages: "English, French",
      availability: "Online | Offline",
      addToFav: "Heart sign",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 2,
      name: "Username",
      verifiedUser: "User is verified",
      rating: "Rating sign",
      biete: "Portugiesisch",
      suche: "Spanisch",
      img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      languages: "English, French",
      availability: "Online | Vor-Ort",
      addToFav: "Heart sign",
      text: "All texts come here",
    },
    {
      id: 3,
      name: "Username",
      verifiedUser: "User is verified",
      rating: "Rating sign",
      biete: "Portugiesisch",
      suche: "Spanisch",
      img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      languages: "English, French",
      availability: "Online | Vor-Ort",
      addToFav: "Heart sign",
      text: "All texts come here",
    },
    {
      id: 4,
      name: "Username",
      verifiedUser: "User is verified",
      rating: "Rating sign",
      biete: "Portugiesisch",
      suche: "Spanisch",
      img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      languages: "English, French",
      availability: "Online | Vor-Ort",
      addToFav: "Heart sign",
      text: "All texts come here",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 p-4 ml-10 mr-10">
      {cardDetails.map((card) => (
        <article
          key={card.id}
          className="relative rounded-xl border-2 border-gray-100 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 p-4"
        >
          {/* Heart Icon */}
          <div className="absolute top-2 right-2 text-xl cursor-pointer">
            ❤️
          </div>

          {/* Card Content */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            {/* User Image */}
            <div className="w-full flex justify-center sm:w-auto">
              <a href="#" className="block">
                <img
                  alt={card.name}
                  src={card.img}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </a>
            </div>

            <div className="flex-1">
              {/* Title and Verified Badge */}
              <div className="flex justify-between items-center">
                <h3 className="font-medium sm:text-lg">{card.name}</h3>
              </div>

              {/* Biete and Suche */}
              <p className="mt-2">Biete: {card.biete}</p>
              <p className="mt-2">Suche: {card.suche}</p>

              {/* Accordion for Text */}
              <div className="mt-3 text-sm text-gray-700">
                {expandedCard === card.id ? (
                  <p>{card.text}</p>
                ) : (
                  <p className="line-clamp-2">
                    {card.text.substring(0, 100)}...
                  </p>
                )}
                <button
                  onClick={() => toggleAccordion(card.id)}
                  className="text-blue-500 mt-2 block cursor-pointer"
                >
                  {expandedCard === card.id
                    ? "weniger anzeigen"
                    : "mehr anzeigen"}
                </button>
              </div>

              {/* Languages and Availability */}
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <p className="text-xs text-gray-500">{card.languages}</p>
                <span className="hidden sm:block" aria-hidden="true">
                  &middot;
                </span>
                <p className="text-xs text-gray-500">
                  <span className="font-medium">{card.availability}</span>
                </p>
              </div>

              {/* Rating (Stars) */}
              <div className="rating mt-4">
                <input
                  type="radio"
                  name={`rating-${card.id}`}
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name={`rating-${card.id}`}
                  className="mask mask-star-2 bg-green-500"
                  defaultChecked
                />
                <input
                  type="radio"
                  name={`rating-${card.id}`}
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name={`rating-${card.id}`}
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name={`rating-${card.id}`}
                  className="mask mask-star-2 bg-green-500"
                />
              </div>
            </div>
          </div>

          {/* Verified Badge */}
          <div className="flex justify-end">
            <strong className="inline-flex items-center gap-1 rounded-ss-xl rounded-ee-xl bg-blue-500 px-3 py-1.5 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <span className="text-[10px] font-medium sm:text-xs">
                Verified
              </span>
            </strong>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Cards;
