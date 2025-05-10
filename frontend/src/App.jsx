// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';

import UsersPage from './pages/UsersPage'; // Nova página

import NavBar from './components/NavBar';
function App() {
  return (
    <Router>
      <NavBar /> {/* Navbar aparece em todas as páginas */}
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<HomePage />} />

        {/* Login e Cadastro */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />


        <Route path="/cadastros" element={<UsersPage />} />{/* Nova rota */}

        {/* Redirecionamento padrão (ex: página não encontrada) */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}


export default App;