# Terms And Risk Disclosure

> Last updated: 2026-07-11

This page is a project risk disclosure summary. It is not legal, tax, financial, or investment
advice. Public launch, liquidity, marketing, and reward language should be reviewed by qualified
counsel.

## Product Status

- GloveCat is an independent token and game-infrastructure experiment deployed on Base mainnet.
- GloveCat is not affiliated with, endorsed by, or sponsored by Base or Coinbase.
- Current Base mainnet contract addresses are published in [Contract Information](/admin/contracts)
  and [Public Evidence Links](/admin/contracts#public-evidence-links), and are Basescan verified.
- Phase 1 Safe wiring, PinkSale / PinkLock V2 vesting locks, registered-pool setup, liquidity seeding,
  project-owned LP locking, and Safe `openTrading()` execution are complete.
- Safe `openTrading()` execution completed on 2026-06-29 13:30:07 UTC. A current trading-open claim
  must still come from a fresh [Operational Status](/guide/operational-status) observation.
- The public staking gate requires `incentivePool >= 1,000,000 GCAT` plus the other published
  readiness checks. A dated 2026-07-10 on-chain snapshot recorded 5,000,000 GCAT at Base block
  `48451141`; it is not a guarantee of current readiness or availability.
- Historical contract addresses outside the current deployment are reference-only.
- Contract behavior should be verified against the current manifest, Basescan source verification,
  [Safe records](/admin/contracts#project-wallets), [PinkSale / PinkLock V2 records](/admin/contracts#public-lock-evidence),
  and on-chain reads.

## Market Risks

- GCAT can lose value or become illiquid.
- Token price may be volatile.
- Liquidity may be shallow before or after launch.
- Large trades may experience price impact or MEV-related execution risk.

## Contract And Operational Risks

- Smart-contract bugs or integration mistakes may exist.
- Admin-action claims should be verified against the configured
  [Safe owner/threshold records](/admin/contracts#project-wallets) and actual on-chain authority.
- Liquidity creation and LP locking are manual operational steps; current public records are linked
  from [Liquidity and LP Lock Evidence](/guide/liquidity-lock-evidence).
- Reward pools can be insufficient.
- NFT royalty payment depends on marketplace support for ERC2981.

## Staking And Rewards

- Staking incentives are not guaranteed returns.
- Rewards are paid only from funded pools; funding transactions do not increase the pool until they
  are executed on-chain.
- Staking incentives may accrue and be claimed while the staked principal remains locked; principal
  withdrawal is still subject to the selected lock period.
- NFT boosts require benefit activation and are snapshotted when a lock position is created.
- Leaderboard rewards depend on off-chain score computation and Merkle proof publication.
- Campaign rules, eligibility checks, and abuse filtering may change.

## Compliance

Users are responsible for complying with local law, tax obligations, sanctions rules, and wallet or
exchange restrictions. Campaigns may exclude sanctioned persons, sanctioned addresses, and prohibited
jurisdictions.

Users may not access or use GloveCat services if applicable sanctions laws, restricted-party rules,
or jurisdiction restrictions prohibit that access or use. This includes sanctioned or restricted
persons, entities owned or controlled by sanctioned or restricted persons, and wallets, accounts, or
addresses that are sanctioned, blocked, or otherwise restricted.

GloveCat may refuse, limit, suspend, or terminate access to services or participation features if
sanctions, abuse, circumvention, or other compliance risk is identified. GloveCat may rely on
available technical, account, wallet, blockchain, support, and operational signals, but does not
guarantee screening of every user, wallet, transaction, or blockchain address.

GloveCat may also restrict participation features for users located in, ordinarily resident in, or
accessing from FATF increased-monitoring jurisdictions unless jurisdiction-specific review and
approval are complete.

See [Restricted Jurisdictions And Service Availability](/guide/restricted-jurisdictions) for the
current jurisdiction-based service availability notice, including restricted users, rationale, and
exceptions.

## Communications

Public statements should not describe staking, NFT boosts, leaderboard rewards, or token ownership
as guaranteed profit. Always link to current docs, current manifest evidence, and security notes
when discussing contract behavior.

## No Warranty

The documentation and services are provided as-is. Users are responsible for their own wallet
security, private keys, transaction review, and risk decisions.
