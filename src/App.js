import React from "react";
import './App.css';
import {Navbar, Nav, NavLink, Button} from "react-bootstrap";


export default function App() {
  return (
      <Navbar style={{border: '2px solid red'}} className='mainMenu'>
          <Navbar.Brand style={{border: '2px solid blue'}}>
              <img src={require('../src/img/cake.jpg')}
                   alt='Logo'
                   className='logo'/>
          </Navbar.Brand>
          <Nav style={{border: '2px solid green'}}
               className='justify-content-end'>
                <Button className='mainMenuButton'>Log In</Button>
                <Button className='mainMenuButton'>Sign In</Button>
          </Nav>
      </Navbar>
  );
}