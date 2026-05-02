import { useState } from 'react'

function App() {
  const [texto, setTexto] = useState('')
  const [tarefas, setTarefas] = useState([])

  function adicionar() {
    if (!texto) return

    setTarefas([
      ...tarefas,
      { texto, concluida: false }
    ])
    setTexto('')
  }

  function alternar(i) {
    const copia = [...tarefas]
    copia[i].concluida = !copia[i].concluida
    setTarefas(copia)
  }

  function remover(i) {
    setTarefas(tarefas.filter((_, index) => index !== i))
  }

  const total = tarefas.length
  const concluidas = tarefas.filter(t => t.concluida).length

  return (
    <div>
      <h1>To-do</h1>

      <input
        value={texto}
        onChange={e => setTexto(e.target.value)}
      />

      <button onClick={adicionar}>Adicionar</button>

      {tarefas.length === 0 && (
        <p>Nenhuma tarefa ainda</p>
      )}

      <ul>
        {tarefas.map((t, i) => (
          <li key={i}>
            <input
              type="checkbox"
              checked={t.concluida}
              onChange={() => alternar(i)}
            />
            {t.texto}
            <button onClick={() => remover(i)}>X</button>
          </li>
        ))}
      </ul>

      <p>
        {concluidas} de {total} tarefas concluídas
      </p>

      {total > 0 && concluidas === total && (
        <p>Parabéns!</p>
      )}
    </div>
  )
}

export default App