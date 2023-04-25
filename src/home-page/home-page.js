import React from "react";
import MainMenu from "../components/main-menu";
import BreakfastCarousel from "../components/breakfast-carousel";
import LunchCarousel from "../components/lunch-carousel";

export default function HomePage() {
    return (
        <div>
            <MainMenu />
            <BreakfastCarousel />
            <LunchCarousel />
        </div>
    );
}