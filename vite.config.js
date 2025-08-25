import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Important for GitHub Pages if repo is not at root
  base: '/portfolio/',  // <-- your repo name here
});