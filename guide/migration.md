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
