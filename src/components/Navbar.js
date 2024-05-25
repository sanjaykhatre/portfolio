import React from "react";

export default function Navbar({ active, handleChange }) {
  console.log({ active });
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button
            className={`navbar-link ${active.about && "active"} `}
            onClick={() => {
              handleChange("about");
            }}
          >
            About
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={`navbar-link ${active.resume && "active"} `}
            onClick={() => {
              handleChange("resume");
            }}
          >
            Resume
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${active.portfolio && "active"} `}
            onClick={() => {
              handleChange("portfolio");
            }}
          >
            Portfolio
          </button>
        </li>

        <li
          className={`navbar-link ${active.contact && "active"} `}
          onClick={() => {
            handleChange("contact");
          }}
        >
          <button className="navbar-link">Contact</button>
        </li>
      </ul>
    </nav>
  );
}
