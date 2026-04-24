import { use, useState } from "react"


function App() {
  const [contador, setContador] = useState(0)
  const soma = () => {
    setContador(contador + 1)
  }
  const soma2 = () => {
    setContador((contador) => contador + 1)
    setContador((contador) => contador + 1)
    setContador((contador) => contador + 1)
  }


return (
  <>
    <h1>{contador}</h1>
    <button onClick={soma}>implementa 1x</button>
    <button onClick={soma2}>implementa 3x</button>

  </>
)
}

export default App
