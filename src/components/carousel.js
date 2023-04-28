import './carousel.css';
import SingleRecipeItem from "./single-recipe-item";


export default function MainCarousel({title} ) {
    return (
        <div>
            <h5 className='title'>Ideas for {title}</h5>
            <div className='container'>
                <SingleRecipeItem recipeName='English breakfast' />
                <SingleRecipeItem recipeName='Waffles' />
                <SingleRecipeItem recipeName='Benedict eggs' />
                <SingleRecipeItem recipeName='Avocado toast' />
                <div className='item2'>
                    <h6>Click here to discover more {title} ideas</h6>
                </div>
            </div>
        </div>
    );
}