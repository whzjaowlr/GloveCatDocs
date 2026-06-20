# GloveCat (GCAT) Introduction

GloveCat is a Base-chain token project built around a fixed-fee ERC20, lock-position staking, NFT
boost snapshots, and staking-based gamification.

This documentation describes the current deployed Base surface. Base mainnet contracts are deployed
and verified, Phase 1 Safe wiring is complete, and PinkLock token-lock records are published.
Official pair setup, liquidity, LP locking, `openTrading()`, reward-pool funding, and public staking
are separate launch gates.

## 🚦 Current Status

| Item | Status |
| ---- | ------ |
| Network target | Base Mainnet |
| Deployment status | `active` |
| Active addresses | Published in [Contract Information](/admin/contracts) |
| Contract verification | [Basescan verified](/admin/contracts#public-evidence-links) |
| Phase 1 Safe wiring | Complete |
| Team vesting lock | Complete |
| Treasury/staking reserve vesting lock | Complete |
| Official pair | Pending |
| Liquidity seed | Pending |
| Trading | Closed until `openTrading()` executes |
| LP lock evidence | Pending until locker address and public lock page are verified |
| Staking reward pool | 1,000,000 GCAT funding transaction prepared; `incentivePool` is 0 until Safe execution |
| Public staking | Closed until the go-live check passes |

## 🧩 Active Features

| Feature | Behavior |
| ------- | -------- |
| Token | ERC20 + ERC20Permit, 500M fixed supply, 75/20/5 initial allocation, burn tracking, fixed 0% buy fee and fixed 1% sell ecosystem fee |
| Launch controls | Official pair setup, one-time pre-launch LP seed from the launch liquidity wallet, one-way `openTrading()`, and default 2% launch max-wallet checks that expire 1 hour after trading opens |
| Staking | Lock positions with 1,000 GCAT minimum, 50 active-position cap, fixed 30-, 90-, and 180-day periods with base APRs of 2%, 5%, and 8%, respectively, pool-gated incentives, and unpaid incentive carry-forward |
| NFT | ERC721 tier NFT with 1-day benefit activation, transfer-time boost reset, different-tier boost stacking, same-tier duplicate suppression, and 4.0x aggregate staking cap |
| Rewards | Staking-only Merkle leaderboard NFT claims capped to 10 successful claims per season |
| Governance | Off-chain advisory community input; no on-chain governance module in active surface |

## 📌 Documentation Scope

This guide describes the current deployed Base surface and the public evidence users should verify.
Do not treat active deployment status as a live trading or staking signal.

## 🚀 Getting Started

1. Read [Tokenomics](/guide/tokenomics).
2. Review [Staking](/guide/staking) and [NFT](/guide/nft) behavior.
3. Check [Contract Information](/admin/contracts) and
   [Public Evidence Links](/admin/contracts#public-evidence-links) before relying on any address.
4. Use official community channels for launch announcements.
