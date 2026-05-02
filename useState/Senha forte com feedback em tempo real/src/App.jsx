import { useState } from 'react'

function App() {
  const [senha, setSenha] = useState('')

  const tem8 = senha.length >= 8
  const temNumero = /\d/.test(senha)
  const temMaiuscula = /[A-Z]/.test(senha)

  const valido = tem8 && temNumero && temMaiuscula

  return (
    <div>
      <h1>Senha</h1>

      <input
        type="password"
        value={senha}
        onChange={e => setSenha(e.target.value)}
      />

      <p style={{ color: tem8 ? 'green' : 'red' }}>
        {tem8 ? '✓' : '✗'} Pelo menos 8 caracteres
      </p>

      <p style={{ color: temNumero ? 'green' : 'red' }}>
        {temNumero ? '✓' : '✗'} Pelo menos um número
      </p>

      <p style={{ color: temMaiuscula ? 'green' : 'red' }}>
        {temMaiuscula ? '✓' : '✗'} Pelo menos uma maiúscula
      </p>

      <button
        disabled={!valido}
        onClick={() => alert('Senha aceita!')}
      >
        Salvar
      </button>
    </div>
  )
}

export default App