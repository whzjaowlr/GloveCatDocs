# Contract Information

This page shows the current deployment registry state.

## 🌐 Base Mainnet

<ContractTable />

## 👛 Project Wallets

<WalletTable />

## 🚦 Current Deployment Status

The current Base deployment status is `active`.

The contracts listed above are deployed and Basescan verified. Phase 1 Safe wiring has been executed.
Team allocation and the long-term treasury/staking reserve are locked through PinkLock vesting.

Public deployment evidence should include Safe ownership, contract verification, PinkLock records,
liquidity transactions, LP lock records, staking reward-pool funding, and the official trading route.

## 🔐 Public Lock Evidence

| Item | Value |
| ---- | ----- |
| PinkLock target | `0xdD6E31A046b828CbBAfb939C2a394629aff8BBdC` |
| Vesting start | `2026-06-28T02:00:00Z` |
| TGE percent | `0.57%` |
| Cycle | 30 days |
| Cycle release percent | `1.63%` |
| Team locked | 25,000,000 GCAT |
| Treasury/staking reserve locked | 95,000,000 GCAT |
| Initial staking bootstrap retained in Safe | 5,000,000 GCAT |
| Lock target set tx | `0x6b7cd6aea6a36c595be64d6047fad032421785155166527be0473cda9445261d` |
| Team lock tx | `0x9c0feb497e0d96da551aa3f7d556ee5501ede05718a47bb4c6e38484703b634c` |
| Treasury lock tx | `0xe2a17dc1cb1300a9c26c6ec77cf036c1f38c3ff6ccb3163a5e77ffed43942d48` |

LP lock wording must stay tied to the public lock transaction and lock page evidence.

## 🌐 Network Information

| Item | Value |
| ---- | ----- |
| Network | Base Mainnet |
| Chain ID | 8453 |
| RPC | `https://mainnet.base.org` |
| Explorer | `https://basescan.org` |

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
