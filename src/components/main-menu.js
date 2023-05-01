import React from "react";
import './components.css';
import {Navbar, Nav, Container} from "react-bootstrap";
import MainMenuButton from "./main-menu-button";
export default function MainMenu() {
    return (
        <Navbar collapseOnSelect
                variant='dark'
                expand='md'
                className='menu'>
            <Container fluid>
                <Navbar.Brand>
                    <h1 className='appName'>Yummy!</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'
                                 className='justify-content-end'>
                    <Nav>
                        <MainMenuButton buttonText={'Log In'}
                                        href={'/log-in'} />
                        <MainMenuButton buttonText={'Sign Up'}
                                        href={'/sign-up'} />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}