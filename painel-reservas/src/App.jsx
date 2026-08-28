import { Route, Routes } from "react-router";
import Cabecalho from "./components/Cabecalho";
import Inicio from "./pages/Inicio";
import Reservas from "./pages/Reservas";
import Salas from "./pages/Salas";

export default function App() {
  const [reservasAtuais, setReservasAtuais] = useState(reservas);
  return (
    <>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/salas" element={<Salas />} />
      </Routes>
    </>
  );
}