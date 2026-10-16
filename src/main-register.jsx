import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/base.css';
import './styles/graphics.css'; // site nav styles
import './styles/register.css';
import RegisterPage from './pages/RegisterPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RegisterPage />
  </StrictMode>
);
