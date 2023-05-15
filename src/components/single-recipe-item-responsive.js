import React, {useState} from "react";
import './components.css';
import {Card} from "react-bootstrap";
import {FaRegHeart} from "react-icons/fa";
import {FcLike} from "react-icons/fc";
import {Link} from "react-router-dom";
export default function SingleRecipeItemResponsive({ cardTitle, cardImage }) {
    const [isLiked, setIsLiked] = useState(true);

    function handleHeart() {
        setIsLiked(!isLiked);
    }

    return (
        <Card className='cardResponsive col-md-2 col-sm-5 col-xs-12'>
            <Link to={'/single-recipe-page'}>
                <Card.Img variant='top'
                          className='cardPhotoResponsive'
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
                          className='cardLinkResponsive'>
                        {cardTitle}
                    </Link>
                </Card.Title>
            </Card.Body>
        </Card>
    );
}

