import React from "react";
import {useUser} from "../context/UserContext.jsx";
import {updateUser} from "../api/userApi.js";


const FavoriteToggle = ({ card }) => {
  const { user, setUser } = useUser();

  const toggleFavorite = async () => {
    if (user) {
      // Create a copy of the favoriteAdvertisements array
      const updatedFavorites = [...user.favoriteAdvertisements];

      const index = updatedFavorites.indexOf(card._id);
      if (index >= 0) {
        // Remove the card if it's already in the favorites
        updatedFavorites.splice(index, 1);
      } else {
        // Add the card to the favorites
        updatedFavorites.push(card._id);
      }

      try {
        await updateUser({...user, favoriteAdvertisements: updatedFavorites})
      } catch (error){
        console.error(error)
      }
      // Update the user state with the new array
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
