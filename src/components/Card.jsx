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

          {/* Rating (Stars) - TODO: separate component */}
          <div className="rating mt-4">
            {/* TODO: do this in a loop; display current rating? */}
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

      {/* Verified Badge - TODO: separate component? */}
      <div className="flex justify-end">
        <strong className="inline-flex items-center gap-1 rounded-ss-xl rounded-ee-xl bg-blue-500 px-3 py-1.5 text-white">
          <img
            alt="verifiziert"
            src="/assets/verified.svg"
            className="size-4"
          />
          <span className="text-[10px] font-medium sm:text-xs">Verified</span>
        </strong>
      </div>
    </article>
  );
};

export default Card;
