import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/produto">Produtos</Link>
          </li>
          <li>
            <Link to="/ContasPagar">Contas a Pagar</Link>
          </li>
          <li>
            <Link to="/ContasReceber">Contas a Receber</Link>
          </li>
          <li>
            <Link to="/Fornecedor">Fornecedores</Link>
          </li>
          <li>
            <Link to="/Vendas">Vendas</Link>
          </li>
          <li>
            <Link to="/Relatorio">Relatórios</Link>
          </li>
          <li>
            <Link to="/Cliente">Clientes</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
