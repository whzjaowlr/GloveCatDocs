# FAQ

## ❓ General

### Is there an active Base mainnet address?

Yes. The current contract addresses are published in [Contract Information](/admin/contracts) and
[Public Evidence Links](/admin/contracts#public-evidence-links), and are Basescan verified. Phase 1
Safe wiring, PinkSale / PinkLock V2 vesting locks, registered-pool setup, liquidity seeding,
project-owned LP locking, Safe `openTrading()` execution, and initial staking reward-pool funding
are complete. Public trading is open on-chain, and public staking readiness passes on-chain.

### Where can I buy GCAT?

Use only GloveCat-published launch announcements and verified contract addresses. Historical
addresses are reference-only and should not be used as the current GCAT deployment. Swap only through
the registered Aerodrome WETH/GCAT route after confirming the current token address, pool address,
and trading-open evidence.

### Which wallets are supported?

Any wallet that supports Base can interact with Base contracts, subject to the dApp and wallet
provider's own support.

## 🔒 Staking

### Can I stake now?

Yes, the on-chain public staking readiness gate now passes. Trading is open on-chain, and the latest
live readiness check shows `incentivePool = 1,000,000 GCAT`, meeting the published reward-pool
target. Users should still verify the dApp readiness panel and contract addresses before approving
GCAT.

### Do staking amounts create separate multipliers?

No. Staking amount does not add a reward multiplier.

### Can I unstake during lock-up?

No. A lock position can be unstaked only after the selected lock period ends.

### Are rewards guaranteed?

No. Rewards depend on available reward-pool funding and may be unpaid until the pool is replenished.

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

Production admin actions should be checked against the configured
[Safe multisig owner/threshold records](/admin/contracts#project-wallets) and related on-chain
transaction history. The current published Safe configuration is 2-of-3, and it may be strengthened
later by adding signers, increasing the threshold, or both.
