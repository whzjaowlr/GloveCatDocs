# Security Protocol

GloveCat's security framework ensures the safety of user funds and improved system stability.

## Smart Contract Security

### 2026 Security Standards
- **Gas Limit Protection**: External calls (Staking, NFT interactions) are capped at **200,000 gas** to prevent DOS attacks.
- **Inflation Control**: Staking Multiplier is strictly capped at **5.0x** (`MAX_MULTIPLIER = 50000`).
- **Fixed Fee Surface**: `GloveCatCore` has a fixed 0% buy fee and 1% sell ecosystem fee.

### Audits
- OpenZeppelin library usage
- Internal security review completed (2026-01-09)
- **Resolved Issues**:
  - Staking Multiplier Cap (Fixed)
  - External Call DOS Risk (Fixed via Gas Limit)
  - Automatic liquidity assumptions removed from the token contract

### Access Control
- MultiSig-only admin functions
- Two-step MultiSig transfer with `transferMultiSig`, `acceptMultiSig`, and `cancelMultiSigTransfer`

## Operational Security

### Liquidity Operations
Liquidity creation, project liquidity addition, and LP locking happen outside the token contract.
Do not look for automatic router-recovery functions in the active contract set.

### Key Management
- Hardware wallet usage
- Distributed seed storage

### Monitoring
- Large transfer alerts
- Anomaly detection

## Incident Response

For details, see [Emergency Response](/admin/emergency).
