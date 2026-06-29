# Deployment Status

This public section is read-only deployment information for the current GloveCat contracts on Base
mainnet.

It does not publish Safe execution guides, calldata preparation steps, emergency runbooks, or
operator-only security procedures. Production admin execution is handled outside public docs through
the existing Safe workflow and private maintainer channels.

## Public Boundary

- Show current [contract and wallet information](/admin/contracts).
- Show [public evidence users can verify on-chain](/admin/contracts#public-evidence-links).
- Keep historical or archived addresses out of the active operating path.
- Do not use this documentation as an admin transaction checklist.

1. Fresh GloveCat contract deployment on Base mainnet.
2. [Basescan verification](/admin/contracts#public-evidence-links).
3. [Phase 1 Safe wiring](/admin/contracts#project-wallets).
4. [Team PinkLock vesting transfer](/admin/contracts#public-lock-evidence).
5. [Long-term treasury reserve PinkLock vesting transfer](/admin/contracts#public-lock-evidence).

Registered-pool setup, liquidity seed, project-owned LP locking, and Safe `openTrading()` execution
are complete and visible in the public evidence records. Public trading is open on-chain. Public
staking is not live because the latest live readiness check shows `incentivePool = 0`, below the
`1,000,000 GCAT` target.

## 🧩 Active Contract Surface

| Contract | Role |
| -------- | ---- |
| `GloveCatCore` | ERC20 + Permit token, fixed 0% buy and 1% sell ecosystem fee, registered-pool controls, one-time pre-launch LP seed path, Safe-executed one-way `openTrading()`, and launch max-wallet checks that expired 1 hour after trading opened |
| `Staking` | Fixed 30-, 90-, and 180-day lock positions, 1,000 GCAT minimum, 50 active-position cap, base APRs of 2%, 5%, and 8%, respectively, NFT boost snapshots, pool-gated incentives |
| `GloveCatNFT` | ERC721 tier NFT, 1-day benefit activation, different-tier boost stacking, same-tier duplicate suppression, 4.0x aggregate staking cap, ERC2981 royalty |
| `GamificationCore` | Staking-only Merkle leaderboard NFT rewards capped to 10 claims per season |

## 🔐 Public Evidence Rules

- Use only the current [Contract Information](/admin/contracts) page for mainnet addresses.
- Treat historical addresses as reference-only.
- Publish launch, liquidity, LP lock, staking reward pool funding, and Safe wiring status only after
  public evidence exists; current liquidity and LP lock records are linked from the public evidence pages.
- Do not describe removed features as available.

## 📚 Contents

- [Contract Info](/admin/contracts)
- [Public Evidence Links](/admin/contracts#public-evidence-links)
