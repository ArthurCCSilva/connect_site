// src/pages/LoginPage.jsx
import AuthForm from '../components/AuthForm';

const LoginPage = () => {
  return (
    <div>
      <h2>Login</h2>
      <AuthForm isLogin={true} />
    </div>
  );
};

export default LoginPage;