import React from "react";
import './carousel.css';
import {Button} from "react-bootstrap";

export default function MainCarousel() {
    return (
        <div className='carouselBackground'>
            <h3 className='title'>Breakfast ideas</h3>
            <div className='container'>
                <div className='item'>
                    <img src={require('../img/breakfast/english-breakfast.jpg')}
                         alt='English breakfast'
                         className='photo'/>
                    <Button variant='secondary'
                            className='recipeButton'>English breakfast recipe</Button>
                </div>
                <div className='item'>
                    <img src={require('../img/breakfast/english-breakfast.jpg')}
                         alt='English breakfast'
                         className='photo'/>
                </div>
                <div className='item'>
                    <img src={require('../img/breakfast/english-breakfast.jpg')}
                         alt='English breakfast'
                         className='photo'/>
                </div>
                <div className='item'>
                    <img src={require('../img/breakfast/english-breakfast.jpg')}
                         alt='English breakfast'
                         className='photo'/>
                </div>
                <div className='item'>
                    <h4>Click here to discover more breakfast ideas</h4>
                </div>
            </div>
        </div>
    );
}