# Rewards System

Earn GCAT rewards through various activities.

## Daily Check-in

### Rules

- Check-in once per day
- Resets at UTC 00:00
- Consecutive check-ins earn streak bonus
- **EIP-712 signature** (backend integration required)

### Streak Bonus

| Consecutive Days | Bonus |
| ---------------- | ----- |
| 1-6 days | Base reward |
| 7 days | **+50%** |
| 14+ days | Additional rewards |

### How to Use

1. Go to Rewards tab
2. Click "Check-in" button
3. Approve transaction
4. Receive rewards!

### Special Badge

Achieve **100 Day Streak** to receive the **100 Day Streak Badge** (Soulbound).

## Leaderboard

### Categories

| Category | Calculation |
| -------- | ----------- |
| **STAKING** | Time-weighted average: `Σ(amount × days) / season_days` |
| **VOLUME** | Total volume: `buyVolume + sellVolume` |

### Season Rewards (NFT)

| Rank | NFT Tier |
| ---- | -------- |
| 🥇 1st | Legendary |
| 🥈 2nd-3rd | Epic |
| 🥉 4th-7th | Rare |
| 8th-10th | Common |

### Season Duration

- Monthly seasons
- On-chain data → Off-chain aggregation → Merkle Proof → Rewards

## Achievement System

Complete special activities to earn achievement badges and rewards.

| Achievement | Condition | Reward |
| ----------- | --------- | ------ |
| First Stake | Complete first staking | Badge + GCAT |
| Voter | First governance vote | Badge |
| Collector | Own NFT | Badge |

## FAQ

### Q: Does my streak reset if I miss a day?

A: Yes, missing even one day resets your streak to 0.

### Q: How long is a leaderboard season?

A: Approximately 30 days (monthly).
