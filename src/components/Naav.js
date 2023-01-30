import React from "react";
import { Link } from "react-router-dom";
import "./nav.css"

function Naav() {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="logo">Logo</div>
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/Footer">Footer</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Naav;
