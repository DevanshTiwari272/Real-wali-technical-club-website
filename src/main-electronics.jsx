import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/base.css';
import './styles/graphics.css'; // shared domain-page layout (nav, cards, work, team, join)
import './styles/electronics.css';
import ElectronicsPage from './pages/ElectronicsPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ElectronicsPage />
  </StrictMode>
);
