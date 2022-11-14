import {useEffect, useState, React} from "react";


function PokemonViewer({ id }) {
  const [pokemon, setPokemon] = useState({});
  // TODO: send http request to `https://pokeapi.co/api/v2/pokemon/${id}` and display the data!
  // HINT: you will need useState and useEffect!

//Task 2:
//In PokemonViewer, create a piece of state that will store a Pokemon.

// Within a useEffect, fetch a Pokemon from https://pokeapi.co/api/v2/pokemon/${id} and store the data in your piece of state. The useEffect should only re-run when the id changes.

  useEffect(() => {
    async function getpokemon() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      console.log(data);
      setPokemon(data);
    }
    getpokemon();
  }, [id]);

  return (
    <div className="pokemon-viewer">
      <p>Name: {pokemon.name}, ID: {pokemon.id}</p>
      <img src={pokemon.sprites.front_default} alt={`${pokemon.name}`}/>
    </div>
  );
}

export default PokemonViewer;
