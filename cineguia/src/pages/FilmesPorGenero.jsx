import { Link, useParams } from "react-router";
import filmes from "../data/filmes";

export default function FilmesPorGenero() {
  const { genero } = useParams();

  const filmesDoGenero = filmes.filter(
    (filme) => filme.genero === genero
  );

  return (
    <div>
      <h1>Filmes do gênero: {genero}</h1>

      {filmesDoGenero.length === 0 ? (
        <p>Não há filmes disponíveis nesse gênero.</p>
      ) : (
        <ul>
          {filmesDoGenero.map((filme) => (
            <li key={filme.id}>
              <Link to={`/generos/${filme.genero}`}>
                {filme.titulo}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <h2>Gêneros</h2>
      <ul>
        {[...new Set(filmes.map((filme) => filme.genero))].map((genero) => (
          <li key={genero}>
            <Link to={`/filmes/genero/${genero}`}>
              {genero}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}