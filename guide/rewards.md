# Rewards System

Earn GCAT incentives through achievements and leaderboard participation.

The active on-chain rewards surface is `GamificationCore`, backed by `GloveCatNFT` for badges and
NFT incentives.

## Leaderboard

### Categories

| Category | Calculation |
| -------- | ----------- |
| **STAKING** | Time-weighted average: `Σ(amount × days) / season_days` |
| **VOLUME** | Total volume: `buyVolume + sellVolume` |

### Season Incentives

Leaderboard reward claims use Merkle proofs published for each finalized season.

### Season Duration

- Monthly seasons
- On-chain data → Off-chain aggregation → Merkle Proof → Incentives

## Achievement System

Complete special activities to earn achievement badges and incentives.

| Achievement | Condition | Incentive |
| ----------- | --------- | ------ |
| First Stake | Complete first staking | Badge + GCAT |
| Voter | First governance vote | Badge |
| Collector | Own NFT | Badge |

## FAQ

### Q: Is check-in active on-chain?

A: No. The active 5-contract deployment only exposes achievement and leaderboard reward flows.

### Q: How long is a leaderboard season?

A: Approximately 30 days (monthly).
