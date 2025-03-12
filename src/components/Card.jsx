import {useNavigate} from "react-router-dom";
import FavoriteToggle from "./FavoriteToggle";
import {useUser} from "../context/UserContext.jsx";
import {Edit, Trash} from "lucide-react";
import {deleteAdvertisement} from "../api/advertisementApi.js";
import {updateUser} from "../api/userApi.js";

const Card = ({card, type}) => {
    const navigate = useNavigate();
    const {user, setUser} = useUser();

    const handleClick = (id) => {
        navigate(`/card/${id}`);
    };

    const handleDelete = async (id) => {
        try {
            if (user) {
                const updatedUserAd = [...user.userAdvertisements];

                const index = updatedUserAd.indexOf(card._id);
                if (index >= 0) {
                    updatedUserAd.splice(index, 1);
                }
                await deleteAdvertisement(id);
                await updateUser({...user, userAdvertisements: updatedUserAd});
                setUser({...user, userAdvertisements: updatedUserAd});
                navigate("/profile/advertisements");
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <article
            className="relative rounded-xl border-2 border-gray-100 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
            {type === "myAdvertisements" && <div className="absolute top-2 right-2 flex gap-2">
                <button
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                    // onClick={() => handleEdit(card)}
                    title="Edit"
                >
                    <Edit size={20}/>
                </button>
                <button
                    className="text-gray-500 hover:text-red-600 transition-colors"
                    onClick={() => handleDelete(card._id)}
                    title="Delete"
                >
                    <Trash size={20}/>
                </button>
            </div>}

            {(!user || !user.userAdvertisements.includes(card._id)) && <FavoriteToggle card={card}/>}

            <div
                onClick={() => handleClick(card._id)}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
                <div className="flex flex-col items-center sm:w-24 w-full justify-center">
                    <a href="#" className="block">
                        <img
                            src={card.media && card.media.length ? card.media[0] : "#"}
                            className="w-24 h-24 rounded-full object-cover"
                            alt="User"
                        />
                    </a>
                    <div className="mt-2 text-center">
              <span className="text-sm text-gray-500">
                {card.username || "unknown user"}
              </span>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="mt-2 text-sm text-gray-700">
                        <p>
                            <strong>Offering:</strong> {card.offer}
                        </p>
                        <p>
                            <strong>Looking for:</strong> {card.request}
                        </p>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                        <p className="text-sm  ">
                            <span className="font-bold"> Languages: </span>
                            {card.languages
                                ?.map((lang) => `${lang.language} (${lang.qualification})`)
                                .join(", ")}
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Card;
