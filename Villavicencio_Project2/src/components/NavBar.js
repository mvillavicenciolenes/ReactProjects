// NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import logoImage from '../components/images/ILNYC1.webp'; 
import "../index.css"; // Import index.css

const Navbar = () => {
  return (
    <nav className="navbar">
      <div style={{ flexGrow: 1.5, display: "flex", alignItems: "center", fontSize: "1.2em" }}>
        <img src={logoImage} alt="Logo" className="navbar-logo" style={{ width: "auto", height: "auto" }} />
        <button className="ui button" style={{ padding: '10px 20px', fontSize: '1.1em' }}>
          <Link to="/" className="navbar-link">Explore NYC</Link>
        </button>
      </div>

      <div>
        <button className="ui button">
          <Link to="/bronx" className="navbar-link">Visit the Bronx</Link> 
        </button>
        <button className="ui button">
          <Link to="/brooklyn" className="navbar-link">Visit Brooklyn</Link> 
        </button>
        <button className="ui button">
          <Link to="/manhattan" className="navbar-link">Visit Manhattan</Link> 
        </button>
        <button className="ui button">
          <Link to="/queens" className="navbar-link">Visit Queens</Link> 
        </button>
        <button className="ui button">
          <Link to="/statenisland" className="navbar-link">Visit Staten Island</Link> 
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
