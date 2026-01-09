# Security Protocol

GloveCat's security framework ensures the safety of user funds and improved system stability.

## Smart Contract Security

### 2026 Security Standards
- **Gas Limit Protection**: External calls (Staking, NFT interactions) are capped at **200,000 gas** to prevent DOS attacks.
- **Inflation Control**: Staking Multiplier is strictly capped at **5.0x** (`MAX_MULTIPLIER = 50000`).
- **Tax Capping**: Total Tax Discount is strictly capped at **100%** to prevent underflows.

### Audits
- OpenZeppelin library usage
- Internal security review completed (2026-01-09)
- **Resolved Issues**:
  - Staking Multiplier Cap (Fixed)
  - External Call DOS Risk (Fixed via Gas Limit)
  - Auto Liquidity Recovery (Mitigated via Manual Recovery)

### Access Control
- 2-of-3 multisig required
- Timelock applied (24-hour delay for critical changes)

## Operational Security

### Auto Liquidity Recovery
In case of Auto Liquidity failure (e.g., Uniswap router issues), tokens may remain in the `AutoLiquidityManager`.
**Manual Recovery Procedure**:
1. Admin checks `balanceOf(AutoLiquidityManager)`.
2. Admin calls `AutoLiquidityManager.rescueTokens()`.
3. Tokens are returned to `GloveCatCore` or `LiquidityWallet` for manual processing.

### Key Management
- Hardware wallet usage
- Distributed seed storage

### Monitoring
- Large transfer alerts
- Anomaly detection

## Incident Response

For details, see [Emergency Response](/admin/emergency).
