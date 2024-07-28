import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Produto.css";

const initialProdutos = [
  {
    id: 1,
    nome: "Vinho Tinto",
    medida: "Unidade",
    valorCusto: 50.00,
    lucro: 20,
    valorVenda: 60.00,
    categoria: "Vinho",
    quantidadeAtual: 100,
    marca: "Vinha Real",
    ano: 2018
  },
  {
    id: 2,
    nome: "Cerveja Artesanal",
    medida: "Unidade",
    valorCusto: 10.00,
    lucro: 30,
    valorVenda: 13.00,
    categoria: "Cerveja",
    quantidadeAtual: 200,
    marca: "BrewMaster",
    ano: 2020
  },
  {
    id: 3,
    nome: "Whisky 12 anos",
    medida: "Unidade",
    valorCusto: 150.00,
    lucro: 15,
    valorVenda: 172.50,
    categoria: "Destilados",
    quantidadeAtual: 50,
    marca: "Scotch King",
    ano: 2012
  }
];

function Produto() {
  const [produtos, setProdutos] = useState(initialProdutos);
  const [formData, setFormData] = useState({
    nome: "",
    medida: "Unidade",
    valorCusto: "",
    lucro: "",
    valorVenda: "",
    categoria: "Vinho",
    quantidadeAtual: "",
    marca: "",
    ano: ""
  });
  const [isDisabled, setIsDisabled] = useState(true); // Para controlar o estado de edição
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAdd = () => {
    setIsDisabled(false);
    setFormData({
      nome: "",
      medida: "Unidade",
      valorCusto: "",
      lucro: "",
      valorVenda: "",
      categoria: "Vinho",
      quantidadeAtual: "",
      marca: "",
      ano: ""
    });
  };

  const handleSave = () => {
    if (Object.values(formData).some(val => val === "")) {
      alert("Preencha todos os campos antes de salvar.");
      return;
    }

    const newProduto = { id: produtos.length + 1, ...formData };
    setProdutos([...produtos, newProduto]);
    setIsDisabled(true);
  };

  const handleDelete = () => {
    console.log("Produto excluído");
  };

  const handleBack = () => {
    navigate("/home");
  };

  const handleRowClick = (produto) => {
    setFormData(produto);
    setIsDisabled(false);
  };

  return (
    <div className="produto-container">
      <nav className="produto-nav">
        <h1>Estoque</h1>
        {/* Botões de navegação */}
      </nav>
      <main className="produto-main">
        {/* <h2>Estoque</h2> */}
        <div className="produto-actions">
          <div className="produto-search">
            <label>Produto</label>
            <input type="text" />
            <button className="search-button">🔍</button>
          </div>
          <div className="action-buttons">
            <button className="add-button" onClick={handleAdd}>
              Adicionar
            </button>
            <button className="back-button" onClick={handleBack}>
              Voltar
            </button>
          </div>
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
                <tr key={produto.id} onClick={() => handleRowClick(produto)}>
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
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              disabled={isDisabled}
            />
          </div>
          <div className="form-row">
            <label>Medida</label>
            <select
              name="medida"
              value={formData.medida}
              onChange={handleInputChange}
              disabled={isDisabled}
            >
              <option>Unidade</option>
              {/* Outras opções */}
            </select>
            <label>Valor de Custo</label>
            <input
              type="number"
              name="valorCusto"
              value={formData.valorCusto}
              onChange={handleInputChange}
              disabled={isDisabled}
            />
            <label>% Lucro</label>
            <input
              type="number"
              name="lucro"
              value={formData.lucro}
              onChange={handleInputChange}
              disabled={isDisabled}
            />
            <label>Valor de venda</label>
            <input
              type="number"
              name="valorVenda"
              value={formData.valorVenda}
              onChange={handleInputChange}
              disabled={isDisabled}
            />
          </div>
          <div className="form-row">
            <label>Categoria</label>
            <select
              name="categoria"
              value={formData.categoria}
              onChange={handleInputChange}
              disabled={isDisabled}
            >
              <option>Vinho</option>
              {/* Outras opções */}
            </select>
            <label>Quantidade Atual</label>
            <input
              type="number"
              name="quantidadeAtual"
              value={formData.quantidadeAtual}
              onChange={handleInputChange}
              disabled={isDisabled}
            />
            <label>Marca</label>
            <input
              type="text"
              name="marca"
              value={formData.marca}
              onChange={handleInputChange}
              disabled={isDisabled}
            />
            <label>Ano do vinho</label>
            <input
              type="number"
              name="ano"
              value={formData.ano}
              onChange={handleInputChange}
              disabled={isDisabled}
            />
          </div>
        </div>
        <div className="produto-actions">
          <button className="save-button" onClick={handleSave}>
            Salvar
          </button>
          <button className="delete-button" onClick={handleDelete}>
            Excluir
          </button>
        </div>
      </main>
    </div>
  );
}

export default Produto;
