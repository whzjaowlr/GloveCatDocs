# GloveCat Docs

Official VitePress documentation for the current GloveCat Base deployment surface.

## 🚦 Current Status

GloveCat contracts are deployed and Basescan verified on Base mainnet. Phase 1 Safe wiring has been
executed. Team allocation and the long-term treasury/staking reserve are locked through PinkLock
vesting.

The docs are written for public deployment use: verified addresses, Safe records, PinkLock vesting,
liquidity evidence, LP lock evidence, staking reward funding, and the official Base trading route
must stay visible from the public documentation.

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
evidence. This documentation mirrors those sources but does not replace them.

## 🕒 Last Updated

2026-06-15
