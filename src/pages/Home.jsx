import React from "react";
import NavBar from "../components/Nav/NavBar";
import MainBanner from "../components/MainBanner/MainBanner";
import Discription from "../components/Discription/Discription";
import InovationIdea from "../components/InovationIdea/InovationIdea";
import Statistics from "../components/Statistics/Statistics";
import Services from "../components/Services/Services";

const Home = () => {
  return (
    <>
      <NavBar />
      <MainBanner />
      <Discription />
      <InovationIdea />
      <Statistics />
      <Services />
    </>
  );
};

export default Home;
