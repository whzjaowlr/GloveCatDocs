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

## 🧮 Multiple NFTs

Different NFT tiers stack additively. Multiple active NFTs from the same tier do not add extra
boost.

Example:

- Common + Rare + Epic + Legendary = 4.0x.
- Two Common NFTs = 1.2x.
- Rare active + Epic inactive = Rare boost only.

## 🛠️ Minting And Admin Controls

NFT minting is limited to the Safe or approved minters. `GamificationCore` must be approved as an
NFT minter before leaderboard NFT reward claims can mint NFTs.

Safe can update base URI, contract URI, token URI overrides, tier activation, and royalty receiver.
The default royalty percentage is fixed at 3%.

## 🏅 Badges Are Separate

Badges are not stored in `GloveCatNFT`. They are handled by `GloveCatBadge`, a separate ERC1155
contract. Badges do not add staking rewards.
