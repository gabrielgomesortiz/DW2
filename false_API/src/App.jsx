import { useState } from "react";
import "./App.css";

// ============================================================================
// SIMULADOR DE API (Não altere esta função)
// ============================================================================
// Esta função finge ser um servidor na internet. Ela recebe o que deve devolver,
// quanto tempo deve demorar e se deve simular uma queda de conexão.
function fakeApi(dados, tempoMs = 2000, deveFalhar = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (deveFalhar) {
        reject(new Error("Falha Crítica 500: O servidor de banco de dados caiu."));
      } else {
        resolve(dados);
      }
    }, tempoMs);
  });
}

// ============================================================================
// EXERCÍCIO 1: O Await Básico (Sem Tratamento de Erros)
// ============================================================================
function Exercicio1() {
  const [mensagem, setMensagem] = useState("Status: Aguardando clique...");

  // TODO 1: Esta função precisa ser capaz de pausar no tempo. Adicione a palavra correta.
  async function baixarDadosBasicos() {
    setMensagem("🔄 Conectando ao servidor...");
    const resposta = await fakeApi("✅ Download concluído com sucesso!");
    setMensagem(resposta);
  }

  return (
    <section className="exercise-panel">
      <h2>1. O Await Básico</h2>
      <p>Entendendo o fluxo de espera do JavaScript no navegador.</p>

      <div className="status-box">{mensagem}</div>

      <button className="btn" onClick={baixarDadosBasicos}>
        Iniciar Download (2s)
      </button>
    </section>
  );
}

// ============================================================================
// EXERCÍCIO 2: O Cinto de Segurança (Try / Catch / Finally)
// ============================================================================
function Exercicio2() {
  const [status, setStatus] = useState("Pronto para testar falhas.");
  const [isProcessando, setIsProcessando] = useState(false);

  // TODO 4: Transforme esta função em assíncrona
  async function realizarTransacaoBancaria() {
    setIsProcessando(true);
    setStatus("🔄 Processando pagamento na operadora...");
    try {
      const resultado = await fakeApi("Transação Aprovada", 3000, true);
      setStatus(resultado);
    } catch (erro) {
      setStatus("❌ ERRO: " + erro.message);
    } finally {
      setIsProcessando(false);
    }
  }

  return (
    <section className="exercise-panel">
      <h2>2. Resiliência: Try/Catch/Finally</h2>
      <p>A internet é imprevisível. Este botão simula uma queda de servidor no meio de uma compra.</p>

      <div className="status-box">{status}</div>

      <button
        className="btn btn-danger"
        onClick={realizarTransacaoBancaria}
        disabled={isProcessando}
      >
        {isProcessando ? "Aguarde..." : "Aprovar Compra Arriscada"}
      </button>
    </section>
  );
}

// ============================================================================
// EXERCÍCIO 3: Unindo a Tríade de Estados do React
// ============================================================================
function Exercicio3() {
  // A Tríade de Ouro para qualquer tela que consome internet:
  const [loading, setLoading] = useState(false);
  const [produtos, setProdutos] = useState([]);
  const [erro, setErro] = useState(null);

  async function carregarCatalogo() {
    setLoading(true); // Ligar o reloginho
    setErro(null);    // Limpar erros antigos da tela
    setProdutos([]);  // (Opcional) Limpar a lista antiga
    try {
      const resultado = await fakeApi([
        { id: 1, nome: "Teclado" },
        { id: 2, nome: "Mouse" },
        { id: 3, nome: "Monitor" }
      ], 2500);
      setProdutos(resultado)
    }
    catch (erro) {
      setErro(erro.message);
    }
    finally {
      setLoading(false);
    }
  }
    return (
      <section className="exercise-panel">
        <h2>3. Interface Completa com a Tríade de Estados</h2>
        <p>Controlando o visual (UI) baseado nos eventos do tempo.</p>

        <button className="btn btn-success" onClick={carregarCatalogo} disabled={loading}>
          {loading ? "Buscando dados..." : "Carregar Catálogo da Loja"}
        </button>

        {/* Renderização Condicional da Tríade */}

        {/* 1. Estado de Carregamento */}
        {loading && (
          <div style={{ marginTop: '20px', color: 'var(--accent)' }}>
            🔄 Conectando com a base de dados... Por favor, aguarde.
          </div>
        )}

        {/* 2. Estado de Erro */}
        {erro && (
          <div style={{ marginTop: '20px', color: 'var(--danger)', fontWeight: 'bold' }}>
            ❌ Ocorreu um problema: {erro}
          </div>
        )}

        {/* 3. Estado de Sucesso com Dados */}
        {!loading && !erro && produtos.length > 0 && (
          <div className="grid">
            {produtos.map(p => (
              <div className="card" key={p.id}>
                <strong>ID: {p.id}</strong><br />
                {p.nome}
              </div>
            ))}
          </div>
        )}
      </section>
    );
  }

  // ============================================================================
  // COMPONENTE PRINCIPAL APP
  // ============================================================================
  export default function App() {
    return (
      <div className="container">
        <h1 className="title">O Tempo e o React ⏱️</h1>
        <Exercicio1 />
        <Exercicio2 />
        <Exercicio3 />
      </div>
    );
  }