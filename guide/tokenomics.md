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

## 💸 Fees

| Type | Rate | Destination |
| ---- | ---: | ----------- |
| Buy fee | 0% | No token fee |
| Sell fee | 1% | Ecosystem fee wallet |

The token contract does not expose fee-rate setters or fee-exclusion admin functions. Sell fees are
not automatically redistributed by the token contract.

## 🚦 Launch Limits

| Item | Rule |
| ---- | ---- |
| Max wallet | Starts at 2% of total supply |
| Expiry | One hour after `openTrading()` |
| Max transaction limit | Removed from active source |

The launch max-wallet limit is not a complete market-protection system. Wallets, exchanges, and
routers may also apply independent limits.

## 💧 Liquidity

Liquidity creation, ETH/WETH funding, LP token custody, and LP token locking are manual operational
steps outside the token contract. Public liquidity claims should include pair address, transaction
hashes, LP token custody, lock duration, and lock evidence.

## 🎁 Reward Funding

Staking and gamification rewards are paid only from funded reward pools. If a reward pool is
insufficient, the staking contract can carry unpaid staking incentives forward as
`pendingIncentives`; it does not mint new reward tokens.
