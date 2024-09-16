import React from "react";
import Herosection from "../components/Herosection";
import Blog from "../components/Blog";
import AboutUs from "./Aboutus";
const Home = () => {
  return (
    <div className="m-0.5 bg-blue-50">
      <Herosection />
      <AboutUs />
      <Blog />
    </div>
  );
};

export default Home;
