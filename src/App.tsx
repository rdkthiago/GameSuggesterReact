import { useState } from "react";
import axios from "axios";
import GameCard from "./components/GameCard";
import "./App.css";

const GENRES = [
  { id: "", name: "All / Random" },
  { id: 2, name: "Point-and-click" },
  { id: 4, name: "Fight" },
  { id: 5, name: "Shooter" },
  { id: 10, name: "Racing" },
  { id: 12, name: "RPG" },
  { id: 14, name: "Sports" },
  { id: 31, name: "Adventure" },
];

function App() {
  const [game, setGame] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleGetSuggestion() {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/games/suggestion`,
        {
          params: {
            genreId: selectedGenre || null,
          },
        },
      );
      setGame(response.data[0]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="app-container">
      <h1>What Game Should I Play?</h1>
      <div className="controls">
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
        <button onClick={handleGetSuggestion} disabled={isLoading}> { isLoading ? 'Loading..' : 'Get Suggestion' } </button>
      </div>
      <GameCard game={game} />
    </div>
  );
}

export default App;
