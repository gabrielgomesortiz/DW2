import { useState } from "react"


function App() {
  const [contador, setContador] = useState(0)
  const soma = () => {
    contador++
  }
  return (
    <>
    <h1>{contador}</h1>
    <button onClick={soma}>+</button>
    </>
  )
}

export default App
