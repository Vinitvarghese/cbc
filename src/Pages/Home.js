import React from "react";
import Carousel from "../Components/Carousel/Carousel";
import Diffirence from "../Components/Diffirence/Diffirence";
import Records from "../Components/Records/Records";
import Services from "../Components/Services/Services";
import Projects from "../Components/Projects/Projects";
import Stats from "../Components/Stats/Stats";
const Home = () => {
  return (
    <div>
      <Carousel />
      <Diffirence />
      <Records />
      <Services />
      <Projects />
      <Stats />
    </div>
  );
};

export default Home;
