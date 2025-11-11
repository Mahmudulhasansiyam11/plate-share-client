import React from "react";
import { useLoaderData } from "react-router";
import FeaturedFood from "../../Components/FeaturedFood/FeaturedFood";
import HeroSection from "../../Components/HeroSection/HeroSection";
import HowItWorks from "../../Components/HowItWorks/HowItWorks";
import OurMission from "../../Components/OurMission/OurMission";

const HomeLayout = () => {
  const highestQuantityFoodData = useLoaderData();
  // console.log(highestQuantityFoodData);
  return (
    <div>
      {/* Hero Section */}
      <HeroSection></HeroSection>
      {/* Featured Food Section */}
      <FeaturedFood
        highestQuantityFoodData={highestQuantityFoodData}
      ></FeaturedFood>
      {/* How It Works Section */}
      <HowItWorks></HowItWorks>
      {/* Our Mission Section */}
      <OurMission></OurMission>
    </div>
  );
};

export default HomeLayout;
