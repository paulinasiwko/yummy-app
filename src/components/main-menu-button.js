import React from "react";
import './components.css';
import { NavLink } from "react-bootstrap";


export default function MainMenuButton({ buttonText }) {
    return (
        <NavLink className='mainMenuButton'>{buttonText}</NavLink>
    );
}