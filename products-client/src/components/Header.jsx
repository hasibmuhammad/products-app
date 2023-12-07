import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex gap-4 justify-center items-center my-4 text-lg font-semibold">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/users"}>Users</NavLink>
      <NavLink to={"/products"}>Products</NavLink>
      <NavLink to={"/signin"}>Sign In</NavLink>
      <NavLink to={"/signup"}>Sign Up</NavLink>
      <NavLink to={"/todos"}>Todos</NavLink>
    </div>
  );
};

export default Header;
