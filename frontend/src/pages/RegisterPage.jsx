// src/pages/RegisterPage.jsx

import AuthForm from '../components/AuthForm';

const RegisterPage = () => {
  return (
    <div>
      <h2>Cadastro</h2>
      <AuthForm isLogin={false} />
    </div>
  );
};

export default RegisterPage;