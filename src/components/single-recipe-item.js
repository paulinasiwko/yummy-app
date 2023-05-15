import React, { useState } from "react";
import './components.css';
import {Button} from "react-bootstrap";
import { FaRegHeart} from "react-icons/fa";
import { Link } from "react-router-dom";
import {FcLike} from "react-icons/fc";

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
                    <Link to={'/single-recipe-page'}>
                    <img src={require(`../img/${image}`)}
                         alt={recipeName}
                         className='photo' />
                    </Link>
                    <div className='recipeHiddenPart'>
                        <h6 className='recipeTitle'
                            style={hover}>
                            {recipeName}
                        </h6>
                        {isLiked ? (
                            <FaRegHeart className='heartIcon'
                                        size='15'
                                        onClick={handleLike}
                                        style={hover}/>
                        ) : (
                            <FcLike className='heartIcon'
                                    size='15'
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