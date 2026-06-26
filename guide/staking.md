# Staking Guide

GCAT staking uses fixed lock positions in the current contract deployment.

## 🔒 Core Rules

The active staking contract supports fixed lock positions, reward-pool-gated payouts, NFT boost
snapshots, Safe-controlled contract wiring, and optional staking timestamp sync back to
`GloveCatCore`.

Public staking is not live. It requires the June 29, 2026 at 2:00 PM UTC trading launch and `incentivePool >= 1,000,000 GCAT` on-chain. If `incentivePool` is below 1,000,000 GCAT, rewards must be added through Safe execution before public staking is treated as ready.

| Rule | Value |
| ---- | ----- |
| Minimum stake | 1,000 GCAT |
| Max active lock positions per user | 50 |
| Reward source | Funded `incentivePool` only |
| Final multiplier cap | 4.0x |

## ⏳ Lock Periods

The active staking contract exposes three fixed lock periods:

| Lock period ID | Duration | Base APR |
| -------------- | -------: | -------: |
| 0 | 30 days | 2% / `200` bps |
| 1 | 90 days | 5% / `500` bps |
| 2 | 180 days | 8% / `800` bps |

The selected period's duration and base APR are snapshotted into the lock position when
`lockStake(amount, lockPeriodId)` is called. The base APR is applied pro rata by elapsed seconds; it
is not a flat bonus paid just for selecting a period, and it is not an extra staking-amount
multiplier.

After a lock reaches maturity, it becomes withdrawable but does not automatically stop earning
rewards. A matured position continues to accrue incentives while it remains active, until the user
claims incentives or unstakes the position.

## 📏 Staking Amounts

Stake size affects rewards through the locked principal only. A larger stake can earn more total
reward because more GCAT is locked, but it does not unlock a higher reward multiplier.

Inactive position slots can be reused after `lockUnstake(positionId)`.

## 🎨 NFT Boost Snapshot

Each lock position snapshots the user's NFT boost when the position is created. Later NFT transfers
or later benefit activation do not retroactively update an existing lock position.

If a user activates an NFT benefit, creates a lock position, and then sells or transfers that NFT,
the existing lock keeps the boost that was snapshotted at lock creation. The seller loses the active
benefit for future lock positions, and the recipient must wait through the holding period before
activating the benefit for new lock positions.

Rules:

- No NFT boost: 1.0x.
- Different active NFT tiers stack additively.
- Duplicate NFTs from the same tier do not add extra boost.
- NFT benefits require the configured holding period before activation.
- The final staking multiplier is capped at 4.0x.

## 🎁 Reward Pool

Staking rewards are paid from the staking incentive pool. The contract does not mint reward tokens.
Rewards can continue accumulating after the selected lock period has matured if the position remains
active.

If the pool is insufficient at claim or unstake time:

- The available amount is paid.
- The unpaid amount is stored in `pendingIncentives`.
- Users can claim later after the pool is replenished.

Do not treat displayed APRs as guaranteed returns.

## 🚀 How To Stake

1. Connect a Base-compatible wallet.
2. Hold GCAT on Base.
3. Confirm the [active staking address](/admin/contracts), June 29, 2026 at 2:00 PM UTC trading-launch evidence, [liquidity and LP lock evidence](/guide/liquidity-lock-evidence), and funded reward-pool evidence.
4. Approve the staking contract.
5. Choose lock period ID `0`, `1`, or `2`.
6. Submit `lockStake(amount, lockPeriodId)`.
7. Claim accrued incentives with `claimIncentives()` while locked, or unstake after the lock matures.

## 🔓 Unstaking

Locked positions cannot be withdrawn before their lock period ends. After maturity, users can call
`lockUnstake(positionId)` to withdraw principal and any payable incentive. Users may also leave a
matured position active; in that case, rewards continue to accrue until the next claim or unstake
transaction, subject to reward-pool availability.
