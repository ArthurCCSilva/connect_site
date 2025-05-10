// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4"style={{ backgroundColor: '#ffffff !important' }}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">Connect Site</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fw-bold">
            <li className="nav-item">
              <Link className="nav-link " to="/login">Entrar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Cadastrar-se</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cadastros">Cadastros</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;