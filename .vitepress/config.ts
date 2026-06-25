import { defineConfig } from "vitepress";

const addImageAttrs = (tag: string, attrs: string) => {
  return tag.includes(" width=") ? tag : tag.replace(">", ` ${attrs}>`);
};

export default defineConfig({
  title: "GloveCat",
  description: "GloveCat (GCAT) redeploy documentation",
  lang: "en-US",
  base: "/",
  transformHtml(code) {
    return code
      .replace(/<img class="VPImage logo" src="\/logo\.webp" alt[^>]*>/g, (tag) =>
        addImageAttrs(tag, 'width="24" height="24" decoding="async"'),
      )
      .replace(/<img class="VPImage image-src" src="\/logo\.webp" alt="GloveCat"[^>]*>/g, (tag) =>
        addImageAttrs(tag, 'width="320" height="320" decoding="async" fetchpriority="high"'),
      );
  },

  sitemap: {
    hostname: "https://docs.glovecatcoin.com",
    lastmodDateOnly: false,
  },

  head: [
    ["link", { rel: "icon", href: "/logo.png", type: "image/png", sizes: "192x192" }],
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
          "default-src 'self'; base-uri 'self'; object-src 'none'; form-action 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; worker-src 'self' blob:; frame-src 'none'; upgrade-insecure-requests",
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
      { text: "Contracts", link: "/admin/contracts" },
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
            { text: "Official Pool Policy", link: "/guide/official-pool-policy" },
            { text: "Liquidity and LP Lock Evidence", link: "/guide/liquidity-lock-evidence" },
            { text: "Terms and Risk Disclosure", link: "/guide/terms" },
            { text: "Restricted Jurisdictions", link: "/guide/restricted-jurisdictions" },
          ],
        },
      ],
      "/admin/": [
        {
          text: "Deployment Status",
          items: [
            { text: "Overview", link: "/admin/" },
            { text: "Contract Info", link: "/admin/contracts" },
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
        "<a href='https://glovecatcoin.com/privacy'>Privacy Policy</a> | <a href='/guide/terms'>Terms and Risk Disclosure</a> | <a href='/guide/restricted-jurisdictions'>Restricted Jurisdictions</a>",
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
