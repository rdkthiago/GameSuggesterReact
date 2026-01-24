import { useState } from 'react';
import axios from 'axios';

import './App.css'

function App() {
  const [game, setGame] = useState(null);

  async function handleGetSuggestion() {
    const response = await axios.get("http://localhost:8080/api/games/suggestion");
    console.log(response.data);
    setGame(response.data[0]);
  }

  return (
    <>
      <h1>Game Suggester</h1>
      <button onClick={handleGetSuggestion}>Obter Sugestão</button>
      {game && <div><h2>{game.name}</h2></div>}
    </>
  )
}

export default App
