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

`openTrading()` is one-way. Public docs should keep official pair setup, LP seed records, LP lock
evidence, docs checks, frontend checks, and backend checks aligned with the active deployment. The
default launch max-wallet check starts at 2% of total supply and expires 1 hour after
`openTrading()`.

## 🔒 Staking

| Function | Authority | Purpose |
| -------- | --------- | ------- |
| `setCoreContract(address)` | Safe | Wire optional core timestamp sync |
| `setNFTContract(address)` | Safe | Wire NFT boost source |
| `depositIncentives(uint256)` | Any caller with approved tokens | Add tokens to the staking incentive pool |

Staking lock periods are fixed to 30, 90, and 180 days with base APRs of 2%, 5%, and 8%,
respectively. The minimum stake is 1,000 GCAT, each user can have up to 50 active lock positions,
and staking amount does not create a separate reward multiplier.

Public staking must stay closed until `openTrading()` has executed and the staking reward-pool
minimum is funded on-chain.

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

## 🏆 GamificationCore

| Function | Authority | Purpose |
| -------- | --------- | ------- |
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
