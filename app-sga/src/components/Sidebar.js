import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Certifique-se de criar este arquivo para estilos específicos

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/produto">Produtos</Link>
          </li>
          <li>
            <Link to="/contasPagar">Contas a Pagar</Link>
          </li>
          <li>
            <Link to="/contasReceber">Contas a Receber</Link>
          </li>
          <li>
            <Link to="/fornecedores">Fornecedores</Link>
          </li>
          <li>
            <Link to="/vendas">Vendas</Link>
          </li>
          <li>
            <Link to="/relatorio">Relatórios</Link>
          </li>
          <li>
            <Link to="/cliente">Clientes</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
