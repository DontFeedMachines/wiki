// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { fieldkitWiki } from "@dontfeedmachines/fieldkit/node/wiki";
import { viewTransitions } from "astro-vtbot/starlight-view-transitions";

import tailwindcss from "@tailwindcss/vite";
import config from "./src/config/config.json";
import menuEn from "./src/config/menu.en.json";
import social from "./src/config/social.json";
import locals from "./src/config/locals.json";
import sidebar from "./src/config/sidebar.json";

import { fileURLToPath } from "url";

const { site } = config;
const { title, logo, logo_darkmode } = site;

export const locales = locals


import { remarkStarlightCards } from "./src/plugins/remark-starlight-cards.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://wiki.dontfeedmachines.com",
  prefetch: false,
  markdown: {
    remarkPlugins: [remarkStarlightCards]
  },
  image: {
    service: { entrypoint: "astro/assets/services/noop" },
  },
  integrations: [
    fieldkitWiki({ config, menu: { en: menuEn } }),
    starlight({
      title,
      logo: {
        light: logo,
        dark: logo_darkmode,
        alt: "DFM wordmark",
        src: './src/assets/logos/dfm-wordmark.svg' }
      },
      // @ts-ignore
      social: social.main || [],
      locales,
      sidebar: sidebar.main || [],
      customCss: ["./src/styles/global.css", "./src/styles/teletext.css"],
      components: {
        Head: "./src/components/Head.astro",
        Header: "@dontfeedmachines/fieldkit/astro/Header.astro",
        Hero: "@dontfeedmachines/fieldkit/astro/Hero.astro",
        PageFrame: "@dontfeedmachines/fieldkit/astro/PageFrame.astro",
        PageSidebar: "./src/components/PageSidebar.astro",
        TwoColumnContent: "@dontfeedmachines/fieldkit/astro/TwoColumnContent.astro",
        ContentPanel: "./src/components/ContentPanel.astro",
        Pagination: "./src/components/Pagination.astro",
        Sidebar: "./src/components/Sidebar.astro",
      },
      
    }),
  ],
  vite: {
    plugins: /** @type {any} */ ([tailwindcss(), viewTransitions()]),
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "~": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
// Force restart
