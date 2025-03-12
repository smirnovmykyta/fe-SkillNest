import React, {useState, useEffect} from "react";
import {deleteUser, getProfile} from "../api/userApi.js";
import {useNavigate} from "react-router-dom";
import ShowProfile from "./ShowProfile.jsx";
import EditProfile from "./EditProfile.jsx";
import CardList from "./CardList.jsx";
import {Trash2} from "lucide-react";


const Profile = ({activeTab = "profile"}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const openModal = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleDelete = async () => {
        try{
            const res = await deleteUser();
            if(!res.data) return
            localStorage.removeItem("token");
            localStorage.removeItem("isAuth");
            setUser("");
            navigate("/");
            closeModal();
        } catch (error){
            console.error(error)
        }
    };

    if (!user) return <p>Loading profile...</p>;

    return (
        <>
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
                    <ShowProfile user={user}/>
                ) : activeTab == "edit" ? (
                    <EditProfile user={user} setUser={setUser}/>
                ) : activeTab == "advertisements" ? (
                    <CardList type="myAdvertisements"/>
                ) : (
                    <div>No such tab: {activeTab}</div>
                )}
            </div>
            { activeTab === "profile" && <div className="flex justify-center mt-2.5">
                <button
                    onClick={openModal}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all"
                >
                    <Trash2 className="w-5 h-5"/>
                    Delete
                </button>
            </div>}
            {isModalOpen && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg z-60">
                        <h2 className="text-xl mb-4">Do you want to delete your account?</h2>
                        <div className="flex justify-end gap-4">
                            <button
                                className="btn btn-ghost hover:btn hover:bg-[#4c34c8] hover:text-white"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                            <button className="btn btn-primary" onClick={handleDelete}>
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Profile;
