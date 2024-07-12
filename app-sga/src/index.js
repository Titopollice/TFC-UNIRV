import React from "react";
import { createRoot } from "react-dom/client"; // Novo método de importação para React 18
import "./index.css";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container); // Cria um "root" para a aplicação

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
