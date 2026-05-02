import { useState } from 'react'

const produtos = [
  { id: 1, nome: 'Mouse', preco: 50 },
  { id: 2, nome: 'Teclado', preco: 100 },
  { id: 3, nome: 'Monitor', preco: 800 },
  { id: 4, nome: 'Headset', preco: 150 }
]

function Loja({ aoAdicionar }) {
  return (
    <div>
      <h2>Loja</h2>

      {produtos.map(p => (
        <div key={p.id}>
          <p>{p.nome} - R$ {p.preco}</p>
          <button onClick={() => aoAdicionar(p)}>
            Adicionar
          </button>
        </div>
      ))}
    </div>
  )
}

function Carrinho({ itens }) {
  const total = itens.reduce((s, i) => s + i.preco, 0)

  return (
    <div>
      <h2>Carrinho</h2>

      {itens.map((i, idx) => (
        <p key={idx}>{i.nome} - R$ {i.preco}</p>
      ))}

      <p>Total: R$ {total}</p>
    </div>
  )
}

function App() {
  const [carrinho, setCarrinho] = useState([])

  function adicionar(produto) {
    setCarrinho([...carrinho, produto])
  }

  return (
    <div style={{ display: 'flex', gap: 40 }}>
      <Loja aoAdicionar={adicionar} />
      <Carrinho itens={carrinho} />
    </div>
  )
}

export default App