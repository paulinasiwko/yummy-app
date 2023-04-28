import React, { useState } from "react";
import './components.css';
import { Button } from "react-bootstrap";
import {FaHeart, FaRegHeart} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SingleRecipeItem({ recipeName, image }) {
    const [hover, setHover] = useState({display: 'none'});
    const [isLiked, setIsLiked] = useState(true);
    function handleLike() {
        setIsLiked(!isLiked);
    }

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
                        {isLiked ? (
                            <FaRegHeart className='heartIcon'
                                        onClick={handleLike}
                                        style={hover}/>
                        ) : (
                            <FaHeart className='heartIcon'
                                     onClick={handleLike}
                                     style={hover} />
                        )}

                    </div>
                    <Link to={'/single-recipe-page'}
                          className='link'>
                    <Button variant='secondary'
                            style={hover}
                            className='recipeButton'>
                        See the recipe
                    </Button>
                    </Link>
                </div>
    );
}