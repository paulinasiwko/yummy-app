import React from "react";
import './components.css';
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MainMenuButton({ buttonText,href }) {
    return (
        <NavLink className='mainMenuButton'
                 as={Link}
                 to={href}>{buttonText}</NavLink>
    );
}