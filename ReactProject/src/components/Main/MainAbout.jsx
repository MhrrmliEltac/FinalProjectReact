import React from "react";
import HeaderSection from "../Sections/About/HeaderSection";
import MainHeading from "../Sections/About/MainHeading";
import SliderSection from "../Sections/Home/SliderSection";
import Timeline from "../Sections/About/Timeline";
import YoutubeSection from "../Sections/About/YoutubeSection";

const MainAbout = () => {
  return (
    <>
      <HeaderSection />
      <MainHeading />
      <Timeline />
      <YoutubeSection />
      <SliderSection />
    </>
  );
};

export default MainAbout;
