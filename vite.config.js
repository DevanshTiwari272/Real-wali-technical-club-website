import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// One app (index.html); React Router handles the pages
export default defineConfig({ plugins: [react()] });
