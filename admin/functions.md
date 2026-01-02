# Admin Functions

Admin-only functions for GloveCat smart contracts.

::: warning Caution
All admin functions should be executed through Safe{Wallet} multisig.
:::

## GloveCatCore Functions

### Pause

```solidity
function pause() external onlyOwner
function unpause() external onlyOwner
```

Pause/resume all transactions during emergencies.

### Tax Settings

```solidity
function setTaxRate(uint256 _buyTax, uint256 _sellTax) external onlyOwner
```

| Parameter | Description | Limit |
|-----------|-------------|-------|
| `_buyTax` | Buy tax rate | Max 10% |
| `_sellTax` | Sell tax rate | Max 10% |

**Current Settings**: Buy 0%, Sell 2%

### Whitelist

```solidity
function addToWhitelist(address account) external onlyOwner
function removeFromWhitelist(address account) external onlyOwner
function setWhitelistEnabled(bool enabled) external onlyOwner
```

Whitelisted addresses are exempt from taxes and transaction limits.

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
function setDeadBlocks(uint256 blocks) external onlyOwner
function setDeadBlocksTax(uint256 tax) external onlyOwner
```

High tax settings for bot prevention at launch.

## Staking Functions

### Reward Rate Settings

```solidity
function setRewardRate(uint256 rate) external onlyOwner
```

Adjust staking reward rate (annual, basis points).

### Lock-up Options

```solidity
function setLockupOption(uint256 period, uint256 bonusRate) external onlyOwner
```

Set additional reward rates for each lock-up period.

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
