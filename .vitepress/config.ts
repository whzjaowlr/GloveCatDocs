import { defineConfig } from "vitepress";

export default defineConfig({
  title: "GloveCat",
  description: "GloveCat (GCAT) Official Documentation",
  lang: "en-US",

  // Custom domain - docs.glovecatcoin.com
  base: '/',

  // Sitemap 자동 생성
  sitemap: {
    hostname: 'https://docs.glovecatcoin.com',
    lastmodDateOnly: false,
  },

  head: [
    ["link", { rel: "icon", href: "/logo.webp", type: "image/webp" }],
    ["link", { rel: "preload", as: "image", href: "/logo.webp", type: "image/webp", fetchpriority: "high" }],
    ["meta", { name: "theme-color", content: "#f97316" }],
    // Open Graph
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://docs.glovecatcoin.com" }],
    ["meta", { property: "og:title", content: "GloveCat Docs 🐱🥊" }],
    ["meta", { property: "og:description", content: "GloveCat (GCAT) Official Documentation - Base Chain Meme Token" }],
    ["meta", { property: "og:image", content: "https://docs.glovecatcoin.com/logo.webp" }],
    // Twitter
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:url", content: "https://docs.glovecatcoin.com" }],
    ["meta", { name: "twitter:title", content: "GloveCat Docs 🐱🥊" }],
    ["meta", { name: "twitter:description", content: "GloveCat (GCAT) Official Documentation - Base Chain Meme Token" }],
    ["meta", { name: "twitter:image", content: "https://docs.glovecatcoin.com/logo.webp" }],
    // Security Headers (CSP)
    [
      "meta",
      {
        "http-equiv": "Content-Security-Policy",
        content: "default-src 'self'; script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; font-src 'self' data:; connect-src 'self' https:;",
      },
    ],
    ["meta", { "http-equiv": "X-Content-Type-Options", content: "nosniff" }],
    ["meta", { name: "referrer", content: "strict-origin-when-cross-origin" }],
  ],

  themeConfig: {
    logo: "/logo.webp",
    siteTitle: "GloveCat",

    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Admin", link: "/admin/" },
      { text: "dApp", link: "https://glovecatcoin.com" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "Introduction",
          items: [
            { text: "GloveCat Intro", link: "/guide/" },
            { text: "Tokenomics", link: "/guide/tokenomics" },
            { text: "Roadmap", link: "/guide/roadmap" },
          ],
        },
        {
          text: "Feature Guide",
          items: [
            { text: "Staking", link: "/guide/staking" },
            { text: "NFT", link: "/guide/nft" },
            { text: "Governance", link: "/guide/governance" },
            { text: "Rewards System", link: "/guide/rewards" },
          ],
        },
        {
          text: "Help",
          items: [
            { text: "FAQ", link: "/guide/faq" },
            { text: "Community", link: "/guide/community" },
            { text: "Terms of Service", link: "/guide/terms" },
          ],
        },
      ],
      "/admin/": [
        {
          text: "Admin Guide",
          items: [
            { text: "Overview", link: "/admin/" },
            { text: "Contract Info", link: "/admin/contracts" },
            { text: "Admin Functions", link: "/admin/functions" },
          ],
        },
        {
          text: "Operations",
          items: [
            { text: "Safe Guide", link: "/admin/safe-guide" },
            { text: "Emergency Response", link: "/admin/emergency" },
            { text: "Security Protocol", link: "/admin/security" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "twitter", link: "https://twitter.com/glovecatcoin" },
      { icon: "github", link: "https://github.com/glovecat" },
    ],

    footer: {
      message: "<a href='https://glovecatcoin.com/privacy'>Privacy Policy</a> | <a href='/guide/terms'>Terms of Service</a> | Community support through official channels",
      copyright: "© 2026 GloveCat. All rights reserved. <br> This project is created for educational and entertainment purposes.",
    },

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Search",
            buttonAriaLabel: "Search",
          },
          modal: {
            noResultsText: "No results found",
            resetButtonTitle: "Reset",
            footer: {
              selectText: "Select",
              navigateText: "Navigate",
            },
          },
        },
      },
    },

    outline: {
      label: "On this page",
      level: [2, 3],
    },

    docFooter: {
      prev: "Previous",
      next: "Next",
    },

    lastUpdated: {
      text: "Last updated",
    },
  },
});
