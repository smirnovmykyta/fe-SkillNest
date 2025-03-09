import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserById } from "../api/userApi.js";
import FavoriteToggle from "./FavoriteToggle";

const Card = ({ card }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await getUserById(card.userId);
        setUser(users);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [card]);

  const handleClick = (id) => {
    navigate(`/card/${id}`);
  };

  return (
    <article className="relative rounded-xl border-2 border-gray-100 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
      <FavoriteToggle card={card} />

      {/* Card Content */}
      <div
        onClick={() => handleClick(card._id)}
        className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
      >
        {/* User Image and User Name Below it */}
        <div className="flex flex-col items-center sm:w-24 w-full justify-center">
          <a href="#" className="block">
            <img
              src={card.media && card.media.length ? card.media[0] : "#"}
              className="w-24 h-24 rounded-full object-cover"
              alt="User"
            />
          </a>

          {/* Display Username below Image */}
          {user && (
            <div className="mt-2 text-center">
              <span className="text-sm text-gray-500">
                {user.username || "unknown user"}
              </span>
            </div>
          )}
        </div>

        {/* Card Info */}
        <div className="flex-1">
          {/* Offering and Looking For */}
          <div className="mt-2 text-sm text-gray-700">
            <p>
              <strong>Offering:</strong> {card.offer}
            </p>
            <p>
              <strong>Looking for:</strong> {card.request}
            </p>
          </div>

          {/* Languages */}
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <p className="text-sm  ">
              <span className="font-bold"> Languages: </span>
              {card.languages
                ?.map((lang) => `${lang.language} (${lang.qualification})`)
                .join(", ")}
            </p>
          </div>

          {/* Rating (Stars) */}
          {/* <div className="rating mt-4"> */}
          {/* Simple rating display with stars */}
          {/* <input
              type="radio"
              name={`rating-${card._id}`}
              className="mask mask-star-2 bg-green-500"
              onClick={(e) => e.stopPropagation()} // Prevent navigating */}
          {/* />
            <input
              type="radio"
              name={`rating-${card._id}`}
              className="mask mask-star-2 bg-green-500"
              defaultChecked
              onClick={(e) => e.stopPropagation()} // Prevent navigating
            />
            <input
              type="radio"
              name={`rating-${card._id}`}
              className="mask mask-star-2 bg-green-500"
              onClick={(e) => e.stopPropagation()} // Prevent navigating
            />
            <input
              type="radio"
              name={`rating-${card._id}`}
              className="mask mask-star-2 bg-green-500"
              onClick={(e) => e.stopPropagation()} // Prevent navigating
            />
            <input
              type="radio"
              name={`rating-${card._id}`}
              className="mask mask-star-2 bg-green-500"
              onClick={(e) => e.stopPropagation()} // Prevent navigating
            />
          </div> */}
        </div>
      </div>
    </article>
  );
};

export default Card;
