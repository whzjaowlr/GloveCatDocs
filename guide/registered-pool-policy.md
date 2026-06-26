# Registered Pool Policy

This page explains how GloveCat treats registered liquidity pools, sell-fee routing, and third-party
pool creation.

## Summary

GloveCat uses a registered-pair model for sell-fee detection. The 1% GCAT sell fee applies when GCAT is
sent into a pool address that `GloveCatCore` recognizes through its pair registry.

The initial intended route is:

```text
Aerodrome Classic Volatile GCAT/WETH pool
```

The project should publish and use one GloveCat-designated pool link for launch. Users should verify the pool
address before trading.

## Current Registered Pool

| Item | Value |
| --- | --- |
| Pool type | Aerodrome Classic Volatile WETH/GCAT |
| Pool and LP token address | [`0x6330Bb184d90D78F336270485C3d17AB8AE8dD54`](https://basescan.org/address/0x6330Bb184d90D78F336270485C3d17AB8AE8dD54) |
| GCAT token | [`0x59df0577C7A5014954C0d6Cc12616e92E34d9fF4`](https://basescan.org/token/0x59df0577C7A5014954C0d6Cc12616e92E34d9fF4) |
| WETH token | [`0x4200000000000000000000000000000000000006`](https://basescan.org/token/0x4200000000000000000000000000000000000006) |
| Liquidity seed tx | [`0xa4268463f1cfaa6d8e3eb3c315c2d54da5cd6dfae015ffd276cd18c42e0fb7a0`](https://basescan.org/tx/0xa4268463f1cfaa6d8e3eb3c315c2d54da5cd6dfae015ffd276cd18c42e0fb7a0) |
| Project LP lock tx | [`0xd0afe05c7e64a7113c3b8b48e17cf06211ae65d9da8389267009c6e603e2554b`](https://basescan.org/tx/0xd0afe05c7e64a7113c3b8b48e17cf06211ae65d9da8389267009c6e603e2554b) |

See [Liquidity and LP Lock Evidence](/guide/liquidity-lock-evidence) for the full verification record.

## What Counts As Registered

A pool is GloveCat-designated only when its pool contract address is registered in `GloveCatCore`.

The Safe can register the primary pool with:

```solidity
setUniswapV2Pair(poolAddress)
```

The Safe can register an additional pool with:

```solidity
setOfficialPair(poolAddress, true)
```

The registered address must be the actual pool contract address. It is not the Aerodrome router
address, a DEXScreener link, or a token address.

## Sell Fee Behavior

The 1% sell fee applies when a GCAT transfer goes into a registered pool.

Examples:

| Route | Fee behavior |
| --- | --- |
| Sell through the registered Aerodrome GCAT/WETH pool | 1% sell fee applies |
| Sell through DEXScreener, if the final route uses the registered pool | 1% sell fee applies |
| Sell through a wallet swap, if the final route uses the registered pool | 1% sell fee applies |
| Sell into an unregistered third-party pool | Fee may not apply |

The trading interface does not determine fee status. The final pool address that receives GCAT does.

## Aerodrome Pool Type

For the initial GCAT launch, the intended simple setup is a Classic Volatile pool.

| Pool type | Use case | GCAT launch policy |
| --- | --- | --- |
| Classic Volatile | Assets whose prices can move independently, such as GCAT/WETH | Preferred initial route |
| Stable | Assets expected to trade near a stable ratio, such as stablecoin pairs | Not intended for GCAT/WETH |
| Slipstream / concentrated liquidity | Advanced range-based liquidity | Not intended for initial launch unless separately tested |

The project should avoid presenting multiple pool types as GloveCat-designated during launch unless each pool is
reviewed, registered, and clearly announced.

## Third-Party Pools

Most decentralized exchange factories are permissionless. A third party may be able to create another
GCAT pool without project approval.

That does not make the pool GloveCat-designated.

Third-party pools can create user confusion, fragmented liquidity, incorrect prices, or routes where
the sell fee is not applied. The project should not promote unregistered pools as GloveCat-designated trading
routes.

## Monitoring And Response

The project should monitor DEXScreener, Aerodrome, Base explorers, and other public routing surfaces
for material third-party GCAT pools.

If an unregistered pool becomes meaningful, the Safe should decide whether to:

- leave it unrecognized and warn users that it is not GloveCat-designated;
- add it as a registered pair with `setOfficialPair(poolAddress, true)`; or
- publish a notice explaining why users should avoid that pool.

The decision should consider liquidity depth, quote token, route quality, price accuracy, user safety,
and whether the pool is being used for confusion or abuse.

## User Guidance

Users should use only GloveCat-published links for trading and liquidity actions.

Before trading, users should check:

- the pool address published by GloveCat;
- whether that address matches the pool shown in the DEX interface;
- whether the route is GCAT/WETH on the intended Aerodrome pool;
- whether the pool has enough liquidity for the intended trade size.

Low-liquidity or non-designated pools may show worse prices, higher slippage, or different fee behavior.

## Operational Rule

For launch, the project should treat this as the default rule:

```text
One GloveCat-designated Aerodrome Classic Volatile GCAT/WETH pool.
Register the actual pool address in GloveCatCore before public trading.
Promote only that GloveCat-published pool link.
Monitor and respond to third-party pools if they become meaningful.
```
