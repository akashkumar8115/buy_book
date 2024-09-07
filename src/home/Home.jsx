import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Crousel from '../components/Crousel.jsx'

import Freebook from "../components/Freebook";
import Display from "../components/display.jsx";
import Img01 from "../img/bnner01.jpg";
import Img02 from "../img/banner02.webp"
import Img03 from "../img/banner03.jpg";
import Img04 from "../img/banner04.webp"
import Img05 from "../img/banner05.jpg"
function Home() {
  const slides = [
    { imageSrc: Img01, title: "Slide 1", subtitle: "Subtitle 1" },
    { imageSrc: Img02, title: "Slide 2", subtitle: "Subtitle 2" },
    { imageSrc: Img03, title: "Slide 3", subtitle: "Subtitle 3" },
    { imageSrc: Img04, title: "Slide 4", subtitle: "Subtitle 4" },
    { imageSrc: Img05, title: "Slide 5", subtitle: "Subtitle 5" },
];
  return (
    <>
      <Navbar />
      <Crousel slides={slides} />
      <Banner />
      <Display />
      {/* <Freebook /> */}
    </>
  );
}

export default Home;
