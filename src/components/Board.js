import React, { useState } from "react";
import Card from "./Card";
import "../stylesheets/Board.css";

function Board() {
  const [cards, setCards] = useState([1, 2]);
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
