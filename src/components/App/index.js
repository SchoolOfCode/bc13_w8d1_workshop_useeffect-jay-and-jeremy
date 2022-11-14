import React, { useState } from "react";
import "./App.css";

import PokemonViewer from "../PokemonViewer";

// ## Task 1:

// In `App/index.js`, complete the TODOS so that when the button is clicked, the id changes to a random number between 1 and 151, and that id is handed down as a prop to `PokemonViewer`.

function App() {
  const [id, setId] = useState();

  function randNum() {
    return Math.floor(Math.random() * 151) + 1
  }

  function handleClick() {
    // TODO: Set id to be random number between 1 and 151
    setId(randNum());
    console.log(randNum())
  }

  return (
    <div className="App">
      {/* TODO: call handleClick when button clicked */}
      <button onClick={handleClick}>Get Random Pokemon</button>
      {/* TODO: hand down id as a prop */}
      <PokemonViewer id={id}/>
    </div>
  );
}

export default App;
