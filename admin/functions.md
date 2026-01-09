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
| `maxTxAmount` | 0.3% | Max limit per transaction |
| `maxWalletAmount` | 2% | Max wallet holdings |

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

### LP Lock Auto-Extension

```solidity
function autoExtendLP() external  // 누구나 호출 가능
```

LP Lock 자동 연장:
- **조건**: 잔여 30일 이하일 때만 호출 가능
- **효과**: +6개월 연장
- **제한**: 마이그레이션 요청 중에는 연장 불가

### Migration System

> ⚠️ **MultiSig 전용**
>
> 마이그레이션은 MultiSig만 실행할 수 있습니다.

```solidity
function requestMigration() external onlyMultiSig   // 2개월 대기 시작
function executeMigration() external onlyMultiSig   // 2개월 후 실행 → LP Unlock 가능
function cancelMigration() external onlyMultiSig    // 실행 전 취소 가능
function getMigrationInfo() external view           // 마이그레이션 상태 조회
```

| 단계 | 함수 | 대기 시간 |
|------|------|----------|
| 1. 요청 | `requestMigration()` | 2개월 카운트다운 |
| 2. 실행 | `executeMigration()` | 즉시 (스냅샷 기록) |
| 3. LP Unlock | `unlockLP()` | 마이그레이션 실행 후에만 가능 |

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
| `addTier` | Add new staking tier |
| `updateTier` | Update tier settings (Bronze/Silver tax discount fixed at 0%) |
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
