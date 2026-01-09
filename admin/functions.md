# Admin Functions

Admin-only functions for GloveCat smart contracts.

::: warning Caution
All admin functions should be executed through Safe{Wallet} multisig.
:::

## GloveCatCore Functions

### Pause

```solidity
function pause() external onlyAdmin
function unpause() external onlyAdmin
```

Pause/resume all transactions during emergencies.

### Fee Settings

> ⚠️ **IMMUTABLE (변경 불가)**
>
> Fee rates are now permanently hardcoded in the contract:
> - Buy Fee: 0% (fixed)
> - Sell Fee: 2% (fixed) = `SELL_LIQUIDITY_FEE(1%) + SELL_ECOSYSTEM_FEE(1%)`
>
> The `setFeeRate()` function has been **removed**. No admin can change these values.

**Current Settings**: Buy 0%, Sell 2% 🔒 **영구 고정**

### Whitelist

```solidity
function addToWhitelist(address account) external onlyOwner
function removeFromWhitelist(address account) external onlyOwner
function setWhitelistEnabled(bool enabled) external onlyOwner
```

Whitelisted addresses are exempt from fees and transaction limits.

### Blacklist

```solidity
function addToBlacklist(address account) external onlyOwner
function removeFromBlacklist(address account) external onlyOwner
```

Blacklisted addresses are blocked from all transactions.

### Transaction Limits

```solidity
function setMaxTxAmount(uint256 amount) external onlyOwner
function setMaxWalletAmount(uint256 amount) external onlyOwner
```

| Function | Current Value | Description |
|----------|---------------|-------------|
| `maxTxAmount` | 0.5% | Max limit per transaction (2,500,000 GCAT) |
| `maxWalletAmount` | 2.5% | Max wallet holdings (12,500,000 GCAT) |

### Oracle Price Check (배포 후 필수 설정)

::: danger CRITICAL - 배포 후 반드시 설정
Oracle 가격 체크는 기본적으로 **비활성화**되어 있습니다. OracleManager 배포 후 반드시 활성화해야 합니다.
:::

```solidity
// GloveCatCore
function setOraclePriceCheckEnabled(bool enabled) external onlyAdmin
function setOracleManager(address _oracleManager) external onlyAdmin

// AutoLiquidityManager
function setOraclePriceCheckEnabled(bool enabled) external onlyAdmin
function setOracleManager(address _oracleManager) external onlyAdmin
```

**배포 후 필수 절차:**
1. OracleManager 컨트랙트 배포
2. GloveCatCore에서 `setOracleManager(oracleManagerAddress)` 호출
3. GloveCatCore에서 `setOraclePriceCheckEnabled(true)` 호출
4. AutoLiquidityManager에서도 동일하게 설정

### Anti-Bot

```solidity
function setAntiBotEnabled(bool enabled) external onlyAdmin
function setMaxTxPerBlock(uint8 max) external onlyAdmin
function setWhitelisted(address account, bool status) external onlyAdmin
function addWhitelistBatch(address[] calldata accounts) external onlyAdmin
function startLaunch() external onlyAdmin
function setWhitelistDuration(uint256 blocks) external onlyAdmin
```

| Function | Description |
|----------|-------------|
| `setAntiBotEnabled` | Enable/disable anti-bot features |
| `setMaxTxPerBlock` | Max transactions per block (default: 2) |
| `setWhitelisted` | Add/remove whitelist during launch |
| `startLaunch` | Start launch (enables Dead Blocks) |

::: info Dead Blocks (Hardcoded)
- `DEAD_BLOCKS = 10` (first 10 blocks after launch)
- `DEAD_BLOCK_FEE = 9900` (99% fee)
- These values are **constants** and cannot be changed by any admin.
:::

## LP Lock Functions (GloveCatVault)

### LP Lock (10-Year Fixed)

LP tokens are locked for **10 years** by default. Early unlock is only possible through migration.

```solidity
uint256 public constant DEFAULT_LP_LOCK_DURATION = 3650 days; // 10 years
```

### Migration System

> ⚠️ **Admin/MultiSig Only**

```solidity
function requestMigration() external onlyAdmin   // 30-day countdown starts
function executeMigration() external onlyAdmin   // After 30 days → LP Unlock possible
function cancelMigration() external onlyAdmin    // Cancel before execution
function getMigrationInfo() external view        // Check migration status
```

| Step | Function | Delay |
|------|----------|-------|
| 1. Request | `requestMigration()` | 30-day countdown |
| 2. Execute | `executeMigration()` | Immediate (snapshot recorded) |
| 3. LP Unlock | `unlockLP()` | Only after migration executed |

## Staking Functions

### Reward Rate Settings

```solidity
function setRewardRate(uint256 rate) external onlyOwner
```

Adjust staking incentive rate (annual, basis points).

### Lock-up Options

```solidity
function setLockupOption(uint256 period, uint256 bonusRate) external onlyOwner
```

Set additional reward rates for each lock-up period.

### Tier Management

```solidity
function addTier(uint256 minAmount, uint256 maxAmount, uint256 multiplierBasisPoints, uint256 taxDiscountBasisPoints) external onlyAdmin
function updateTier(uint256 tierId, uint256 minAmount, uint256 maxAmount, uint256 multiplierBasisPoints, uint256 taxDiscountBasisPoints, bool active) external onlyAdmin
function getUserTaxDiscount(address user) external view returns (uint256)
```

| Function | Description |
|----------|-------------|
| `addTier` | Add new staking tier **(Max Multiplier: 5.0x)** |
| `updateTier` | Update tier settings (**Max Multiplier: 5.0x**, Bronze/Silver tax discount fixed at 0%) |
| `getUserTaxDiscount` | Get user's tax discount based on staking tier |

::: info Boost Calculation
Staking boost and NFT boost are **summed** (not multiplied):
- **Formula**: `1.0x + (tierBonus) + (nftBonus)`
- **Example**: Diamond (1.5x) + Legendary NFT (1.8x) = 1.0x + 0.5x + 0.8x = **2.3x**
:::

## Tax Discount System (GloveCatCore)

```solidity
function getTotalTaxDiscount(address user) external view returns (uint256)
function setStakingContract(address _stakingContract) external onlyAdmin
function setNftContract(address _nftContract) external onlyAdmin
function setLevelSystemContract(address _levelSystemContract) external onlyAdmin
```

Tax discounts from Staking Tier and NFT Tier are **summed** (max 100%):

| Source | Discount Range |
|--------|---------------|
| Staking Tier | 0% (Bronze/Silver fixed), configurable for Gold+ |
| NFT Tier | 10% (Common) ~ 80% (Legendary) |

## Ownership

### Transfer

```solidity
function transferOwnership(address newOwner) external onlyOwner
function acceptOwnership() external
```

Two-step ownership transfer (enhanced security):
1. Call `transferOwnership(newOwner)`
2. New owner calls `acceptOwnership()`

## Emergency Response

For situation-specific responses, see [Emergency Response](/admin/emergency).
