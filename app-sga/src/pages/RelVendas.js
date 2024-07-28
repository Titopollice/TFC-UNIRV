import React from 'react';
import './RelVendas.css';
import { useNavigate } from 'react-router-dom';

const RelVendas = () => {
  const navigate = useNavigate();

  const handleVoltarClick = () => {
    navigate('/home');
  };

  return (
    <div className="rel-vendas-container">
      <h2>Relatório de Venda Realizada</h2>
      <form className="rel-vendas-form">
        <div className="date-fields">
          <div className="form-group">
            <label htmlFor="data-inicial">Data Inicial</label>
            <input type="date" id="data-inicial" />
          </div>
          <div className="form-group">
            <label htmlFor="data-final">Data Final</label>
            <input type="date" id="data-final" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="funcionario">Funcionário (Opcional)</label>
          <input type="text" id="funcionario" />
        </div>
        <div className="button-group">
          <button type="button" className="gerar-btn">Gerar</button>
          <button type="button" className="voltar-btn" onClick={handleVoltarClick}>Voltar</button>
        </div>
      </form>
    </div>
  );
};

export default RelVendas;
