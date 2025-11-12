import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import FeaturedFood from "../../Components/FeaturedFood/FeaturedFood";
import HeroSection from "../../Components/HeroSection/HeroSection";
import HowItWorks from "../../Components/HowItWorks/HowItWorks";
import OurMission from "../../Components/OurMission/OurMission";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeLayout = () => {
  const highestQuantityFoodData = useLoaderData();

  useEffect(() => {
     document.title = "Home - PlateShare";
    AOS.init({
      duration: 1000,
      offset: 120,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div data-aos="fade-up" data-aos-delay="100">
        <HeroSection />
      </div>

      {/* Featured Food Section */}
      <div data-aos="fade-right" data-aos-delay="200">
        <FeaturedFood highestQuantityFoodData={highestQuantityFoodData} />
      </div>

      {/* How It Works Section */}
      <div data-aos="fade-left" data-aos-delay="300">
        <HowItWorks />
      </div>

      {/* Our Mission Section */}
      <div data-aos="zoom-in-up" data-aos-delay="400">
        <OurMission />
      </div>
    </div>
  );
};

export default HomeLayout;
