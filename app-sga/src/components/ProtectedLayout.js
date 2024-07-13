import React from "react";
import Header from "./Header"; // Certifique-se de que o caminho está correto
import "./ProtectedLayout.css";

const ProtectedLayout = ({ children }) => {
  return (
    <div className="protected-layout-container">
      <Header />
      <div className="content">{children}</div>
    </div>
  );
};

export default ProtectedLayout;
