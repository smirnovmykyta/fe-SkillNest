import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAdvertisementById } from "../api/advertisementApi.js";
import { getUserById } from "../api/userApi.js";
import FavoriteToggle from "./FavoriteToggle.jsx";

const CardDetails = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const selectedCard = await getAdvertisementById(id);
        selectedCard._user = await getUserById(selectedCard.userId);
        setCard(selectedCard);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [id]);

  if (!card) return <p className="text-center mt-10">Loading...</p>;

  return (
    <article className="relative rounded-xl border-2 border-gray-100 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-4xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 sm:px-6 md:px-8">
      {/* Heart Icon */}
      <FavoriteToggle card={card} />

      {/* User Info */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <img
          src={card.media?.length ? card.media[0] : "#"}
          className="w-50 h-50 rounded-full object-cover shadow-md mb-6 ml-8"
          alt="User profile"
        />
        <span className="font-semibold text-lg ml-8">
          {card._user?.username || "Unknown User"}
        </span>
        <div className="flex justify-center lg:justify-start gap-3 mt-2 ml-8">
          {card._user?.phoneNumber && (
            <a href={`tel:${card._user.phoneNumber}`} className="text-blue-500">
              📞
            </a>
          )}
          {card._user?.email && (
            <a href={`mailto:${card._user.email}`} className="text-blue-500">
              ✉️
            </a>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col space-y-3 text-center lg:text-left">
        <h3 className="text-xl font-semibold">{card.title}</h3>
        <p className="text-gray-600">Offering: {card.offer}</p>
        <p className="text-gray-600">Looking for: {card.request}</p>
        <p className="text-sm text-gray-700 line-clamp-3">{card.description}</p>

        {/* Availability & Mode */}
        <p className="text-sm text-gray-500">
          Languages:{" "}
          {card.languages
            ?.map((lang) => `${lang.language} (${lang.qualification})`)
            .join(", ")}
        </p>
        <p className="text-sm text-gray-500">
          Availability: {card.timeAvailability?.join(", ")}
        </p>

        <p className="text-gray-500 text-sm">Location: {card.location}</p>

        <p className="text-sm text-gray-500">
          Online: {card.lessonMode.includes("online") ? "Yes" : "No"} |
          In-person: {card.lessonMode.includes("in-person") ? "Yes" : "No"}
        </p>

        {/* Rating System */}
        <div className="flex justify-center lg:justify-start items-center gap-1 mt-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400">
              ★
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default CardDetails;
