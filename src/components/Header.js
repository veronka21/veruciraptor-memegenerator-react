import React from "react";
import Logo from "../img/logo.png";

export default function Header() {
  return (
    <div style={headerContainerStyle}>
      <div>
        <img src={Logo} alt="logo" style={imageStyle} />
        <img
          src="https://www.wallpaperup.com/uploads/wallpapers/2013/12/20/200853/6baae9552e0ce2d7f71c15a3804197c6-1000.jpg"
          alt="logo pic"
          style={imageStyle}
          className="headerPic"
        />
      </div>
    </div>
  );
}

const headerContainerStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  height: "130px",
  background: "black",
  fontSize: "large",
};

const imageStyle = {
  height: "130px",
};
