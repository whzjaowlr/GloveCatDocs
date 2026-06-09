# Safe Multisig Guide

GloveCat production admin authority is expected to be controlled by the configured Safe multisig.

## 🚀 Deployment Pattern

The normal redeploy pattern is:

1. EOA deployer broadcasts the Foundry deployment scripts.
2. Constructors receive the Safe address as `_multiSig`.
3. Contracts start with Safe admin authority.
4. Post-deploy wiring is executed through Safe transactions.

Safe is the admin authority, not necessarily the transaction sender that deploys every contract.

## ✅ Required Evidence

Before calling a deployment active, publish:

- Safe address.
- Safe owners and threshold.
- Contract addresses.
- Constructor arguments.
- Deployment tx hashes and block numbers.
- Basescan verification links.
- Post-deploy wiring transaction hashes.
- Manifest status and update time.

## 🔌 Post-Deploy Wiring

Typical Safe actions include:

- `GloveCatCore.setStakingContract(staking)`.
- `Staking.setCoreContract(core)`.
- `Staking.setNFTContract(nft)`.
- `GamificationCore.setNFTContract(nft)`.
- `GloveCatNFT.setMinter(gamification, true)`.
- Official pair setup before trading opens.

## 📋 Execution Process

1. Prepare calldata or Safe Transaction Builder JSON.
2. Review target, selector, arguments, and expected state change.
3. Collect required Safe signatures.
4. Execute.
5. Verify on-chain state after execution.
6. Archive evidence.

## ⚠️ Mainnet Caution

Do not use archived deployment addresses or pending manifests for production Safe actions. Confirm
the active manifest and on-chain reads first.
