import { defineConfig } from 'vite';

// Supporto SSR per Angular 17+/18+/19+
export default defineConfig({
  ssr: {
    external: ['@prisma/client', 'prisma'], // dice a Vite di NON trasformarli in ESM
  },
});
