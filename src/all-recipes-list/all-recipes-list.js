import React from "react";
import './all-recipes-list.css';
import MainMenu from "../components/main-menu";
import {Container, Row} from "react-bootstrap";
import RecipeCard from "../recipe-card/recipe-card";
import RecommendedCarousel from "../components/recommended-carousel";
export default function AllRecipesList() {
    return (
        <div>
            <MainMenu />
            <h3 className='allRecipesTitle'>Ideas for breakfast</h3>
            <Container fluid>
                <Row>
                    <RecipeCard cardTitle={'Avocado toast'}
                                cardImage={'avocado-toast.jpg'}/>
                    <RecipeCard cardTitle={'English breakfast'}
                                cardImage={'english-breakfast.jpg'}/>
                    <RecipeCard cardTitle={'Omlette'}
                                cardImage={'omlette.PNG'}/>
                    <RecipeCard cardTitle={'Waffle'}
                                cardImage={'waffle.jpg'}/>
                    <RecipeCard cardTitle={'English breakfast'}
                                cardImage={'english-breakfast.jpg'}/>
                    <RecipeCard cardTitle={'Omlette'}
                                cardImage={'omlette.PNG'}/>
                    <RecipeCard cardTitle={'Waffle'}
                                cardImage={'waffle.jpg'}/>
                    <RecipeCard cardTitle={'Avocado toast'}
                                cardImage={'avocado-toast.jpg'}/>
                </Row>
            </Container>
            <RecommendedCarousel />
        </div>
    );
}

