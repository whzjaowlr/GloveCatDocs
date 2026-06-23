# Terms And Risk Disclosure

> Last updated: 2026-06-23

This page is a project risk disclosure summary. It is not legal, tax, financial, or investment
advice. Public launch, liquidity, marketing, and reward language should be reviewed by qualified
counsel.

## 🚦 Product Status

- GloveCat is a token and game-infrastructure experiment on Base.
- Current Base mainnet contract addresses are published in [Contract Information](/admin/contracts)
  and [Public Evidence Links](/admin/contracts#public-evidence-links), and are Basescan verified.
- Phase 1 Safe wiring and PinkLock vesting locks are complete.
- Trading, official pair setup, liquidity, LP locking, staking reward-pool funding, and public
  staking are separate launch gates and should be verified through the corresponding public
  transactions and evidence before users rely on them.
- Historical contract addresses outside the current deployment are reference-only.
- Contract behavior should be verified against the current manifest, Basescan source verification,
  [Safe records](/admin/contracts#project-wallets), [PinkLock records](/admin/contracts#public-lock-evidence),
  and on-chain reads.

## 📉 Market Risks

- GCAT can lose value or become illiquid.
- Token price may be volatile.
- Liquidity may be shallow before or after launch.
- Large trades may experience price impact or MEV-related execution risk.

## 🛠️ Contract And Operational Risks

- Smart-contract bugs or integration mistakes may exist.
- Admin-action claims should be verified against the configured
  [Safe owner/threshold records](/admin/contracts#project-wallets) and actual on-chain authority.
- Liquidity creation and LP locking are manual operational steps.
- Reward pools can be insufficient.
- NFT royalty payment depends on marketplace support for ERC2981.

## 🎁 Staking And Rewards

- Staking incentives are not guaranteed returns.
- Rewards are paid only from funded pools; prepared funding transactions are not funding until they
  are executed on-chain.
- NFT boosts require benefit activation and are snapshotted when a lock position is created.
- Leaderboard rewards depend on off-chain score computation and Merkle proof publication.
- Campaign rules, eligibility checks, and abuse filtering may change.

## ⚖️ Compliance

Users are responsible for complying with local law, tax obligations, sanctions rules, and wallet or
exchange restrictions. Campaigns may exclude sanctioned persons, sanctioned addresses, and prohibited
jurisdictions.

Users must not access or use GloveCat services if they are subject to sanctions administered or
enforced by OFAC, the United Nations, the European Union, the United Kingdom, the Republic of Korea,
or another applicable sanctions authority, or if they act for, are owned by, are controlled by, or use
wallets, accounts, or addresses associated with a sanctioned person, sanctioned entity, blocked
address, or restricted party.

GloveCat does not represent that every user, wallet, transaction, or blockchain address is screened
in every product surface. GloveCat may refuse, limit, suspend, or terminate access, participation,
campaign eligibility, rewards, claims, or other features if sanctions, abuse, or compliance risk is
identified.

GloveCat may also restrict participation features for users located in, ordinarily resident in, or
accessing from FATF increased-monitoring jurisdictions unless jurisdiction-specific review and
approval are complete.

See [Restricted Jurisdictions And Service Availability](/guide/restricted-jurisdictions) for the
current jurisdiction-based service availability notice, including restricted users, rationale, and
exceptions.

## 📣 Communications

Public statements should not describe staking, NFT boosts, leaderboard rewards, or token ownership
as guaranteed profit. Always link to current docs, current manifest evidence, and security notes
when discussing contract behavior.

## 📌 No Warranty

The documentation and services are provided as-is. Users are responsible for their own wallet
security, private keys, transaction review, and risk decisions.
