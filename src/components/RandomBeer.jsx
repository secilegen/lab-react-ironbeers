import Header from "./Header"
import axios from 'axios'
import { useState, useEffect } from "react"

function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState('')

    useEffect(()=>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
    .then((result)=>{
        setRandomBeer(result.data) 
        console.log('Random beer result is ', result.data)
    })
    .catch((error)=>{
        console.log('Error occured when accessing beer data: ', error)
    })
    },[])
    

    return(
        <div>
            <Header/>
            <img src={randomBeer.image_url} alt={randomBeer.name} />
            <h3>{randomBeer.name}</h3>
            <p>{randomBeer.tagline}</p>
            <p>{randomBeer.first_brewed}</p>
            <p>{randomBeer.attenuation_level}</p>
            <p>{randomBeer.description}</p>
            <p>Created by: {randomBeer.contributed_by}</p>
                
        </div>
    )

}

export default RandomBeer