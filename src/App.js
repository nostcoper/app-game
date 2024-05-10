import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MenuInicio } from "./components/Inicio/inicio";
import {ConfiguracionInicio} from "./components/Configuracion/Configuracion";
import {Partida} from "./components/Partida/Partida"

import { Router, Route, Routes } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<MenuInicio />} />
          <Route path="/Setup" element={<ConfiguracionInicio />} />
          <Route path="/Partida" element={<Partida />} />
        </Routes>
      </div>
  );
}

export default App;
