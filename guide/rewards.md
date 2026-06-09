# Rewards System

The active on-chain rewards surface is `GamificationCore`.

It supports:

- Achievement definitions and claims.
- Verifier-updated achievement progress.
- Reward-pool backed achievement payouts.
- Staking-only leaderboard NFT reward claims.

## Achievement Rewards

Safe creates and manages achievement definitions. Approved verifiers update user progress.

Users can claim an achievement only when:

- The achievement exists and is active.
- The user's progress meets the threshold.
- The user has not already claimed it.
- The reward pool can cover any token reward.

Achievement rewards are not minted automatically. They come from `rewardPool`.

## Leaderboard Rewards

The active leaderboard is staking-only. Token buy/sell volume is not part of the active leaderboard
contract.

Flow:

1. Operators compute staking scores off-chain.
2. Safe finalizes a season with a Merkle root.
3. Eligible users claim NFT rewards with Merkle proofs.
4. `GamificationCore` mints the tier NFT through `GloveCatNFT`.

## Leaderboard Claim Limits

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

## Funding

Achievement token rewards are paid from `rewardPool`. Leaderboard NFT rewards require the NFT
contract to be wired and the gamification contract to be approved as a minter.
