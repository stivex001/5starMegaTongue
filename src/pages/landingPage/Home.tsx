import React from "react";

import Hero from "../../components/Hero";
import Writing from "../../components/Writing";
import Review from "../../components/Review";

const Home = () => {
  return (
    <div className="mx-14">
      <Hero />
      <Writing />
      <Review />
    </div>
  );
};

export default Home;
