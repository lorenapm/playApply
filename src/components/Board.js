import React from "react";
import "../stylesheets/Board.css";

function Board() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const listCards = cards.map((card) => <span>{card}</span>);
  return <div className="board">{listCards}</div>;
}

export default Board;
