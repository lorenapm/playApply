import React, { useState, useEffect } from "react";
import Card from "./Card";
import { images } from "./import";

function Board() {
  const [cards, setCards] = useState([1, 2]);

  useEffect(() => {
    setCards(images);
  }, []);

  return (
    <div className="board">
      {cards.map((card, index) => (
        <Card name={card.company} number={index} frontFace={card.src} />
      ))}
    </div>
  );
}

export default Board;
