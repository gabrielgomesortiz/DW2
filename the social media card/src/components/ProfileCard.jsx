// ProfileCard.jsx
export const ProfileCard = ({ name, role, status, isVerified, bio }) => {
  const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`;

  return (
    <div className={`card ${status}`}>
      <div className="card-header">
        <img src={avatarUrl} alt={name} className="avatar" />
        <span className="status-badge"></span>
      </div>

      <div className="card-body">
        <h3>
          {name}
          {/* 1. &&: Só mostra o selo se isVerified for true */}
          {isVerified && <span className="verified-icon">✔</span>}
        </h3>

        <p className="role-chip">{role}</p>

        {/* 2. ?:: Muda o texto baseado no status */}
        <p className="status-text">
          {status === "online" ? "🟢 Ativo agora" : "🔴 Ausente"}
        </p>

        {/* 3. ??: Mostra a bio ou um aviso se estiver vazia */}
        <p className="bio-text">{bio ?? "Este usuário ainda não escreveu uma bio."}</p>
      </div>

      <button className="connect-btn">
        {status === "online" ? "Conectar" : "Enviar E-mail"}
      </button>
    </div>
  );
};