# Governance Guide

GloveCat community governance is advisory unless a completed on-chain change is published with
verifiable evidence.

## 🧭 Current Model

The active smart-contract surface does not include an on-chain governance module. Production admin
authority is held by the configured Safe multisig through `TieredAccess`.

The current published Safe configuration is 2-of-3. Future operational hardening may add signers,
increase the approval threshold, or both. Treat the current Safe owner/threshold records as the
source of truth.

Community input can still happen through off-chain channels such as Snapshot, Telegram, Discord, or
published proposal documents.

## 🗳️ Snapshot

Snapshot voting is gasless and off-chain. It can help measure community preference, but Snapshot
results do not automatically change contract state.

Any contract-level change should be treated as pending until public on-chain evidence is available.

## 🔐 Privileged Changes

Examples of privileged changes that require public evidence before users should rely on them:

- Set official pair configuration.
- Open trading once.
- Replenish the staking reward pool.
- Update NFT metadata settings.
- Set minters and leaderboard reward wiring.

Phase 1 wiring has already been executed. Any future wiring changes should be treated as pending
until the matching public evidence is available.

## 📋 Proposal Hygiene

Good proposals should include:

- Objective and rationale.
- Affected contracts or operations.
- Risk assessment.
- Evidence required before users should rely on the change.
- Risk or mitigation notes where possible.

Do not assume a proposal is final until the corresponding on-chain state, manifest update, and
public evidence are complete.
