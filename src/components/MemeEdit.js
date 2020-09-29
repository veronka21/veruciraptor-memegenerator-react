import React, { useState, useEffect } from "react";
import axios from "axios";

function MemeEdit(props) {
  const [memes, setMemes] = useState([])
  const [meme, setMeme] = useState({});

  let path = window.location.pathname;
  let id = path.split("/")[path.split("/").length - 1];

  useEffect(() => {
    axios
    .get("https://api.imgflip.com/get_memes")
    .then((response) => setMemes(response.data.data.memes))
    .then(() => {
      let memeToEdit = memes.filter(meme => meme.id === id);
    setMeme(memeToEdit)
    });
  }, [id, memes])

  console.log(meme);

  return memes.filter(meme => meme.id === id)
  .map(meme => 
  <div>
    <p>Edit meme {meme.name}</p>
  </div>);
}

export default MemeEdit;
