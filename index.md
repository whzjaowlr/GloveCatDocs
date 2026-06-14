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
    title: Lock Staking
    details: Fixed 30, 90, and 180 day lock periods with annualized 2%, 5%, and 8% incentive rates, funded by the public staking reward pool.
  - icon: 🔐
    title: Public Locks
    details: LP lock, team vesting, treasury/staking reserve vesting, Safe address, and lock records are published as launch evidence.
  - icon: 🎨
    title: NFT Boosts
    details: ERC721 tiers use 1-day benefit activation, different-tier boost stacking, and a 4.0x final staking cap.
---

## 🚦 Current Release State

GloveCat contracts are deployed and Basescan verified on Base mainnet. The public launch surface is
documented around verified contract addresses, Safe admin control, PinkLock vesting records,
liquidity evidence, LP lock evidence, staking reward funding, and the official Base trading route.

| Item | Status |
| ---- | ------ |
| Base deployment | `active` |
| Contract addresses | Published and Basescan verified |
| Phase 1 Safe wiring | Complete |
| Team allocation lock | Complete through PinkLock |
| Treasury/staking reserve lock | Complete through PinkLock |
| Trading route | Uniswap on Base |
| LP lock evidence | Published with launch evidence |
| Staking reward pool | Initial bootstrap funded from Safe policy |

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

This documentation describes the current deployed Base surface and the public evidence users should
check before relying on any address, lock, liquidity, staking, or reward claim.

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
