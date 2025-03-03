import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";

const Bottomnav = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  const handlePress = (e) => {
    const key = e.currentTarget.children[1].textContent;
    console.log(e.currentTarget.children[1].textContent);
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

  return (
    <div>
      <div className="btm-nav p-2 flex justify-between items-center fixed bottom-0 w-full shadow-md">
        <button
          className="flex flex-col items-center justify-center rounded-full bg-gray-400 px-4 py-2 hover:bg-gray-600"
          onClick={handlePress}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <span className="btm-nav-label">Search</span>
        </button>
        <button
          className="flex flex-col items-center justify-center rounded-full bg-gray-400 px-4 py-2 hover:bg-gray-600"
          onClick={handlePress}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <span className="btm-nav-label">Adverts</span>
        </button>
        <button
          className="flex flex-col items-center justify-center rounded-full bg-gray-400 px-4 py-2 hover:bg-gray-600"
          onClick={handlePress}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <span className="btm-nav-label">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default Bottomnav;
