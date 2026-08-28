import ListaReservas from "../components/ListaReservas";
import { reservas } from "../data/reservas";

export default function Reservas() {
  return (
    <main>
      <p className="sobretitulo">Agenda do dia</p>
      <h1>Reservas</h1>
      <ListaReservas reservas={reservas} />
    </main>
  );
}