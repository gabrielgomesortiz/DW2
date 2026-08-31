import StatusReserva from "./StatusReserva";

export default function ListaReservas({ reservas, onAlterarStatus }) {
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

          <select
            value={reserva.status}
            onChange={(evento) =>
              onAlterarStatus(reserva.id, evento.target.value)
            }
          >
            <option value="confirmada">Confirmada</option>
            <option value="em andamento">Em andamento</option>
            <option value="concluída">Concluída</option>
          </select>
        </li>
      ))}
    </ul>
  );
}