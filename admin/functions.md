# Admin Functions

Admin functions should be executed through the configured Safe multisig unless a documented
deployment or recovery procedure explicitly says otherwise.

## 🔐 Current Admin Boundary

This page lists the current admin functions only. Do not infer additional admin powers from older
materials or archived deployments.

## 🪙 GloveCatCore

| Function | Authority | Purpose |
| -------- | --------- | ------- |
| `setStakingContract(address)` | Safe | Wire staking timestamp sync |
| `setUniswapV2Pair(address)` | Safe | Set the primary official V2 pair |
| `setOfficialPair(address,bool)` | Safe | Manage alternate official pair treatment |
| `setMaxWalletLimit(uint32)` | Safe | Adjust launch max-wallet percentage within bounds |
| `setLimitsEnabled(bool)` | Safe | Enable or disable launch max-wallet checks |
| `setEcosystemWallet(address)` | Safe | Update fixed sell-fee receiver |
| `openTrading()` | Safe | Open trading once |

`openTrading()` is one-way. Run official pair setup and pre-launch LP seed planning before opening
trading. The default launch max-wallet check starts at 2% of total supply and expires 1 hour after
`openTrading()`.

## 🔒 Staking

| Function | Authority | Purpose |
| -------- | --------- | ------- |
| `setCoreContract(address)` | Safe | Wire optional core timestamp sync |
| `setNFTContract(address)` | Safe | Wire NFT boost source |
| `depositIncentives(uint256)` | Any caller with approved tokens | Add tokens to the staking incentive pool |

Staking lock periods are fixed to 30, 90, and 180 days with annualized 2%, 5%, and 8% incentive
rates. The minimum stake is 1,000 GCAT, each user can have up to 50 active lock positions, and
staking amount does not create a separate reward multiplier.

## 🎨 GloveCatNFT

| Function | Authority | Purpose |
| -------- | --------- | ------- |
| `addTier(string,uint256)` | Safe | Add an NFT tier within limits |
| `updateTier(uint256,string,uint256)` | Safe | Update tier name and boost |
| `setTierActive(uint256,bool)` | Safe | Enable or disable a tier |
| `removeTier(uint256)` | Safe | Mark a tier inactive |
| `setMinter(address,bool)` | Safe | Approve or remove NFT minters |
| `setBaseURI(string)` | Safe | Update base metadata URI |
| `setContractURI(string)` | Safe | Update collection metadata URI |
| `setTokenURI(uint256,string)` | Safe | Set token-specific metadata |
| `setDefaultRoyaltyReceiver(address)` | Safe | Update ERC2981 royalty receiver |
| `deleteDefaultRoyalty()` | Safe | Remove default royalty |

The default royalty percentage is fixed at 3%. A single NFT tier boost is capped at 2.5x, and the
aggregate staking boost returned by `GloveCatNFT` is capped at 4.0x. Benefits require a 1-day
holding period before activation and reset on transfer.

## 🏅 GloveCatBadge

| Function | Authority | Purpose |
| -------- | --------- | ------- |
| `createBadgeType(string,string,bool,uint256)` | Safe | Create a badge type |
| `updateBadgeType(uint256,bool,uint256,bool)` | Safe | Update transferability, cap, and active state |
| `setMinter(address,bool)` | Safe | Approve or remove badge minters |
| `setBaseURI(string)` | Safe | Update badge base URI |
| `setBadgeURI(uint256,string)` | Safe | Set badge-specific metadata |
| `grantBadge(address,uint256)` | Safe or minter | Grant one badge |
| `grantBadges(address,uint256[])` | Safe or minter | Grant multiple badges |
| `revokeBadge(address,uint256)` | Safe | Revoke a badge |

Soulbound badge types cannot be transferred after mint. `maxSupply=0` means uncapped; nonzero
`maxSupply` is a lifetime mint cap and cannot be bypassed by revoking badges.

## 🏆 GamificationCore

| Function | Authority | Purpose |
| -------- | --------- | ------- |
| `createAchievement(string,string,uint256,uint256)` | Safe | Create an achievement |
| `updateAchievement(uint256,uint256,uint256)` | Safe | Update threshold and reward |
| `deleteAchievement(uint256)` | Safe | Deactivate an achievement |
| `setAchievementActive(uint256,bool)` | Safe | Toggle active state |
| `setVerifier(address,bool)` | Safe | Manage progress verifiers |
| `depositRewards(uint256)` | Any caller with approved tokens | Add achievement reward tokens |
| `finalizeSeason(bytes32)` | Safe | Finalize a leaderboard season |
| `updateSeasonMerkleRoot(uint256,bytes32)` | Safe | Correct a root before any claim |
| `setNFTContract(address)` | Safe | Wire NFT reward minting |

Leaderboard claims are capped to 10 successful claims per season, with one claim per wallet and one
claim per rank. Season Merkle roots can be corrected only before that season has any successful
claim.

## 🔁 Access Transfer

`TieredAccess` multiSig transfer uses a two-step flow:

1. Current Safe calls `transferMultiSig(newSafe)`.
2. New Safe calls `acceptMultiSig()`.

The pending transfer can be cancelled by the current Safe before acceptance.
