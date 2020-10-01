import React from "react";
import MemeItem from "./MemeItem";

function MemeList(props) {
  return props.memes.map((meme) => (
    <div>
      <MemeItem meme={meme} />
    </div>
  ));
}

export default MemeList;
