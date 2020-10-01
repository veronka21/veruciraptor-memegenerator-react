import React, { useState, useEffect } from "react";
import axios from "axios";
import Textboxes from "./Textboxes";
import Chloe2 from "../img/chloe2.jpg";

function MemeEdit(props) {
  const [memes, setMemes] = useState([]);

  let path = window.location.pathname;
  let id = path.split("/")[path.split("/").length - 1];

  useEffect(() => {
    axios
      .get("https://api.imgflip.com/get_memes")
      .then((response) => setMemes(response.data.data.memes));
  }, []);

  return memes
    .filter((meme) => meme.id === id)
    .map((meme) => (
      <div style={editorContainer} className="memeEditorDiv">
        <img src={Chloe2} alt="chloe2" className="chloe" />
        <div>
          <img src={meme.url} alt={meme.name} className="meme-display" />
        </div>
        <Textboxes meme={meme} />
      </div>
    ));
}

export default MemeEdit;

const editorContainer = {
  margin: "auto",
  width: "60%",
  display: "flex",
  felxWrap: "wrap",
  justifyContent: "space-evenly",
};
