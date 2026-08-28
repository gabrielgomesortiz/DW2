export default function StatusReserva({ status }) {
  const classe =
    status === "em andamento" ? "status--andamento" : "status--confirmada";

  return <span className={`status ${classe}`}>{status}</span>;
}