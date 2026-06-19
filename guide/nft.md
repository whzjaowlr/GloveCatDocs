# NFT Guide

`GloveCatNFT` is the ERC721 tier NFT used for staking boosts and marketplace support.

## 🎨 NFT Tiers

| Tier | Staking boost |
| ---- | ------------: |
| 🐾 Common | 1.2x |
| 💎 Rare | 1.5x |
| 🌟 Epic | 1.8x |
| 👑 Legendary | 2.5x |

One active NFT from each default tier reaches the 4.0x final staking multiplier cap in `Staking`.

## ⚡ Benefit Activation

NFT staking benefits are not automatically active forever after transfer.

- A token movement starts a benefit holding period.
- The current holding period is 1 day.
- The holder must activate the token benefit after the holding period.
- On transfer, the prior holder's active benefit is reset.

Staking uses a lock-creation snapshot. If a holder activates an NFT benefit, creates a staking lock,
and then sells or transfers the NFT, that existing lock keeps its snapshotted boost. The transferred
NFT no longer gives the seller boost for future locks, and the recipient must wait through the
holding period before activating it.

## 🧮 Multiple NFTs

Different NFT tiers stack additively. Multiple active NFTs from the same tier do not add extra
boost.

Example:

- Common + Rare + Epic + Legendary = 4.0x.
- Two Common NFTs = 1.2x.
- Rare active + Epic inactive = Rare boost only.

## 🛠️ Minting And Admin Controls

By contract rule, NFT minting is limited to the configured Safe or approved minters.
`GamificationCore` must be approved as an NFT minter before leaderboard NFT reward claims can mint
NFTs.

Metadata, tier activation, and royalty receiver settings are admin-controlled through the configured
Safe. Verify current values on-chain before relying on them. The default royalty percentage is fixed
at 3%.
