import { useState } from 'react'
import './App.css'

function App() {
  const [temaEscuro, setTemaEscuro] = useState(false)

  return (
    <div
      style={{
        backgroundColor: temaEscuro ? '#000' : '#fff',
        color: temaEscuro ? '#fff' : '#000',
        height: '100vh',
      }}
    >
      <button onClick={() => setTemaEscuro(!temaEscuro)}>
        {temaEscuro ? 'Modo claro' : 'Modo escuro'}
      </button>
    </div>
  )
}

export default App