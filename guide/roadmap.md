# Roadmap

> Last updated: 2026-06-30

This roadmap tracks the public deployment surface, current launch blockers, and post-launch
visibility work. It is not a guarantee of delivery dates.

## 🚦 P0: Launch Readiness

| Item | Status |
| ---- | ------ |
| Active source cleanup | Complete |
| Public docs refresh | Updated for the live Base deployment and trading-open evidence |
| Fresh deployment manifest | `active` manifest published |
| BaseScan verification for fresh contracts | [Basescan evidence](/admin/contracts#public-evidence-links) |
| Safe configuration evidence | [Safe evidence](/admin/contracts#project-wallets) |
| Team PinkSale / PinkLock V2 vesting evidence | [PinkSale / PinkLock V2 evidence](/admin/contracts#public-lock-evidence) |
| Long-term treasury reserve PinkSale / PinkLock V2 vesting evidence | [PinkSale / PinkLock V2 evidence](/admin/contracts#public-lock-evidence) |
| Registered-pool setup | [Registered pool policy](/guide/registered-pool-policy) |
| Initial liquidity seed | [Liquidity evidence](/guide/liquidity-lock-evidence) |
| Trading route | Complete; Safe `openTrading()` executed on 2026-06-29 13:30:07 UTC |
| LP token lock evidence | [LP lock evidence](/guide/liquidity-lock-evidence) |
| Initial staking reward-pool funding | Complete; latest live readiness check shows `incentivePool = 1,000,000 GCAT`, meeting the target |

## 🚀 P1: Launch Operations

- Publish only the verified contract addresses from [Contract Information](/admin/contracts).
- Keep [Safe owner/threshold evidence](/admin/contracts#project-wallets) visible.
- Keep the registered Aerodrome WETH/GCAT route, liquidity seed, LP lock, and trading-open evidence
  visible in public docs.
- Fund the staking incentive pool through Safe-approved treasury or reward-pool transactions before
  public staking is treated as ready.
- Keep the dApp staking approval path gated by live on-chain reads for contract wiring, Safe policy,
  `tradingOpened()`, and `incentivePool >= 1,000,000 GCAT`.
- Add public monitoring for contract wiring, staking reward pool health, and liquidity status.

## 📊 P2: Post-Launch Visibility

- Public contract status dashboard.
- Analytics dashboard for holders, transfers, liquidity, staking participation, and reward pool
  health.
- Improved user-facing staking and NFT benefit explanations.

## 📌 Roadmap Rule

Roadmap items should be published only when they have a current owner, dependency list, and evidence
plan.
