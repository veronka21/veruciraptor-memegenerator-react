import React, { useState, useEffect } from "react";
import axios from "axios";
import Textboxes from './Textboxes';


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
      <div style={editorContainer}>
        <div>
          <img src={meme.url} alt={meme.name} style={imageStyle} />
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
  justifyContent: "space-evenly"
}

const imageStyle = {
  display: "block",
  maxHeight: "65vh",
  maxWidth: "100%",
  height: "auto",
  boxShadow: "0px 0px 10px black"
};
