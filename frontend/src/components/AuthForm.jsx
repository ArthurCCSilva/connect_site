// src/components/AuthForm.jsx
import React, { useState } from 'react';
import { registerUser, loginUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const AuthForm = ({ isLogin }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
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

  return (
    <form onSubmit={handleSubmit}>
      {!isLogin && (
        <div>
          <label>Nome:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
        </div>
      )}

      <div>
        <label>Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
      </div>

      <div>
        <label>Senha:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit">{isLogin ? 'Entrar' : 'Cadastrar'}</button>
    </form>
  );
};

export default AuthForm;