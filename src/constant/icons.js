import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { LuCircleUser } from "react-icons/lu";

const icons = [
  { name: "Search", icon: BiSearchAlt, link: "/" },
  { name: "Favorites", icon: GrFavorite, link: "/favorites" },
  { name: "Ad", icon: AiOutlineFileAdd, link: "/ad" },
  /*{ name: "Chat", icon: LuMessageCircleMore, link: "/chat" },*/
  { name: "Profile", icon: LuCircleUser, link: "/profile" },
];

export default icons;
