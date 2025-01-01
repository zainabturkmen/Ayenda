import React, { useState } from "react";
import styled from "styled-components";
import logo from "../Assets/Ayenda.png";
import { LiaTimesSolid } from "react-icons/lia";
import { FaCaretDown } from "react-icons/fa";
import { links } from "./data";
import { NavLink } from "react-router-dom";

const Sidebar = ({ toggleSidebar, isOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState); // Toggles the dropdown state
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false); // Closes the dropdown when needed
  };

  return (
    <Wrapper>
      <aside className={`${isOpen ? "sidebar show-sidebar" : "sidebar"}`}>
        {/* Sidebar Header */}
        <div className="header">
          <img src={logo} alt="Logo" />
          <button className="close-icon">
            <LiaTimesSolid onClick={toggleSidebar} />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="links">
          {links.map((link) => {
            const { id, text, url, icon, sublinks } = link;

            if (text === "Services") {
              return (
                <li key={id} className="dropdown">
                  <NavLink
                    to={url}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={toggleDropdown} // Toggles dropdown on click
                  >
                    <span className="icon">{icon}</span>
                    {text}
                    <FaCaretDown className="dropdown-icon" />
                  </NavLink>
                  {/* Dropdown Menu */}
                  {isDropdownOpen && sublinks && (
                    <div className="dropdown-menu">
                      {sublinks.map((sublink) => (
                        <NavLink
                          key={sublink.id}
                          to={sublink.url}
                          className={({ isActive }) =>
                            isActive ? "dropdown-active" : "dropdown-link"
                          }
                          onClick={() => {
                            closeDropdown();
                            toggleSidebar();
                          }}>
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
                  onClick={toggleSidebar}
                  to={url}
                  className={({ isActive }) => (isActive ? "active" : "")}>
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 68%;
    background-color: #fff;
    transition: all 0.3s linear;
    transform: translate(-100%);
    box-shadow: 0.25em 0.25em 0.75em rgba(0, 0, 0, 0.25),
      0.125em 0.125em 0.25em rgba(0, 0, 0, 0.15);
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding: 2em;
  }

  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 0.5em;
  }

  .header img {
    width: 50px;
  }

  .close-icon {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #555;
  }

  .links {
    list-style: none;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .links li {
    position: relative;
  }

  .icon {
    margin-right: 0.5rem;
  }

  .links a {
    text-decoration: none;
    font-size: 1rem;
    font-weight: 400;
    color: #333;
    padding: 0.5rem;
    border-radius: 4px;
    transition: background 0.3s ease;
    display: flex;
    align-items: center;
  }

  .active {
    color: #ffd700;
  }

  .dropdown {
    cursor: pointer;
    position: relative; /* Keeps the dropdown content aligned correctly */
    display: flex;
    flex-direction: column; /* Stacks dropdown content vertically */
  }

  .dropdown-menu {
    position: relative; /* Keeps the dropdown in the flow of the document */
    margin-top: 0.5rem; /* Adds spacing between "Services" and the dropdown */
    background: #fff; /* Dropdown background */
    border-radius: 4px;
    padding: 0.5rem;
    width: 100%; /* Ensures it stretches to the width of its container */
    display: flex;
    flex-direction: column;
    gap: 0.5rem; /* Adds spacing between dropdown items */
  }

  .dropdown-link {
    text-decoration: none;
    font-size: 0.9rem;
    color: #555;
    padding: 0.5rem;
    border-radius: 4px;
    transition: background 0.3s ease;
  }

  .dropdown-link:hover {
    background: #f9f9f9; /* Adds hover background effect */
    color: #ffd700;
  }

  .dropdown-active {
    color: #ffd700; /* Highlights active dropdown links */
  }

  .dropdown-icon {
    margin-left: 0.5rem;
  }
`;

export default Sidebar;
