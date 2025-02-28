import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import mockCardDetails from "../mock/CardDetails.json";

const CardDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook to navigate between pages
  const [card, setCard] = useState(null);

  const cardDetails = mockCardDetails.cards;

  useEffect(() => {
    const selectedCard = cardDetails.find((card) => card.id === Number(id));
    setCard(selectedCard);
  }, [id]);

  if (!card) return <p>Loading...</p>;

  return (
    <div className="grid gap-4 p-4 ml-10 mr-10">
      {/* <Header /> */}

      <div className="relative rounded-xl border-2 border-gray-100 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
        <h1 className="text-2xl font-bold">{card.name}</h1>
        <img
          src={card.img}
          alt={card.name}
          className="w-32 h-32 rounded-full"
        />
        <p className="mt-4">{card.text}</p>
        <p className="mt-2">
          <strong>Biete:</strong> {card.biete}
        </p>
        <p className="mt-2">
          <strong>Suche:</strong> {card.suche}
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
