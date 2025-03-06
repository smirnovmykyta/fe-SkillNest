import { Link, useNavigate } from "react-router-dom";
import icons from "../constant/icons.js";
import { useState, useEffect } from "react";

const NavbarEdited = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  const handlePress = (e) => {
    const key = e.currentTarget.children[1].textContent;
    console.log(key);
    if (!authenticated) {
      console.log("Not Authenticated");
      navigate("/");
    }
    switch (key) {
      case "Adverts":
        navigate("caform");
        break;
      case "Search":
        navigate("/");
        break;
      default:
        navigate("/profile");
        break;
    }
  };

  // 🔹 Prevent horizontal scrolling (global fix)
  useEffect(() => {
    document.documentElement.classList.add("overflow-x-hidden");
    document.body.classList.add("overflow-x-hidden");

    return () => {
      document.documentElement.classList.remove("overflow-x-hidden");
      document.body.classList.remove("overflow-x-hidden");
    };
  }, []);

  return (
    <>
      {/* Top Navbar (Desktop Only) */}
      <div className="hidden lg:flex justify-center gap-6 p-4 -mt-5">
        {icons.map((icon, index) => (
          <Link key={index} to={icon.link}>
            <div
              onClick={handlePress}
              className="flex flex-col items-center justify-between px-6 py-2 rounded-lg cursor-pointer hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              <div className="text-xl">{<icon.icon />}</div>
              <div className="text-sm font-medium">{icon.name}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom Navbar (Mobile Only, Always Visible) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-gray-800 text-white flex justify-around items-center inset-x-0 z-50">
        {icons.map((icon, index) => (
          <Link key={index} to={icon.link}>
            <div
              onClick={handlePress}
              className="flex flex-col items-center cursor-pointer hover:text-purple-400 transition-all duration-300"
            >
              <div className="text-2xl">{<icon.icon />}</div>
              <div className="text-xs">{icon.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default NavbarEdited;
