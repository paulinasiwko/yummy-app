import './components.css';
import SingleRecipeItem from "./single-recipe-item";
import { Link } from "react-router-dom";
import SingleRecipeItemResponsive from "./single-recipe-item-responsive";
import {Card, Container, Row} from "react-bootstrap";
export default function MainCarousel({title} ) {

    return (
        <div>
            <h4 className='title'>Ideas for {title}</h4>

            <Container fluid>
                <Row className='d-lg-none'>
                    <SingleRecipeItemResponsive cardTitle={'English breakfast'}
                                                cardImage={'english-breakfast.jpg'} />
                    <SingleRecipeItemResponsive cardTitle={'Omlette'}
                                                cardImage={'omlette.PNG'} />
                    <SingleRecipeItemResponsive cardTitle={'Waffles'}
                                                cardImage={'waffle.jpg'} />
                    <SingleRecipeItemResponsive cardTitle={'Avocado toast'}
                                                cardImage={'avocado-toast.jpg'} />
                        <Card className='cardResponsive col-md-2 col-sm-11 col-xs-12'>
                            <Link to={'/all-recipes-list'}>
                            <p className='cardResponsiveText'>Click here to discover more {title} ideas</p>
                            </Link>
                        </Card>
                </Row>
            </Container>

            <div className='container'>
                <SingleRecipeItem recipeName='English breakfast'
                                  image='breakfast/english-breakfast.jpg' />
                <SingleRecipeItem recipeName='Omlette'
                                  image='breakfast/omlette.PNG' />
                <SingleRecipeItem recipeName='Waffles'
                                  image='breakfast/waffle.jpg'/>
                <SingleRecipeItem recipeName='Avocado toast'
                                  image='breakfast/avocado-toast.jpg'/>
                <Link to={'/all-recipes-list'}
                      className='link'>
                    <div className='item2'>
                        <h6>Click here to discover more {title} ideas</h6>
                    </div>
                </Link>
            </div>
        </div>
    );
}