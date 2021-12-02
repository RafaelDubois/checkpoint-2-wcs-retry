import React, { useContext, useState } from "react";
import { ApiContext } from "../Context/GameContext";

export default function GameDetails(props) {
    const {id} = props;
  const [apiId, setApiId] = useState(
    `https://apis.wilders.dev/wild-games/games/${id}`
  );
  const {data} = useContext(ApiContext);


  return (
    <div className="uk-card uk-margin">
      <div className="uk-card-media-top">
        <img src={data.background_image} alt={data.name} />
      </div>
      <div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">{data.name}</h3>
          <span>{data.rating}</span>
          <p>{data.released}</p>
        </div>
      </div>
    </div>
  );
}
