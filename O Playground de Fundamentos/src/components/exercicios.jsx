import { useState, useEffect } from "react";
// styles
// Estilizações Inline Auxiliares
const boxStyle = {
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#f7fafc',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
};

const inputStyle = {
    padding: '8px 12px',
    width: '100%',
    maxWidth: '300px',
    marginBottom: '12px',
    borderRadius: '4px',
    border: '1px solid #cbd5e0'
};

const buttonStyle = {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#4a5568',
    color: 'white',
    cursor: 'pointer',
    fontWeight: '500'
};
// ============================================================================
// EXERCÍCIO 1: O Rastreador de Título (Dependências)
// ============================================================================
export const Exercicio1 = () => {
    const [texto, setTexto] = useState("");
    const [contador, setContador] = useState(0);
    // TODO 1: Crie um useEffect que atualize o document.title da aba para o valor da string de 'texto'.
    useEffect(() => {
        document.title = texto
        console.log("Titulo atualizado")
    }, [texto]);

    return (
        <div style={boxStyle}>
            <h3 style={{ marginTop: 0, color: '#333' }}>1. O Rastreador de Título</h3>
            <input
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                placeholder="Digite para mudar a aba do navegador..."
                style={inputStyle}
            />
            <button style={buttonStyle} onClick={() => setContador(c => c + 1)}>
                Cliques ignorados pelo efeito: {contador}
            </button>
        </div>
    );
}

// ============================================================================
// EXERCÍCIO 2: O Cronômetro Caótico (Função de Limpeza)
// ============================================================================
function Cronometro() {
    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSegundos((s) => s + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log("Cronômetro desligado com segurança!");
        };

    }, [segundos]);

    return <h2 style={{ color: '#e53e3e', margin: '10px 0' }}>Tempo ativo: {segundos}s</h2>;
}

export const Exercicio2 = () => {
    const [mostrar, setMostrar] = useState(false);

    return (
        <div style={boxStyle}>
            <h3 style={{ marginTop: 0, color: '#333' }}>2. O Cronômetro e a Vassoura</h3>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>
                Ative o cronômetro, aguarde alguns segundos, oculte-o e exiba-o novamente. Observe o comportamento dos segundos.
            </p>
            <button style={buttonStyle} onClick={() => setMostrar(!mostrar)}>
                {mostrar ? "❌ Ocultar Cronômetro" : "⏱️ Mostrar Cronômetro"}
            </button>
            {mostrar && <Cronometro />}
        </div>
    );
}

// ============================================================================
// EXERCÍCIO 3: O Cofre Seguro (JSON + localStorage)
// ============================================================================
export const Exercicio3 = () => {
    const [dadosUser, setDadosUser] = useState({ nome: "", cargo: "" });

    function salvarNoDisco() {
        // TODO 4: Converta o objeto 'dadosUser' em uma string formatada em JSON.
        // TODO 5: Grave essa string no localStorage associando-a à chave '@play:user'.
        const dadosUserString = JSON.stringify(dadosUser)
        const foi = localStorage.setItem('@play:user', dadosUserString)

        console.log(foi)
        alert("Código de salvamento executado!")
    }

    function carregarDoDisco() {
        // TODO 6: Recupere o texto bruto armazenado na chave '@play:user'.
        // TODO 7: Verifique se o retorno não é nulo. Se houver dado, converta-o de volta para objeto usando JSON.parse.
        // TODO 8: Atualize o estado da aplicação aplicando setDadosUser com o objeto recuperado.
        const dadosUserString = localStorage.getItem('@play:user');
        if (!dadosUserString){
            alert("vazio")
            return;
        }
        const dadosUserObj = JSON.parse(dadosUserString)
        
        setDadosUser(dadosUserObj)

        alert("Código de carregamento executado!");
    }

    return (
        <div style={boxStyle}>
            <h3 style={{ marginTop: 0, color: '#333' }}>3. O Cofre Seguro (Serialização)</h3>
            <input
                placeholder="Nome do Profissional"
                value={dadosUser.nome}
                onChange={e => setDadosUser({ ...dadosUser, nome: e.target.value })}
                style={inputStyle}
            /><br />
            <input
                placeholder="Cargo Ocupado"
                value={dadosUser.cargo}
                onChange={e => setDadosUser({ ...dadosUser, cargo: e.target.value })}
                style={inputStyle}
            /><br />
            <div style={{ display: 'flex', gap: '10px' }}>
                <button style={{ ...buttonStyle, backgroundColor: '#2b6cb0' }} onClick={salvarNoDisco}>💾 Salvar no Disco</button>
                <button style={{ ...buttonStyle, backgroundColor: '#2f855a' }} onClick={carregarDoDisco}>📂 Carregar do Disco</button>
                <button style={{ ...buttonStyle, backgroundColor: '#718096' }} onClick={() => setDadosUser({ nome: "", cargo: "" })}>Limpar Campos</button>
            </div>
        </div>
    );
}