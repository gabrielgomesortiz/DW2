import { useState } from 'react'

function App() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: ''
  })

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const podeCadastrar =
    form.nome !== '' &&
    form.email !== '' &&
    form.senha.length >= 6

  function cadastrar() {
    alert('Cadastrado!')
  }

  return (
    <div>
      <h1>Cadastro</h1>

      <input
        name="nome"
        placeholder="Nome"
        value={form.nome}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        name="senha"
        type="password"
        placeholder="Senha"
        value={form.senha}
        onChange={handleChange}
      />

      <button
        disabled={!podeCadastrar}
        onClick={cadastrar}
      >
        Cadastrar
      </button>

      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  )
}

export default App