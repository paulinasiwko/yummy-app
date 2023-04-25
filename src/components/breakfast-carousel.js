import React from "react";
import '../App.css'
import {Card, Carousel} from "react-bootstrap";

export default function BreakfastCarousel() {
    return (
        <div className='breakfastElement'>
        <h1 className='breakfastCarouselTitle'>Breakfast ideas</h1>
            <Carousel className='homePageCarousel'
                      variant='dark'>
                <Carousel.Item>
                    <img src={require('../img/breakfast/english-breakfast.jpg')}
                         alt='English breakfast'
                         className='carouselPhoto'/>
                    <Carousel.Caption>
                        <Card className='descriptionCard'>
                            <Card.Body className='breakfastDescriptionText'>
                                <Card.Title>English breakfast</Card.Title>
                                <Card.Text>
                                    A full breakfast is a substantial cooked breakfast meal,
                                    that typically includes bacon, sausages, eggs, black pudding,
                                    baked beans, tomatoes, mushrooms, toast,
                                    and a beverage such as coffee or tea.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('../img/breakfast/waffle.jpg')}
                         alt='Waffles'
                         className='carouselPhoto'/>
                    <Carousel.Caption>
                        <Card className='descriptionCard'>
                            <Card.Body className='breakfastDescriptionText'>
                                <Card.Title>Waffles</Card.Title>
                                <Card.Text>
                                    A waffle is a dish made from leavened batter or dough.
                                    There are many variations based on the type of waffle iron.
                                    Waffles are eaten throughout the world, particularly in Belgium.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
}