import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Display from "../components/display.jsx";
function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Display />
      {/* <Freebook /> */}
    </>
  );
}

export default Home;
