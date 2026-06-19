# Tokenomics

GCAT has a fixed total supply and a simplified redeploy allocation model.

## 🪙 Total Supply

| Item | Value |
| ---- | ----- |
| Total supply | 500,000,000 GCAT |
| Decimals | 18 |
| Type | ERC20 with ERC20Permit |
| Network target | Base Mainnet |

## 📊 Initial Allocation

| Allocation | Ratio | Amount | Notes |
| ---------- | ----: | -----: | ----- |
| Launch liquidity wallet | 75% | 375,000,000 GCAT | Used for manual public liquidity setup |
| Treasury and staking reserve | 20% | 100,000,000 GCAT | Ecosystem operations and reward pool funding |
| Team wallet | 5% | 25,000,000 GCAT | Team allocation |

There is no dedicated preminted marketing allocation, bug bounty allocation, or automatic liquidity
allocation outside the rows above.

## 🔐 Public Locks

| Item | Amount | Status |
| ---- | -----: | ------ |
| Team allocation | 25,000,000 GCAT | Locked through PinkLock vesting |
| Long-term treasury/staking reserve | 95,000,000 GCAT | Locked through PinkLock vesting |
| Initial staking bootstrap | 5,000,000 GCAT | Retained in Safe for initial pool funding |
| LP tokens | Public LP position | Pending until liquidity is added and project-owned LP tokens are locked |

The team and treasury/staking reserve PinkLock vesting records both start on
`2026-06-28T02:00:00Z` and use `0.56%` TGE with `1.63%` release every 30 days. The visible
description strings differ: team uses `GloveCat Team Allocation - 60 Cycle Vesting`, while the
treasury/staking reserve uses `GloveCat Treasury Reserve - 61 Cycle Vesting`. By the bps math,
60 cycles releases 98.36%, 61 cycles releases 99.99%, and the 62nd 30-day cycle reaches the 100%
cap. External PinkLock pages are the final schedule evidence.

| Evidence | Value |
| -------- | ----- |
| PinkLock target | `0xdD6E31A046b828CbBAfb939C2a394629aff8BBdC` |
| Lock target set tx | `0x6b7cd6aea6a36c595be64d6047fad032421785155166527be0473cda9445261d` |
| Team lock tx | `0x9c0feb497e0d96da551aa3f7d556ee5501ede05718a47bb4c6e38484703b634c` |
| Treasury lock tx | `0xe2a17dc1cb1300a9c26c6ec77cf036c1f38c3ff6ccb3163a5e77ffed43942d48` |

## 💸 Fees

| Type | Rate | Destination |
| ---- | ---: | ----------- |
| Buy fee | 0% | No token fee |
| Sell fee | 1% | Ecosystem fee wallet |

Fee rates are fixed in the token contract, and sell fees are sent to the ecosystem fee wallet. Sell
fees are not automatically redistributed by the token contract.

## 🚦 Launch Limits

| Item | Rule |
| ---- | ---- |
| Max wallet | Starts at 2% of total supply |
| Expiry | One hour after `openTrading()` |

The Safe can adjust or disable the launch max-wallet limit within contract bounds. The launch
max-wallet limit is not a complete market-protection system. Wallets, exchanges, and routers may
also apply independent limits.

## 💧 Liquidity

Liquidity creation, ETH/WETH funding, LP token custody, and LP token locking are manual operational
steps outside the token contract. Public liquidity records should include pair address, transaction
hashes, LP token custody, 5-year lock duration, and lock evidence.

## 🎁 Reward Funding

Staking rewards are paid only from the funded staking incentive pool. A 1,000,000 GCAT funding
transaction is prepared, but the pool is not funded on-chain until the Safe executes it after token
transfers are open. If the staking incentive pool is insufficient, the staking contract can carry
unpaid staking incentives forward as `pendingIncentives`; it does not mint new reward tokens.
Gamification leaderboard rewards are NFT mints, not ERC20 reward-pool payouts.
