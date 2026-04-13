import './index.css'
import './App.css'
import { ProfileCard } from './components/ProfileCard'
// App.jsx

export default function App() {
  // 1. Nossa "Base de Dados" fictícia (Array de Objetos)
  const profiles = [
  { id: 1, name: "Mateus Silva", role: "Dev Front-end", status: "online", isVerified: true, bio: "Apaixonado por React e CSS moderno." },
  { id: 2, name: "Ana Souza", role: "Dev Back-end", status: "offline", isVerified: false, bio: "Trabalho com APIs e Node.js." },
  { id: 3, name: "Carlos Pereira", role: "Full Stack", status: "online", isVerified: true, bio: "Gosto de resolver problemas complexos." },
  { id: 4, name: "Juliana Costa", role: "UI Designer", status: "away", isVerified: true, bio: "Foco em design limpo e intuitivo." },
  { id: 5, name: "Rafael Lima", role: "DevOps", status: "online", isVerified: false, bio: "Automatização e cloud são meu forte." },
  { id: 6, name: "Fernanda Alves", role: "QA Tester", status: "offline", isVerified: false, bio: "Garantindo qualidade em cada release." },
  { id: 7, name: "Bruno Rocha", role: "Mobile Dev", status: "online", isVerified: true, bio: "Apps Android e iOS performáticos." },
  { id: 8, name: "Camila Martins", role: "Data Scientist", status: "away", isVerified: true, bio: "Dados contam histórias." },
  { id: 9, name: "Lucas Fernandes", role: "Security Analyst", status: "online", isVerified: false, bio: "Segurança acima de tudo." },
  { id: 10, name: "Patricia Gomes", role: "Product Manager", status: "offline", isVerified: true, bio: "Transformo ideias em produtos." },
  { id: 11, name: "Diego Carvalho", role: "Backend Java", status: "online", isVerified: true, bio: "Especialista em microsserviços." },
  { id: 12, name: "Marina Ribeiro", role: "UX Researcher", status: "away", isVerified: false, bio: "Entendendo o comportamento do usuário." },
  { id: 13, name: "Eduardo Nunes", role: "Cloud Engineer", status: "online", isVerified: true, bio: "AWS e arquitetura escalável." },
  { id: 14, name: "Larissa Teixeira", role: "Frontend Angular", status: "offline", isVerified: false, bio: "Interfaces dinâmicas e rápidas." },
  { id: 15, name: "Gabriel Santos", role: "Full Stack", status: "online", isVerified: true, bio: "Do banco ao front com eficiência." },
  { id: 16, name: "Beatriz Melo", role: "Scrum Master", status: "away", isVerified: true, bio: "Agilidade e organização." },
  { id: 17, name: "Renato Barros", role: "Dev Python", status: "online", isVerified: false, bio: "Scripts e automações inteligentes." },
  { id: 18, name: "Aline Freitas", role: "Data Analyst", status: "offline", isVerified: true, bio: "Insights através de dados." },
  { id: 19, name: "Victor Hugo", role: "Game Dev", status: "online", isVerified: false, bio: "Criando experiências interativas." },
  { id: 20, name: "Isabela Duarte", role: "UI/UX Designer", status: "away", isVerified: true, bio: "Design centrado no usuário." },
  { id: 21, name: "Thiago Moreira", role: "Backend PHP", status: "online", isVerified: false, bio: "Sistemas web robustos." },
  { id: 22, name: "Vanessa Lopes", role: "Frontend Vue", status: "offline", isVerified: true, bio: "Interfaces reativas." },
  { id: 23, name: "Felipe Araújo", role: "Dev C#", status: "online", isVerified: true, bio: "Aplicações corporativas." },
  { id: 24, name: "Carla Batista", role: "Tech Writer", status: "away", isVerified: false, bio: "Documentação clara e objetiva." },
  { id: 25, name: "André Castro", role: "SRE", status: "online", isVerified: true, bio: "Alta disponibilidade sempre." },
  { id: 26, name: "Paula Mendes", role: "AI Engineer", status: "offline", isVerified: true, bio: "Modelos de machine learning." },
  { id: 27, name: "Rodrigo Pires", role: "Frontend React", status: "online", isVerified: false, bio: "Componentização eficiente." },
  { id: 28, name: "Tatiane Rocha", role: "Backend Go", status: "away", isVerified: true, bio: "Performance e concorrência." },
  { id: 29, name: "Leonardo Farias", role: "Dev Ruby", status: "online", isVerified: false, bio: "Produtividade com Rails." },
  { id: 30, name: "Sofia Barros", role: "Product Designer", status: "offline", isVerified: true, bio: "Design estratégico." }
];
  return (
    <div className="container">
      <header className="header">
        <h1>Minha Rede de Contatos</h1>
        <p>Conectando talentos no universo tech</p>
      </header>

      <div className="cards-grid">
        {/* 2. Transformando os dados em Componentes! */}
        {profiles.map((user) => (
          <ProfileCard
            key={user.id}
            name={user.name}
            role={user.role}
            status={user.status}
            bio = {user.bio}
          />
        ))}
      </div>
    </div>
  );
}
