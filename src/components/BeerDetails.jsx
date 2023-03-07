import Header from "./Header"
import axios from 'axios'
import { useState, useEffect } from "react"

function BeerDetails() {
    const [beer, setBeer] = useState('')

    // useEffect(()=>{
    //     axios.get('https://ih-beers-api2.herokuapp.com/beers/')
    // .then((result)=>{
    //     setBeers(result.data) 
    // })
    // .catch((error)=>{
    //     console.log('Error occured when accessing beer data: ', error)
    // })
    // },[])
    

    // return(
    //     <div>
    //     {beers.map((beer)=>{
    //         return(
    //             <div key={beer._id} className='individualBeer'>
    //             <img src={beer.image_url} alt={beer.name} />
    //             <h3>{beer.name}</h3>
    //             <p>{beer.tagline}</p>
    //             <p>Created by: {beer.contributed_by}</p>
    //             </div>
    //         )
    //     })}
    //     </div>
    // )

}

export default BeerDetails