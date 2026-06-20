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

The current Base deployment status is `active`.

The contracts listed above are deployed and Basescan verified. Phase 1 Safe wiring has been
executed. The PinkLock target is set, and the team and long-term treasury/staking reserve lock flags
are complete on-chain.

Active deployment status is not a trading-live or staking-live claim. Official pair setup,
liquidity, LP locking, `openTrading()`, and reward-pool funding remain separate launch evidence.

| Launch gate | Current status |
| ----------- | -------------- |
| Official pair | Pending; `uniswapV2Pair` is still the zero address |
| Liquidity seed | Pending; `launchLiquiditySeeded` is false |
| Trading | Closed until `openTrading()` executes |
| LP lock evidence | Pending until locker address and public lock page are verified |
| Staking reward pool | 1,000,000 GCAT funding transaction prepared; `incentivePool` is 0 until Safe execution |
| Public staking | Closed until trading is open and the reward-pool minimum is funded |

The current published Safe configuration is 2-of-3 multisig. This configuration may be strengthened
later by adding signers, increasing the threshold, or both. Users should verify the current
[Safe app](https://app.safe.global/home?safe=base:0xFa5eE6e605642Dc3d4198D58Cb716E2d8eeF0803)
and
[Safe owner/threshold API record](https://api.safe.global/tx-service/base/api/v1/safes/0xFa5eE6e605642Dc3d4198D58Cb716E2d8eeF0803/)
before relying on any privileged-control claim.

<a id="public-lock-evidence"></a>

## 🔐 Public Lock Evidence

The team allocation lock and treasury/staking reserve lock are complete through PinkLock. This is
token-lock evidence only; it is not a public-staking-live claim.

<TokenLockTable />

External PinkLock records are the final schedule evidence. The Basescan links identify the target
contract and execution transactions. Both visible PinkLock records use
`tgeBps=56`, `cycle=2592000`, and `cycleBps=163`, which correspond to 0.56% TGE and 1.63% every
30 days. The cycle-count wording comes from each PinkLock description string: team 60 Cycle Vesting,
treasury/staking reserve 61 Cycle Vesting. By the bps math, 60 cycles releases 98.36%, 61 cycles
releases 99.99%, and the 62nd 30-day cycle reaches the 100% cap. LP lock wording must stay tied to
the public lock transaction and lock page evidence.

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

The active redeploy surface is:

- `GloveCatCore`
- `Staking`
- `GloveCatNFT`
- `GamificationCore`

Only the contracts listed above should be treated as the current redeploy surface.

<a id="abi-and-verification"></a>

## ✅ ABI And Verification

ABIs come from the contract repository build outputs after compile. Basescan verification should be
checked against the active manifest, not older archived deployment snapshots.
