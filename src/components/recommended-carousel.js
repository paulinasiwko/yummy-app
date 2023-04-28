import React from "react";
import './components.css';
import {Card, Carousel} from "react-bootstrap";

export default function RecommendedCarousel() {
    return (
        <div className='recommendedElement'>
            <h1 className='recommendedCarouselTitle'>Recommended recipes</h1>
            <Carousel className='homePageCarousel'
                      variant='dark'>
                <Carousel.Item>
                    <img src={require('../img/lunch/avocato-toast.jpg')}
                         alt='Avocado toast'
                         className='carouselPhoto'/>
                    <Carousel.Caption>
                        <Card className='descriptionCard'>
                            <Card.Body className='recommendedDescriptionText'>
                                <Card.Title>Avocado toast</Card.Title>
                                <Card.Text>
                                    Avocado toast is an open-face sandwich made with toasted bread
                                    topped with smashed (or sliced) avocado and (typically) fresh lemon juice,
                                    olive oil, and simple seasonings like salt and black pepper.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('../img/lunch/salad.jpg')}
                         alt='Cesar salad'
                         className='carouselPhoto'/>
                    <Carousel.Caption>
                        <Card className='descriptionCard'>
                            <Card.Body className='recommendedDescriptionText'>
                                <Card.Title>Cesar salad</Card.Title>
                                <Card.Text>
                                    Caesar salad is a classic lunch that's highly adaptable.
                                    Take the base of romaine, croutons, Parmesan, and Caesar dressing,
                                    and add what you want.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}