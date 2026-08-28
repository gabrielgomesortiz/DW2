import CartaoResumo from "../components/CartaoResumo";

export default function Inicio() {
  return (
    <main>
      <p className="sobretitulo">28 de agosto de 2026</p>
      <h1>Reservas de salas</h1>
      <p>Acompanhe rapidamente a ocupação das salas de aula.</p>
      <section className="resumo">
        <CartaoResumo
          titulo="Em andamento"
          valor="1"
          descricao="reservas acontecendo agora"
        />
        <CartaoResumo
          titulo="Confirmadas"
          valor="4"
          descricao="próximas reservas"
        />
        <CartaoResumo
          titulo="Salas ocupadas"
          valor="3/4"
          descricao="salas com reserva ativa"
        />
      </section>
    </main>
  );
}