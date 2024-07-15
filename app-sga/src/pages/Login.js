import React from 'react';
import './Login.css'; // Ajustando o caminho relativo para o CSS
import logo from '../assets/L.jpg' // Ajustando o caminho relativo para a imagem

const Login = () => {
    return (
        
        <div className="container">
            <img src={logo} alt="Logo" className="logo"  />             
            <h1 className="title">Adegas SG</h1>
            <form>
                <input type="text" placeholder="Nome de usuário" required />
                <input type="password" placeholder="Senha" required />
                <button type="submit">Entrar</button>
            </form>
            <a href="#">Esqueceu a senha?</a>
        </div>
        
    );
};

export default Login;
