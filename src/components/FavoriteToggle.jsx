import React from "react";
import { useUser } from "../context/userContext";

const FavoriteToggle = ({ card }) => {
  const { user, setUser } = useUser();
  const toggleFavorite = () => {
    if (user) {
      const index = user.favoriteAdvertisements.indexOf(card._id);
      if (index >= 0) {
        user.favoriteAdvertisements.splice(index, 1);
      } else {
        user.favoriteAdvertisements.push(card._id);
      }
      setUser(user);
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
