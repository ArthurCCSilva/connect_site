// src/pages/HomePage.jsx
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Bem-vindo ao Sistema</h1>
      <nav>
        <ul>
          <li><Link to="/login">Entrar</Link></li>
          <li><Link to="/register">Cadastrar-se</Link></li>
          <li><Link to="/cadastros">Ver Cadastros</Link></li> {/* Novo link */}
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;