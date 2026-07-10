---
layout: home

hero:
  name: "GloveCat"
  text: "Independent GCAT contract docs"
  tagline: GloveCat project documentation for contracts deployed on Base mainnet.
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
    details: 500M fixed supply, 75/20/5 launch split, 0% buy fee, fixed 1% sell ecosystem fee, one-way trading launch, and the now-expired 1-hour launch max-wallet window.
  - icon: 🔒
    title: Locked Staking
    details: Fixed 30-, 90-, and 180-day lock periods with base APRs of 2%, 5%, and 8%; incentives accrue over time and can be claimed while principal remains locked.
  - icon: 🔐
    title: Public Locks
    details: Team vesting, long-term treasury reserve vesting, registered liquidity, project-owned LP locking, and Safe records are tracked as public evidence.
  - icon: 🎨
    title: NFT Boosts
    details: ERC721 tiers use 1-day benefit activation, different-tier boost stacking, and a 4.0x final staking cap.
---

## 🚦 Current Release State

GloveCat is an independent project. It is not affiliated with, endorsed by, or sponsored by Base or Coinbase.
Base is referenced only as the public network where the current GCAT contracts are deployed.

GloveCat contracts are deployed and Basescan verified on Base mainnet. The active deployment status
covers verified contract addresses, Safe admin control, Phase 1 wiring, PinkSale / PinkLock V2 token-lock records,
registered liquidity, project-owned LP locking, Safe `openTrading()` execution, and two executed
staking reward-pool funding transactions. Mutable trading reads, staking readiness, and pool balances
come from the [Operational Status](/guide/operational-status) source, not this static page.

<LiveProtocolStatus />

| Item                            | Status                                                                                                                                                          |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Deployment network              | Base Mainnet                                                                                                                                                    |
| Deployment status               | `active`                                                                                                                                                        |
| Contract addresses              | Published and Basescan verified                                                                                                                                 |
| Phase 1 Safe wiring             | Safe wiring executed                                                                                                                                            |
| Team allocation lock            | PinkSale / PinkLock V2 vesting; 62 elapsed 30-day cycles to 100% cap                                                                                            |
| Long-term treasury reserve lock | PinkSale / PinkLock V2 vesting; 62 elapsed 30-day cycles to 100% cap                                                                                            |
| Registered pool                 | Aerodrome Classic Volatile WETH/GCAT pool registered                                                                                                            |
| Liquidity seed                  | 5.51 WETH and 375,000,000 GCAT seeded                                                                                                                           |
| Trading execution evidence      | Safe `openTrading()` executed on 2026-06-29 13:30:07 UTC                                                                                                        |
| LP lock evidence                | Project-owned LP tokens locked through PinkSale / PinkLock V2 until 2031-06-24 00:00 UTC                                                                        |
| Staking funding evidence        | 1,000,000 GCAT and 4,000,000 GCAT deposits executed on 2026-07-01                                                                                               |
| Dated on-chain snapshot         | At Base block `48451141` on 2026-07-10 13:53:49 UTC, `tradingOpened=true` and the pool read 5,000,000 GCAT; use live status for the current readiness and value |

## 🧩 Active Surface

The current source surface is:

- `GloveCatCore`: ERC20 + Permit token with 500M fixed supply, 75/20/5 initial allocation,
  fixed 0% buy fee, fixed 1% sell ecosystem fee, registered-pool controls, a one-time pre-launch
  liquidity seed path, a launch max-wallet limit that expired 1 hour after trading opened, and
  user burn support.
- `Staking`: lock-position staking with a 1,000 GCAT minimum, up to 50 active positions per user,
  fixed 30-, 90-, and 180-day lock periods with base APRs of 2%, 5%, and 8%, respectively, NFT
  boost snapshots, incentive claims while principal remains locked, and pool-gated payout
  accounting with unpaid incentive carry-forward.
- `GloveCatNFT`: ERC721 tier NFT with ERC2981 royalty support, 1-day benefit activation,
  transfer-time boost reset, different-tier boost stacking, same-tier duplicate suppression, and a
  4.0x aggregate staking boost cap.
- `GamificationCore`: staking-only Merkle leaderboard NFT rewards capped to 10 successful claims
  per season.

This documentation describes the current GloveCat deployment on Base mainnet and the public evidence users should
check before relying on any address, lock, liquidity, trading route, staking action, or reward
claim.

## 🔗 Quick Links

| Item                  | Link                                                                                                                 |
| --------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Guide                 | [Project guide](/guide/)                                                                                             |
| Live operating state  | [Operational Status](/guide/operational-status)                                                                      |
| Staking               | [Staking guide](/guide/staking)                                                                                      |
| Tokenomics            | [Tokenomics](/guide/tokenomics)                                                                                      |
| Contract status       | [Contract information](/admin/contracts)                                                                             |
| Liquidity and LP lock | [Liquidity and LP Lock Evidence](/guide/liquidity-lock-evidence)                                                     |
| Public evidence       | [Contract, Safe, and lock evidence](/admin/contracts#public-evidence-links)                                          |
| GCAT token            | [Basescan token page](https://basescan.org/token/0x59df0577c7a5014954c0d6cc12616e92e34d9ff4)                         |
| Registered GCAT pair  | [Aerodrome WETH/GCAT pair](https://basescan.org/address/0x6330Bb184d90D78F336270485C3d17AB8AE8dD54)                  |
| DEX chart             | [CoinMarketCap DEX GCAT chart](https://dex.coinmarketcap.com/token/base/0x59df0577c7a5014954c0d6cc12616e92e34d9ff4/) |
| dApp                  | [glovecatcoin.com](https://glovecatcoin.com)                                                                         |
| Twitter/X             | [@GCATstudio](https://twitter.com/GCATstudio)                                                                        |
| Telegram              | [glovecatcoin](https://t.me/glovecatcoin)                                                                            |
| Discord               | [GloveCat Discord](https://discord.gg/R6kcUDcZra)                                                                    |
| Contact               | [gcatstudio@glovecatcoin.com](mailto:gcatstudio@glovecatcoin.com)                                                    |
