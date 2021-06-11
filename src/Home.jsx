import React from "react";
import web from "../src/img/bg1.jpg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Take your Website to another level with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;

