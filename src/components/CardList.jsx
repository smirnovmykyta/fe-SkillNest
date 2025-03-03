import Card from "./Card";
import { useEffect, useState } from "react";
import { getAllAdvertisement } from "../api/advertisementApi.js";
import { useUser } from "../context/userContext.jsx";

const CardList = () => {
  const [adList, setAdList] = useState("");
  const { user } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllAdvertisement();

        setAdList(res);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [user]);
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 p-4 ml-10 mr-10">
      {adList && adList.map((card) => <Card key={card._id} card={card} />)}
    </div>
  );
};

export default CardList;
