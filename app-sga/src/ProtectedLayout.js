import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./ProtectedLayout.css"; // Importar o CSS específico para o layout protegido

const ProtectedLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="protected-layout">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default ProtectedLayout;
