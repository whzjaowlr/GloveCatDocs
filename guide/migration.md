# Migration Guide

## V1 → V2 Migration

GloveCat has a secure migration system for token upgrades.

## Migration Process

1. **Request Phase** - MultiSig requests migration (reason required)
2. **Waiting Phase** - 30-day community review period
3. **Execution Phase** - Liquidity recovery and snapshot
4. **Airdrop** - V2 token distribution

## Security Features

| Feature | Description |
|---------|-------------|
| 30-Day Timelock | Prevents rug pulls, provides review time |
| MultiSig Only | Prevents single wallet abuse |
| Slippage Protection | Default 1%, max 5% configurable |
| Snapshot | Fair V2 token distribution |

## User Action Guide

### When Migration is Pending

- Check real-time countdown in the app
- Keep V1 tokens in your wallet
- Trading available until snapshot block

### After Migration Complete

- Receive V2 token airdrop automatically
- V1 tokens are no longer tradeable

## How to Verify

```
App → Migration Page → Check Status
```

Verify directly on contract:
- `getMigrationStatus()` - Check status
- `timeUntilExecution()` - Time remaining

---

::: warning ⚠️ Legal Notice
This token (GCAT V1) may be upgraded to V2 in the future.
A **30-day advance notice period** is provided when migration is requested.
All V1 holders will receive V2 tokens via airdrop based on the snapshot.
Migration status can be verified on the contract and official app.
:::

---

## Staking Reward Policy

During migration, stakers will receive **full rewards** based on:

### Staking Protection (Migration Mode)
- **New Staking Paused**: Once migration is requested, new staking is disabled to ensure data consistency.
- **Early Unstake Allowed**: Users can unstake **locked positions immediately** without waiting for the lock period to end.
- **No Penalty**: Stakers receive their **Full Principal + Pending Rewards** (with Tier & NFT multipliers) even if unstaking early during migration.

### Calculation Formula

### Calculation Formula
```
V2 Airdrop = V1 Principal + Pending Rewards (with Tier & NFT multipliers)
```

### Example
| Scenario | Calculation |
|----------|-------------|
| 4-year lockup, 2 years elapsed | Principal + (17% APY × 2 years × Tier × NFT) |
| Diamond Tier (1.5x) + Legendary NFT (1.8x) | Total Multiplier = 2.3x (capped at 5.0x) |

### Data Preserved
| Data | Preserved in V2 |
|------|-----------------|
| Staking Principal | ✅ |
| Pending Rewards | ✅ (with multipliers) |
| Tier Status | ✅ |
| Referral Relationships | ✅ |
| NFT Holdings | ✅ |

---

## Snapshot Functions (Staking.sol)

The following functions are available for migration snapshot:

```solidity
// Get all user data in one call
function getMigrationSnapshot(address user) external view returns (
    uint256 flexibleAmount,    // Flexible staked amount
    uint256 lockedAmount,      // Total locked amount
    uint256 pendingRewards,    // Total rewards (with multipliers)
    address referrer,          // Referrer address
    uint256 tierId,            // Current tier ID
    uint256 tierMultiplier     // Tier multiplier (basis points)
)

// Get individual lock position details
function getMigrationLockDetails(address user) external view returns (
    uint128[] amounts,         // Position amounts
    uint8[] lockPeriodIds,     // Lock period IDs
    uint40[] startTimes,       // Start times
    uint256[] rewards          // Individual rewards
)

// Get referral relationship data
function getReferralData(address user) external view returns (
    address myReferrer,               // My referrer
    uint256 myReferralCount,          // People I referred
    uint256 myTotalReferralIncentives // Total referral earnings
)
```
