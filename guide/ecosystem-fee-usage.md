---
title: Ecosystem Fee Usage
description: Verifiable GCAT outflow history for the GloveCat ecosystem fee Safe on Base.
---

# Ecosystem Fee Usage

This page is the public usage ledger for GCAT held by the GloveCat ecosystem fee Safe. It records
executed outflows and links each use to Base transaction evidence. The chain remains the source of
truth; a prepared or proposed Safe transaction is not usage until execution succeeds.

The sell-fee trigger is defined by the receiving address, not by a website or router label. See
[Registered Pool Policy](/guide/registered-pool-policy) for the exact rule.

<EcosystemFeeUsageLedger />

## Independent Verification

- Inspect the [successful Base transaction](https://basescan.org/tx/0xa7f9412a0fe7e29739173e9ef1cd5a9cb7acaab20d6f05cdb0c4f96ff450b38f).
- Inspect the [ecosystem fee Safe](https://app.safe.global/home?safe=base:0x228EDD1BFb7ec5E7A2b7284C1f3d6130c55B054a).
- Inspect the [GCAT transfer history for the Safe](https://basescan.org/token/0x59df0577C7A5014954C0d6Cc12616e92E34d9fF4?a=0x228EDD1BFb7ec5E7A2b7284C1f3d6130c55B054a).

## Adding the Next Executed Use

The page is data-driven. To publish another use:

1. Append one entry to `.vitepress/data/ecosystem-fee-usage.json`.
2. Include its purpose, recipients, exact token amounts, UTC execution time, Safe policy, nonce,
   Base block, transaction hashes, and fixed-block balance proof.
3. Add a dated price reference only when a USD sizing explanation is needed.
4. Run `pnpm run ledger:check` and `pnpm run docs:build`.

Do not add proposed or pending Safe transactions. The ledger validator rejects non-executed entries,
duplicate IDs, nonces, or transaction hashes, invalid addresses, incorrect USD calculations, and a
balance-proof difference that does not equal the recipient total.
