import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://peterdotdev.github.io',
  integrations: [tailwind(), preact()],
  output: 'hybrid' // server, hybrid o static (nada)
});