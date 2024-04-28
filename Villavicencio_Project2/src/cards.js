//cards.js
import React from "react";
import { Link } from "react-router-dom";
import city1 from "./components/images/city1.jpeg";
import city2 from "./components/images/city2.jpeg";
import city3 from "./components/images/city3.jpeg";
import city4 from "./components/images/city4.jpeg";
import city5 from "./components/images/city5.jpeg";

const Users = () => {
  return (
    <section className="container">
      <div className="card1">
        <Link to="/bronx" className="card-link">
          <p>Explore the Bronx</p>
          <img src={city1} alt="The Bronx" />
        </Link>
      </div>
      <div className="card2">
        <Link to="/brooklyn" className="card-link">
          <p>Explore Brooklyn</p>
          <img src={city2} alt="Brooklyn" />
        </Link>
      </div>
      <div className="card3">
        <Link to="/manhattan" className="card-link">
          <p>Explore Manhattan</p>
          <img src={city3} alt="Manhattan" />
        </Link>
      </div>
      <div className="card4">
        <Link to="/queens" className="card-link">
          <p>Explore Queens</p>
          <img src={city4} alt="Queens" />
        </Link>
      </div>
      <div className="card5">
        <Link to="/statenisland" className="card-link">
          <p>Explore Staten Island</p>
          <img src={city5} alt="Staten Island" />
        </Link>
      </div>
    </section>
  );
};


const Users1 = ({ boroughName, images, description }) => {
  return (
    <>
      <section className="borough-description">
        <h1>Welcome to {boroughName}</h1>
        <p>{description}</p>
      </section>
      <section className="borough-container">
        {images.map((image, index) => (
          <div className="borough-card" key={index}>
            <img src={image} alt={boroughName} />
          </div>
        ))}
      </section>
    </>
  );
};

export { Users, Users1 };
