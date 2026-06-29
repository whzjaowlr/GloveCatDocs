# GloveCat Docs

VitePress documentation for the current GloveCat contract deployment.

## Current Status

GloveCat contracts are deployed and Basescan verified on Base mainnet. Phase 1 Safe wiring has been
executed. Team allocation, the long-term treasury reserve, registered-pool setup, liquidity seeding,
project-owned LP locking, and Safe `openTrading()` execution are published through public evidence
records.

The docs are written for public deployment use: verified addresses, Safe records, PinkLock vesting,
liquidity evidence, LP lock evidence, trading-open evidence, and unfinished staking gates must stay
visible from the public documentation. Active deployment status does not mean public staking or
reward-pool funding is complete.

Active contract surface:

- `GloveCatCore`
- `Staking`
- `GloveCatNFT`
- `GamificationCore`

This documentation only describes the current GloveCat deployment on Base mainnet. GloveCat is an
independent project and is not affiliated with, endorsed by, or sponsored by Base or Coinbase.

## Local Development

```bash
pnpm install --frozen-lockfile
pnpm run docs:dev
pnpm run docs:build
pnpm run security:check
```

This repository keeps the GitHub Pages build reproducible with `pnpm-lock.yaml` and
`pnpm install --frozen-lockfile`.

## Security Baseline

Docs are deployed as a public GitHub Pages site. GitHub Pages does not apply Cloudflare-style
`_headers` files, so the baseline browser controls must be present in the built HTML itself.

`pnpm run security:check` verifies the generated pages include the expected meta CSP and referrer
policy, do not allow broad `connect-src https:`, do not allow Cloudflare analytics endpoints, and do
not emit iframe markup.

## Source Of Truth

Contract behavior should be checked against the verified contract source, current deployment
manifest, on-chain reads, Safe transaction records, PinkLock records, and Basescan verification
evidence. Start from [Contract Information](./admin/contracts.md) for the public evidence links.
This documentation mirrors those sources but does not replace them.

## Last Updated

2026-06-30
