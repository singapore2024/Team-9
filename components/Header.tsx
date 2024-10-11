"use client";
import { useState } from "react";

function Navbar() {
  const [drawer, setDrawer] = useState(false);

  function handleClick() {
    setDrawer(!drawer);
    console.log(drawer);
  }
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center">
            <img src="/gdmt.png" alt="Logo" className="h-8" />
            <h1>Farmers Connect</h1>
          </a>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-8 flex-grow justify-center ml-8">
          {" "}
          {/* Added ml-8 */}
          <a
            href="/"
            className="text-gray-700 hover:text-green-600 cursor-pointer"
          >
            Blogs
          </a>
          <a
            href="/marketplace-unauth"
            className="text-gray-700 hover:text-green-600 cursor-pointer"
          >
            Marketplace
          </a>
        </div>

        {/* Sign In and Sign Up Buttons */}
        <div className="flex items-center space-x-4">
          <a href="/sign-up" className="text-gray-700 hover:text-green-600">
            Sign In
          </a>
          <a
            href="/sign-up"
            className="bg-green-900 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex flex-col px-4 py-4">
        <button
          className="text-gray-700 hover:text-green-600 flex items-start py-3"
          onClick={handleClick}
        >
          Menu
        </button>
        {drawer ? (
          <div className="md:hidden flex flex-col gap-3">
            <a
              href="/"
              className="text-gray-700 hover:text-green-600 cursor-pointer"
            >
              Blogs
            </a>
            <a
              href="/marketplace"
              className="text-gray-700 hover:text-green-600 cursor-pointer"
            >
              Marketplace
            </a>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
