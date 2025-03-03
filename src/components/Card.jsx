// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { getAdvertisementById } from "../api/advertisementApi.js";

// import { useNavigate } from "react-router-dom";
import FavoriteToggle from "./FavoriteToggle";
// import { getUserById } from "../api/userApi.js";

const Card = ({ card }) => {
  // const { id } = useParams();

  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const users = await getAdvertisementById(id);
  //       //wird einer eigenschaft namens _user zugewiesen im objekt das in der karte selectedcard gespeichert wird
  //       users._user = await getUserById(users.userId);
  //       setCard(users);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   fetchData();
  // }, [id]);

  const handleClick = (id) => {
    navigate(`/carddetails/${id}`);
  };

  return (
    <article
      onClick={() => handleClick(card._id)}
      key={card._id}
      className="relative rounded-xl border-2 border-gray-100 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 p-4"
    >
      <FavoriteToggle card={card} />

      {/* Card Content */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
        {/* User Image */}
        <div className="w-full flex justify-center sm:w-auto">
          <a href="#" className="block">
            <img
              src={card.media && card.media.length ? card.media[0] : "#"}
              className="w-30 h-30 rounded-full object-cover"
            />
          </a>
        </div>

        <div className="flex-1">
          {/* Title and Verified Badge */}
          <div className="flex justify-between items-center">
            {/* userName:{card._user ? card._user.phoneNumber : "unknown user"} */}
            <h3 className="font-medium sm:text-lg">{card.title}</h3>
          </div>

          {/* Biete and Suche */}
          <p className="mt-1">Offering: {card.offer}</p>
          <p className="mt-1">Looking for: {card.request}</p>

          {/* Accordion for Text */}
          {/* freier Text fehlt im AdvertisementModel.js */}
          {/* <div className="mt-3 text-sm text-gray-700">
            TODO: Use CSS to style ellipsis of long text
            <p className="line-clamp-2">
              {card.description.substring(0, 100)}...
            </p>
          </div> */}

          {/* Languages and Availability */}
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <p className="text-xs text-gray-500">
              {card.languages
                .map((lang) => `${lang.language} (${lang.qualification})`)
                .join(", ")}
            </p>

            <span className="hidden sm:block" aria-hidden="true">
              &middot;
            </span>

            {/* 
            <span className="hidden sm:block" aria-hidden="true">
              &middot;
            </span>
            <p className="text-xs text-gray-500">
              <span className="font-medium">
                {card.timeAvailability.map((t) => t.toString()).join(", ")}
              </span>
            </p> */}

            {/* Online / in-person */}
            {/* <p className="mt-2">
              Online:{" "}
              {card.lessonMode === "online" || card.lessonMode === "both"
                ? "yes"
                : "no"}
            </p>
            <p className="mt-2">
              in-person:{" "}
              {card.lessonMode === "in-person" || card.lessonMode === "both"
                ? "yes"
                : "no"}
            </p> */}
          </div>

          {/* Rating (Stars) - TODO: separate component */}
          <div className="rating mt-4">
            {/* TODO: do this in a loop; display current rating? */}
            <input
              type="radio"
              name={`rating-${card._id}`}
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name={`rating-${card._id}`}
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name={`rating-${card._id}`}
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name={`rating-${card._id}`}
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name={`rating-${card._id}`}
              className="mask mask-star-2 bg-green-500"
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
