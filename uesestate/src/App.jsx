import { useState } from "react"


function App() {
  const [contador, setContador] = useState(0)

  const soma = () => {
    setContador(prev => prev + 1)
  }
  const diferenca = () => {
    setContador(prev => prev - 1)

  }
  const zerar = () => {
    setContador(0)
  }


  return (
    <>
      <h1>{contador}</h1>
      <button onClick={soma} disabled={contador === 10}>implementa 1x</button>
      <button onClick={diferenca} disabled={contador === 0}> diferença</button>
      <button onClick={zerar}>zerar contador</button>

    </>
  )
}

export default App
