import React from "react";
import MainMenu from "../components/main-menu";
import RecommendedCarousel from "../components/recommended-carousel";
import MainCarousel from "../components/main-carousel";

export default function HomePage() {
    return (
        <div>
            <MainMenu />
            <MainCarousel title='breakfast' />
            <MainCarousel title='lunch' />
            <MainCarousel title='soup' />
            <MainCarousel title='dessert' />
            <RecommendedCarousel />
        </div>
    );
}