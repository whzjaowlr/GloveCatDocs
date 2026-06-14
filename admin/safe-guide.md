# Safe Multisig Guide

GloveCat production admin authority is controlled by the configured Safe multisig.

## 🚀 Deployment Pattern

The normal redeploy pattern is:

1. EOA deployer broadcasts the Foundry deployment scripts.
2. Constructors receive the Safe address as `_multiSig`.
3. Contracts start with Safe admin authority.
4. Post-deploy wiring is executed through Safe transactions.

Safe is the admin authority, not necessarily the transaction sender that deploys every contract.

## ✅ Current Safe State

| Item | Value |
| ---- | ----- |
| Safe | `0xFa5eE6e605642Dc3d4198D58Cb716E2d8eeF0803` |
| Required policy | 2-of-3 or stronger |
| Phase 1 wiring | Complete |
| Team PinkLock transfer | Complete |
| Treasury/staking reserve PinkLock transfer | Complete |
| Trading route | Published as launch evidence |
| LP lock evidence | Published as launch evidence |
| Staking reward-pool funding | Initial bootstrap funded and tracked |

## 📋 Required Evidence

Public deployment evidence should include:

- Safe address.
- Safe owners and threshold.
- Contract addresses.
- Constructor arguments.
- Deployment tx hashes and block numbers.
- Basescan verification links.
- Post-deploy wiring transaction hashes.
- PinkLock target and lock transaction hashes.
- Pair address and liquidity tx hashes.
- LP lock transaction and lock page.
- Manifest status and update time.

## 🔌 Completed Post-Deploy Wiring

The Phase 1 Safe batch included:

- `GloveCatCore.setStakingContract(staking)`.
- `Staking.setCoreContract(core)`.
- `Staking.setNFTContract(nft)`.
- `GamificationCore.setNFTContract(nft)`.
- `GloveCatNFT.setMinter(gamification, true)`.

## 🚀 Launch Evidence Checklist

- Keep official pair and liquidity records linked from public docs.
- Keep the 5-year LP lock record linked from public docs.
- Keep staking reward-pool funding records linked from public docs.
- Keep trading-route, frontend, backend, and docs evidence aligned with the active contract addresses.

## 📋 Execution Process

1. Prepare calldata or Safe Transaction Builder JSON.
2. Review target, selector, arguments, and expected state change.
3. Collect required Safe signatures.
4. Execute.
5. Verify on-chain state after execution.
6. Archive evidence.

## ⚠️ Mainnet Caution

Do not use archived deployment addresses for production Safe actions. Use only the verified addresses
in [Contract Information](/admin/contracts), then confirm on-chain state after execution.
