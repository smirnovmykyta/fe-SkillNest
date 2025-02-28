import { getAllAdvertisements } from "../services/api/advertisements";
import Card from "./Card";

const CardList = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 p-4 ml-10 mr-10">
      {getAllAdvertisements().map((ad) => (
        <Card key={ad._id} card={ad} />
      ))}
    </div>
  );
};

export default CardList;
