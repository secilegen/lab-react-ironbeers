import beersImage from '../assets/beers.png'
import randomBeerImage from '../assets/random-beer.png'
import newBeerImage from '../assets/new-beer.png'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div>
            <div>
            <img src={beersImage} alt="All Beers" height="200px"/>
            <Link to={'/beers'}><h3>All Beers</h3></Link>
            <p>Lorem ipsum door sit amet</p>
                </div>
                <div>
            <img src={randomBeerImage} alt="Random Beer" height="200px"/>
            <Link to={'/random-beer'}><h3>Random Beer</h3></Link>
            <p>Lorem ipsum door sit amet</p>
                </div>
                <div>
            <img src={newBeerImage} alt="New Beer" height="200px"/>
            <Link to={'/new-beer'}><h3>New Beer</h3></Link>
            <p>Lorem ipsum door sit amet</p>
                </div>
        </div>
    )
}


export default HomePage