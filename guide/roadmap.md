# Roadmap

> Last updated: 2026-06-24

This roadmap tracks the public deployment surface and post-launch visibility work. It is not a
guarantee of delivery dates.

## 🚦 P0: Redeploy Readiness

| Item | Status |
| ---- | ------ |
| Active source cleanup | Complete |
| Public docs refresh | Complete |
| Fresh Base manifest | Complete: `active` |
| BaseScan verification for fresh contracts | [Complete](/admin/contracts#public-evidence-links) |
| Safe configuration evidence | [Complete](/admin/contracts#project-wallets) |
| Team PinkLock vesting evidence | [Complete](/admin/contracts#public-lock-evidence) |
| Treasury/staking reserve PinkLock vesting evidence | [Complete](/admin/contracts#public-lock-evidence) |
| Official pair setup | [Complete](/guide/official-pool-policy) |
| Initial liquidity seed | [Complete](/guide/liquidity-lock-evidence) |
| Trading route | Official Aerodrome WETH/GCAT route is documented; not live until `openTrading()` executes |
| LP token lock evidence | [Complete](/guide/liquidity-lock-evidence) |
| Initial staking reward-pool funding | Funding target is 1,000,000 GCAT; `incentivePool` is 0 until Safe execution |

## 🚀 P1: Launch Operations

- Publish only the verified contract addresses from [Contract Information](/admin/contracts).
- Publish [Safe owner/threshold evidence](/admin/contracts#project-wallets).
- Keep the official Aerodrome WETH/GCAT route and LP lock evidence visible in public docs.
- Open trading only after final launch evidence review is complete.
- Fund the staking incentive pool through Safe-approved treasury or reward-pool transactions after
  token transfers are open.
- Add public monitoring for contract wiring, staking reward pool health, and liquidity status.

## 📊 P2: Post-Launch Visibility

- Public contract status dashboard.
- Analytics dashboard for staking participation and reward pool health.
- Improved user-facing staking and NFT benefit explanations.

## 📌 Roadmap Rule

Roadmap items should be published only when they have a current owner, dependency list, and evidence
plan.
