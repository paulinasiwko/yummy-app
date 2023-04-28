import React from "react";
import MainMenu from "../components/main-menu";
import BreakfastCarousel from "../components/breakfast-carousel";
import LunchCarousel from "../components/lunch-carousel";
import MainCarousel from "../components/carousel";

export default function HomePage() {
    return (
        <div>
            <MainMenu />
            <MainCarousel title='breakfast' />
            <MainCarousel title='lunch' />
            <MainCarousel title='soup' />
            <MainCarousel title='dessert' />
            <LunchCarousel />
        </div>
    );
}