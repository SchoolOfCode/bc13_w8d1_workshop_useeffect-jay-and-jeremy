import {useEffect, useState, React} from "react";


function PokemonViewer({ id }) {
  const [pokemon, setPokemon] = useState({});

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
     <h2> From Pokemon API</h2>
      <p>Name: {pokemon.name}, ID: {pokemon.id}</p>
      <img src={`${pokemon.sprites ? pokemon.sprites.front_default : 'No image'}`} alt={`${pokemon.name}`}/>
    </div>
  );
}

export default PokemonViewer;
