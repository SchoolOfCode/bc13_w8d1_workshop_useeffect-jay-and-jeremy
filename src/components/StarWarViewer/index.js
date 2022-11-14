import {React, useState, useEffect} from 'react'
import { nanoid } from 'nanoid'

// Have a component that takes in a search and displays the array of results from sending a request to this api:
// `https://swapi.dev/api/people?search={search}`

function StarwarViewer() {
    const [starWar, setStarWar] = useState([])
    const [input, setInput] = useState('')
    const [search, setSearch] = useState('')

    console.log(starWar)
    useEffect(() => {
        async function getResult() {
           const res = await fetch(`https://swapi.dev/api/people?search=${search}`)
           const people = await res.json()
           setStarWar(people.results)
           
        }
        getResult ()
    }, [search])

    function handleChange(e) {
        const value = e.target.value
        setInput(value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        setSearch(input)
    }

    const starWarElements = starWar.map(item => {
        const {name, height, mass, hair_color, skin_color} = item
        return (
            <div key={nanoid()} className="starWar_list">
                <div>Name: {name}</div>
                <div>Height: {height}</div>
                <div>Mass: {mass}</div>
                <div>Hair color: {hair_color}</div>
                <div>Skin color: {skin_color}</div>
                <br/>

            </div>
        )
    })

    return (
        <div>
            <h2> From Starwar API</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                onChange={handleChange}
                id="search"
                placeholder="search by name"
                value={input}
                />
                <button className="search-button">Search</button>
            </form>
            
            {starWar.length 
            ? <div>{starWarElements}</div> 
            : <div className="no-results">No results</div>
            }

        </div>
        

    )
}

export default StarwarViewer;