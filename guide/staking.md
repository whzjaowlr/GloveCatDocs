# Staking Guide

Stake GCAT to earn incentives.

## Staking Types

### Flexible Staking

| Feature       | Description           |
| ------------- | --------------------- |
| Withdraw      | Anytime               |
| APY           | 1%                    |
| Min Amount    | 1,000 GCAT            |

::: tip Advantage
Earn incentives while maintaining liquidity.
:::

### Lock-up Staking

Lock your tokens for higher APY.

| Period | APY | Note |
| ------ | --- | ---- |
| 90 days | 2% | - |
| 180 days | 5% | - |
| 365 days | 8% | - |
| 730 days (2yr) | 12% | - |
| 1460 days (4yr) | 17% | Max APY |

::: warning Note
Withdrawal is not possible during the lock-up period.
:::

## Tier System

Based on GCAT staking amount:

| Tier | Holdings (GCAT) | Staking Boost | Tax Discount |
| ---- | --------------- | ------------- | ------------ |
| Bronze | 0 ~ 100,000 | 1.0x | 0% (fixed) |
| Silver | 100,001 ~ 500,000 | 1.1x | 0% (fixed) |
| Gold | 500,001 ~ 1,000,000 | 1.2x | Configurable |
| Platinum | 1,000,001 ~ 5M | 1.3x | Configurable |
| Diamond | 5M+ | 1.5x | Configurable |

::: tip Boost Calculation
Staking boost from multiple sources are **summed** (not multiplied):

- **Formula**: `1.0x + (Tier Bonus) + (NFT Bonus)`
- **Example**: Diamond (1.5x) + Legendary NFT (1.8x) = 1.0x + 0.5x + 0.8x = **2.3x**
- **Note**: The total summed multiplier is capped at **5.0x**.
:::

::: info Tax Discount
Tax discounts from Staking Tier and NFT Tier are also summed (max 100%).
:::

## Referral System

- **Referrer Bonus**: 5%
- **Referee Bonus**: 5%
- **Setting**: One-time only

**Example**: User B (referred by A) claims 100 GCAT incentive:
- B receives: 105 GCAT
- A receives: 5 GCAT

## How to Stake

### 1. Connect Wallet

1. Visit dApp: [glovecatcoin.com](https://glovecatcoin.com)
2. Click "Connect Wallet"
3. Select MetaMask or Rainbow
4. Confirm Base network

### 2. Stake Tokens

1. Go to Staking tab
2. Select Flexible or Lock-up
3. Enter staking amount
4. For Lock-up, select period
5. Click "Stake" button
6. Approve transaction in wallet

### 3. Claim Incentives

1. Click "Claim Incentives" button
2. Approve transaction
3. Incentives received

## FAQ

### Q: Are there fees for unstaking?

A: No. You only pay gas fees.

### Q: How often can I claim incentives?

A: Anytime you want.
