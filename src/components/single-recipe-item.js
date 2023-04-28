import React, { useState } from "react";
import './components.css';
import { Button } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa";

export default function SingleRecipeItem({ recipeName, image }) {
    const [hover, setHover] = useState({display: 'none'});

    return (
                <div className='item'
                     onPointerEnter={e => setHover({display: 'block'})}
                     onPointerLeave={e => setHover({display: 'none'})}>
                    <img src={require(`../img/${image}`)}
                         alt={recipeName}
                         className='photo' />
                    <div className='recipeHiddenPart'>
                    <h6 className='recipeTitle'
                        style={hover}>
                        {recipeName}
                    </h6>
                    <FaRegHeart style={hover}
                                className='heartIcon'/>
                    </div>
                    <Button variant='secondary'
                            style={hover}
                            className='recipeButton'>
                        See the recipe
                    </Button>
                </div>
    );
}