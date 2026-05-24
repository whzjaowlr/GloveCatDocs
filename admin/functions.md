# Admin Functions

Admin-only functions for GloveCat smart contracts.

::: warning Caution
All admin functions should be executed through Safe{Wallet} multisig.
:::

## GloveCatCore Functions

### Pause

```solidity
function pause() external onlyMultiSig
function unpause() external onlyMultiSig
```

Pause/resume all transactions during emergencies.

### Fee Settings

> ⚠️ **IMMUTABLE (변경 불가)**
>
> Fee rates are now permanently hardcoded in the contract:
> - Buy Fee: 0% (fixed)
> - Sell Fee: 1% (fixed) = `SELL_ECOSYSTEM_FEE(1%)`
>
> The `setFeeRate()` function has been **removed**. No admin can change these values.

**Current Settings**: Buy 0%, Sell 1% 🔒 **영구 고정**

### Transaction Limits

```solidity
function setMaxWalletLimit(uint32 newMaxWalletPercent) external onlyMultiSig
function setLimitsEnabled(bool enabled) external onlyMultiSig
```

| Function | Description |
|----------|-------------|
| `setMaxWalletLimit` | Updates the launch max-wallet percentage |
| `setLimitsEnabled` | Enables/disables the launch max-wallet limit |

The active core exposes only the functions listed on this page. Removed legacy control
surfaces are intentionally absent from the ABI.

### Wallet and Pair Configuration

```solidity
function setEcosystemWallet(address _newWallet) external onlyMultiSig
function setUniswapV2Pair(address pair) external onlyMultiSig
function setOfficialPair(address pair, bool enabled) external onlyMultiSig
function setStakingContract(address _stakingContract) external onlyMultiSig
```

Liquidity creation and LP locking are performed manually outside `GloveCatCore`.

## Staking Functions

### Reward Rate Settings

```solidity
function setFlexibleIncentiveRate(uint256 newRate) external onlyMultiSig
```

Adjust flexible staking incentive rate (annual, basis points).

### Lock-up Options

The active staking contract ships with 90, 180, and 365 day lock periods.

### Tier Management

```solidity
function addTier(uint256 minAmount, uint256 maxAmount, uint256 multiplierBasisPoints) external onlyMultiSig
function updateTier(uint256 tierId, uint256 minAmount, uint256 maxAmount, uint256 multiplierBasisPoints, bool active) external onlyMultiSig
```

| Function | Description |
|----------|-------------|
| `addTier` | Add new staking tier **(Max Multiplier: 5.0x)** |
| `updateTier` | Update tier settings **(Max Multiplier: 5.0x)** |

::: info Boost Calculation
Staking boost and NFT boost are **summed** (not multiplied):
- **Formula**: `1.0x + (tierBonus) + (nftBonus)`
- **Example**: Diamond (1.5x) + Legendary NFT (1.8x) = 1.0x + 0.5x + 0.8x = **2.3x**
:::

## Contract Wiring (GloveCatCore)

```solidity
function setStakingContract(address _stakingContract) external onlyMultiSig
function setUniswapV2Pair(address pair) external onlyMultiSig
function setOfficialPair(address pair, bool enabled) external onlyMultiSig
```

## NFT and Gamification Wiring

```solidity
function setNFTContract(address _nftContract) external onlyMultiSig
function setMinter(address minter, bool allowed) external onlyMultiSig
function setExpGranter(address granter, bool status) external onlyMultiSig
function setVerifier(address verifier, bool status) external onlyMultiSig
```

Use Safe transactions to connect `Staking`, `GloveCatNFT`, `NFTLevelSystem`, and
`GamificationCore` after deployment.

## Emergency Response

For situation-specific responses, see [Emergency Response](/admin/emergency).
