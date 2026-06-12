import { useEffect, useState } from "react";

function GithubCard() {
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const [dev, setDev] = useState(null);
  const [nomeDev, setNomeDev] = useState("");

  async function buscarDev(usuario) {
    try {
      setLoading(true);
      setErro(null);

      const resposta = await fetch(
        `https://api.github.com/users/${usuario}`
      );

      if (!resposta.ok) {
        throw new Error("Usuário não encontrado.");
      }

      const dados = await resposta.json();
      setDev(dados);
    } catch (err) {
      setErro(err.message);
      setDev(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    buscarDev("torvalds");
  }, []);

  return (
    <section className="card">
      <h2>Card do GitHub</h2>

      <div className="search-row">
        <input
          type="text"
          placeholder="Digite o nome do dev"
          value={nomeDev}
          onChange={(e) => setNomeDev(e.target.value)}
          maxLength={30}
        />

        <button
          onClick={() => buscarDev(nomeDev)}
          disabled={loading}
        >
          {loading ? "Buscando..." : "Buscar"}
        </button>
      </div>

      {erro && <div className="feedback error">{erro}</div>}

      {loading && (
        <div className="feedback loading">
          Carregando dados do GitHub...
        </div>
      )}

      {dev && (
        <div className="result-panel github-profile">
          <img
            src={dev.avatar_url}
            alt={`Avatar de ${dev.login}`}
          />

          <div>
            <h3>
              {dev.name} (@{dev.login})
            </h3>

            <p>{dev.bio}</p>

            <p>
              <strong>Seguidores:</strong> {dev.followers}
            </p>

            <p>
              <strong>Repositórios:</strong> {dev.public_repos}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default GithubCard;