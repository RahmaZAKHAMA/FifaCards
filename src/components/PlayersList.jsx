import React from "react";
import players from "../players";
import Player from "./Player";
const PlayersList = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {players.map((player, key) => (
        <Player {...player} key={player.name} />
      ))}
    </div>
  );
};

export default PlayersList;
