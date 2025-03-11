import { useState, useEffect } from "react";
import { getProfile } from "../api/userApi.js";
import { useNavigate } from "react-router-dom";
import ShowProfile from "./ShowProfile.jsx";
import EditProfile from "./EditProfile.jsx";

const Profile = ({ activeTab = "profile" }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getProfile();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUser();
  }, []);

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-6">
      <div className="flex space-x-4 border-b pb-2 mb-4">
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "profile"
              ? "border-b-2 border-indigo-500 text-indigo-500"
              : "text-gray-500"
          }`}
          onClick={() => navigate("/profile")}
        >
          Profile Info
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "edit"
              ? "border-b-2 border-indigo-500 text-indigo-500"
              : "text-gray-500"
          }`}
          onClick={() => navigate("/profile/edit")}
        >
          Edit Profile
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "advertisements"
              ? "border-b-2 border-indigo-500 text-indigo-500"
              : "text-gray-500"
          }`}
          onClick={() => navigate("/profile/advertisements")}
        >
          My Advertisements
        </button>
      </div>
      {activeTab === "profile" ? (
        <ShowProfile user={user} />
      ) : activeTab == "edit" ? (
        <EditProfile user={user} setUser={setUser} />
      ) : activeTab == "advertisements" ? (
        <div>My Advertisements (under construction)</div>
      ) : (
        <div>No such tab: {activeTab}</div>
      )}
    </div>
  );
};

export default Profile;
