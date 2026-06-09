---
layout: home

hero:
  name: "GloveCat"
  text: "GCAT on Base"
  tagline: Current GCAT documentation for the Base redeploy.
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
    title: Lock Staking
    details: Fixed 30, 90, and 180 day lock periods with annualized 2%, 5%, and 8% incentive rates.
  - icon: 🎨
    title: NFT Boosts
    details: ERC721 tiers use 1-day benefit activation, different-tier boost stacking, and a 4.0x final staking cap.
  - icon: 🏆
    title: Gamification
    details: Staking-only Merkle leaderboard claims mint tier NFT rewards, capped to 10 successful claims per season.
---

## 🚦 Current Release State

GloveCat contracts are deployed and Basescan verified on Base mainnet. The current manifest is still
`deployed-pending-safe-config`, so Safe wiring, liquidity setup, LP locking, and trading launch remain
pending before the release can be treated as fully active.

| Item                   | Status                                  |
| ---------------------- | --------------------------------------- |
| Base manifest          | `deployed-pending-safe-config`          |
| Contract addresses     | Published and Basescan verified         |
| Trading launch         | Not complete in the current manifest    |
| LP lock evidence       | Required before public liquidity claims |
| Active source of truth | `C:\gcatProject\GloveCat`               |

## 🧩 Active Surface

The current source surface is:

- `GloveCatCore`: ERC20 + Permit token with 500M fixed supply, 75/20/5 initial allocation,
  fixed 0% buy fee, fixed 1% sell ecosystem fee, official pair controls, a one-time pre-launch
  liquidity seed path, a launch max-wallet limit that expires 1 hour after `openTrading()`, and
  user burn support.
- `Staking`: lock-position staking with a 1,000 GCAT minimum, up to 50 active positions per user,
  fixed 30/90/180 day lock periods, annualized 2%/5%/8% incentive rates, NFT boost snapshots, and
  funded-pool payout accounting with unpaid incentive carry-forward.
- `GloveCatNFT`: ERC721 tier NFT with ERC2981 royalty support, 1-day benefit activation,
  transfer-time boost reset, different-tier boost stacking, same-tier duplicate suppression, and a
  4.0x aggregate staking boost cap.
- `GamificationCore`: staking-only Merkle leaderboard NFT rewards capped to 10 successful claims
  per season.

This documentation only describes the current redeploy surface and current launch requirements.

## 🔗 Quick Links

| Item            | Link                                          |
| --------------- | --------------------------------------------- |
| Guide           | [Project guide](/guide/)                      |
| Staking         | [Staking guide](/guide/staking)               |
| Tokenomics      | [Tokenomics](/guide/tokenomics)               |
| Contract status | [Contract information](/admin/contracts)      |
| dApp            | [glovecatcoin.com](https://glovecatcoin.com)  |
| Twitter/X       | [@GCATstudio](https://twitter.com/GCATstudio) |
| Telegram        | [glovecatcoin](https://t.me/glovecatcoin)     |
