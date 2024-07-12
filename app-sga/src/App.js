import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes"; // Certifique-se de que o caminho está correto
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="main-container">
        <AppRoutes />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
