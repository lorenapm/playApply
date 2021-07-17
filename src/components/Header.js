import React from "react";
import "../stylesheets/Header.css";

function Header() {
  return (
    <>
      <h1 className="title">¿A qué empresa vas a aplicar hoy?</h1>
      <div>
        <button className="button-restart">Reiniciar</button>
      </div>
      <div className="attemps">
        <h3>Número de intentos:</h3>
      </div>
    </>
  );
}

export default Header;
