import Card from "./Card";
import { useEffect, useState } from "react";
import {
  getAllAdvertisement,
  getAdvertisementBySearch,
  getListOfAdvertisement,
} from "../api/advertisementApi.js";
import { useUser } from "../context/UserContext.jsx";
import Searchbar from "./Searchbar";

const CardList = ({ type }) => {
  const [searchString, setSearchString] = useState("");

  const [adList, setAdList] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res;
        if (type === "favorites") {
          res = await getListOfAdvertisement(user.favoriteAdvertisements);
        } else if(type === "myAdvertisements") {
          res = await getListOfAdvertisement(user.userAdvertisements);
        } else if (searchString) {
          res = await getAdvertisementBySearch(searchString);
        } else {
          res = await getAllAdvertisement();
        }
        setAdList(res.reverse());
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [user, searchString]);

  return (
    <>
      {type !== "myAdvertisements" && <Searchbar
        searchString={searchString}
        setSearchString={setSearchString}
      />}
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 p-4 ml-10 mr-10">
        {adList.length > 0 ? (
          adList.map((card) => <Card key={card._id} card={card} />)
        ) : (
          <p>No results found</p>
        )}
      </div>
    </>
  );
};

export default CardList;
