import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-xl font-bold">MERN CRUD APP</div>
        <div>
          <Link
            to="/"
            className="text-white hover:bg-light-blue-700 px-3 py-2 rounded"
          >
            Home
          </Link>
          <Link
            to="/new"
            className="text-white hover:bg-light-blue-700 px-3 py-2 rounded ml-4"
          >
            New
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
