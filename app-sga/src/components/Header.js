import React from "react";
import "./Header.css"; // Certifique-se de criar este arquivo para estilos específicos

function Header() {
  return (
    <header className="header">
      <h1>Adegas SGE</h1>
      <div className="user-info">
        <span>Tiago Oliveira da Silva</span>
        <span className="user-icon">🔔</span>
      </div>
    </header>
  );
}

export default Header;
