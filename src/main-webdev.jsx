import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/base.css';
import './styles/webdev.css';
import WebDevPage from './pages/WebDevPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WebDevPage />
  </StrictMode>
);
