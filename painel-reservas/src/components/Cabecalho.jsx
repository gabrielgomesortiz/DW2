import { NavLink } from "react-router";

export default function Cabecalho({ reservas }) {
  const quantidadeEmAndamento = reservas.filter(
    (reserva) => reserva.status === "em andamento"
  ).length;

  return (
    <header className="cabecalho">
      <span className="marca">Reservas</span>

      <nav>
        <NavLink to="/">Resumo</NavLink>
        <NavLink to="/reservas">Reservas</NavLink>
        <NavLink to="/salas">Salas</NavLink>
      </nav>

      <p>{quantidadeEmAndamento} em andamento</p>
    </header>
  );
}