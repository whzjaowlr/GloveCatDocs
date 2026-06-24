# Liquidity and LP Lock Evidence

This page records the official GloveCat launch liquidity and project-owned LP token lock on Base.
It is informational evidence only. It is not a trading-live, staking-live, or reward-pool-funded
claim.

## Status Summary

| Item | Status |
| --- | --- |
| Official pool | Aerodrome Classic Volatile WETH/GCAT |
| Official pair registration | Complete in `GloveCatCore` |
| Liquidity seed | Complete |
| LP token custody | Project-owned LP tokens held by PinkLock V2 |
| LP lock mode | PinkLock V2 normal ERC20 token lock |
| Trading | Not open; requires `openTrading()` execution |

## Addresses

| Item | Address |
| --- | --- |
| GCAT | [`0x59df0577C7A5014954C0d6Cc12616e92E34d9fF4`](https://basescan.org/token/0x59df0577C7A5014954C0d6Cc12616e92E34d9fF4) |
| WETH | [`0x4200000000000000000000000000000000000006`](https://basescan.org/token/0x4200000000000000000000000000000000000006) |
| Pool and LP token | [`0x6330Bb184d90D78F336270485C3d17AB8AE8dD54`](https://basescan.org/address/0x6330Bb184d90D78F336270485C3d17AB8AE8dD54) |
| Aerodrome Router | [`0xcF77a3Ba9A5CA399B7c97c74d54e5b1Beb874E43`](https://basescan.org/address/0xcF77a3Ba9A5CA399B7c97c74d54e5b1Beb874E43) |
| Aerodrome PoolFactory | [`0x420DD381b31aEf6683db6B902084cB0FFECe40Da`](https://basescan.org/address/0x420DD381b31aEf6683db6B902084cB0FFECe40Da) |
| Launch Liquidity Safe | [`0xa92C88dE90F3114A6bD0fFf8DE56139Dc3F27fda`](https://basescan.org/address/0xa92C88dE90F3114A6bD0fFf8DE56139Dc3F27fda) |
| PinkLock V2 | [`0xdD6E31A046b828CbBAfb939C2a394629aff8BBdC`](https://basescan.org/address/0xdD6E31A046b828CbBAfb939C2a394629aff8BBdC) |

## Liquidity Evidence

| Item | Value |
| --- | --- |
| Add liquidity tx | [`0xa4268463f1cfaa6d8e3eb3c315c2d54da5cd6dfae015ffd276cd18c42e0fb7a0`](https://basescan.org/tx/0xa4268463f1cfaa6d8e3eb3c315c2d54da5cd6dfae015ffd276cd18c42e0fb7a0) |
| Timestamp | 2026-06-23 17:22:55 UTC |
| WETH seeded | 5.51 WETH |
| GCAT seeded | 375,000,000 GCAT |
| LP tokens minted | 45,456.02270326782560651 vAMM-WETH/GCAT |
| Initial LP recipient | Launch Liquidity Safe |

## LP Lock Evidence

| Item | Value |
| --- | --- |
| Lock tx | [`0xd0afe05c7e64a7113c3b8b48e17cf06211ae65d9da8389267009c6e603e2554b`](https://basescan.org/tx/0xd0afe05c7e64a7113c3b8b48e17cf06211ae65d9da8389267009c6e603e2554b) |
| Lock ID | `1046390` |
| Lock owner | Launch Liquidity Safe |
| Locked token | vAMM-WETH/GCAT LP token |
| Locked amount | 45,456.02270326782560651 vAMM-WETH/GCAT |
| Unlock date | 2031-06-24 00:00:00 UTC |
| Unlocked amount at record time | 0 |

The LP tokens are locked through PinkLock V2 as a normal ERC20 token lock with `isLpToken=false`.
This is intentional for this record because Aerodrome pool tokens are ERC20 LP tokens and PinkLock's
LP-token mode expects a Uniswap V2-style factory path.

## Verification Checklist

Users and reviewers should verify the following before relying on any launch-liquidity claim:

| Check | Expected result |
| --- | --- |
| `GloveCatCore.uniswapV2Pair()` | `0x6330Bb184d90D78F336270485C3d17AB8AE8dD54` |
| `GloveCatCore.isOfficialPair(pool)` | `true` |
| `GloveCatCore.launchLiquiditySeeded()` | `true` |
| Pool reserves | 5.51 WETH and 375,000,000 GCAT at the seed transaction state |
| LP Safe LP balance after lock | 0 |
| PinkLock V2 LP token balance | 45,456.02270326782560651 vAMM-WETH/GCAT |

## Final Launch Gates

The liquidity and LP lock records above do not complete every launch gate. The final separate gates
are:

- `openTrading()` execution;
- staking reward-pool funding;
- final public staking go-live checks and announcement.