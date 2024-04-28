//QueensPage.js
import React from "react";
import { Users1 } from "../../cards";
import Queens1 from "../../components/images/Queens/Queens1.jpeg";
import Queens2 from "../../components/images/Queens/Queens2.jpeg";
import Queens3 from "../../components/images/Queens/Queens3.jpeg";
import Queens4 from "../../components/images/Queens/Queens4.jpeg";
import Queens5 from "../../components/images/Queens/Queens5.jpeg";
import Queens6 from "../../components/images/Queens/Queens6.jpeg";

const QueensPage = () => {
  const queensImages = [
    Queens1, 
    Queens2, 
    Queens3, 
    Queens4, 
    Queens5, 
    Queens6
  ];

  const queensDescription = (
    <p>
      Queens is 'The World's Borough,' a vibrant tapestry of diversity, culture,
      attractions, and natural beauty. The 7 train snakes through the borough,
      from one panoramic view of the city skyline to another, as Queens assumes
      its destiny as a mecca of the world. Every block, even the most citified
      one, is teeming with languages, cuisines, and traditions—the world in one
      borough. If their eyes are on the prize, Flushing Meadows Park, with its
      Unisphere globe representing one community. The Long Island City pier is a
      peaceful retreat from the urban bustle, with serene views of the East
      River and the Manhattan skyline. Greeting visitors as they arrive is the
      "World's Borough" sign, a rousing welcome to the multicultural identity of
      Queens. And inside the Queens Museum, the rich history and cultural
      heritage of this borough burst to life in exhibitions and events that
      mirror the diversity and dynamism of Queens. From the dynamic streets to
      the tranquil green spaces, Queens testifies to the melting pot of cultures
      and experiences that come to life in its energetic neighborhoods
    </p>
  );

  return (
    <Users1
      boroughName="Queens"
      images={queensImages}
      description={queensDescription}
    />
  );
};

export default QueensPage;
