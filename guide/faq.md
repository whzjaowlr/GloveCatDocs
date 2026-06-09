# FAQ

## General

### Is there an active Base mainnet address?

Not in the current documentation registry. The current Base manifest is a `no-current-redeploy`
placeholder. Fresh addresses should be published only after a new broadcast-generated manifest is
reviewed and marked `active`.

### Where can I buy GCAT?

Use only official launch announcements and verified contract addresses. Historical addresses are
reference-only until the fresh manifest is active.

### Which wallets are supported?

Any wallet that supports Base can interact with Base contracts, subject to the dApp and wallet
provider's own support.

## Staking

### Do staking amounts create separate multipliers?

No. Staking amount does not add a reward multiplier.

### Can I unstake during lock-up?

No. A lock position can be unstaked only after the selected lock period ends.

### Are rewards guaranteed?

No. Rewards depend on available reward pool funding.

## NFT

### Do multiple NFT benefits stack?

No. The staking contract uses the highest active NFT tier boost returned by `GloveCatNFT`.

### Does an NFT transfer keep the boost active?

No. Transfer resets active benefit state and starts a new benefit holding period for the recipient.

## Security

### Has an external audit been published?

No external audit report is recorded in the current contract repository. Internal checks and release
gates should not be treated as a guarantee that no vulnerabilities exist.

### Who manages production admin actions?

Production admin actions are expected to use the configured Safe multisig.
