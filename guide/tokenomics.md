# Tokenomics

GCAT token distribution and economic structure.

## Total Supply

| Item         | Value                  |
| ------------ | ---------------------- |
| Total Supply | **500,000,000 GCAT**   |
| Decimals     | 18                     |
| Type         | ERC-20                 |
| Network      | Base (Chain ID: 8453)  |

## Token Distribution

| Allocation       | Ratio | Amount           | Note                           |
| ---------------- | ----- | ---------------- | ------------------------------ |
| Launch Liquidity | 55%   | 275,000,000 GCAT | Initial liquidity wallet       |
| Treasury         | 40%   | 200,000,000 GCAT | Ecosystem, staking, operations |
| Team             | 5%    | 25,000,000 GCAT  | Team wallet                    |

### Treasury Use Areas

The 40% treasury allocation is controlled by the project treasury wallet. These are treasury use areas, not separate initial token allocations.

| Purpose          | Description                         |
| ---------------- | ----------------------------------- |
| Staking Rewards  | Flexible/lock-up staking incentives |
| Gamification     | Achievement and leaderboard rewards |
| Security/Reserve | Security and operational reserve    |

::: tip Multi-Sig Secured
All treasury wallets are secured with Gnosis Safe Multi-Signature (3/5 or 2/3).
:::

## Fee Structure

| Type     | Rate | Purpose          |
| -------- | ---- | ---------------- |
| Buy Fee  | 0%   | No token fee     |
| Sell Fee | 1%   | Ecosystem wallet |

::: tip Fee Structure
Sell fee is permanently hardcoded at 1% ecosystem fee and cannot be changed by any admin.
:::

## Transaction Limits

| Item           | Initial Limit | Note              |
| -------------- | ------------- | ----------------- |
| Max Per Wallet | 2%            | 10,000,000 GCAT   |

::: warning Limit Expiry
The launch max-wallet limit expires 1 hour after trading starts (`LIMIT_EXPIRY = 1 hours`).
:::

## Lock-up Information

- **LP Tokens**: Added and locked manually outside the token contract
- **Staking Lock-up**: 90/180/365 days options
