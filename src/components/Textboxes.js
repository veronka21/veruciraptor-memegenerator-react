import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Textbox({ meme }) {
  const [captions, setCaptions] = useState([]);

  const history = useHistory();

  useEffect(() => setCaptions(Array(meme.box_count).fill("")), [
    meme.box_count,
  ]);

  const updateCaption = (event, index) => {
    let text = event.target.value || "";
    setCaptions(
      captions.map((c, i) => {
        if (i === index) {
          return text;
        } else {
          return c;
        }
      })
    );
  };

  let boxes = [];

  for (let i = 0; i < meme.box_count; i++) {
    boxes.push(
      <p>
        <input
          key={i}
          type="text"
          onChange={(event) => updateCaption(event, i)}
        />
      </p>
    );
  }

  const generateMeme = () => {
    const formData = new FormData();
    let username = process.env.REACT_APP_IMGFLIP_USERNAME;
    let password = process.env.REACT_APP_IMGFLIP_PASSWORD;
    formData.append("username", username);
    formData.append("password", password);
    formData.append("template_id", meme.id);
    captions.forEach((c, i) => {
      formData.append(`boxes[${i}][text]`, c);
    });

    fetch("https://api.imgflip.com/caption_image", {
      method: "POST",
      body: formData,
    }).then((response) => {
      if (response.status !== 200) {
        response.json().then((response) => {
          history.push(`/generated?url=${response.data.url}`);
        });
      } else {
        history.push("/error");
      }
    });
  };

  boxes.push(
    <button className="glow-on-hover" onClick={generateMeme}>
      Generate meme!
    </button>
  );

  return <div>{boxes}</div>;
}

export default Textbox;
