import { use, useState } from "react"


function App() {
  const [contador, setContador] = useState(0)
  const soma = () => {
    setContador(contador + 1)
  }
  const soma2 = () => {
    contador == 0 ?
      setContador(contador + 1 * 3)
      :
      setContador(contador * 3)
  }
  const diferenca = () => {
    contador != 0 ?
      setContador(contador - 1)
      :
      alert("não pode")

  }
  const zerar = () => {
    contador != 0 ?
      setContador(0)
      :
      alert("não pode")

  }


  return (
    <>
      <h1>{contador}</h1>
      <button onClick={soma}>implementa 1x</button>
      <button onClick={soma2}>implementa 3x</button>
      <button onClick={diferenca}> diferença</button>
      <button onClick={zerar}>zerar contador</button>

    </>
  )
}

export default App
