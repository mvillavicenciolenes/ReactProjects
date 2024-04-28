//ManhattanPage.js
import React from "react";
import { Users1 } from "../../cards";
import Manhattan1 from "../../components/images/Manhattan/Manhattan1.jpeg";
import Manhattan2 from "../../components/images/Manhattan/Manhattan2.jpeg";
import Manhattan3 from "../../components/images/Manhattan/Manhattan3.jpeg";
import Manhattan4 from "../../components/images/Manhattan/Manhattan4.jpeg";
import Manhattan5 from "../../components/images/Manhattan/Manhattan5.jpeg";
import Manhattan6 from "../../components/images/Manhattan/Manhattan6.jpeg";

const ManhattanPage = () => {
  const manhattanImages = [
    Manhattan1,
    Manhattan2,
    Manhattan3,
    Manhattan4,
    Manhattan5,
    Manhattan6,
  ];

  const manhattanDescription = (
    <p>
      The island of Manhattan is the iconic island lying at the core of New York
      City, pulsating with activity, culture, and commerce. From an aerial view,
      Central Park would look like an oasis of green in the middle of a concrete
      jungle, to the never-ending snake of traffic slithering down its streets.
      Manhattan is a ballet of motion and enthusiasm. The soaring spire of One
      World Centre pierces the sky like a resilient symbol of togetherness
      against adversity. The bright lights and jostling masses of Times Square
      epitomize the vivacious spirit of the city and draw visitors from the rest
      of the world to come and get a taste of its electrifying energy. The new
      elevated park along the Hudson River is a tranquil escape from the bustle
      of the city to gorgeous panoramic views over the skyline and river. The
      city sprawls out from above like a mosaic, its towering skyscrapers and
      bustling streets proving the charm and dynamism that will never fade.
      Manhattan is a mosaic of contradictions and contrasts where history and
      cutting-edge modernity converge into a lively symphony of urban life.
    </p>
  );

  return (
    <Users1
      boroughName="Manhattan"
      images={manhattanImages}
      description={manhattanDescription}
    />
  );
};

export default ManhattanPage;
