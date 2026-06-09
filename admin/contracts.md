# Contract Information

This page shows the current deployment registry state.

## Base Mainnet

<ContractTable />

## Project Wallets

<WalletTable />

## Current Manifest Status

The current contract repository manifest is `no-current-redeploy`. The previous Base snapshot was
archived and must not be used as the active deployment registry.

Do not use historical addresses as active addresses. A fresh manifest must include:

- Contract addresses.
- Transaction hashes and block numbers.
- Constructor arguments.
- Compiler version.
- Git commit.
- Safe address and Safe configuration evidence.
- Contract verification evidence.
- `status=active` only after final review.

## Network Information

| Item | Value |
| ---- | ----- |
| Network | Base Mainnet |
| Chain ID | 8453 |
| RPC | `https://mainnet.base.org` |
| Explorer | `https://basescan.org` |

## Active Contracts

The active redeploy surface is:

- `GloveCatCore`
- `Staking`
- `GloveCatNFT`
- `GloveCatBadge`
- `GamificationCore`
- `GloveCatViewer`

Only the contracts listed above should be treated as the current redeploy surface.

## ABI And Verification

ABIs come from the contract repository build outputs after compile. Basescan verification should be
checked against the active manifest, not older archived deployment snapshots.
