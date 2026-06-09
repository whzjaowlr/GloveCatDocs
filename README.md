# GloveCat Docs

Official VitePress documentation for the current GloveCat redeploy surface.

## 🚦 Current Status

GloveCat is in redeploy preparation. Historical Base addresses are reference-only until
`deployments/base/latest.json` in the contract repository is regenerated from a fresh broadcast and
marked `active`.

Active contract surface:

- `GloveCatCore`
- `Staking`
- `GloveCatNFT`
- `GloveCatBadge`
- `GamificationCore`
- `GloveCatViewer`

This documentation only describes the current redeploy surface.

## 🛠️ Local Development

```bash
npm install
npm run docs:dev
npm run docs:build
```

## 📌 Source Of Truth

Contract behavior should be checked against `C:\gcatProject\GloveCat`. This documentation mirrors
that repository but does not replace the deployment manifest, on-chain reads, Safe transaction
records, or contract verification evidence.

## 🗓️ Last Updated

2026-06-09
