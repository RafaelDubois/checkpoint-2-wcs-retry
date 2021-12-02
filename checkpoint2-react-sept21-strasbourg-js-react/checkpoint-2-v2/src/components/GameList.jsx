import React, { useContext } from 'react';
import { useState } from "react";
import Game from "./Game";
import { ApiContext } from '../Context/GameContext';

export default function GameLIst() {
  const { data, setData } = useContext(ApiContext);
  const [filter, setFilter] = useState(false);
  const deletable = (id) => {
    setData(data.filter((game) => game.id !== id));
  };

  return (
    <div className="uk-margin">
      <button
        class="uk-button uk-button-secondary uk-width-1-1"
        onClick={() => setFilter(!filter)}
      >
        {filter ? "Tout les jeux" : "Jeux pouplaires (plus de 4.5)"}
      </button>
      <ul className="uk-grid uk-child-width-1-4 uk-margin">
        {data
          .filter((game) => !filter || game.rating >= 4.5)
          .map((game, index) => (
            <Game
              key={index}
              name={game.name}
              image={game.background_image}
              rating={game.rating}
              deletable={deletable}
            />
          ))}
      </ul>
    </div>
  );
}
