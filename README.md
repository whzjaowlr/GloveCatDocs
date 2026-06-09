# GloveCat Docs

Official VitePress documentation for the current GloveCat redeploy surface.

## Current Status

GloveCat contracts are deployed and Basescan verified on Base mainnet. The current manifest is
`deployed-pending-safe-config`, so Safe wiring, liquidity setup, LP locking, and trading launch
remain pending before the release can be treated as fully active.

Active contract surface:

- `GloveCatCore`
- `Staking`
- `GloveCatNFT`
- `GamificationCore`

This documentation only describes the current redeploy surface.

## Local Development

```bash
npm install
npm run docs:dev
npm run docs:build
```

## Source Of Truth

Contract behavior should be checked against the verified contract source, current deployment
manifest, on-chain reads, Safe transaction records, and Basescan verification evidence. This
documentation mirrors those sources but does not replace them.

## Last Updated

2026-06-10
