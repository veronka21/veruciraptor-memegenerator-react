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
    background: "#eafafb",
    boxShadow: "0px 0px 10px rgb(170, 90, 193)",
    border: "4px ridge 	#53cdd2",
    padding: "30 px",
    borderRadius: "15%",
    height: "200px",
    width: "200px",
    display: "block",
    margin: "40px",
    color: "rgb(170, 90, 193)"
}

const imageStyle = {
    maxWidth: "150px",
    maxHeight: "130px"
}