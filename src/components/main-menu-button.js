import React from "react";
import '../App.css'
import { NavLink } from "react-bootstrap";


export default function MainMenuButton({ buttonText }) {
    return (
        <NavLink className='mainMenuButton'>{buttonText}</NavLink>
    );
}