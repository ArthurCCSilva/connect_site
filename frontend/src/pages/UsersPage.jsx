import React, { useEffect, useState } from 'react';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/auth/cadastros');
        if (!response.ok) throw new Error('Erro ao carregar usuários');

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Lista de Cadastros</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email} ({new Date(user.createdAt).toLocaleDateString()})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersPage;