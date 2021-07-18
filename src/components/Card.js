import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import backFace from "../images/question.png";

function Card({ name, number, frontFace }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => setIsFlipped(!isFlipped);
  return (
    <div className="card">
      <ReactCardFlip isFlipped={isFlipped}>
        <img
          className="card-image"
          src={backFace}
          alt="backface"
          onClick={handleClick}
        />
        <img
          className="card-image"
          src={frontFace}
          alt="frontFace"
          onClick={handleClick}
        />
      </ReactCardFlip>
    </div>
  );
}

export default Card;
