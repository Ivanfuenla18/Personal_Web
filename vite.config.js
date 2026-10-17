import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Personal_Web/', // Asegúrate de que este es el nombre exacto de tu repositorio
});
