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

  return (
    <div>
      {url && <img src={url} alt="generated meme" />}
      <p>
        <button onClick={copyLink} className="glow-on-hover">{copied ? "Link copied!" : "Copy image link"}</button>
        <button onClick={() => history.push("/")} className="glow-on-hover">
          Make another meme
        </button>
      </p>
    </div>
  );
}

export default MemeGenerated;
