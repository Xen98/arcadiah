// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://xen98.github.io/arcadiah/', // Tu URL de sitio
  outDir: 'docs',
  base: '/arcadiah/', // Cambia esto si tu sitio está en un subdirectorio
});