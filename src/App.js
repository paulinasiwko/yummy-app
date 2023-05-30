import React from "react";
import './App.css';
import HomePage from "./home-page/home-page";
import {useState, useEffect} from "react";

export default function App() {
    const [message, setMessage] = useState("");
    return (
        <div>
            <HomePage />
        </div>
    );
}