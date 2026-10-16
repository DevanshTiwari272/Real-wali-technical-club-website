import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/base.css';
import './styles/graphics.css'; // shared domain-page layout (nav, section heads, frames)
import './styles/events.css';
import EventsPage from './pages/EventsPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EventsPage />
  </StrictMode>
);
