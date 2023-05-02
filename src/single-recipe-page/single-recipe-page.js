import React, {useState} from "react";
import './single-recipe-page.css';
import MainMenu from "../components/main-menu";
import {Container, Row, Col, Button, ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FaArrowLeft, FaClock, FaUtensils, FaFireAlt, FaRegHeart} from "react-icons/fa";
import {FcLike} from "react-icons/fc";
export default function SingleRecipePage() {
    const [isLiked, setIsLiked] = useState(true);

    function handleHeart() {
        setIsLiked(!isLiked);
    }

    return (
        <div>
            <MainMenu />
            <Container fluid>
                <Row>
                    <Col sm='6'>
                        {isLiked ? (
                            <FaRegHeart className='heart'
                                        size='25' onClick={handleHeart} />
                        ) : (
                            <FcLike className='heart'
                                     size='25'
                                     onClick={handleHeart} />
                        )}
                        <h1 className='recipeName'>Avocado toast</h1>
                        <p className='shortDescription'>
                            Avocados are full of heart-healthy unsaturated fats and fiber.
                            Avocados are also considered brain food,
                            so having avocado toast occasionally for breakfast can help you
                            improve your brain health.
                        </p>
                        <Link to={'/'}>
                            <Button variant='warning'
                                    className='goBackButton'>
                                <FaArrowLeft />{' '}
                                Home page
                            </Button>
                        </Link>
                    </Col>
                    <Col sm='6'>
                        <img src={require('../img/breakfast/avocado-toast.jpg')}
                             alt='Avocado toast'
                             className='d-block w-100 h-100'/>
                    </Col>
                </Row>
                <Row className='additionalInfo'>
                    <Col sm='4' className='additional'>
                        <FaUtensils />{' '} Servings: 2
                    </Col>
                    <Col sm='4' className='additional'>
                        <FaClock />{' '}Total time: 5 mins
                    </Col>
                    <Col sm='4' className='additional'>
                        <FaFireAlt />{' '}Difficulty: Easy
                    </Col>
                </Row>
                <Row>
                    <Col sm='4' className='ingredients'>
                        <h1 className='ingredientsTitle'>Ingredients</h1>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>¼ avocado</ListGroup.Item>
                            <ListGroup.Item>¼ teaspoon ground peppe</ListGroup.Item>
                            <ListGroup.Item>⅛ teaspoon garlic powder</ListGroup.Item>
                            <ListGroup.Item>1 slice whole-wheat bread, toasted</ListGroup.Item>
                            <ListGroup.Item>1 large egg, fried</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm='8'>
                        <h1 className='directionsTitle'>Directions</h1>
                        <div className='directions'>
                            <h6 className='step'>STEP 1</h6>
                            <p>Combine avocado, pepper and garlic powder in a small bowl and gently mash.</p>
                            <h6 className='step'>STEP 2</h6>
                            <p>Top toast with the avocado mixture and fried egg.</p>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

