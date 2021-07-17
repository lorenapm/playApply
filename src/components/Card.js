import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import backFace from "../images/question.png";
import "../stylesheets/Card.css";

function Card({ name, number, frontFace }) {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className="card">
      <ReactCardFlip isFlipped={isFlipped}>
        <img className="card-image" src={backFace} alt="backface" />
        <img className="card-image" src={frontFace} alt="frontFace" />
      </ReactCardFlip>
    </div>
  );
}

export default Card;
