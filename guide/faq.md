# FAQ

## 💬 General

### Is there an active Base mainnet address?

Yes. The current contract addresses are published in [Contract Information](/admin/contracts) and
are Basescan verified. The manifest status is still `deployed-pending-safe-config`, so Safe wiring,
liquidity setup, LP locking, and trading launch remain pending before the release is fully active.

### Where can I buy GCAT?

Use only official launch announcements and verified contract addresses. Historical addresses are
reference-only and should not be used as the current GCAT deployment.

### Which wallets are supported?

Any wallet that supports Base can interact with Base contracts, subject to the dApp and wallet
provider's own support.

## 🔒 Staking

### Do staking amounts create separate multipliers?

No. Staking amount does not add a reward multiplier.

### Can I unstake during lock-up?

No. A lock position can be unstaked only after the selected lock period ends.

### Are rewards guaranteed?

No. Rewards depend on available reward pool funding.

## 🎨 NFT

### Do multiple NFT benefits stack?

Different NFT tiers stack additively. Multiple NFTs from the same tier do not add extra boost.

### Does an NFT transfer keep the boost active?

No. Transfer resets active benefit state and starts a new benefit holding period for the recipient.

### What happens if I stake with NFT boost and then sell the NFT?

The existing staking lock keeps the NFT boost that was snapshotted when the lock was created. Selling
or transferring the NFT removes the seller's active benefit for future locks, and the recipient must
wait through the holding period before activating the NFT benefit.

## 🛡️ Security

### Has an external audit been published?

No external audit report is recorded in the current contract repository. Internal checks and release
gates should not be treated as a guarantee that no vulnerabilities exist.

### Who manages production admin actions?

Production admin actions are expected to use the configured Safe multisig.
