import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo.png";

function Navbar() {
  return (
    <div className="flex space-x-7 border items-center p-[4px] w-full">
      <img className="w-[50px] text-bold" src={Logo} alt="" />
      <span className="text-3xl font-bold">FilmVault</span>
      <Link to="/FilmVault/" className="text-2xl font-bold">
        Movies
      </Link>
      <Link to="/watchlist" className="text-2xl font-bold">
        WatchList
      </Link>
      <input
        type="text"
        placeholder="Search Movies"
        className="border border-gray-400 rounded px-4 py-2 max-w-[300px] focus:outline-none hover:border-blue-100 focus:border-blue-200 border-2"
      />
    </div>
  );
}

export default Navbar;
