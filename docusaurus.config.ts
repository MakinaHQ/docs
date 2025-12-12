import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Makina Docs",
  tagline: "Documentation for the Makina Protocol",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.makina.finance",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "MakinaHQ",
  projectName: "docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          showLastUpdateTime: true,
          editUrl: "https://github.com/MakinaHQ/docs/tree/main/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: "/concepts/security/audits",
            to: "/contracts/security",
          },
          {
            from: "/concepts/machine/machine-overview",
            to: "/concepts/machine/overview",
          },
          {
            from: "/concepts/caliber/caliber-overview",
            to: "/concepts/caliber/overview",
          },
          {
            from: "/concepts/governance/governance-overview",
            to: "/concepts/governance/overview",
          },
        ],
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/opengraph-image.png",
    navbar: {
      title: "Makina Docs",
      logo: {
        alt: "Makina Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "conceptsSidebar",
          position: "left",
          label: "Concepts",
        },
        {
          type: "doc",
          sidebarId: "strategiesSidebar",
          position: "left",
          label: "Strategies",
          docId: "strategies/deployments",
        },
        {
          type: "docSidebar",
          sidebarId: "contractsSidebar",
          position: "left",
          label: "Contracts",
        },
        {
          href: "https://github.com/MakinaHQ",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Concepts",
              to: "/concepts/introduction",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "X",
              href: "https://x.com/makinafi",
            },
            {
              label: "Discord",
              href: "https://discord.gg/makinafi",
            },
            {
              label: "Telegram",
              href: "https://t.me/makinafinance",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Makina.`,
    },
    prism: {
      additionalLanguages: ["solidity", "json", "toml", "yaml"],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false, // Hides the toggle
      respectPrefersColorScheme: false, // Ignores user's system setting
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
