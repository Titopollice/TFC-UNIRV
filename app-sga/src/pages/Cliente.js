import React from "react";
import { useNavigate } from "react-router-dom";
import "./Produto.css"; // Certifique-se de criar este arquivo para estilos específicos

// Exemplo de dados dos produtos
const produtos = [
  { id: 1, nome: "Produto 1", medida: "Unidade", valorCusto: 10.00, lucro: 20, valorVenda: 12.00, categoria: "Vinho", quantidadeAtual: 100, marca: "Marca A", ano: 2022 },
  { id: 2, nome: "Produto 2", medida: "Unidade", valorCusto: 15.00, lucro: 25, valorVenda: 18.75, categoria: "Vinho", quantidadeAtual: 50, marca: "Marca B", ano: 2021 },
  // Adicione mais produtos conforme necessário
];

function Produto() {
  const navigate = useNavigate();

  const handleSave = () => {
    // Lógica para salvar o produto
  };

  const handleDelete = () => {
    // Lógica para excluir o produto
  };

  const handleAdd = () => {
    // Lógica para adicionar um novo produto
  };

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <div className="produto-container">
      <nav className="produto-nav">
        {/* <button className="back-button" onClick={handleBack}>
          Voltar
        </button> */}
      </nav>
      <main className="produto-main">
        <h2>Estoque</h2>
        <div className="produto-search">
          <label>Produto</label>
          <input type="text" />
          <button className="search-button">🔍</button>
        </div>
        <div className="produto-table-container">
          <table className="produto-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Medida</th>
                <th>Valor de Custo</th>
                <th>% Lucro</th>
                <th>Valor de Venda</th>
                <th>Categoria</th>
                <th>Quantidade Atual</th>
                <th>Marca</th>
                <th>Ano</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((produto) => (
                <tr key={produto.id}>
                  <td>{produto.nome}</td>
                  <td>{produto.medida}</td>
                  <td>{produto.valorCusto.toFixed(2)}</td>
                  <td>{produto.lucro}%</td>
                  <td>{produto.valorVenda.toFixed(2)}</td>
                  <td>{produto.categoria}</td>
                  <td>{produto.quantidadeAtual}</td>
                  <td>{produto.marca}</td>
                  <td>{produto.ano}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="produto-form">
          <div className="form-row">
            <label>Nome do Produto</label>
            <input type="text" />
          </div>
          <div className="form-row">
            <label>Medida</label>
            <select>
              <option>Unidade</option>
              {/* Outras opções */}
            </select>
            <label>Valor de Custo</label>
            <input type="number" />
            <label>% Lucro</label>
            <input type="number" />
            <label>Valor de venda</label>
            <input type="number" />
          </div>
          <div className="form-row">
            <label>Categoria</label>
            <select>
              <option>Vinho</option>
              {/* Outras opções */}
            </select>
            <label>Quantidade Atual</label>
            <input type="number" />
            <label>Marca</label>
            <input type="text" />
            <label>Ano do vinho</label>
            <input type="number" />
          </div>
        </div>
        <div className="produto-actions">
          <button className="add-button" onClick={handleAdd}>
            Adicionar
          </button>
          <button className="back-button" onClick={handleBack}>
            Voltar
          </button>
          <button className="delete-button" onClick={handleDelete}>
            Excluir
          </button>
          <button className="save-button" onClick={handleSave}>
            Salvar
          </button>
        </div>
      </main>
    </div>
  );
}

export default Produto;
