---
layout: home

hero:
  name: "GloveCat"
  text: "GCAT on Base"
  tagline: Current redeploy documentation for the GloveCat contract surface.
  image:
    src: /logo.webp
    alt: GloveCat
  actions:
    - theme: brand
      text: Get Started
      link: /guide/
    - theme: alt
      text: Contract Status
      link: /admin/contracts

features:
  - icon: 🔒
    title: Lock-Only Staking
    details: Fixed 90, 180, and 365 day staking periods with reward-pool based incentives.
  - icon: 🎨
    title: Tier NFTs
    details: ERC721 NFTs provide staking boost snapshots after the benefit holding period.
  - icon: 🏅
    title: Badges
    details: Separate ERC1155 badges support soulbound and transferable achievement records.
  - icon: 🏆
    title: Gamification
    details: Achievement rewards and staking-only leaderboard NFT claims use verifier and Merkle flows.
---

## 🚦 Current Release State

GloveCat is in redeploy preparation. The previous Base deployment snapshot was archived because it
referenced retired surfaces. Until a fresh Base manifest is generated and marked `active`, historical
addresses must be treated as reference-only.

| Item | Current Position |
| ---- | ---------------- |
| Base manifest | `no-current-redeploy` placeholder |
| Contract addresses | Pending fresh redeploy manifest |
| Trading launch | Not complete in the current manifest |
| LP lock evidence | Required before public liquidity claims |
| Active source of truth | `C:\gcatProject\GloveCat` |

## 🧩 Active Surface

The current redeploy surface is intentionally smaller than older GloveCat documentation:

- `GloveCatCore`: ERC20 token, fixed 0% buy fee and 1% sell ecosystem fee.
- `Staking`: lock-only staking with fixed 90, 180, and 365 day periods.
- `GloveCatNFT`: ERC721 tier NFT with staking boost and ERC2981 royalty support.
- `GloveCatBadge`: ERC1155 badge contract.
- `GamificationCore`: achievements and staking-only leaderboard NFT rewards.
- `GloveCatViewer`: read-only frontend helper.

This documentation only describes the current redeploy surface and current launch requirements.

## 🔗 Quick Links

| Item | Link |
| ---- | ---- |
| Guide | [Project guide](/guide/) |
| Staking | [Staking guide](/guide/staking) |
| Tokenomics | [Tokenomics](/guide/tokenomics) |
| Contract status | [Contract information](/admin/contracts) |
| dApp | [glovecatcoin.com](https://glovecatcoin.com) |
| Twitter/X | [@GCATstudio](https://twitter.com/GCATstudio) |
| Telegram | [glovecatcoin](https://t.me/glovecatcoin) |
