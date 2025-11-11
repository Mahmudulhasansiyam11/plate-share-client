import React from 'react';
import { useLoaderData } from 'react-router';
import FeaturedFood from '../../Components/FeaturedFood/FeaturedFood';

const HomeLayout = () => {
    const highestQuantityFoodData = useLoaderData();
    // console.log(highestQuantityFoodData);
    return (
        <div>
           {/* Featured Food */}
           <FeaturedFood highestQuantityFoodData={highestQuantityFoodData}></FeaturedFood>
        </div>
    );
};

export default HomeLayout;


