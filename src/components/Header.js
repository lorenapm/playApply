import React from "react";
import "../stylesheets/Header.css";

function Header() {
  return (
    <div>
      <h1 className="title">¿A qué empresa vas a aplicar hoy?</h1>
      <button className="button-restart">Reiniciar</button>
      <div className="attemps">
        <h3>Número de intentos:</h3>
      </div>
    </div>
  );
}

export default Header;
