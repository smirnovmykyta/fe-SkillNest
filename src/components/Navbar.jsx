import { Link } from "react-router-dom";
import icons from "../constant/icons.js";

const Navbar = () => {
  return (
    <>
      <div className="hidden lg:flex justify-center gap-6 p-4 -mt-5">
        {icons.map((icon, index) => (
          <Link key={index} to={icon.link}>
            <div className="flex flex-col items-center justify-between px-6 py-2 rounded-lg cursor-pointer hover:bg-[#4c34c8] hover:text-white transition-all duration-300">
              <div className="text-xl">{<icon.icon />}</div>
              <div className="text-sm font-medium">{icon.name}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-gray-600 text-white flex justify-around items-center inset-x-0 z-50">
        {icons.map((icon, index) => (
          <Link key={index} to={icon.link}>
            <div className="flex flex-col items-center cursor-pointer hover:text-purple-400 transition-all duration-300">
              <div className="text-2xl">{<icon.icon />}</div>
              <div className="text-xs">{icon.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
