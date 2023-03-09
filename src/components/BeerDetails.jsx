import Header from "./Header"
import axios from 'axios'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function BeerDetails() {
    const [beer, setBeer] = useState('')
    const { beerId} = useParams()

    useEffect(()=>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers/' + beerId)
    .then((result)=>{
        setBeer(result.data) 
        console.log('Beer details result is ', result.data)
    })
    .catch((error)=>{
        console.log('Error occured when accessing beer data: ', error)
    })
    },[])
    

    return(
        <div>
            <img src={beer.image_url} alt={beer.name} />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>Created by: {beer.contributed_by}</p>
                
        </div>
    )

}

export default BeerDetails