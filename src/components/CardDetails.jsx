import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {getAdvertisementById} from "../api/advertisementApi.js";

const CardDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook to navigate between pages
  const [card, setCard] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
    try {
      const selectedCard = await getAdvertisementById(id);

      setCard(selectedCard);
    }catch (err){
      console.error(err);
    }
    }
    fetchData();
  }, [id]);

  if (!card) return <p>Loading...</p>;

  return (
    <div className="grid gap-4 p-4 ml-10 mr-10">
      {/* <Header /> */}

      <div className="relative rounded-xl border-2 border-gray-100 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
        <h1 className="text-2xl font-bold">{card.username}</h1>
        <img
          src={card.media[0]}
          alt={card.username}
          className="w-32 h-32 rounded-full"
        />
        <p className="mt-4">{card.description}</p>
        <p className="mt-2">
          <strong>Offer:</strong> {card.offer}
        </p>
        <p className="mt-2">
          <strong>Looking for:</strong> {card.request}
        </p>

        {/* Back to Home Button */}
        <button
          onClick={() => navigate("/")} // Navigate back to home page
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer shadow-md hover:bg-blue-600 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default CardDetails;
