import { useState } from "react";
import { Route, Routes } from "react-router";

import Cabecalho from "./components/Cabecalho";
import PaginaNaoEncontrada from "./pages/PaginaNaoEncontrada";
import Inicio from "./pages/Inicio";
import Reservas from "./pages/Reservas";
import Salas from "./pages/Salas";

import {reservas} from "./data/reservas";

export default function App() {
  const [reservasAtuais, setReservasAtuais] = useState(reservas);

  function mudarStatus(id, novoStatus) {
    setReservasAtuais((estadoAnterior) => {
      return estadoAnterior.map((reserva) => {
        if (reserva.id === id) {
          return {
            ...reserva,
            status: novoStatus,
          };
        }

        return reserva;
      });
    });
  }

  return (
    <>
      <Cabecalho reservas={reservasAtuais} />

      <Routes>
        <Route
          path="/"
          element={<Inicio reservas={reservasAtuais} />}
        />

        <Route
          path="/reservas"
          element={
            <Reservas
              reservas={reservasAtuais}
              mudarStatus={mudarStatus}
            />
          }
        />

        <Route
          path="/salas"
          element={<Salas reservas={reservasAtuais} />}
        />

        <Route path="*" element={<PaginaNaoEncontrada />} />
      </Routes>
    </>
  );
}