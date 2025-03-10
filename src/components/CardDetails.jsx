import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAdvertisementById } from "../api/advertisementApi.js";
import { getUserById } from "../api/userApi.js";
import FavoriteToggle from "./FavoriteToggle.jsx";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

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

  if (!card)
    return <p className="text-center mt-10 text-gray-600">Loading...</p>;

  return (
    <article className="relative max-w-4xl mx-auto bg-white border border-gray-200 shadow-2xl rounded-2xl overflow-hidden transition-all hover:shadow-xl p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Favorite Toggle */}
      <FavoriteToggle card={card} className="absolute top-4 right-4" />

      {/* Left Section: User Info & Media */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
        <img
          src={card.media?.length ? card.media[0] : "#"}
          className="w-50 h-50 rounded-full object-cover shadow-md lg:ml-10 lg:mt-10"
          alt="User profile"
        />
        <h2 className="text-lg font-semibold text-gray-800">
          {card._user?.username || "Unknown User"}
        </h2>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-gray-600">
          {card._user?.phoneNumber && (
            <a
              href={`tel:${card._user.phoneNumber}`}
              className="flex items-center gap-1 hover:text-gray-800 transition"
            >
              <HiOutlinePhone className="text-xl" />
              <span className="hidden sm:inline">{card._user.phoneNumber}</span>
            </a>
          )}
          {card._user?.email && (
            <a
              href={`mailto:${card._user.email}`}
              className="flex items-center gap-1 hover:text-gray-800 transition"
            >
              <HiOutlineMail className="text-xl" />
              <span className="hidden sm:inline">{card._user.email}</span>
            </a>
          )}
        </div>
      </div>

      {/* Right Section: Card Details */}
      <div className="flex flex-col space-y-3 text-gray-700">
        <p>
          <span className="font-semibold">Offering:</span> {card.offer}
        </p>
        <p>
          <span className="font-semibold">Looking for:</span> {card.request}
        </p>
        <p className="text-sm text-gray-600">{card.description}</p>

        {/* Languages and qualifications */}
        <div className="text-sm space-y-1">
          <p>
            <span className="font-semibold">Languages:</span>{" "}
            {card.languages
              ?.map((lang) => `${lang.language} (${lang.qualification})`)
              .join(", ")}
          </p>
          <p>
            <span className="font-semibold">Availability:</span>{" "}
            {card.timeAvailability
              ?.map(
                (avail) =>
                  `${new Date(avail.date).toLocaleDateString()} at ${
                    avail.time
                  }`
              )
              .join(", ")}
          </p>
          <p>
            <span className="font-semibold">Group Learning:</span>{" "}
            {card.isGroup ? "Yes" : "No"}
          </p>
          <div className="flex gap-4">
            <p className="mt-2">
              <span className="font-bold "> Online:</span>
              {card.lessonMode === "online" || card.lessonMode === "both"
                ? "yes"
                : "no"}
            </p>
            <p className="mt-2">
              <span className="font-bold"> in-person: </span>
              {card.lessonMode === "in-person" || card.lessonMode === "both"
                ? "yes"
                : "no"}
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-600">
          <span className="font-semibold">Location:</span> {card.location}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Expires on:</span>{" "}
          {new Date(card.expirationDate).toLocaleDateString()}
        </p>
      </div>
    </article>
  );
};

export default CardDetails;
