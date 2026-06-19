# Rewards System

The active on-chain rewards surface is `GamificationCore`.

It supports staking-only leaderboard NFT reward claims.

## 🏅 Leaderboard Rewards

The active leaderboard is staking-only. Token buy/sell volume is not part of the active leaderboard
contract.

Flow:

1. Operators compute staking scores off-chain.
2. Safe finalizes a season with a Merkle root.
3. Eligible users claim NFT rewards with Merkle proofs.
4. `GamificationCore` mints the tier NFT through `GloveCatNFT`.
5. The gamification contract must be approved as an NFT minter before claims can mint.

Leaderboard seasons use a fixed 3-calendar-month window in the leaderboard tooling and published
season records.

Leaderboard score policy:

```text
staking score = sum(lock amount * lock-period score multiplier)
```

| Lock period | `lockPeriodId` | Score multiplier |
| ----------- | -------------- | ---------------- |
| 30 days | `0` | 1x |
| 90 days | `1` | 3x |
| 180 days | `2` | 7x |

This score multiplier is only for leaderboard ranking. It does not change staking reward APR or NFT
boost.

## 🧾 Leaderboard Claim Limits

| Rule | Value |
| ---- | ----- |
| Max successful claims per season | 10 |
| Claim per wallet per season | 1 |
| Claim per rank per season | 1 |
| Rank range | 1 through 10 |

Rank-to-tier mapping:

| Rank | NFT tier |
| ---- | -------- |
| 1 | Legendary |
| 2-3 | Epic |
| 4-7 | Rare |
| 8-10 | Common |

Merkle leaves are domain-separated by chain ID, contract address, season, user, rank, and value.
The Safe can correct a season Merkle root only before that season has any successful claim.

## 💰 Funding

Leaderboard NFT rewards do not use an ERC20 reward pool. Claims require the NFT contract to be wired
and the gamification contract to be approved as a minter.
