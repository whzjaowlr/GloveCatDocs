---
layout: home

hero:
  name: "GloveCat"
  text: "GCAT on Base"
  tagline: Current GCAT documentation for the Base mainnet redeploy.
  image:
    src: /logo.webp
    alt: GloveCat
  actions:
    - theme: brand
      text: Get Started
      link: /guide/
    - theme: alt
      text: Contracts
      link: /admin/contracts

features:
  - icon: 🪙
    title: Fixed-Fee ERC20
    details: 500M fixed supply, 75/20/5 launch split, 0% buy fee, fixed 1% sell ecosystem fee, one-way trading launch, and 1-hour launch max-wallet checks.
  - icon: 🔒
    title: Locked Staking
    details: Fixed 30-, 90-, and 180-day lock periods with base APRs of 2%, 5%, and 8%, respectively; public staking requires trading to be open and the reward pool to be funded.
  - icon: 🔐
    title: Public Locks
    details: Team vesting, treasury/staking reserve vesting, official liquidity, project-owned LP locking, and Safe records are tracked as public evidence.
  - icon: 🎨
    title: NFT Boosts
    details: ERC721 tiers use 1-day benefit activation, different-tier boost stacking, and a 4.0x final staking cap.
---

## 🚦 Current Release State

GloveCat contracts are deployed and Basescan verified on Base mainnet. The active deployment status
covers verified contract addresses, Safe admin control, Phase 1 wiring, and PinkLock token-lock
records. Official liquidity and project-owned LP locking are complete. Public trading is not open,
the staking incentive pool is 0, and public staking is not live until the final Safe-controlled
gates execute.

| Item | Status |
| ---- | ------ |
| Base deployment | `active` |
| Contract addresses | Published and Basescan verified |
| Phase 1 Safe wiring | Complete |
| Team allocation lock | Complete through PinkLock |
| Treasury/staking reserve lock | Complete through PinkLock |
| Official pair | Complete; Aerodrome Classic Volatile WETH/GCAT pool registered |
| Liquidity seed | Complete; 5.51 WETH and 375,000,000 GCAT seeded |
| Trading | Not open; requires `openTrading()` execution |
| LP lock evidence | Complete; project-owned LP tokens locked through PinkLock V2 until 2031-06-24 00:00 UTC |
| Staking reward pool | Funding target is 1,000,000 GCAT; `incentivePool` is 0 until Safe execution |
| Public staking | Not live; requires open trading and funded reward-pool minimum |

## 🧩 Active Surface

The current source surface is:

- `GloveCatCore`: ERC20 + Permit token with 500M fixed supply, 75/20/5 initial allocation,
  fixed 0% buy fee, fixed 1% sell ecosystem fee, official pair controls, a one-time pre-launch
  liquidity seed path, a launch max-wallet limit that expires 1 hour after trading opens, and
  user burn support.
- `Staking`: lock-position staking with a 1,000 GCAT minimum, up to 50 active positions per user,
  fixed 30-, 90-, and 180-day lock periods with base APRs of 2%, 5%, and 8%, respectively, NFT
  boost snapshots, and pool-gated payout accounting with unpaid incentive carry-forward.
- `GloveCatNFT`: ERC721 tier NFT with ERC2981 royalty support, 1-day benefit activation,
  transfer-time boost reset, different-tier boost stacking, same-tier duplicate suppression, and a
  4.0x aggregate staking boost cap.
- `GamificationCore`: staking-only Merkle leaderboard NFT rewards capped to 10 successful claims
  per season.

This documentation describes the current deployed Base surface and the public evidence users should
check before relying on any address, lock, liquidity, trading route, staking action, or reward
claim.

## 🔗 Quick Links

| Item | Link |
| ---- | ---- |
| Guide | [Project guide](/guide/) |
| Staking | [Staking guide](/guide/staking) |
| Tokenomics | [Tokenomics](/guide/tokenomics) |
| Contract status | [Contract information](/admin/contracts) |
| Liquidity and LP lock | [Liquidity and LP Lock Evidence](/guide/liquidity-lock-evidence) |
| Public evidence | [Contract, Safe, and lock evidence](/admin/contracts#public-evidence-links) |
| GCAT token | [Basescan token page](https://basescan.org/token/0x59df0577c7a5014954c0d6cc12616e92e34d9ff4) |
| dApp | [glovecatcoin.com](https://glovecatcoin.com) |
| Twitter/X | [@GCATstudio](https://twitter.com/GCATstudio) |
| Telegram | [glovecatcoin](https://t.me/glovecatcoin) |
