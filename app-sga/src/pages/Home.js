import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Header from "../components/Header";

function Home() {
  const [activeSection, setActiveSection] = useState('cadastros'); // Estado para controlar a seção ativa

  return (
    <div className="home-container">
      <Header />
      <nav className="home-nav">
        <ul>
          <li className={activeSection === 'cadastros' ? 'active' : ''}>
            <a href="#cadastros" onClick={() => setActiveSection('cadastros')}>Cadastros</a>
          </li>
          <li className={activeSection === 'utilitarios' ? 'active' : ''}>
            <a href="#utilitarios" onClick={() => setActiveSection('utilitarios')}>Utilitários</a>
          </li>
          <li className={activeSection === 'relatorios' ? 'active' : ''}>
            <a href="#relatorios" onClick={() => setActiveSection('relatorios')}>Relatórios</a>
          </li>
        </ul>
      </nav>
      <main className="home-main">
        <section id="cadastros" style={{ display: activeSection === 'cadastros' ? 'block' : 'none' }}>
          <div className="cards">
            <Link to="/Produto" className="card">
              <div className="card-icon">📦</div>
              <div className="card-title">Produtos</div>
            </Link>
            <Link to="/Clientes" className="card">
              <div className="card-icon">👥</div>
              <div className="card-title">Clientes</div>
            </Link>
            <Link to="/Fornecedores" className="card">
              <div className="card-icon">🏢</div>
              <div className="card-title">Fornecedores</div>
            </Link>
          </div>
        </section>
        <section id="utilitarios" style={{ display: activeSection === 'utilitarios' ? 'block' : 'none' }}>
          <div className="cards">
            <Link to="/Vendas" className="card">
              <div className="card-icon">📦</div>
              <div className="card-title">Vendas</div>
            </Link>
            <Link to="/Conta-A-Pagar" className="card">
              <div className="card-icon">👥</div>
              <div className="card-title">Conta a pagar</div>
            </Link>
            <Link to="/Contas-A-Receber" className="card">
              <div className="card-icon">🏢</div>
              <div className="card-title">Conta a Receber</div>
            </Link>
          </div>
        </section>
        <section id="relatorios" style={{ display: activeSection === 'relatorios' ? 'block' : 'none' }}>
          <div className="cards">
            <Link to="/Entrada de Estoque" className="card">
              <div className="card-icon">📦</div>
              <div className="card-title">Entrada de Estoque</div>
            </Link>
            <Link to="/Venda Realizadas" className="card">
              <div className="card-icon">👥</div>
              <div className="card-title">Venda Realizadas</div>
            </Link>
            <Link to="/A Pagar" className="card">
              <div className="card-icon">🏢</div>
              <div className="card-title">A Pagar</div>
            </Link>
            <Link to="/A Receber" className="card">
              <div className="card-icon">🏢</div>
              <div className="card-title">A Receber</div>
            </Link>
          </div>
        </section>
      </main>
      {/* Descomente esta seção se quiser adicionar o rodapé fixo
      <footer className="home-footer">
        <p>&copy; 2024 Adegas RV - LTDA SGE 1.0.0. Todos os direitos reservados.</p>
      </footer>
      */}
    </div>
  );
}

export default Home;
