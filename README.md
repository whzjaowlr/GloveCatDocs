# GloveCat Docs

Official VitePress documentation for the current GloveCat Base deployment surface.

## 🚦 Current Status

GloveCat contracts are deployed and Basescan verified on Base mainnet. Phase 1 Safe wiring has been
executed. Team allocation, the long-term treasury/staking reserve, official pair setup, liquidity
seeding, and project-owned LP locking are published through public evidence records.

The docs are written for public deployment use: verified addresses, Safe records, PinkLock vesting,
liquidity evidence, LP lock evidence, and unfinished launch gates must stay visible from the public
documentation. Active deployment status does not mean `openTrading()`, public staking, or reward-pool
funding is complete.

Active contract surface:

- `GloveCatCore`
- `Staking`
- `GloveCatNFT`
- `GamificationCore`

This documentation only describes the current deployed Base surface.

## 🛠️ Local Development

```bash
npm install
npm run docs:dev
npm run docs:build
```

## 📌 Source Of Truth

Contract behavior should be checked against the verified contract source, current deployment
manifest, on-chain reads, Safe transaction records, PinkLock records, and Basescan verification
evidence. Start from [Contract Information](./admin/contracts.md) for the public evidence links.
This documentation mirrors those sources but does not replace them.

## 🕒 Last Updated

2026-06-24
