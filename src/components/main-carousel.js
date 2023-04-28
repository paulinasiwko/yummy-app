import './components.css';
import SingleRecipeItem from "./single-recipe-item";
export default function MainCarousel({title} ) {
    return (
        <div>
            <h5 className='title'>Ideas for {title}</h5>
            <div className='container'>
                <SingleRecipeItem recipeName='English breakfast'
                                  image='breakfast/english-breakfast.jpg' />
                <SingleRecipeItem recipeName='Omlette'
                                  image='breakfast/omlette.PNG' />
                <SingleRecipeItem recipeName='Waffles'
                                  image='breakfast/waffle.jpg'/>
                <SingleRecipeItem recipeName='Avocado toast'
                                  image='breakfast/avocado-toast.jpg'/>
                <div className='item2'>
                    <h6>Click here to discover more {title} ideas</h6>
                </div>
            </div>
        </div>
    );
}