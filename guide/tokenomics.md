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

```
Liquidity Pool      █████████████████████████    45%
Protocol Treasury   █████████████████████████    45%
Team (Vesting)      ██████                       10%
```

| Allocation        | Ratio | Amount | Note                               |
| ----------------- | ----- | ------ | ---------------------------------- |
| Liquidity Pool    | 45%   | 225M   | Initial LP + Auto-liquidity        |
| Protocol Treasury | 45%   | 225M   | Staking, Daily Rewards, Security   |
| Team              | 10%   | 50M    | 6-month linear vesting             |

### Protocol Treasury Breakdown

| Purpose           | Allocation | Description                          |
| ----------------- | ---------- | ------------------------------------ |
| Staking Incentives | ~30%      | Flexible/Lock-up staking rewards     |
| Daily Check-in    | ~10%      | User engagement rewards              |
| Security/Reserve  | ~5%       | Bug bounty, emergency reserve        |

::: tip Multi-Sig Secured
All treasury wallets are secured with Gnosis Safe Multi-Signature (3/5 or 2/3).
:::

## Fee Structure

| Type     | Rate | Purpose                    |
| -------- | ---- | -------------------------- |
| Buy Fee  | 0%   | No fee ✅                  |
| Sell Fee | 2%   | Liquidity 1% + Ecosystem 1%|

::: tip Fee Structure
Sell fee is permanently hardcoded at 2% and cannot be changed by any admin.
:::

### Tax Discount

Holders can receive tax discounts based on Staking Tier and NFT Tier (summed, max 100%):

| Source | Discount Range |
|--------|---------------|
| Staking Tier | 0% (Bronze/Silver), configurable (Gold+) |
| NFT Tier | 10% (Common) ~ 80% (Legendary) |

**Example**: Epic NFT (50%) + Gold Staking (0%) = **50% discount** → 1% sell fee

## Transaction Limits

| Item           | Limit           | Note              |
| -------------- | --------------- | ----------------- |
| Max Per TX     | 0.5%            | 2,500,000 GCAT    |
| Max Per Wallet | 2.5%            | 12,500,000 GCAT   |

::: warning Limit Expiry
Transaction limits are automatically removed 10 days after launch (`LIMIT_EXPIRY = 10 days`)
:::

::: info Anti-Bot
99% fee applied for 10 blocks after launch to prevent bots
:::

## Lock-up Information

- **Team Wallet**: 6-month cliff + linear vesting
- **LP Tokens**: 10-year lock in GloveCatVault
- **Staking Lock-up**: 90/180/365/730/1460 days options
