import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Produto from "./pages/Produto";
import ContasPagar from "./pages/ContasPagar";
import ContasReceber from "./pages/ContasReceber";
import Fornecedor from "./pages/Fornecedor";
import Vendas from "./pages/Vendas";
import Relatorio from "./pages/Relatorio";
import Cliente from "./pages/Cliente";
import ProtectedLayout from "./components/ProtectedLayout"; // Importando o layout protegido

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/home" element={<Home />} />
      <Route
        path="/produto"
        element={
          <ProtectedLayout>
            <Produto />
          </ProtectedLayout>
        }
      />
      <Route
        path="/contasPagar"
        element={
          <ProtectedLayout>
            <ContasPagar />
          </ProtectedLayout>
        }
      />
      <Route
        path="/contasReceber"
        element={
          <ProtectedLayout>
            <ContasReceber />
          </ProtectedLayout>
        }
      />
      <Route
        path="/fornecedores"
        element={
          <ProtectedLayout>
            <Fornecedor />
          </ProtectedLayout>
        }
      />
      <Route
        path="/vendas"
        element={
          <ProtectedLayout>
            <Vendas />
          </ProtectedLayout>
        }
      />
      <Route
        path="/relatorio"
        element={
          <ProtectedLayout>
            <Relatorio />
          </ProtectedLayout>
        }
      />
      <Route
        path="/cliente"
        element={
          <ProtectedLayout>
            <Cliente />
          </ProtectedLayout>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
