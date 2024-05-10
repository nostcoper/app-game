import { render, screen, fireEvent } from '@testing-library/react';
import Partida from './components/Partida/Partida';
import React from 'react';

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    }
  };
})();

beforeEach(() => {
  // Reset localStorage before each test
  localStorageMock.clear();
  global.localStorage = localStorageMock;
});

test('loads players from localStorage on mount', () => {
  const jugadores = JSON.stringify([{ nombre: 'Jugador 1', Nivel: 1, experiencia: 0, dinero: 100, inventario: [] }]);
  localStorage.setItem('jugadores', jugadores);

  render(<Partida />);

  // Verificar que los jugadores se cargan correctamente
  const playerName = screen.getByText(/Jugador 1/i);
  expect(playerName).toBeInTheDocument();
});
