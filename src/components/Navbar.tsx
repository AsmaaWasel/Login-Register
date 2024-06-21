// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-lg">Todo App</div>
        <div>
          <Link to="/" className="text-white mx-2">
            Home
          </Link>
          <Link to="/login" className="text-white mx-2">
            Login
          </Link>
          <Link to="/register" className="text-white mx-2">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
