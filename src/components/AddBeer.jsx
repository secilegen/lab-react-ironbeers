import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

function AddBeer() {
    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [first_brewed, setFirstBrewed] = useState('')
    const [brewers_tips, setTips] = useState('')
    const [attenuation_level, setAttenuationLevel] = useState(0)
    const [contributed_by, setContributedBy] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        const beerToPost = {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by}
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', beerToPost)
        .then(()=>{
            
            setName('')
            setTagline('')
            setDescription('')
            setFirstBrewed('')
            setTips('')
            setAttenuationLevel('')
            setContributedBy('')
            alert("Beer created")
            navigate(`/beers/`)

        })
    }

  return (
  
    <div>
        <Header/>
       
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            </label>
            <label>
                Tagline
                <input type="text" value={tagline} onChange={(e)=>setTagline(e.target.value)}/>
            </label>
            <label>
                Description
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            </label>
            <label>
                First Brewed
                <input type="text" value={first_brewed} onChange={(e)=>setFirstBrewed(e.target.value)}/>
            </label>
            <label>
                Tips
                <input type="text" value={brewers_tips} onChange={(e)=>setTips(e.target.value)}/>
            </label>
            <label>
                Attenuation Level
                <input type="number" value={attenuation_level} onChange={(e)=>setAttenuationLevel(e.target.value)}/>
            </label>
            <label>
                Contributed By
                <input type="text" value={contributed_by} onChange={(e)=>setContributedBy(e.target.value)}/>
            </label>
            <button>Create</button>
        </form>
        </div>
  )
}

export default AddBeer