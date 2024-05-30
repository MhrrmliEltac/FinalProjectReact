import React from "react";
import Section from "../Sections/Home/Section";
import ServiceSection from "../Sections/Home/ServiceSection";
import OfferSection from "../Sections/Home/OfferSection";
import AccordionSection from "../Sections/Home/AccordionSection";
import SliderSection from "../Sections/Home/SliderSection";

const MainHome = () => {
  return (
    <>
      <Section />
      <ServiceSection />
      <OfferSection />
      <AccordionSection />
      <SliderSection />
    </>
  );
};

export default MainHome;
