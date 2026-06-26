# GloveCat (GCAT) Introduction

GloveCat is an independent token project deployed on Base mainnet and built around a fixed-fee ERC20, lock-position staking, NFT
boost snapshots, and staking-based gamification.

GloveCat is not affiliated with, endorsed by, or sponsored by Base or Coinbase. Base is referenced
only as the public network where the current GCAT contracts are deployed.

This documentation describes the current GloveCat deployment on Base mainnet. Contracts are deployed
and verified, Phase 1 Safe wiring is complete, and PinkLock token-lock records are published.
Registered-pool setup, liquidity seeding, and project-owned LP locking are complete. Trading is not open. Public staking is not live.

## 🚦 Current Status

| Item | Status |
| ---- | ------ |
| Network target | Base Mainnet |
| Deployment status | `active` |
| Active addresses | Published in [Contract Information](/admin/contracts) |
| Contract verification | [Basescan verified](/admin/contracts#public-evidence-links) |
| Phase 1 Safe wiring | Safe wiring executed |
| Team vesting lock | PinkLock vesting; 62 elapsed 30-day cycles to 100% cap |
| Long-term treasury reserve vesting lock | PinkLock vesting; 62 elapsed 30-day cycles to 100% cap |
| Registered pool | Aerodrome Classic Volatile WETH/GCAT pool registered |
| Liquidity seed | 5.51 WETH and 375,000,000 GCAT seeded |
| Trading | Scheduled for June 29, 2026 at 2:00 PM UTC |
| LP lock evidence | Project-owned LP tokens locked through PinkLock V2 until 2031-06-24 00:00 UTC |
| Staking / rewards | Requires the June 29, 2026 at 2:00 PM UTC trading launch and `incentivePool >= 1,000,000 GCAT`. If below target, rewards must be added through Safe execution |

## 🧩 Active Features

| Feature | Behavior |
| ------- | -------- |
| Token | ERC20 + ERC20Permit, 500M fixed supply, 75/20/5 initial allocation, burn tracking, fixed 0% buy fee and fixed 1% sell ecosystem fee |
| Launch controls | Registered-pool setup, one-time pre-launch LP seed from the launch liquidity wallet, one-way `openTrading()`, and default 2% launch max-wallet checks that expire 1 hour after trading opens |
| Staking | Lock positions with 1,000 GCAT minimum, 50 active-position cap, fixed 30-, 90-, and 180-day periods with base APRs of 2%, 5%, and 8%, respectively, pool-gated incentives, and unpaid incentive carry-forward |
| NFT | ERC721 tier NFT with 1-day benefit activation, transfer-time boost reset, different-tier boost stacking, same-tier duplicate suppression, and 4.0x aggregate staking cap |
| Rewards | Staking-only Merkle leaderboard NFT claims capped to 10 successful claims per season |
| Governance | Off-chain advisory community input; no on-chain governance module in active surface |

## 📌 Documentation Scope

This guide describes the current GloveCat deployment on Base mainnet and the public evidence users should verify.
Do not treat active deployment status as a live trading or staking signal.

## 🚀 Getting Started

1. Read [Tokenomics](/guide/tokenomics).
2. Review [Staking](/guide/staking) and [NFT](/guide/nft) behavior.
3. Check [Contract Information](/admin/contracts) and
   [Public Evidence Links](/admin/contracts#public-evidence-links) before relying on any address.
4. Review [Liquidity and LP Lock Evidence](/guide/liquidity-lock-evidence).
5. Use GloveCat-published community channels for launch announcements.
