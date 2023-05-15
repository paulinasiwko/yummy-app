import React, {useState} from "react";
import './recipe-card.css';
import {Card} from "react-bootstrap";
import {FaRegHeart} from "react-icons/fa";
import {FcLike} from "react-icons/fc";
import {Link} from "react-router-dom";
export default function RecipeCard({ cardTitle, cardImage }) {
    const [isLiked, setIsLiked] = useState(true);

    function handleHeart() {
        setIsLiked(!isLiked);
    }

    return (
            <Card className='recipeCard'>
                <Link to={'/single-recipe-page'}>
                <Card.Img variant='top'
                          className='cardPhoto'
                          src={require(`../img/breakfast/${cardImage}`)} />
                </Link>
                <Card.Body>
                    <Card.Title>
                        {isLiked ? (
                            <FaRegHeart size='22'
                                        onClick={handleHeart} />
                        ) : (
                            <FcLike size='22'
                                    onClick={handleHeart} />
                        )}
                        {' '}
                        <Link to={'/single-recipe-page'}
                              className='cardLink'>
                            {cardTitle}
                        </Link>
                    </Card.Title>
                </Card.Body>
            </Card>
    );
}

