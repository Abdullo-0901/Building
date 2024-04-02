import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import EmblaCarouselReact from 'embla-carousel-react';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['embla-carousel-react'],
    },
  },
});
