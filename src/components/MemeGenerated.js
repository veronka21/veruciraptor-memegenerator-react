import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useClipboard } from "use-clipboard-copy";

function MemeGenerated() {
  const clipboard = useClipboard();
  const history = useHistory();
  const location = useLocation();
  const url = new URLSearchParams(location.search).get("url");

  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    clipboard.copy(url);
    setCopied(true);
  };

  const downloadImage = () => {
    let fileSaver = require("file-saver");
    fileSaver.saveAs(url, "image.jpg");
  };

  return (
    <React.Fragment>
      <div style={container}>
        {url && <img src={url} alt="generated meme" className="meme-display" />}
      </div>
      <p>
        <button onClick={copyLink} className="glow-on-hover">
          {copied ? "Link copied!" : "Copy image link"}
        </button>
        <button onClick={downloadImage} className="glow-on-hover">
          Download meme
        </button>
        <button onClick={() => history.push("/")} className="glow-on-hover">
          Make another meme
        </button>
      </p>
    </React.Fragment>
  );
}

export default MemeGenerated;

const container = {
  margin: "auto",
  width: "30%",
  display: "block",
};
