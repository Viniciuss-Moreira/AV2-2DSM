import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MOCK_USERS = {
  'admin': '123',
  'eng_aero': '123',
  'eng_prod': '123'
};

export function useAuthViewModel() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (MOCK_USERS[username as keyof typeof MOCK_USERS] === password) {
      // For a real app we'd save a token/role here
      navigate('/dashboard');
    } else {
      setError('Usuário ou senha incorretos. Tente admin, eng_aero ou eng_prod (senha: 123).');
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    login,
    error
  };
}
