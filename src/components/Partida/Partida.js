import React, { useEffect, useState } from "react";

export const Partida = () => {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    const jugadoresGuardados = JSON.parse(localStorage.getItem("jugadores"));
    if (jugadoresGuardados) {
      setJugadores(jugadoresGuardados);
    }
  }, []);

 const puntosRequeridosPorNivel = [0, 3, 5, 7, 10, 15];

 const actualizarExperiencia = (index, cantidadExp) => {
    const nuevosJugadores = [...jugadores];
    const jugador = nuevosJugadores[index];
  
    const nivelActual = jugador.Nivel;
    const puntosRequeridos = puntosRequeridosPorNivel[nivelActual + 1];
  
    jugador.experiencia += cantidadExp;
  
    if (jugador.experiencia >= puntosRequeridos && nivelActual < 5) {
      jugador.Nivel += 1;
      jugador.experiencia -= puntosRequeridos;
    }
  
    setJugadores(nuevosJugadores);
    localStorage.setItem("jugadores", JSON.stringify(nuevosJugadores));
  };
  
return (
  <div className="container col-8 mt-5">
    <div className="row">
      {jugadores.map((jugador, index) => {
        const nivelActual = jugador.Nivel;
        const puntosRequeridos = puntosRequeridosPorNivel[nivelActual+1];
        const puntosExperiencia = jugador.experiencia;

        let barraProgreso = 0;
        if (nivelActual < 5) {
          barraProgreso = Math.min( ((puntosExperiencia / puntosRequeridos)) *100, 100);
        }else{
            barraProgreso=100
        }

        return (
            <div key={index} className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-between align-items-center">
                    {jugador.nombre}
                    <span className="badge bg-primary rounded-circle">
                      Nivel {jugador.Nivel}
                    </span>
                  </h5>
                  <div className="text-end mb-3">
                    <div className="d-flex justify-content-between">
                      <p>
                        <strong>Dinero:</strong> <span>{jugador.dinero}</span>
                      </p>
                      <p>
                        <strong>Experiencia:</strong> <span>{jugador.experiencia}</span>
                      </p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${barraProgreso}%` }}
                        aria-valuenow={barraProgreso}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                    <h4>Ganancia de Exp</h4>
                  <div className="row border m-auto">
<button
                      className="btn btn-success col-auto mx-1"
                      onClick={() => actualizarExperiencia(index, 1)}
                    >
                      +1
                    </button>
                    <button
                      className="btn btn-success col-auto mx-1"
                      onClick={() => actualizarExperiencia(index, 2)}
                    >
                      +2
                    </button>
                    <button
                      className="btn btn-success col-auto mx-1"
                      onClick={() => actualizarExperiencia(index, 4)}
                    >
                      +4
                    </button>
                    <button
                      className="btn btn-success col-auto mx-1"
                      onClick={() => actualizarExperiencia(index, 5)}
                    >
                      +5
                    </button>
                  </div>
                  <p className="text-end">
                    <strong>Inventario:</strong>{" "}
                    <span>{jugador.inventario.join(", ")}</span>
                  </p>
                </div>
              </div>
            </div>
          );

      })}
    </div>
  </div>
);
  
};

export default Partida;
