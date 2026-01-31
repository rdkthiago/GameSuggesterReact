import { useState } from "react";
import axios from "axios";
import GameCard from "./components/GameCard";
import "./App.css";

const GENRES = [
  { id: "", name: "All / Random" },
  { id: 4, name: "Fight" },
  { id: 12, name: "RPG" },
  { id: 5, name: "Shooter" },
  { id: 10, name: "Racing" },
  { id: 14, name: "Sports" },
  { id: 31, name: "Adventure" },
];

function App() {
  const [game, setGame] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("");

  async function handleGetSuggestion() {
    const response = await axios.get(
      "http://localhost:8080/api/games/suggestion", {
      params:  {
        genreId: selectedGenre || null
      }
    });
    console.log(response.data);
    setGame(response.data[0]);
  }

  return (
    <div>
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        {GENRES.map((g) => (
          <option key={String(g.id)} value={String(g.id)}>
            {g.name}
          </option>
        ))}
      </select>
      <button onClick={handleGetSuggestion}> Get Suggestion </button>
      <GameCard game={game} />
    </div>
  );
}

export default App;
