import Card from "./Card";
import { useEffect, useState } from "react";
import { getAllAdvertisement } from "../api/advertisementApi.js";
import Searchbar from "../components/Searchbar";

const CardList = () => {
  const [adList, setAdList] = useState([]);

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
  }, []);

  // console.log('Updated Ad List:', adList);

  return (
    <>
      <Searchbar setAdList={setAdList} /> {/* ✅ Pass setAdList to Searchbar */}
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
