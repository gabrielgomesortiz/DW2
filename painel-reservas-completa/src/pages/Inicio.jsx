import { Link } from "react-router";
import CartaoResumo from "../components/CartaoResumo";
import { useReservas } from "../context/ReservasContext";
import { salas } from "../data/reservas";

export default function Inicio() {
  const { reservas } = useReservas();

  const emAndamento = reservas.filter(
    (reserva) => reserva.status === "em andamento"
  ).length;

  const confirmadas = reservas.filter(
    (reserva) => reserva.status === "confirmada"
  ).length;

  const salasOcupadas = new Set(
    reservas
      .filter((reserva) => reserva.status !== "cancelada")
      .map((reserva) => reserva.salaId)
  ).size;

  return (
    <main>
      <p className="sobretitulo">28 de agosto de 2026</p>

      <h1>Reservas de salas</h1>

      <p className="introducao">
        Acompanhe rapidamente a ocupação das salas de aula.
      </p>

      <section className="resumo" aria-label="Resumo de reservas">
        <CartaoResumo
          titulo="Em andamento"
          valor={emAndamento}
          descricao="reservas acontecendo agora"
        />

        <CartaoResumo
          titulo="Confirmadas"
          valor={confirmadas}
          descricao="próximas reservas do dia"
        />

        <CartaoResumo
          titulo="Salas ocupadas"
          valor={`${salasOcupadas}/${salas.length}`}
          descricao="salas com reserva ativa"
        />
      </section>

      <section className="atalhos" aria-label="Atalhos">
        <Link to="/reservas">Ver todas as reservas</Link>
        <Link to="/salas">Consultar salas</Link>
      </section>
    </main>
  );
}
