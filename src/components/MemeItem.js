import React from 'react'

function MemeItem(props) {
    return (
        <div key={props.meme.id} style={cardStyle}>
            <p>{props.meme.name}</p>
            <img src={props.meme.url} alt="meme" style={imageStyle}/>
        </div>
    )
}

export default MemeItem

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