import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Wszystkie pola są wymagane.');
      return;
    }

    if (email === 'user@example.com' && password === 'password') {
      if (rememberMe) {
        // Logika zapamiętywania użytkownika (np. zapisanie w localStorage)
        localStorage.setItem('user', email);
      }
      navigate('/dashboard');
    } else {
      setError('Nieprawidłowy email lub hasło.');
    }
  };

  return (
    <section className="login-section">
      <div className="container flex flex-c">
        <div className="login-card">
          <h2 className="text-center text-uppercase fw-6">Zaloguj się</h2>
          {error && <p className="error-message">{error}</p>}
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Wprowadź email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Hasło:</label>
              <input
                type="password"
                id="password"
                placeholder="Wprowadź hasło"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="remember-me" className="remember-me-label">
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                Zapamiętaj mnie
              </label>
              <a href="/reset-password" className="forgot-password-link">
                Zapomniałeś hasła?
              </a>
            </div>
            <button type="submit" className="btn btn-primary bg-purple text-white">
              Zaloguj
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
