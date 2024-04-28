//BronxPage.js
import React from "react";
import { Users1 } from "../../cards";
import Bronx1 from "../../components/images/The bronx/Bronx1.jpeg";
import Bronx2 from "../../components/images/The bronx/Bronx2.jpeg";
import Bronx3 from "../../components/images/The bronx/Bronx3.jpeg";
import Bronx4 from "../../components/images/The bronx/Bronx4.jpeg";
import Bronx5 from "../../components/images/The bronx/Bronx5.jpeg";
import Bronx6 from "../../components/images/The bronx/Bronx6.jpeg";

const BronxPage = () => {
  const bronxImages = [
    Bronx1, 
    Bronx2, 
    Bronx3, 
    Bronx4, 
    Bronx5, 
    Bronx6
  ];
  const bronxDescription = (
    <p>
      The Bronx is one of the boroughs of New York City, alive with diverse and
      busy people among whom rich culture and history pervade. Taking a walk
      into the street, its activities hit at one with the liveliness of everyday
      life, and all the special sights and sounds of the city punch every corner
      of it. From the world-renowned Yankee Stadium resonating with jubilant
      cheers of fans to the serene greens of the Bronx Zoo, where thousands of
      families come to gaze upon exotic fauna from around the world, the Bronx
      is a cocktail of thrill and peace. Walk below the steel el tracks, where
      sounds are met from above with the rhythm of passing trains. At every
      turning corner in the Bronx, surprises and delights await you, beckoning
      you to reveal with them many secret treasures together with iconic
      landmarks.
    </p>
  );

  return (
    <Users1
      boroughName="The Bronx"
      images={bronxImages}
      description={bronxDescription}
    />
  );
};

export default BronxPage;
