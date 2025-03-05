import { Link, useNavigate } from "react-router-dom";
import { LuMessageCircleMore } from "react-icons/lu";
import { useMediaQuery } from "react-responsive";

const Nav = () => {
  const navigate = useNavigate();
  const isIphone14Pro = useMediaQuery({ query: "(min-width: 390px)" });

  const handlePress = (e) => {
    const key = e.currentTarget.children[1].textContent;
    console.log(e.currentTarget.children[1].textContent);

    switch (key) {
      case "Search":
        navigate("/");
        break;
      case "Ad":
        navigate("ad");
        break;
      case "Favorites":
        navigate("/favorites");
        break;
      case "Messages":
        navigate("/messages");
        break;
      case "Profile":
        navigate("/profile");
        break;
      default:
        navigate("/loginregister");
    }
  };

  return (
    <div>
      {isIphone14Pro ? (
        <div className="btm-nav px-[60px] py-4 flex justify-between items-center  shadow-md">
          <Link to="search">
            <button
              className="flex flex-col bg-primary text-white items-center justify-center rounded-full px-4 py-2 hover:bg-gray-600"
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
          </Link>
          <Link to="favorites">
            <button
              className="flex flex-col bg-primary text-white items-center justify-center rounded-full px-4 py-2 hover:bg-gray-600"
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
                  d="M4.318 6.318a4.5 4.5 0 0 1 6.364 0L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 21.364 4.318 12.682a4.5 4.5 0 0 1 0-6.364z"
                />
              </svg>
              <span className="btm-nav-label">Favorites</span>
            </button>
          </Link>
          <Link to="ad">
            <button
              className="flex flex-col bg-primary text-white items-center justify-center rounded-full px-4 py-2 hover:bg-gray-600"
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
                  d="M21 12.75a8.25 8.25 0 1 1-16.5 0 8.25 8.25 0 0 1 16.5 0ZM12 9v6m3-3H9"
                />
              </svg>
              <span className="btm-nav-label">Ad</span>
            </button>
          </Link>
          <Link to="messages">
            <button
              className="flex flex-col bg-primary text-white items-center justify-center rounded-full px-4 py-2 hover:bg-gray-600"
              onClick={handlePress}
            >
              <LuMessageCircleMore size={24} />
              <span className="btm-nav-label">Messages</span>
            </button>
          </Link>
          <Link to="profile">
            <button
              className="flex flex-col bg-primary text-white items-center justify-center rounded-full px-4 py-2 hover:bg-gray-600"
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
          </Link>
        </div>
      ) : (
        <header className="flex justify-between items-center p-4 bg-primary text-white">
          <Link to="search" className="hover:underline">
            Search
          </Link>
          <Link to="favorites" className="hover:underline">
            Favorites
          </Link>
          <Link to="ad" className="hover:underline">
            Ad
          </Link>
          <Link to="messages" className="hover:underline">
            Messages
          </Link>
          <Link to="profile" className="hover:underline">
            Profile
          </Link>
        </header>
      )}
    </div>
  );
};

export default Nav;
