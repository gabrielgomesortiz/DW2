import ListaReservas from "../components/ListaReservas";

export default function Reservas({ reservas, mudarStatus }) {
  return (
    <main>
      <p className="sobretitulo">Agenda do dia</p>
      <h1>Reservas</h1>

      <ListaReservas
        reservas={reservas}
        onAlterarStatus={mudarStatus}
      />
    </main>
  );
}