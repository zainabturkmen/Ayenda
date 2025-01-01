import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "./data";
import { FaCaretDown } from "react-icons/fa";
import logo from "../Assets/Ayenda.png";
import { IoMenu } from "react-icons/io5";

const Navbar = ({ toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="flex justify-between items-center mx-5 mt-2 mb-2 md:mx-20">
      {/* Header */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <img src={logo} alt="logo" className="w-12 md:w-20" />
        <div className="text-2xl cursor-pointer md:hidden">
          <IoMenu onClick={toggleSidebar} />
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-12 list-none">
        {links.map((link) => {
          const { id, text, url, sublinks } = link;

          if (text === "Services") {
            return (
              <li
                key={id}
                className="relative group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <NavLink
                  to={url}
                  className={({ isActive }) =>
                    `inline-flex items-center text-gray-900  hover:text-primary-yellow text-lg font-light ${
                      isActive ? " border-primary-yellow" : ""
                    }`
                  }>
                  {text}
                  <FaCaretDown className="ml-2 text-sm" />
                </NavLink>
                {/* Dropdown Menu */}
                {isDropdownOpen && sublinks && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md z-10 flex flex-col gap-2 p-3 w-56 text-center">
                    {sublinks.map((sublink) => (
                      <NavLink
                        key={sublink.id}
                        to={sublink.url}
                        className={({ isActive }) =>
                          `text-gray-900 text-base py-2 hover:text-primary-yellow transition ${
                            isActive ? "text-primary-yellow" : ""
                          }`
                        }
                        onClick={closeDropdown}>
                        {sublink.text}
                      </NavLink>
                    ))}
                  </div>
                )}
              </li>
            );
          }

          return (
            <li key={id}>
              <NavLink
                to={url}
                className={({ isActive }) =>
                  `text-gray-900 text-lg font-light ${
                    isActive
                      ? "border-b-4 border-primary-yellow text-primary-yellow"
                      : ""
                  }`
                }>
                {text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
