import { useState } from 'react'

function App() {
  const [claroEscuro, setTema] = useState(0)
  function tema() {
    if (claroEscuro === 0) {
      setTema(claroEscuro = 1)
    } else {
      setTema(claroEscuro = 0)
    }
  }
  return (
    <>
      <button onClick={tema()}>tema</button>
    </>
  )
}

export default App
