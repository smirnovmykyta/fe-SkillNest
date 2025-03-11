import React from "react";
import { useUser } from "../context/UserContext.jsx";
import { updateUser } from "../api/userApi.js";

const FavoriteToggle = ({ card }) => {
  const { user, setUser } = useUser();

  const toggleFavorite = async () => {
    if (user) {
      const updatedFavorites = [...user.favoriteAdvertisements];

      const index = updatedFavorites.indexOf(card._id);
      if (index >= 0) {
        updatedFavorites.splice(index, 1);
      } else {
        updatedFavorites.push(card._id);
      }

      try {
        await updateUser({ ...user, favoriteAdvertisements: updatedFavorites });
      } catch (error) {
        console.error(error);
      }

      setUser({ ...user, favoriteAdvertisements: updatedFavorites });
    }
  };

  return (
    <div
      className="absolute top-2 right-2 text-xl cursor-pointer"
      onClick={toggleFavorite}
    >
      {user &&
      user.favoriteAdvertisements &&
      user.favoriteAdvertisements.includes(card._id)
        ? "❤️"
        : "🤍"}
    </div>
  );
};

export default FavoriteToggle;
