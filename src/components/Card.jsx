import { useNavigate } from "react-router-dom";

const Card = ({ card }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/carddetails/${id}`);
  };

  return (
    <article
      onClick={() => handleClick(card.id)}
      key={card.id}
      className="relative rounded-xl border-2 border-gray-100 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 p-4"
    >
      {/* Heart Icon */}
      <div className="absolute top-2 right-2 text-xl cursor-pointer">❤️</div>

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
            {/* TODO: Use CSS to style ellipsis of long text */}
            <p className="line-clamp-2">{card.text.substring(0, 100)}...</p>
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
          <span className="text-[10px] font-medium sm:text-xs">Verified</span>
        </strong>
      </div>
    </article>
  );
};

export default Card;
