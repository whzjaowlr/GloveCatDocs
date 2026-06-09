# NFT Guide

`GloveCatNFT` is the ERC721 tier NFT used for staking boosts and marketplace support.

## NFT Tiers

| Tier ID | Tier | Staking boost |
| ------: | ---- | ------------: |
| 0 | Common | 1.2x |
| 1 | Rare | 1.4x |
| 2 | Epic | 1.7x |
| 3 | Legendary | 2.2x |

The maximum NFT staking boost is 2.2x. The final staking multiplier, after applying NFT bonus, is
capped at 4.0x in `Staking`.

## Benefit Activation

NFT staking benefits are not automatically active forever after transfer.

- A token movement starts a benefit holding period.
- The current holding period is 1 day.
- The holder must activate the token benefit after the holding period.
- On transfer, the prior holder's active benefit is reset.

## Multiple NFTs

Multiple NFTs do not stack by summing every token. `getStakingBoost(address)` returns the highest
active tier boost held by the wallet.

Example:

- Rare active + Legendary active = Legendary boost only.
- Common active + Epic inactive = Common boost only.

## Minting And Admin Controls

NFT minting is limited to the Safe or approved minters. `GamificationCore` must be approved as an
NFT minter before leaderboard NFT reward claims can mint NFTs.

Safe can update base URI, contract URI, token URI overrides, tier activation, and royalty receiver.
The default royalty percentage is fixed at 3%.

## Badges Are Separate

Badges are not stored in `GloveCatNFT`. They are handled by `GloveCatBadge`, a separate ERC1155
contract. Badges do not add staking rewards.
