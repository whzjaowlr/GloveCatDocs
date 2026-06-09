# GloveCat (GCAT) Introduction

GloveCat is a Base-chain token project built around a fixed-fee ERC20, lock-only staking, NFT boost
snapshots, badges, and staking-based gamification.

This documentation describes the current redeploy source surface. It does not claim that Base
mainnet contracts are active until a fresh manifest is published and marked `active`.

## Current Status

| Item | Status |
| ---- | ------ |
| Network target | Base Mainnet |
| Current manifest | `no-current-redeploy` placeholder |
| Active addresses | Pending fresh redeploy manifest |
| Contract verification | Pending fresh redeploy |
| Liquidity launch | Manual operation after pair setup |

## Active Features

| Feature | Current Behavior |
| ------- | ---------------- |
| Token | ERC20 + ERC20Permit, fixed 0% buy fee and 1% sell ecosystem fee |
| Launch controls | One-way trading open, one-time pre-launch LP seed path, launch max-wallet limit |
| Staking | Lock-only 90/180/365 day staking |
| NFT | ERC721 tier NFT, highest active tier boost only |
| Badge | Separate ERC1155 badge contract, soulbound or transferable per badge type |
| Rewards | Achievement rewards and staking-only leaderboard NFT claims |
| Governance | Off-chain advisory community input; no on-chain governance module in active surface |

## Documentation Scope

This guide describes the current redeploy source surface and current launch requirements only.

## Getting Started

1. Read [Tokenomics](/guide/tokenomics).
2. Review [Staking](/guide/staking) and [NFT](/guide/nft) behavior.
3. Check [Contract Information](/admin/contracts) before relying on any address.
4. Use official community channels for launch announcements.
