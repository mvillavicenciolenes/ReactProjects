//StatenIslandPage.js
import React from "react";
import { Users1 } from "../../cards";
import StatenIsland1 from "../../components/images/StatenIsland/StatenIsland1.jpeg";
import StatenIsland2 from "../../components/images/StatenIsland/StatenIsland2.jpeg";
import StatenIsland3 from "../../components/images/StatenIsland/StatenIsland3.jpeg";
import StatenIsland4 from "../../components/images/StatenIsland/StatenIsland4.jpeg";
import StatenIsland5 from "../../components/images/StatenIsland/StatenIsland5.jpeg";
import StatenIsland6 from "../../components/images/StatenIsland/StatenIsland6.jpeg";

const StatenIslandPage = () => {
  const statenIslandImages = [
    StatenIsland1,
    StatenIsland2,
    StatenIsland3,
    StatenIsland4,
    StatenIsland5,
    StatenIsland6,
  ];

  const statenIslandDescription = (
    <p>
      Staten Island, sometimes referred to as the "forgotten borough," exists
      within the massive metro of New York City. Its serene beauty and laid-back
      charm lure one to Staten Island as the ferry glides across the harbor with
      its panoramic views of the Statue of Liberty and the classic Manhattan
      skyline. Tranquil escape from the bustle of the city to sun-soaked shores
      and panoramic vistas that include the Verrazano-Narrows Bridge. The Staten
      Island Zoo is an institution that gives diversified wildlife and
      educational exhibits to visitors of all ages. At the Staten Island Mall,
      retail therapy beckons with a huge number of shops and plenty of dining
      options. Historic Fort Wadsworth lures those who want to delve further
      into the history of the borough, with its ramparts preserved to perfection
      and wonderful views from the waterline. Although the smallest of the
      boroughs, Staten Island is saturated with natural beauty, cultural
      attractions, and historic landmarks making it very worth a visit.
    </p>
  );

  return (
    <Users1
      boroughName="Staten Island"
      images={statenIslandImages}
      description={statenIslandDescription}
    />
  );
};

export default StatenIslandPage;
