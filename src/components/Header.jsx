import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="mt-7 flex justify-between mb-10 gap-4">
      <div className="flex items-center justify-start ml-10 text-3xl text-emerald-500">
        <Logo />
      </div>
      <Navbar className="" />
      <div className="flex gap-4 justify-end mr-10">
        <button className="btn btn-active btn-accent gap-4">
          <Link to={"login"}>Log In</Link>
        </button>
        <button className="btn btn-ghost hover:btn">
          <Link to={"register"}>Register</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
