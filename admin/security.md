# Security Protocol

This page summarizes the current security posture for the redeploy surface. It is not an external
audit report and does not guarantee that no vulnerabilities exist.

## ✅ Confirmed Design Constraints

- Buy fee is fixed at 0%.
- Sell fee is fixed at 1% ecosystem fee.
- Fee setters and fee exclusions are absent.
- Launch max-wallet checks expire 1 hour after `openTrading()`.
- Fixed 30-, 90-, and 180-day staking periods use base APRs of 2%, 5%, and 8%, respectively,
  pro-rated by elapsed time.
- Staking amount does not create an additional multiplier.
- Staking incentives are paid only from the funded incentive pool; the pool must be funded on-chain
  before public staking opens, and unpaid staking incentives can be carried forward as
  `pendingIncentives`.
- Final staking multiplier is capped at 4.0x.
- A single NFT tier boost is capped at 2.5x.
- Different active NFT tiers stack additively, while duplicate NFTs from the same tier do not add
  extra boost.
- NFT benefits require 1-day activation and reset on transfer.
- `GamificationCore` is limited to staking-only leaderboard NFT reward claims.
- Leaderboard claims are staking-only.
- Each leaderboard season allows at most 10 successful claims.
- Merkle leaves include chain ID, contract address, season, user, rank, and value.

## 📌 Documentation Boundary

This page describes only the active deployed Base surface and the evidence users should verify.

## 🔐 Access Control

`TieredAccess` uses a Safe-style `multiSig` authority. MultiSig transfer is a two-step flow:

1. Current Safe calls `transferMultiSig(newSafe)`.
2. New Safe calls `acceptMultiSig()`.

No OpenZeppelin `AccessControl` manager roles are exposed in the active access layer.

## 🚦 Release Gates

Recommended checks for active publication:

```bash
npm run compile
npm run test:foundry
npm run lint:sol
npm run lint:slither:release
npm run format:check
npm run lint:check
```

The current contract repo release gate recently passed with 207 Foundry tests and 0 medium/high
Slither release blockers. Low timestamp findings remain and should be tracked as operational risk.

## ⚠️ Operational Risks

- Reward pools can be exhausted.
- Liquidity and LP lock execution are manual.
- NFT royalty payment depends on marketplace support.
- Leaderboard root corrections are blocked after the first successful claim.
- `openTrading()` is one-way.
- The pre-launch LP seed path works only before trading opens and only from the configured launch
  liquidity wallet to an official pair.

## 🛡️ Reporting

Security issues should be reported privately to project maintainers. Do not publish exploit details
in public channels.
