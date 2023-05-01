import React from "react";
import './components.css';
import {Button, NavLink} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MainMenuButton({ buttonText,href }) {
    return (
        <Button className='mainMenuButton'
                 variant='warning'
                 as={Link}
                 to={href}>{buttonText}</Button>
    );
}