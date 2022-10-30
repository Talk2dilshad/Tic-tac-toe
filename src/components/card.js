import React from "react";
import "./card.css";

function Card(props) {
    return (
        <div className="card">
         <h1 className={props.characters === "O" ? "redSign" : "blueSign"}
         >{props.character}</h1>
        </div>
    )
}
export default Card;