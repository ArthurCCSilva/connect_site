// frontend/src/components/AuthForm.jsx

import { useState } from 'react';
import { registerUser, loginUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';

//CSS
import './AuthForm.css'; //Importa o CSS externo

const AuthForm = ({ isLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '' // ainda pode existir no state, mas só será usado no cadastro
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const data = await loginUser({ email: formData.email, password: formData.password });
        localStorage.setItem('token', data.token);
        alert('Login realizado!');
        navigate('/');
      } else {
        const data = await registerUser(formData);
        localStorage.setItem('token', data.token);
        alert('Cadastro realizado!');
        navigate('/login');
      }
    } catch (err) {
      setError(err.message || 'Erro no formulário.');
    }
  };

  //AQUI FICA O QUE APARECE NO INDEX.JS
  return (
    <form 
      onSubmit={handleSubmit} 
      className="auth-form needs-validation"
    >
      {!isLogin && (
        <div className="mb-3">
          <label className="form-label">Nome:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Digite seu nome"
            required={!isLogin}
          />
        </div>
      )}

      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
          placeholder="exemplo@email.com"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Senha:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="form-control"
          placeholder="••••••••"
          required
        />
      </div>

      {/* Campo telefone apenas no cadastro */}
      {!isLogin && (
        <div className="mb-3">
          <label className="form-label">Telefone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-control"
            placeholder="(XX) XXXXX-XXXX"
          />
        </div>
      )}

      {error && <p className="text-danger mb-3">{error}</p>}

      <button 
      type="submit" 
      id="button"
      className="btn btn-primary w-100"
      >
      {isLogin ? 'Entrar' : 'Cadastrar'}
      </button>
      
    </form>
  );
};

export default AuthForm;