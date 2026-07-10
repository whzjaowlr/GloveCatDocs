# Tokenomics

GCAT has a fixed total supply and a simplified deployment allocation model.

## 🪙 Total Supply

| Item           | Value                  |
| -------------- | ---------------------- |
| Total supply   | 500,000,000 GCAT       |
| Decimals       | 18                     |
| Type           | ERC20 with ERC20Permit |
| Network target | Base Mainnet           |

## 📊 Initial Allocation

| Allocation                   | Ratio |           Amount | Notes                                        |
| ---------------------------- | ----: | ---------------: | -------------------------------------------- |
| Launch liquidity wallet      |   75% | 375,000,000 GCAT | Used for manual public liquidity setup       |
| Treasury and staking reserve |   20% | 100,000,000 GCAT | Ecosystem operations and reward pool funding |
| Team wallet                  |    5% |  25,000,000 GCAT | Team allocation                              |

There is no dedicated preminted marketing allocation, bug bounty allocation, or automatic liquidity
allocation outside the rows above.

## 🔐 Public Locks

| Item                       |                                  Amount | Status                                                                              |
| -------------------------- | --------------------------------------: | ----------------------------------------------------------------------------------- |
| Team allocation            |                         25,000,000 GCAT | PinkSale / PinkLock V2 vesting; 62 elapsed 30-day cycles to 100% cap                |
| Long-term treasury reserve |                         95,000,000 GCAT | PinkSale / PinkLock V2 vesting; 62 elapsed 30-day cycles to 100% cap                |
| Initial staking bootstrap  |                          5,000,000 GCAT | Deposited into the Staking incentive pool through two Safe executions on 2026-07-01 |
| Project-owned LP tokens    | 45,456.02270326782560651 vAMM-WETH/GCAT | PinkSale / PinkLock V2 until 2031-06-24 00:00 UTC                                   |

The team and long-term treasury reserve PinkSale / PinkLock V2 vesting records both start on
`2026-06-28T02:00:00Z` and use `0.56%` TGE with `1.63%` release every 30 days. The actual schedule
reaches the 100% cap after 62 elapsed 30-day cycles. External PinkSale / PinkLock V2 records are the final
schedule evidence; the compact table below links to the target contract and execution transactions.

<TokenLockTable />

## 💸 Fees

| Type     | Rate | Destination          |
| -------- | ---: | -------------------- |
| Buy fee  |   0% | No token fee         |
| Sell fee |   1% | Ecosystem fee wallet |

Fee rates are fixed in the token contract, and sell fees are sent to the ecosystem fee wallet. Sell
fees are not automatically redistributed by the token contract.

## 🚦 Launch Limits

| Item       | Rule                                                                        |
| ---------- | --------------------------------------------------------------------------- |
| Max wallet | Starts at 2% of total supply                                                |
| Expiry     | Expired on 2026-06-29 14:30:07 UTC, one hour after `openTrading()` executed |

The launch max-wallet limit is not a complete market-protection system. Wallets, exchanges, and
routers may also apply independent limits.

## 💧 Liquidity

The registered Aerodrome Classic Volatile WETH/GCAT pool is funded with 5.51 WETH and 375,000,000
GCAT. The project-owned LP tokens are locked through PinkSale / PinkLock V2 until 2031-06-24 00:00 UTC. See
[Liquidity and LP Lock Evidence](/guide/liquidity-lock-evidence) for the pool address, transaction
hashes, LP token custody, and lock evidence.

## 🎁 Reward Funding

Staking rewards are paid only from the funded staking incentive pool. The minimum pool target—not
the complete public-readiness decision—is `incentivePool >= 1,000,000 GCAT`; full readiness also
requires the Staking GCAT balance to cover `totalLockStaked + incentivePool`. A dated read at Base
block `48451141` on 2026-07-10 13:53:49 UTC
recorded 5,000,000 GCAT after the 1,000,000 GCAT and 4,000,000 GCAT funding executions. This is a
snapshot, not the live value. If the pool is insufficient later, the staking contract can carry
unpaid staking incentives forward as `pendingIncentives`; it does not mint new reward tokens. Check
[Operational Status](/guide/operational-status) for the mutable balance and readiness decision.

Staking incentives accrue over time and can be claimed while a staking position is still locked.
Locked principal can be withdrawn only after the selected lock period has matured.

The full initial staking bootstrap allocation is `5,000,000 GCAT`. Any public monthly or daily
leaderboard pacing display is a planned target only; it does not release tokens by itself. Actual
staking payouts depend on the live `Staking.incentivePool()` balance.

Gamification leaderboard rewards are NFT mints, not ERC20 reward-pool payouts.
