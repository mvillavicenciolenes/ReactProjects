//BrooklynPage.js
import React from "react";
import { Users1 } from "../../cards";
import Brooklyn1 from "../../components/images/Brooklyn/Brooklyn1.jpeg";
import Brooklyn2 from "../../components/images/Brooklyn/Brooklyn2.jpeg";
import Brooklyn3 from "../../components/images/Brooklyn/Brooklyn3.jpeg";
import Brooklyn4 from "../../components/images/Brooklyn/Brooklyn4.jpeg";
import Brooklyn5 from "../../components/images/Brooklyn/Brooklyn5.jpeg";
import Brooklyn6 from "../../components/images/Brooklyn/Brooklyn6.jpeg";

const BrooklynPage = () => {
  const brooklynImages = [
    Brooklyn1,
    Brooklyn2,
    Brooklyn3,
    Brooklyn4,
    Brooklyn5,
    Brooklyn6,
  ]; 
  const brooklynDescription = (
    <p>
      Brooklyn is the soul of New York City with many cultures, history, and
      innovation. Walking through the streets of the borough, the bewitching
      smell of just-made pizza pies will catch you for sure; it is a kind of
      symbol of the culinary traditions in Brooklyn. Wander along the cobbled
      streets of DUMBO, where old train carriages bear testimony to the
      industrial history of Brooklyn and have been converted into chic art
      galleries and hip coffee shops. Just go down to Coney Island, where the
      lively boardwalk lures with bright, playful, and swirling attractions that
      give a great feel of Brooklyn. Wander the streets of Williamsburg, replete
      with gentrified storefronts and artisanal shops, seemingly illuminating
      the borough's churning cultural scene from every other street corner. And
      under the constant roar of the elevated train tracks, Brooklyn is a
      hissing place, ever full of commotion about the relentless forward
      momentum the city is taking. Brooklyn is a cacophony of voices, clinks,
      and tastes—urging the wanderer forth into varied neighborhoods to discover
      the myriad treasures that lay in wait.
    </p>
  );

  return (
    <Users1
      boroughName="Brooklyn"
      images={brooklynImages}
      description={brooklynDescription}
    />
  );
};

export default BrooklynPage;
