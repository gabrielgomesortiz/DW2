import { NavLink } from "react-router";

<NavLink to="/reservas">Reservas</NavLink>;

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <span className="marca">Reservas</span>
      <nav>
        <NavLink to="/resumo">Resumo</NavLink>
        <NavLink to="/reservas">Reservas</NavLink>
        <NavLink to="/salas">Reservas</NavLink>
      </nav>
      <p>1 em andamento</p>
    </header>
  );
}