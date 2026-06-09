import { defineConfig } from "vocs/config";
import remarkMath from "remark-math";
import { generateSidebar } from "./sidebar.js";
import { remarkKatexRender } from "./mdx-katex.js";

export default defineConfig({
  title: "Makina Docs",
  description: "Documentation for the Makina Protocol",
  titleTemplate: "%s | Makina Docs",
  // `baseUrl` is intentionally unset: Vocs would render `<base href={baseUrl}>`
  // on every page, forcing relative asset URLs to resolve against that domain
  // and breaking preview builds and non-canonical origins. Omitting it keeps
  // assets origin-relative (trade-off: no auto sitemap.xml / canonical tags).

  // Branding assets (see public/img). SVG marks keep the nav logo crisp at any
  // size: the dark-fill mark in light mode, the light-gradient mark in dark mode.
  iconUrl: "/img/favicon.ico",
  logoUrl: { light: "/img/logo-medium.svg", dark: "/img/logo-medium-dark.svg" },
  // Absolute URL so social cards resolve without `baseUrl`.
  ogImageUrl: "https://docs.makina.finance/img/opengraph-image.png",

  // Makina accent teal: #0891b2 (light) / #3dc9de (dark). Backgrounds, text and
  // status colors are mapped in src/pages/_root.css.
  accentColor: "light-dark(#0891b2, #3dc9de)",
  colorScheme: "light dark",

  topNav: [
    { text: "Concepts", link: "/concepts/introduction", match: "/concepts" },
    { text: "Strategies", link: "/strategies/deployments", match: "/strategies" },
    { text: "Contracts", link: "/contracts/core/architecture-overview", match: "/contracts" },
    {
      text: "Resources",
      items: [
        { text: "Makina App", link: "https://makina.finance" },
        { text: "Operator Dashboard", link: "https://operator.makina.finance/dashboard" },
        { text: "Operator Docs", link: "https://operator.makina.finance/docs" },
        { text: "Operator CLI", link: "https://operator.makina.finance/docs/cli/overview" },
      ],
    },
  ],

  socials: [
    { icon: "github", link: "https://github.com/MakinaHQ" },
    { icon: "x", link: "https://x.com/makinafi" },
    { icon: "discord", link: "https://discord.gg/makinafi" },
    { icon: "telegram", link: "https://t.me/makinafinance" },
  ],

  editLink: {
    link: "https://github.com/MakinaHQ/docs/edit/main/src/pages/:path",
    text: "Edit this page on GitHub",
  },

  sidebar: {
    "/concepts": generateSidebar("concepts", { expandTopLevel: true }),
    "/contracts": generateSidebar("contracts"),
  },

  // Preserve the Docusaurus client-redirects, plus redirects for the concepts
  // reorg that nested Machine/Caliber/Cross-Chain/Oracles under Architecture.
  // Redirects are first-match, so the specific legacy slugs must come before the
  // catch-all wildcards for the moved folders.
  redirects: [
    { source: "/concepts/security/audits", destination: "/contracts/security" },
    { source: "/concepts/governance/governance-overview", destination: "/concepts/governance/overview" },
    // Legacy Docusaurus slugs → new nested locations.
    { source: "/concepts/machine/machine-overview", destination: "/concepts/architecture/machine/overview" },
    { source: "/concepts/machine/depositors", destination: "/concepts/architecture/machine/deposits" },
    { source: "/concepts/machine/redeemers", destination: "/concepts/architecture/machine/redemptions" },
    { source: "/concepts/machine/fee-managers", destination: "/concepts/architecture/machine/fees" },
    { source: "/concepts/machine/security-module", destination: "/concepts/security/security-module" },
    { source: "/concepts/caliber/caliber-overview", destination: "/concepts/architecture/caliber/overview" },
    { source: "/concepts/oracle-registry", destination: "/concepts/architecture/pricing-oracles" },
    // Architecture reorg: old flat URLs → new nested URLs.
    { source: "/concepts/architecture", destination: "/concepts/architecture/overview" },
    { source: "/concepts/lifecycle", destination: "/concepts/architecture/lifecycle" },
    { source: "/concepts/oracles", destination: "/concepts/architecture/pricing-oracles" },
    { source: "/concepts/machine/:path*", destination: "/concepts/architecture/machine/:path*" },
    { source: "/concepts/caliber/:path*", destination: "/concepts/architecture/caliber/:path*" },
    { source: "/concepts/cross-chain/:path*", destination: "/concepts/architecture/cross-chain/:path*" },
  ],

  // Shiki themes closest to the Docusaurus Prism setup (github light / dracula dark).
  codeHighlight: {
    themes: { light: "github-light", dark: "dracula" },
  },

  // KaTeX math support. remark-math parses `$`/`$$`; remarkKatexRender renders it
  // to KaTeX markup in the remark stage (see mdx-katex.ts for why not rehype-katex).
  markdown: {
    remarkPlugins: [remarkMath, remarkKatexRender],
  },

  // Match Docusaurus `onBrokenLinks: "throw"`.
  checkDeadlinks: true,

  // Static output for Vercel.
  renderStrategy: "full-static",
});
