# Admin Guide

This section is for operators maintaining the current GloveCat redeploy surface.

## 🧭 Operating Model

GloveCat contracts are deployed by an EOA, but production admin authority is assigned to the Safe
multisig through `TieredAccess`.

The current deployment has completed:

1. Fresh Base contract deployment.
2. Basescan verification.
3. Phase 1 Safe wiring.
4. Team PinkLock vesting transfer.
5. Treasury/staking reserve PinkLock vesting transfer.

Public launch evidence should keep the official pair, liquidity seed, LP lock, staking reward-pool
funding, and trading-route records visible beside the active contract addresses.

## 🧩 Active Contract Surface

| Contract | Role |
| -------- | ---- |
| `GloveCatCore` | ERC20 + Permit token, fixed 0% buy and 1% sell ecosystem fee, official pair controls, one-time pre-launch LP seed path, launch max-wallet checks that expire 1 hour after trading opens |
| `Staking` | Fixed 30/90/180 day lock positions, 1,000 GCAT minimum, 50 active-position cap, annualized 2%/5%/8% rates, NFT boost snapshots, funded incentive pool |
| `GloveCatNFT` | ERC721 tier NFT, 1-day benefit activation, different-tier boost stacking, same-tier duplicate suppression, 4.0x aggregate staking cap, ERC2981 royalty |
| `GamificationCore` | Staking-only Merkle leaderboard NFT rewards capped to 10 claims per season |

## 🔐 Admin Principles

- Use Safe transactions for production admin actions.
- Do not rely on EOA direct admin calls as a mainnet operating path.
- Use only the current Base manifest and Contract Information page for mainnet addresses.
- Treat historical addresses as reference-only.
- Publish evidence for launch, liquidity, LP lock, staking reward pool funding, and Safe wiring.
- Do not describe removed features as available.

## 📚 Contents

- [Contract Info](/admin/contracts)
- [Admin Functions](/admin/functions)
- [Safe Guide](/admin/safe-guide)
- [Emergency Response](/admin/emergency)
- [Security Protocol](/admin/security)
