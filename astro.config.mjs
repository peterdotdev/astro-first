import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// Cannot use `output: 'server'` or `output: 'hybrid'` without an adapter. 
// Please install and configure the appropriate server adapter for your final deployment.


// https://astro.build/config
export default defineConfig({
  site: 'https://peterdotdev.github.io',
  integrations: [tailwind(), preact()],
  // output: 'hybrid' // server, hybrid o static (nada)
});