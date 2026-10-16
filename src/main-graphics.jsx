import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/base.css';
import './styles/graphics.css';
import GraphicsPage from './pages/GraphicsPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GraphicsPage />
  </StrictMode>
);
