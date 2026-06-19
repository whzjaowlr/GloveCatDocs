# Deployment Status

This public section is read-only deployment information for the current GloveCat Base mainnet
surface.

It does not publish Safe execution guides, calldata preparation steps, emergency runbooks, or
operator-only security procedures. Production admin execution is handled outside public docs through
the existing Safe workflow and private maintainer channels.

## Public Boundary

- Show current contract and wallet information.
- Show public evidence users can verify on-chain.
- Keep historical or archived addresses out of the active operating path.
- Do not use this documentation as an admin transaction checklist.

## Current Surface

| Contract | Role |
| -------- | ---- |
| `GloveCatCore` | ERC20 + Permit token, fixed sell ecosystem fee, official pair controls, launch max-wallet checks |
| `Staking` | Fixed 30/90/180 day lock positions and funded incentive pool |
| `GloveCatNFT` | ERC721 tier NFT and staking boost source |
| `GamificationCore` | Staking-only leaderboard NFT reward claims |

## Contents

- [Contract Info](/admin/contracts)
