# Admin Guide

This section is for operators maintaining the current GloveCat redeploy surface.

## Operating Model

GloveCat contracts are deployed by an EOA, but production admin authority is assigned to the Safe
multisig through `TieredAccess`.

Fresh deployment is not complete until:

1. A broadcast-generated Base manifest is written.
2. Contract addresses, constructor args, tx hashes, block numbers, compiler version, and git commit
   are recorded.
3. Safe configuration transactions are executed or reviewed.
4. Basescan verification and on-chain reads match the manifest.
5. Liquidity setup and LP lock evidence are published where relevant.

## Active Contract Surface

| Contract | Role |
| -------- | ---- |
| `GloveCatCore` | ERC20 token, fixed sell fee, launch max-wallet limit |
| `Staking` | Lock-only staking |
| `GloveCatNFT` | ERC721 staking boost NFT |
| `GloveCatBadge` | ERC1155 badge NFT |
| `GamificationCore` | Achievements and staking-only leaderboard NFT rewards |
| `GloveCatViewer` | Read-only frontend helper |

## Admin Principles

- Use Safe transactions for production admin actions.
- Do not rely on EOA direct admin calls as a mainnet operating path.
- Treat historical addresses as reference-only until the fresh manifest is active.
- Publish evidence for launch, liquidity, LP lock, reward pool funding, and Safe wiring.
- Do not describe removed features as available.

## Contents

- [Contract Info](/admin/contracts)
- [Admin Functions](/admin/functions)
- [Safe Guide](/admin/safe-guide)
- [Emergency Response](/admin/emergency)
- [Security Protocol](/admin/security)
