import React from "react";

import Counter from "./Counter";

const Player = props => {
  /*
	player component now has access to function and state defined in its parent app component
	so player is now able to send data back to its parent app component through call back function which is passed to it through its props
	*/
  //console.log(props.removePlayer);
  return (
    <div className="player">
      <span className="player-name">
        <button
          className="remove-player"
          onClick={() => props.removePlayer(props.id)}
        >
          X
        </button>
        {props.name}
      </span>
      <Counter
        score={props.score}
        index={props.index}
        changeScore={props.changeScore}
      />
    </div>
  );
};

export default Player;
