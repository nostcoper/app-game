import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ConfiguracionInicio = () => {
  const [numJugadores, setNumJugadores] = useState(2);
  const [jugadores, setJugadores] = useState([
    {
      nombre: "Jugador 1",
      Nivel: 5,
      experiencia: 5,
      dinero: 0,
      inventario: ["hola", "x"],
    },
    {
      nombre: "Jugador 2",
      experiencia: 0,
      Nivel: 0,
      dinero: 0,
      inventario: [],
    },
  ]);

  const handleNumJugadoresChange = (event) => {
    const cantidad = parseInt(event.target.value);
    setNumJugadores(cantidad);
    setJugadores(
      Array.from({ length: cantidad }, (_, index) => ({
        nombre: `Jugador ${index + 1}`,
        Nivel: 0,
        experiencia: 0,
        dinero: 0,
        inventario: [],
      }))
    );
  };

  const handleNombreChange = (event, index) => {
    if (index >= 0 && index < jugadores.length) {
      const nuevosJugadores = [...jugadores];
      nuevosJugadores[index].nombre = event.target.value;
      setJugadores(nuevosJugadores);
    }
  };

  const handleInicioPartida = () => {
    localStorage.setItem("jugadores", JSON.stringify(jugadores));
  };

  return (
    <div className="container col-10 my-5">
      <div className="d-flex align-items-center justify-content-between m-auto">
        <label htmlFor="numJugadores" className="form-label">
          Número de jugadores (entre 2 y 4):{" "}
        </label>
        <div className="col-2">
          <input
            type="number"
            id="numJugadores"
            className="form-control"
            min={2}
            max={4}
            value={numJugadores}
            onChange={handleNumJugadoresChange}
          />
        </div>
      </div>

      {Array.from({ length: numJugadores }, (_, index) => (
        <div key={index} className="mt-2 col-12 text-start">
          <label htmlFor={`jugador-${index}`} className="form-label text-start">
            Jugador {index + 1}:{" "}
          </label>
          <input
            type="text"
            id={`jugador-${index}`}
            className="form-control"
            value={jugadores[index]?.nombre || ""}
            onChange={(event) => handleNombreChange(event, index)}
          />
        </div>
      ))}

      <Link to="/Partida" className="btn btn-primary m-2" onClick={handleInicioPartida}>
        Iniciar Partida
      </Link>
    </div>
  );
};

export default ConfiguracionInicio;
