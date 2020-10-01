import React from "react";
import Travolta from "../img/travolta.gif";
import { useHistory } from "react-router-dom";

export default function ErrorTravolta() {
  const history = useHistory();

  return (
    <div>
      <img src={Travolta} alt="travolta" style={imageStyle}/>
      <h2>Whoops! Something went wrong!</h2>
      <button onClick={() => history.push("/")} className="glow-on-hover">
        Make another meme
      </button>
    </div>
  );
}

const imageStyle = {
    marginTop: "30px"
}