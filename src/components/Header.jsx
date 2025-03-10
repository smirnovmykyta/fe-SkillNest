import React, {useState} from "react";
import Logo from "./Logo";
import {Link, useNavigate} from "react-router-dom";
import Navbar from "./Navbar";
import {useUser} from "../context/UserContext.jsx";

const Header = () => {
    const navigate = useNavigate();
    const {user, setUser} = useUser();

    const [isModalOpen, setIsModalOpen] = useState(false);


    const openModal = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };


    const closeModal = () => {
        setIsModalOpen(false);
    };


    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("isAuth");
        setUser("");
        navigate("/");
        closeModal();
    };

    return (
        <div className="mt-7 flex justify-between mb-10 gap-4">
            <div className="flex items-center justify-start ml-10 text-3xl text-emerald-500">
                <Logo/>
            </div>
            <Navbar className=""/>
            <div className="flex gap-4 justify-end mr-10">
                {user ? (<button
                        className="btn btn-ghost hover:btn hover:bg-[#4c34c8] hover:text-white"
                        onClick={openModal}
                    >
                        Log Out
                    </button>
                ) : (
                    <>
                        <button className="btn btn-primary gap-4">
                            <Link to={"login"}>Log In</Link>
                        </button>
                        <button className="btn btn-ghost hover:btn hover:bg-[#4c34c8] hover:text-white">
                            <Link to={"register"}>Register</Link>
                        </button>
                    </>
                )}
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg z-60">
                        <h2 className="text-xl mb-4">Are you sure you want to log out?</h2>
                        <div className="flex justify-end gap-4">
                            <button
                                className="btn btn-ghost hover:btn hover:bg-[#4c34c8] hover:text-white"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={handleLogout}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
