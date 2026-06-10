import { defineConfig } from "vitepress";

export default defineConfig({
  title: "GloveCat",
  description: "GloveCat (GCAT) redeploy documentation",
  lang: "en-US",
  base: "/",

  sitemap: {
    hostname: "https://docs.glovecatcoin.com",
    lastmodDateOnly: false,
  },

  head: [
    ["link", { rel: "icon", href: "/logo.png", type: "image/png" }],
    [
      "link",
      {
        rel: "preload",
        as: "image",
        href: "/logo.webp",
        type: "image/webp",
        fetchpriority: "high",
      },
    ],
    ["meta", { name: "theme-color", content: "#f97316" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://docs.glovecatcoin.com" }],
    ["meta", { property: "og:title", content: "GloveCat Docs" }],
    [
      "meta",
      {
        property: "og:description",
        content: "Current GloveCat (GCAT) redeploy documentation for Base.",
      },
    ],
    ["meta", { property: "og:image", content: "https://docs.glovecatcoin.com/og-image.webp" }],
    ["meta", { property: "og:image:type", content: "image/webp" }],
    ["meta", { property: "og:image:width", content: "1600" }],
    ["meta", { property: "og:image:height", content: "661" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:url", content: "https://docs.glovecatcoin.com" }],
    ["meta", { name: "twitter:title", content: "GloveCat Docs" }],
    [
      "meta",
      {
        name: "twitter:description",
        content: "Current GloveCat (GCAT) redeploy documentation for Base.",
      },
    ],
    ["meta", { name: "twitter:image", content: "https://docs.glovecatcoin.com/og-image.webp" }],
    [
      "meta",
      {
        "http-equiv": "Content-Security-Policy",
        content:
          "default-src 'self'; script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; font-src 'self' data:; connect-src 'self' https:;",
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
            { text: "Terms and Risk Disclosure", link: "/guide/terms" },
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
      { icon: "twitter", link: "https://twitter.com/GCATstudio" },
      { icon: "github", link: "https://github.com/glovecat" },
    ],

    footer: {
      message:
        "<a href='https://glovecatcoin.com/privacy'>Privacy Policy</a> | <a href='/guide/terms'>Terms and Risk Disclosure</a>",
      copyright:
        "(c) 2026 GloveCat. This documentation is informational and does not replace on-chain verification.",
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
