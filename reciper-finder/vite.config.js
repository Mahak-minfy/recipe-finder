// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // use './' if deploying to a subfolder :contentReference[oaicite:5]{index=5}
});
