# Contract Information

This page shows the current deployment registry state.

<a id="base-mainnet"></a>

## 🌐 Base Mainnet

<ContractTable />

<a id="project-wallets"></a>

## 👛 Project Wallets

<WalletTable />

<a id="public-evidence-links"></a>

## 🔗 Public Evidence Links

<PublicEvidenceTable />

<a id="current-deployment-status"></a>

## 🚦 Current Deployment Status

The current GloveCat deployment status on Base mainnet is `active`.

The contracts listed above are deployed and Basescan verified. Phase 1 Safe wiring has been
executed. The PinkSale / PinkLock V2 target is set, and the team and long-term treasury reserve lock flags
are complete on-chain.

Registered-pool setup, liquidity seeding, project-owned LP locking, Safe `openTrading()` execution,
and the initial 1,000,000 GCAT staking reward-pool funding are complete. Public trading is open
on-chain, and public staking readiness passes on-chain.

| Launch gate | Current status |
| ----------- | -------------- |
| Official trading pair | Aerodrome Classic Volatile WETH/GCAT at `0x6330Bb184d90D78F336270485C3d17AB8AE8dD54` |
| Registered pool | The official pair is registered in `GloveCatCore` |
| Liquidity seed | 5.51 WETH and 375,000,000 GCAT were seeded into the registered pool |
| Trading | Open; Safe `openTrading()` executed on 2026-06-29 13:30:07 UTC in tx [`0x18fb7f5fef1c3270dbffa50d9bd56d46c816912c00a599b82fe6fb8b8993485e`](https://basescan.org/tx/0x18fb7f5fef1c3270dbffa50d9bd56d46c816912c00a599b82fe6fb8b8993485e) |
| LP lock evidence | Project-owned Aerodrome LP tokens are locked through PinkSale / PinkLock V2 until 2031-06-24 00:00 UTC |
| Staking / rewards | Ready; latest live readiness check shows `incentivePool = 1,000,000 GCAT`, meeting the published target |

The current published Safe configuration is 2-of-3 multisig. This configuration may be strengthened
later by adding signers, increasing the threshold, or both. Users should verify the current
[Safe app](https://app.safe.global/home?safe=base:0xFa5eE6e605642Dc3d4198D58Cb716E2d8eeF0803)
and
[Safe owner/threshold API record](https://api.safe.global/tx-service/base/api/v1/safes/0xFa5eE6e605642Dc3d4198D58Cb716E2d8eeF0803/)
before relying on any privileged-control claim.

<a id="public-lock-evidence"></a>

## 🔐 Public Lock Evidence

The team allocation lock, long-term treasury reserve lock, and project-owned LP lock are complete
through PinkSale / PinkLock V2. These records are lock evidence only; staking readiness is tracked
separately through the funded `Staking.incentivePool()` on-chain gate.
PinkSale / PinkLock V2 is the PinkSale locking product used for these records; the linked Basescan
transactions and target contract remain the canonical public evidence.

<TokenLockTable />

External PinkSale / PinkLock V2 records are the final schedule evidence. The Basescan links identify the target
contract and execution transactions. Both visible PinkSale / PinkLock V2 records use
`tgeBps=56`, `cycle=2592000`, and `cycleBps=163`, which correspond to 0.56% TGE and 1.63% every
30 days. The actual schedule reaches the 100% cap after 62 elapsed 30-day cycles. LP lock wording
must stay tied to the public lock transaction and lock page evidence.

The Aerodrome LP position is locked through PinkSale / PinkLock V2 as a normal ERC20 token lock because
the PinkSale / PinkLock V2 LP-token mode expects a Uniswap V2-style factory path. See [Liquidity and LP Lock Evidence](/guide/liquidity-lock-evidence).

<a id="network-information"></a>

## 🌐 Network Information

| Item | Value |
| ---- | ----- |
| Network | Base Mainnet |
| Chain ID | 8453 |
| RPC | [`https://mainnet.base.org`](https://mainnet.base.org) |
| Explorer | [Basescan](https://basescan.org) |

<a id="active-contracts"></a>

## 🧩 Active Contracts

The active contract surface is:

- `GloveCatCore`
- `Staking`
- `GloveCatNFT`
- `GamificationCore`

Only the contracts listed above should be treated as the current GloveCat deployment surface.

<a id="abi-and-verification"></a>

## ✅ ABI And Verification

ABIs come from the contract repository build outputs after compile. Basescan verification should be
checked against the active manifest, not older archived deployment snapshots.
