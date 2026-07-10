# Operational Status

> Last reviewed: 2026-07-11

This page is the single public entry point for mutable GloveCat operating status. Stable contract
behavior belongs in the feature guides. Trading, staking readiness, and reward-pool balances can
change and must be checked against the production status API at answer time.

<LiveProtocolStatus />

## Authority Order

Use sources in this order when answering a current-status question:

1. The production [`/api/v1/public-status`](https://api.glovecatcoin.com/api/v1/public-status)
   response, only
   when its schema major is `1`, `chainId` is `8453`, block number/hash fields are valid, its fields
   are internally consistent, `observedAt` is no more than 60 seconds old, and `validUntil` has not
   elapsed.
2. Direct Base reads and executed transaction evidence for independent verification.
3. The dated snapshot below, only as historical evidence of what was observed at that block.

If the production response is missing, malformed, inconsistent, on the wrong chain, stale, or past
`validUntil`, the official answer is **현재 확인 불가 / current status unavailable**. A dated
snapshot must never be promoted to a current claim.

## Status Terms

These terms are deliberately separate:

| Term                      | Meaning                                                                                                                                                                                                                 | What it does not prove                                                         |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| On-chain call possible    | Contract code and the user-specific transaction preconditions allow a call at a particular block                                                                                                                        | Official UI availability, legal eligibility, wallet support, or future success |
| Official public readiness | The production status service has passed the full chain, contract wiring, Safe policy, trading-open, minimum reward-pool, and payout-accounting gates (`Staking` GCAT balance covers `totalLockStaked + incentivePool`) | That every person or jurisdiction may use the service                          |
| UI availability           | The official dApp and its required API/RPC dependencies are reachable for that user                                                                                                                                     | That a transaction will succeed or that the user is eligible                   |

Do not translate `canStakeNow=true` into “anyone can stake.” Wallet state, transaction simulation,
service availability, and [jurisdiction restrictions](/guide/restricted-jurisdictions) still apply.

## Dated Status Snapshot

The following observation is intentionally immutable and dated. It is not the live source.

| Field                  | Observed value                                                       |
| ---------------------- | -------------------------------------------------------------------- |
| Source                 | Direct Base reads at a fixed block                                   |
| Observed at            | `2026-07-10T13:53:49.000Z`                                           |
| Base block             | `48451141`                                                           |
| Block hash             | `0xbc6cb32902c61cb39da42f24cb656ff2053133c9c21998cb590120e0c234fa89` |
| Trading read           | `tradingOpened=true`                                                 |
| Staking incentive pool | `5,000,000 GCAT`                                                     |
| Published minimum      | `1,000,000 GCAT`                                                     |

The pool balance is mutable. Use the live panel or raw production response for a current value.

A separate production API response received on `2026-07-10T13:47:29.000Z` returned `ready` and
`canStakeNow=true`, but that legacy response did not yet include `observedAt` or `blockNumber` in its
payload. It is historical context only and is not merged into the same-block snapshot above.

## Executed Funding Evidence

The dated 5,000,000 GCAT observation follows two executed Safe funding transactions:

|         Amount | Safe nonce | Executed at             | Base transaction                                                                                            |
| -------------: | ---------: | ----------------------- | ----------------------------------------------------------------------------------------------------------- |
| 1,000,000 GCAT |          9 | 2026-07-01 20:35:53 UTC | [`0x5996…0076`](https://basescan.org/tx/0x5996a597d0f82a612ada863d7e5132f779fbe539f47d07a27547442039920076) |
| 4,000,000 GCAT |         10 | 2026-07-01 21:09:43 UTC | [`0x3d54…40d3`](https://basescan.org/tx/0x3d54e7a95f62b4c945924b0f7325c0af3dbfe0cb2f89a31ea77df36f181840d3) |

Funding transactions prove deposits at their execution blocks. They do not freeze the later pool
balance; incentive claims can change it.

## Trading Evidence

Safe `openTrading()` executed on 2026-06-29 13:30:07 UTC in
[`0x18fb…485e`](https://basescan.org/tx/0x18fb7f5fef1c3270dbffa50d9bd56d46c816912c00a599b82fe6fb8b8993485e).
This is durable execution evidence. The production status response still performs a live
`tradingOpened()` read before it reports official staking readiness.

## Answering “Can I Stake Now?”

- If the live panel is current and says **Official readiness: ready**, state that the official
  readiness gate currently passes, quote its observation time and block, and retain the eligibility
  and transaction caveats above.
- If it says **not ready**, use the returned readiness reason; do not invite approval or staking.
- If it says **current status unavailable**, say that current readiness cannot be verified. Do not
  fall back to the July 10 snapshot as though it were live.
