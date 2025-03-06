import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo_4.svg";

const Logo = () => {
  return (
    <div>
      <Link to={"/"}>
        <img
          src={logo}
          alt="skillnest-logo"
          className="w-30 h-20 -mt-8 items-center justify-center"
        />
      </Link>
    </div>
  );
};

export default Logo;
