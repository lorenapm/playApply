import React, { useState, useEffect } from "react";
import Card from "./Card";
import { images } from "./import";
import "../stylesheets/Board.css";

function Board() {
  const [cards, setCards] = useState([1, 2]);

  useEffect(() => {
    setCards(images);
  }, []);
  //const listCards = cards.map((card) => <span>{card}</span>);
  return (
    <div className="board">
      {cards.map((card) => (
        <Card />
      ))}
    </div>
  );
}

export default Board;
