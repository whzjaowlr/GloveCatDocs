import { defineConfig } from "vitepress";

export default defineConfig({
  title: "GloveCat",
  description: "GloveCat (GCAT) 공식 문서",
  lang: "ko-KR",

  // GitHub Pages 배포용 - 리포지토리 이름에 맞게 수정하세요
  // 커스텀 도메인 사용 시 base: '/' 로 변경
  base: process.env.NODE_ENV === 'production' ? '/GloveCatDocs/' : '/',

  head: [
    ["link", { rel: "icon", href: "/logo.png", type: "image/png" }],
    ["meta", { name: "theme-color", content: "#f97316" }],
    ["meta", { property: "og:title", content: "GloveCat Docs" }],
    [
      "meta",
      { property: "og:description", content: "GloveCat (GCAT) 공식 문서 - Base 체인 밈 코인" },
    ],
  ],

  themeConfig: {
    logo: "/logo.png",
    siteTitle: "GloveCat",

    nav: [
      { text: "홈", link: "/" },
      { text: "가이드", link: "/guide/" },
      { text: "관리자", link: "/admin/" },
      { text: "dApp", link: "https://app.glovecat.com" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "소개",
          items: [
            { text: "GloveCat 소개", link: "/guide/" },
            { text: "토크노믹스", link: "/guide/tokenomics" },
            { text: "로드맵", link: "/guide/roadmap" },
          ],
        },
        {
          text: "기능 가이드",
          items: [
            { text: "스테이킹", link: "/guide/staking" },
            { text: "NFT", link: "/guide/nft" },
            { text: "거버넌스", link: "/guide/governance" },
            { text: "보상 시스템", link: "/guide/rewards" },
          ],
        },
        {
          text: "도움말",
          items: [
            { text: "FAQ", link: "/guide/faq" },
            { text: "커뮤니티", link: "/guide/community" },
          ],
        },
      ],
      "/admin/": [
        {
          text: "관리자 가이드",
          items: [
            { text: "개요", link: "/admin/" },
            { text: "컨트랙트 정보", link: "/admin/contracts" },
            { text: "관리자 함수", link: "/admin/functions" },
          ],
        },
        {
          text: "운영",
          items: [
            { text: "Safe 가이드", link: "/admin/safe-guide" },
            { text: "긴급 대응", link: "/admin/emergency" },
            { text: "보안 프로토콜", link: "/admin/security" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "twitter", link: "https://twitter.com/glovecatcoin" },
      { icon: "github", link: "https://github.com/glovecat" },
    ],

    footer: {
      message: "© 2025 GloveCat. All rights reserved.",
      copyright: "이 프로젝트는 교육 및 엔터테인먼트 목적으로 제작되었습니다.",
    },

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "검색",
            buttonAriaLabel: "검색",
          },
          modal: {
            noResultsText: "결과를 찾을 수 없습니다",
            resetButtonTitle: "초기화",
            footer: {
              selectText: "선택",
              navigateText: "이동",
            },
          },
        },
      },
    },

    outline: {
      label: "목차",
      level: [2, 3],
    },

    docFooter: {
      prev: "이전",
      next: "다음",
    },

    lastUpdated: {
      text: "마지막 업데이트",
    },
  },
});
