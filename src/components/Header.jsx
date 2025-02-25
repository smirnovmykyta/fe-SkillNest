import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="mt-7 flex justify-between mb-10">
      <div className="flex items-center justify-start ml-10 text-3xl text-emerald-500">
        <Logo />
      </div>
      <div className="justify-end mr-10 gap-4">
        <button className="btn btn-active btn-accent">Log In</button>
        <button className="btn btn-ghost hover:btn">Register</button>
      </div>
    </div>
  );
};

export default Header;
