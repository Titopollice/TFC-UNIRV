import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Certifique-se de importar o CSS

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Adegas SGE</h1>
        <div className="user-info">
          {/* <span className="user-icon">User</span> */}
          <span>Tiago Oliveira da Silva</span>
          <span className="user-icon">🔔</span>
        </div>
      </header>
      <nav className="home-nav">
        <ul>
          <li>
            <a href="#cadastros">Cadastros</a>
          </li>
          <li>
            <a href="#utilitarios">Utilitários</a>
          </li>
          <li>
            <a href="#relatorios">Relatórios</a>
          </li>
        </ul>
      </nav>
      <main className="home-main">
        <section id="cadastros">
          {/* <h2>HOME</h2> */}
          <div className="cards">
            <Link to="/produto" className="card">
              <div className="card-icon">📦</div>
              <div className="card-title">Produtos</div>
            </Link>
            <Link to="/cliente" className="card">
              <div className="card-icon">👥</div>
              <div className="card-title">Clientes</div>
            </Link>
            <Link to="/fornecedores" className="card">
              <div className="card-icon">🏢</div>
              <div className="card-title">Fornecedores</div>
            </Link>
          </div>
        </section>
      </main>
      {/* <footer className="home-footer">
        <p>
          &copy; 2024 Adegas RV - LTDA SGE 1.0.0. Todos os direitos reservados.
        </p>
      </footer> */}
    </div>
  );
}

export default Home;
