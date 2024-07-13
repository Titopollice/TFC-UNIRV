import React from "react";
import { useNavigate } from "react-router-dom";
import "./Produto.css"; // Certifique-se de criar este arquivo para estilos específicos

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
        <button className="back-button" onClick={handleBack}>
          Voltar
        </button>
      </nav>
      <main className="produto-main">
        <h2>Estoque</h2>
        <div className="produto-search">
          <label>Produto</label>
          <input type="text" />
          <button className="search-button">🔍</button>
        </div>
        <div className="produto-list">
          {/* Aqui você pode mapear e listar os produtos existentes */}
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
