import { useState } from 'react';
import axios from 'axios';
import GameCard from './components/GameCard';
import './App.css'

function App() {
  const [game, setGame] = useState(null);

  async function handleGetSuggestion() {
    const response = await axios.get("http://localhost:8080/api/games/suggestion");
    console.log(response.data);
    setGame(response.data[0]);
  }

  return (
    <div>
      <button onClick={handleGetSuggestion}> Get Suggestion </button>
      <GameCard game={game}/>
    </div>
  )
}

export default App
