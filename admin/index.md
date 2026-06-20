# Deployment Status

This public section is read-only deployment information for the current GloveCat Base mainnet
surface.

It does not publish Safe execution guides, calldata preparation steps, emergency runbooks, or
operator-only security procedures. Production admin execution is handled outside public docs through
the existing Safe workflow and private maintainer channels.

## Public Boundary

- Show current [contract and wallet information](/admin/contracts).
- Show [public evidence users can verify on-chain](/admin/contracts#public-evidence-links).
- Keep historical or archived addresses out of the active operating path.
- Do not use this documentation as an admin transaction checklist.

1. Fresh Base contract deployment.
2. [Basescan verification](/admin/contracts#public-evidence-links).
3. [Phase 1 Safe wiring](/admin/contracts#project-wallets).
4. [Team PinkLock vesting transfer](/admin/contracts#public-lock-evidence).
5. [Treasury/staking reserve PinkLock vesting transfer](/admin/contracts#public-lock-evidence).

Official pair setup, liquidity seed, LP locking, staking reward-pool funding, and trading are
separate launch gates. Keep those records visible beside the active contract addresses only after
the matching evidence exists.

## 🧩 Active Contract Surface

| Contract | Role |
| -------- | ---- |
| `GloveCatCore` | ERC20 + Permit token, fixed 0% buy and 1% sell ecosystem fee, official pair controls, one-time pre-launch LP seed path, launch max-wallet checks that expire 1 hour after trading opens |
| `Staking` | Fixed 30-, 90-, and 180-day lock positions, 1,000 GCAT minimum, 50 active-position cap, base APRs of 2%, 5%, and 8%, respectively, NFT boost snapshots, pool-gated incentives |
| `GloveCatNFT` | ERC721 tier NFT, 1-day benefit activation, different-tier boost stacking, same-tier duplicate suppression, 4.0x aggregate staking cap, ERC2981 royalty |
| `GamificationCore` | Staking-only Merkle leaderboard NFT rewards capped to 10 claims per season |

## 🔐 Public Evidence Rules

- Use only the current [Contract Information](/admin/contracts) page for mainnet addresses.
- Treat historical addresses as reference-only.
- Publish launch, liquidity, LP lock, staking reward pool funding, and Safe wiring status only after
  public evidence exists.
- Do not describe removed features as available.

## 📚 Contents

- [Contract Info](/admin/contracts)
- [Public Evidence Links](/admin/contracts#public-evidence-links)
