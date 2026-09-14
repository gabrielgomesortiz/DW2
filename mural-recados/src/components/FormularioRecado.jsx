import { useState } from "react";

export default function FormularioRecado({ aoPublicar }) {
    const [autor, setAutor] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [enviando, setEnviando] = useState(false);
    const [erroEnvio, setErroEnvio] = useState("");
    const [sucesso, setSucesso] = useState(false);

    async function handleSubmit(evento) {
        evento.preventDefault();

        if (!autor.trim() || !mensagem.trim()) {
            setErroEnvio("Preencha seu nome e a mensagem.");
            return;
        }

        setEnviando(true);
        setErroEnvio("");

        try {
            await aoPublicar(autor, mensagem);

            setSucesso(true);

            setTimeout(() => {
                setSucesso(false);
            }, 3000);

            setAutor("");
            setMensagem("");
        } catch (erro) {
            setErroEnvio("Não foi possível publicar o recado.");
            console.error(erro);
        } finally {
            setEnviando(false);
        }
    }

    return (
        <form
            className="formulario-recado"
            onSubmit={handleSubmit}
        >
            <h2>Deixe seu recado</h2>

            <div className="campo">
                <label htmlFor="autor">
                    Seu nome:
                </label>

                <input
                    id="autor"
                    type="text"
                    value={autor}
                    placeholder="Ex: Maria"
                    disabled={enviando}
                    onChange={(evento) =>
                        setAutor(evento.target.value)
                    }
                />
            </div>

            <div className="campo">
                <label htmlFor="mensagem">
                    Mensagem:
                </label>

                <textarea
                    id="mensagem"
                    rows="3"
                    value={mensagem}
                    maxLength={140}
                    placeholder="O que você quer compartilhar com a turma?"
                    disabled={enviando}
                    onChange={(evento) =>
                        setMensagem(evento.target.value)
                    }
                />

                <p>Caracteres restantes: {140 - mensagem.length}</p>
            </div>

            <button
                type="submit"
                disabled={
                    enviando ||
                    !autor.trim() ||
                    !mensagem.trim()
                }
            >
                {enviando
                    ? "Publicando..."
                    : "Publicar Recado"}
            </button>

            {erroEnvio && (
                <p className="erro" role="alert">
                    {erroEnvio}
                </p>
            )}

            {sucesso && (
                <p className="sucesso" role="status">
                    Recado publicado com sucesso!
                </p>
            )}
        </form>
    );
}