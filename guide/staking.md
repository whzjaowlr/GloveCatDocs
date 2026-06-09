# Staking Guide

GCAT staking is lock-only in the current redeploy surface.

## 🔒 Core Rules

The active staking contract supports fixed lock positions, funded reward-pool payouts, NFT boost
snapshots, and Safe-controlled contract wiring.

## ⏳ Lock Periods

| ID | Duration | Base incentive rate |
| -- | -------- | ------------------- |
| 0 | 90 days | 2% |
| 1 | 180 days | 5% |
| 2 | 365 days | 8% |

Lock period selection changes the base incentive rate only. It is not an extra multiplier.

## 📏 Staking Amounts

There are no staking amount tiers. A larger stake can earn more total reward because more GCAT is
locked, but it does not unlock a higher reward multiplier.

The active staking ABI does not expose `tierCount()`, `tiers(uint256)`, or `getUserTier(address)`.

## 🎨 NFT Boost Snapshot

Each lock position snapshots the user's NFT boost when the position is created. Later NFT transfers
or later benefit activation do not retroactively update an existing lock position.

Rules:

- No NFT boost: 1.0x.
- `GloveCatNFT` returns only the highest active tier boost for a wallet.
- NFT benefits require the configured holding period before activation.
- The final staking multiplier is capped at 4.0x.

## 🎁 Reward Pool

Staking rewards are paid from the staking incentive pool. The contract does not mint reward tokens.

If the pool is insufficient at claim or unstake time:

- The available amount is paid.
- The unpaid amount is stored in `pendingIncentives`.
- Users can claim later after the pool is replenished.

Do not treat displayed incentive rates as guaranteed returns.

## 🚀 How To Stake

1. Connect a Base-compatible wallet.
2. Hold GCAT on Base.
3. Approve the staking contract.
4. Choose one fixed lock period.
5. Submit `lockStake(amount, lockPeriodId)`.
6. Claim incentives with `claimIncentives()` or unstake after the lock matures.

## 🔓 Unstaking

Locked positions cannot be withdrawn before their lock period ends. After maturity, users can call
`lockUnstake(positionId)` to withdraw principal and any payable incentive.
