import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Crousel from '../components/Crousel.jsx'

import Freebook from "../components/Freebook";
import Display from "../components/display.jsx";
function Home() {
  const slides = [
    { imageSrc: "https://spskidz.com/assets/img/showcase/7.jpeg", title: "Slide 1", subtitle: "Subtitle 1" },
    { imageSrc: "https://spskidz.com/assets/img/tiny/3.jpeg", title: "Slide 2", subtitle: "Subtitle 2" },
    { imageSrc: "https://spskidz.com/assets/img/tiny/6.jpeg", title: "Slide 3", subtitle: "Subtitle 3" },
    { imageSrc: "https://spskidz.com/assets/img/showcase/17.png", title: "Slide 4", subtitle: "Subtitle 4" },
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
