import React from 'react';
import { Link } from "react-router-dom";

function MemeItem(props) {
    let editLink = `/edit/${props.meme.id}`;

    return (
        <Link to={editLink} style={linkStyle}><div key={props.meme.id} style={cardStyle}>
            <p>{props.meme.name}</p>
            <img src={props.meme.url} alt="meme" style={imageStyle}/>
        </div></Link>
    )
}

export default MemeItem

const linkStyle = {
    textDecoration: "none"
}

const cardStyle = {
    background: "#faf87d",
    border: "4px ridge #3d7dca",
    padding: "30 px",
    borderRadius: "15%",
    height: "200px",
    width: "200px",
    display: "block",
    margin: "40px"
}

const imageStyle = {
    maxWidth: "150px",
    maxHeight: "130px"
}