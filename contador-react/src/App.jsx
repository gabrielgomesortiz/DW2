import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [contador, setContador] = useState(0);
  const [historico, setHistorico] = useState([]);
  return (
    <div className={styles.container}>
      <h1>Contador</h1>

      <p className={styles.valor}>{contador}</p>

      <div className={styles.botoes}>
        <button onClick={() => setContador(contador + 1)}>+</button>
        <button onClick={() => {
          if (contador <= 0) {
            alert('faz isso não')
          }
          else {
            setContador(contador - 1)
            setHistorico(setHistorico(setHistorico += String(contador)))
          }
        }}>-</button>
      </div>
      <p className={styles.historico}>{historico}</p>
    </div>
  );
}

export default App;