import React from "react";
import '../App.css'
import {Navbar, Nav, NavLink, Button, Container} from "react-bootstrap";
import MainMenuButton from "./main-menu-button";


export default function MainMenu() {
    return (
        <Navbar collapseOnSelect
                variant='dark'
                expand='md'
                className='menu'>
            <Container fluid>
                <Navbar.Brand>
                    <h1 className='appName'><img src={require('../img/cake.jpg')}
                             alt='logo'
                             className='logo'/> Yummy!</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='justify-content-end'>
                        <MainMenuButton buttonText={'Log In'} />
                        <MainMenuButton buttonText={'Sign In'} />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}