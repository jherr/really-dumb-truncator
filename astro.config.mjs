import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://jherr.github.io",
  base: "really-dumb-truncator",
  integrations: [tailwind()],
});
