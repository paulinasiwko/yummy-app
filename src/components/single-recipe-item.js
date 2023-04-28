import React, {useState} from "react";
import './carousel.css';
import {Button} from "react-bootstrap";

export default function SingleRecipeItem({ recipeName }) {
    const [hover, setHover] = useState({display: 'none'});

    return (
                <div className='item'
                     onPointerEnter={e => setHover({display: 'block'})}
                     onPointerLeave={e => setHover({display: 'none'})}>
                    <img src={require('../img/breakfast/english-breakfast.jpg')}
                         alt={recipeName}
                         className='photo' />
                    <h6 className='recipeTitle'
                        style={hover}>{recipeName}</h6>
                    <Button variant='secondary'
                            style={hover}
                            className='recipeButton'>
                        See the recipe
                    </Button>
                </div>
    );
}