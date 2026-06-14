# Governance Guide

GloveCat community governance is advisory unless a specific Safe-executed action is published and
completed.

## 🧭 Current Model

The active smart-contract surface does not include an on-chain governance module. Production admin
authority is held by the configured Safe multisig through `TieredAccess`.

Community input can still happen through off-chain channels such as Snapshot, Telegram, Discord, or
published proposal documents.

## 🗳️ Snapshot

Snapshot voting is gasless and off-chain. It can help measure community preference, but Snapshot
results do not automatically execute contract changes.

Any contract-level change must still follow the Safe transaction process.

## 🔐 Safe-Executed Changes

Examples of actions that require Safe execution:

- Set official pair configuration.
- Open trading once.
- Replenish the staking reward pool.
- Update NFT metadata settings.
- Set minters and leaderboard reward wiring.

Phase 1 wiring has already been executed. Any future wiring changes should still be reviewed,
signed, executed, and archived through the Safe process.

## 📋 Proposal Hygiene

Good proposals should include:

- Objective and rationale.
- Affected contracts or operations.
- Risk assessment.
- Proposed Safe transactions, if any.
- Rollback or mitigation plan where possible.

Do not assume a proposal is final until the corresponding Safe transaction, manifest update, and
public evidence are complete.
