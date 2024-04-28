// Home.js
import React from "react";
import { Users } from "../cards";

const Home = () => {
  return (
    <div className='home_container'>
      <h1>Welcome to NYC</h1>
      <p>
        Explore the diverse boroughs of NYC, each
        offering its own unique attractions, culture, and charm. Click on the
        images below or use the navigation bar to learn more about each borough.
      </p>
      <Users />
    </div>
  );
};

export default Home;
