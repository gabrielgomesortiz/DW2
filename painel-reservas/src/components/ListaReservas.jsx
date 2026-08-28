import StatusReserva from "./StatusReserva";

export default function ListaReservas({ reservas }) {
  return (
    <ul className="lista-reservas">
      {reservas.map((reserva) => (
        <li key={reserva.id}>
          <div>
            <strong>{reserva.turma}</strong>
            <p>
              {reserva.sala} · {reserva.horario}
            </p>
          </div>
          <StatusReserva status={reserva.status} />
        </li>
      ))}
    </ul>
  );
}