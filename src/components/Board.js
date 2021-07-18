import React, { useState, useEffect } from "react";
import Card from "./Card";
import { images } from "./import";

function Board() {
  const [cards, setCards] = useState([1, 2]);

  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  };

  useEffect(() => {
    shuffleArray(images);
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
