# Contract Information

This page shows the current deployment registry state.

## 🌐 Base Mainnet

<ContractTable />

## 👛 Project Wallets

<WalletTable />

## 🚦 Current Deployment Status

The current Base deployment status is `active`.

The contracts listed above are deployed and Basescan verified. Phase 1 Safe wiring has been
executed. The PinkLock target is set, and the team and long-term treasury/staking reserve lock flags
are complete on-chain.

Active deployment status is not a trading-live or staking-live claim. Official pair setup,
liquidity, LP locking, `openTrading()`, and reward-pool funding remain separate launch evidence.

| Launch gate | Current status |
| ----------- | -------------- |
| Official pair | Pending; `uniswapV2Pair` is still the zero address |
| Liquidity seed | Pending; `launchLiquiditySeeded` is false |
| Trading | Closed until `openTrading()` executes |
| LP lock evidence | Pending until locker address and public lock page are verified |
| Staking reward pool | 1,000,000 GCAT funding transaction prepared; `incentivePool` is 0 until Safe execution |
| Public staking | Closed until trading is open and the reward-pool minimum is funded |

The current published Safe configuration is 2-of-3 multisig. This configuration may be strengthened
later by adding signers, increasing the threshold, or both. Users should verify the current Safe
owner and threshold records before relying on any privileged-control claim.

## 🔐 Public Lock Evidence

| Item | Value |
| ---- | ----- |
| PinkLock target | `0xdD6E31A046b828CbBAfb939C2a394629aff8BBdC` |
| Team locked | 25,000,000 GCAT |
| Team description | `GloveCat Team Allocation - 60 Cycle Vesting` |
| Team vesting start | `2026-06-28T02:00:00Z` |
| Team TGE percent | `0.56%` |
| Team cycle | 30 days |
| Team cycle release percent | `1.63%` |
| Treasury/staking reserve vesting | 95,000,000 GCAT |
| Treasury/staking reserve description | `GloveCat Treasury Reserve - 61 Cycle Vesting` |
| Treasury/staking reserve vesting start | `2026-06-28T02:00:00Z` |
| Treasury/staking reserve TGE percent | `0.56%` |
| Treasury/staking reserve cycle | 30 days |
| Treasury/staking reserve cycle release percent | `1.63%` |
| Bps release at 60 cycles | `98.36%` released; `1.64%` remains |
| Bps release at 61 cycles | `99.99%` released; `0.01%` remains |
| Full release by bps math | 62 cycles, 1,860 days, `2031-08-01T02:00:00Z` |
| Initial staking bootstrap retained in Safe | 5,000,000 GCAT |
| Lock target set tx | `0x6b7cd6aea6a36c595be64d6047fad032421785155166527be0473cda9445261d` |
| Team lock tx | `0x9c0feb497e0d96da551aa3f7d556ee5501ede05718a47bb4c6e38484703b634c` |
| Treasury lock tx | `0xe2a17dc1cb1300a9c26c6ec77cf036c1f38c3ff6ccb3163a5e77ffed43942d48` |

External PinkLock pages are the final schedule evidence. Both visible PinkLock records use
`tgeBps=56`, `cycle=2592000`, and `cycleBps=163`, which correspond to 0.56% TGE and 1.63% every
30 days. The cycle-count wording comes from each PinkLock description string: team 60 Cycle Vesting,
treasury/staking reserve 61 Cycle Vesting. By the bps math, 60 cycles releases 98.36%, 61 cycles
releases 99.99%, and the 62nd 30-day cycle reaches the 100% cap. LP lock wording must stay tied to
the public lock transaction and lock page evidence.

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
