import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    background: "#333",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    transition: "background-color 0.3s ease-in-out",
  };

  const hoverStyle = {
    backgroundcolor: "blue",
  };

  return (
    <nav style={navStyle}>
      <h1 style={{ margin: 0 }}>My App</h1>
      <ul style={{ listStyle: "none", display: "flex" }}>
        <li>
          <Link to="/" style={linkStyle} >
            Home
          </Link>
        </li>
        <li>
          <Link to="/" style={linkStyle} >
            Profile
          </Link>
        </li>
        <li>
          <Link to="/" style={linkStyle} >
            Add/Remove Games
          </Link>
        </li>
        <li>
          <Link to="/" style={linkStyle} >
            Login
          </Link>
        </li>
        <li>
          <Link to="/" style={linkStyle} >
            Logout
          </Link>
        </li>
        <li>
          <Link to="/" style={linkStyle} >
            Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
