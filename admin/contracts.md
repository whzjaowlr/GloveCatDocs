# Contract Information

This page shows the current deployment registry state.

## 🌐 Base Mainnet

<ContractTable />

## 👛 Project Wallets

<WalletTable />

## 🚦 Current Manifest Status

The current Base manifest is `deployed-pending-safe-config`.

The contracts listed above are deployed and Basescan verified. The deployment is not a complete
public launch until Safe wiring, liquidity setup, LP locking, and trading launch are completed.

The active manifest includes:

- Contract addresses.
- Transaction hashes and block numbers.
- Constructor arguments.
- Compiler version.
- Git commit.
- Safe address and Safe configuration evidence.
- Contract verification evidence.
- `status=active` only after Safe configuration execution and final review.

## 🌐 Network Information

| Item     | Value                      |
| -------- | -------------------------- |
| Network  | Base Mainnet               |
| Chain ID | 8453                       |
| RPC      | `https://mainnet.base.org` |
| Explorer | `https://basescan.org`     |

## 🧩 Active Contracts

The active redeploy surface is:

- `GloveCatCore`
- `Staking`
- `GloveCatNFT`
- `GamificationCore`

Only the contracts listed above should be treated as the current redeploy surface.

## ✅ ABI And Verification

ABIs come from the contract repository build outputs after compile. Basescan verification should be
checked against the active manifest, not older archived deployment snapshots.
