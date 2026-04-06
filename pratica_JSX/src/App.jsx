// App.jsx
import './App.css'; // O CSS já está ligado aqui!

function App() {
  // Dados simulando uma resposta da Base de Dados
  const usuarios = [
  { id: 101, nome: "Alice Fonseca", online: true, nivel: "Admin" },
  { id: 102, nome: "Bruno Costa", online: false, nivel: "Usuário" },
  { id: 103, nome: "Carla Mendes", online: true, nivel: "Usuário" },
  { id: 104, nome: "Diego Souza", online: false, nivel: "Admin" },
  { id: 105, nome: "Eduardo Lima", online: true, nivel: "Usuário" },
  { id: 106, nome: "Fernanda Alves", online: false, nivel: "Usuário" },
  { id: 107, nome: "Gustavo Ribeiro", online: true, nivel: "Admin" },
  { id: 108, nome: "Helena Martins", online: false, nivel: "Usuário" },
  { id: 109, nome: "Igor Carvalho", online: true, nivel: "Usuário" },
  { id: 110, nome: "Juliana Rocha", online: false, nivel: "Admin" },
  { id: 111, nome: "Kevin Santos", online: true, nivel: "Usuário" },
  { id: 112, nome: "Larissa Gomes", online: false, nivel: "Usuário" },
  { id: 113, nome: "Marcos Pereira", online: true, nivel: "Admin" },
  { id: 114, nome: "Natália Teixeira", online: true, nivel: "Usuário" },
  { id: 115, nome: "Otávio Fernandes", online: false, nivel: "Usuário" },
  { id: 116, nome: "Patrícia Nunes", online: true, nivel: "Admin" },
  { id: 117, nome: "Rafael Barros", online: false, nivel: "Usuário" },
  { id: 118, nome: "Sabrina Duarte", online: true, nivel: "Usuário" },
  { id: 119, nome: "Thiago Moreira", online: false, nivel: "Admin" },
  { id: 120, nome: "Ursula Batista", online: true, nivel: "Usuário" },
  { id: 121, nome: "Victor Freitas", online: false, nivel: "Usuário" },
  { id: 122, nome: "Wesley Cardoso", online: true, nivel: "Admin" },
  { id: 123, nome: "Ximena Torres", online: false, nivel: "Usuário" },
  { id: 124, nome: "Yuri Farias", online: true, nivel: "Usuário" },
  { id: 125, nome: "Zuleica Pacheco", online: false, nivel: "Admin" },
  { id: 126, nome: "André Cunha", online: true, nivel: "Usuário" },
  { id: 127, nome: "Bianca Melo", online: false, nivel: "Usuário" },
  { id: 128, nome: "Caio Rezende", online: true, nivel: "Admin" },
  { id: 129, nome: "Daniela Borges", online: false, nivel: "Usuário" },
  { id: 130, nome: "Enzo Vieira", online: true, nivel: "Usuário" }
  ];

  return (
    <div className="painel-container">
      <h1 className="titulo-painel">Painel de Administração</h1>
      <div className="grid-usuarios">
        {usuarios.map((user) => (
          <div className="user-card" key={user.id}>
            {user.nivel == "Admin" ? (
              <h2 className="user-nome user-nome-admin">{user.nome}</h2>
            ) : (
              <h2 className="user-nome user-nome-comum">{user.nome}</h2>
            )}
            <p className='user-nivel'>{user.nivel}</p>
            <div className="status-badge">
            {
              user.online?(
                '🟢 online'
              ):(
                '🔴 offline'
              )
            }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;