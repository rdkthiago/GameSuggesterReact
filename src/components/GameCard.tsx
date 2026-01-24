import React from 'react';

interface Game {
  name: string;
  summary: string;
  cover?: {
    url: string;
  };
}

function GameCard({ game }: { game: Game | null }) {
    let imageUrl = '';
    console.log(game);
    if (game && game.cover && game.cover.url) {
        imageUrl = "https:" + game.cover.url.replace('t_thumb', 't_cover_big');
    }
    else {
        imageUrl = 'https://via.placeholder.com/264x374?text=No+Image';
    }
    return (
        <div className='game-card'>
            <img src={imageUrl} alt={game?.name} />
            <h2>{game?.name}</h2>
            <p>{game?.summary}</p>
        </div>  
    );
}

export default GameCard;