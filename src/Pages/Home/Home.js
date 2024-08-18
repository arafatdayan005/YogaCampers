import React from "react";
import Slider from "./Slider";
import About from "./About";
import Services from "./Services";
import Goals from "./Goals";
import Blogs from "./Blogs";
import NewsLetter from "./NewsLetter";

function Home() {
  return (
    <>
      <Slider />
      <About />
      <Services />
      <Goals />
      <Blogs />
      <NewsLetter />
    </>
  );
}

export default Home;
