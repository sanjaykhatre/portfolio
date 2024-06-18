import React from "react";

export default function Navbar({ active, handleChange }) {
  console.log({ active });
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <span></span>
          <span></span>
          <span></span>
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
          <span></span>
          <span></span>
          <span></span>
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
          <span></span>
          <span></span>
          <span></span>
          <button
            className={`navbar-link ${active.portfolio && "active"} `}
            onClick={() => {
              handleChange("portfolio");
            }}
          >
            Projects
          </button>
        </li>

        {/* <li className="navbar-item">
          <span></span>
          <span></span>
          <span></span>
          <button
            className={`navbar-link ${active.contact && "active"} `}
            onClick={() => {
              handleChange("contact");
            }}
          >
            Contact
          </button>
        </li> */}
      </ul>
    </nav>
  );
}
