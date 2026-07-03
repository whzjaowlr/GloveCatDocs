# Liquidity and LP Lock Evidence

This page records GloveCat launch liquidity and project-owned LP token lock evidence on Base mainnet.
It is informational evidence only. It is not a public-staking-live or reward-pool-funded claim.

## Status Summary

| Item | Status |
| --- | --- |
| Registered pool | Aerodrome Classic Volatile WETH/GCAT |
| Pool registration | Registered in `GloveCatCore` |
| Liquidity seed | 5.51 WETH and 375,000,000 GCAT seeded |
| LP token custody | Project-owned LP tokens held by PinkSale / PinkLock V2 |
| LP lock mode | PinkSale / PinkLock V2 normal ERC20 token lock |
| Trading | Open; Safe `openTrading()` executed on 2026-06-29 13:30:07 UTC |

## Addresses

| Item | Address |
| --- | --- |
| GCAT | [`0x59df0577C7A5014954C0d6Cc12616e92E34d9fF4`](https://basescan.org/token/0x59df0577C7A5014954C0d6Cc12616e92E34d9fF4) |
| WETH | [`0x4200000000000000000000000000000000000006`](https://basescan.org/token/0x4200000000000000000000000000000000000006) |
| Official GCAT trading pair | [`0x6330Bb184d90D78F336270485C3d17AB8AE8dD54`](https://basescan.org/address/0x6330Bb184d90D78F336270485C3d17AB8AE8dD54) |
| Pool and LP token | [`0x6330Bb184d90D78F336270485C3d17AB8AE8dD54`](https://basescan.org/address/0x6330Bb184d90D78F336270485C3d17AB8AE8dD54) |
| Aerodrome Router | [`0xcF77a3Ba9A5CA399B7c97c74d54e5b1Beb874E43`](https://basescan.org/address/0xcF77a3Ba9A5CA399B7c97c74d54e5b1Beb874E43) |
| Aerodrome PoolFactory | [`0x420DD381b31aEf6683db6B902084cB0FFECe40Da`](https://basescan.org/address/0x420DD381b31aEf6683db6B902084cB0FFECe40Da) |
| Launch Liquidity Safe | [`0xa92C88dE90F3114A6bD0fFf8DE56139Dc3F27fda`](https://basescan.org/address/0xa92C88dE90F3114A6bD0fFf8DE56139Dc3F27fda) |
| PinkSale / PinkLock V2 contract | [`0xdD6E31A046b828CbBAfb939C2a394629aff8BBdC`](https://basescan.org/address/0xdD6E31A046b828CbBAfb939C2a394629aff8BBdC) |

## Liquidity Evidence

| Item | Value |
| --- | --- |
| Add liquidity tx | [`0xa4268463f1cfaa6d8e3eb3c315c2d54da5cd6dfae015ffd276cd18c42e0fb7a0`](https://basescan.org/tx/0xa4268463f1cfaa6d8e3eb3c315c2d54da5cd6dfae015ffd276cd18c42e0fb7a0) |
| Timestamp | 2026-06-23 17:22:55 UTC |
| WETH seeded | 5.51 WETH |
| GCAT seeded | 375,000,000 GCAT |
| Project LP tokens received | 45,456.02270326782560651 vAMM-WETH/GCAT |
| Minimum-liquidity LP | 0.000000000000001 vAMM-WETH/GCAT minted to `0x0000000000000000000000000000000000000001`; not project-owned |
| Initial LP recipient | Launch Liquidity Safe |

## LP Lock Evidence

| Item | Value |
| --- | --- |
| Lock tx | [`0xd0afe05c7e64a7113c3b8b48e17cf06211ae65d9da8389267009c6e603e2554b`](https://basescan.org/tx/0xd0afe05c7e64a7113c3b8b48e17cf06211ae65d9da8389267009c6e603e2554b) |
| Lock timestamp | 2026-06-23 17:36:05 UTC |
| Lock ID | `1046390` |
| Lock owner | Launch Liquidity Safe |
| Locked token | vAMM-WETH/GCAT LP token |
| Locked amount | 45,456.02270326782560651 vAMM-WETH/GCAT |
| Unlock date | 2031-06-24 00:00:00 UTC |
| Unlocked amount at record time | 0 |

The LP tokens are locked through PinkSale / PinkLock V2 as a normal ERC20 token lock with `isLpToken=false`.
This is intentional for this record because Aerodrome pool tokens are ERC20 LP tokens and the
PinkSale / PinkLock V2 LP-token mode expects a Uniswap V2-style factory path.
PinkSale / PinkLock V2 is the PinkSale locking product used for this record; the Basescan lock
transaction and target contract are the canonical public evidence.

## Verification Checklist

Users and reviewers should verify the following before relying on any launch-liquidity claim:

| Check | Expected result |
| --- | --- |
| Official GCAT trading pair | `0x6330Bb184d90D78F336270485C3d17AB8AE8dD54` |
| `GloveCatCore.uniswapV2Pair()` | `0x6330Bb184d90D78F336270485C3d17AB8AE8dD54` |
| `GloveCatCore.isOfficialPair(pool)` | `true` |
| `GloveCatCore.launchLiquiditySeeded()` | `true` |
| Pool reserves | 5.51 WETH and 375,000,000 GCAT at the seed transaction state |
| LP Safe LP balance after lock | 0 |
| PinkSale / PinkLock V2 LP token balance | 45,456.02270326782560651 vAMM-WETH/GCAT |

## Trading-Open Evidence

| Item | Value |
| --- | --- |
| Safe tx hash | `0xdc7a2d3a8e0a053e21776fbeaf4aef5953c7fc76927851c489c920247654e196` |
| Execution tx | [`0x18fb7f5fef1c3270dbffa50d9bd56d46c816912c00a599b82fe6fb8b8993485e`](https://basescan.org/tx/0x18fb7f5fef1c3270dbffa50d9bd56d46c816912c00a599b82fe6fb8b8993485e) |
| Executed at | 2026-06-29 13:30:07 UTC |
| Safe nonce | 8 |

## Staking Readiness Reference

The liquidity, LP lock, and trading-open records above are launch-liquidity evidence, not staking
reward-pool evidence. Public staking readiness is tracked on the dedicated staking and tokenomics
pages.

Current public docs state that staking readiness passes on-chain because the latest live readiness
check shows `incentivePool = 1,000,000 GCAT`, meeting the published
`incentivePool >= 1,000,000 GCAT` target. Users should still verify the live staking contract and
reward-pool balance before approving or staking GCAT.
