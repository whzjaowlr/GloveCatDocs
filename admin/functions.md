# 관리자 함수

GloveCat 스마트 컨트랙트의 관리자 전용 함수입니다.

::: warning 주의
모든 관리자 함수는 Safe{Wallet} 멀티시그를 통해 실행하세요.
:::

## GloveCatCore 함수

### 일시 정지

```solidity
function pause() external onlyOwner
function unpause() external onlyOwner
```

긴급 상황 시 모든 거래를 일시 정지/재개합니다.

### 세금 설정

```solidity
function setTaxRate(uint256 _buyTax, uint256 _sellTax) external onlyOwner
```

| 파라미터 | 설명 | 제한 |
|---------|------|------|
| `_buyTax` | 구매 세율 | 최대 10% |
| `_sellTax` | 판매 세율 | 최대 10% |

**현재 설정**: Buy 0%, Sell 2%

### 화이트리스트

```solidity
function addToWhitelist(address account) external onlyOwner
function removeFromWhitelist(address account) external onlyOwner
function setWhitelistEnabled(bool enabled) external onlyOwner
```

화이트리스트된 주소는 세금 및 거래 제한 면제.

### 블랙리스트

```solidity
function addToBlacklist(address account) external onlyOwner
function removeFromBlacklist(address account) external onlyOwner
```

블랙리스트된 주소는 모든 거래 차단.

### 거래 한도

```solidity
function setMaxTxAmount(uint256 amount) external onlyOwner
function setMaxWalletAmount(uint256 amount) external onlyOwner
```

| 함수 | 현재값 | 설명 |
|------|--------|------|
| `maxTxAmount` | 0.3% | 거래당 최대 한도 |
| `maxWalletAmount` | 2% | 지갑당 최대 보유량 |

### 안티봇

```solidity
function setDeadBlocks(uint256 blocks) external onlyOwner
function setDeadBlocksTax(uint256 tax) external onlyOwner
```

런칭 시 봇 방지용 고율 세금 설정.

## Staking 함수

### 보상률 설정

```solidity
function setRewardRate(uint256 rate) external onlyOwner
```

스테이킹 보상률 조정 (연간, 기본 포인트).

### 락업 옵션

```solidity
function setLockupOption(uint256 period, uint256 bonusRate) external onlyOwner
```

락업 기간별 추가 보상률 설정.

## 소유권

### 이전

```solidity
function transferOwnership(address newOwner) external onlyOwner
function acceptOwnership() external
```

2단계 소유권 이전 (안전성 강화):
1. `transferOwnership(newOwner)` 호출
2. 새 소유자가 `acceptOwnership()` 호출

## 긴급 대응

상황별 대응 방법은 [긴급 대응](/admin/emergency) 문서를 참조하세요.
