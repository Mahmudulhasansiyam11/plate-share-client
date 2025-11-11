import React from "react";
import { useLoaderData } from "react-router";
import FeaturedFood from "../../Components/FeaturedFood/FeaturedFood";
import HeroSection from "../../Components/HeroSection/HeroSection";

const HomeLayout = () => {
  const highestQuantityFoodData = useLoaderData();
  // console.log(highestQuantityFoodData);
  return (
    <div>
      {/* Hero Section */}
      <HeroSection></HeroSection>
      {/* Featured Food */}
      <FeaturedFood
        highestQuantityFoodData={highestQuantityFoodData}
      ></FeaturedFood>
    </div>
  );
};

export default HomeLayout;
