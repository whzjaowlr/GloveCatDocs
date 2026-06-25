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
executed. The PinkLock target is set, and the team and long-term treasury reserve lock flags
are complete on-chain.

Active deployment status is not a trading-live or staking-live claim. Official pair setup, liquidity seeding, and project-owned LP locking are complete. Trading is not open. Public staking is not live.

| Launch gate | Current status |
| ----------- | -------------- |
| Official pair | Aerodrome Classic Volatile WETH/GCAT pool is registered in `GloveCatCore` |
| Liquidity seed | 5.51 WETH and 375,000,000 GCAT were seeded into the official pool |
| Trading | Scheduled for June 29, 2026 at 2:00 PM UTC |
| LP lock evidence | Project-owned Aerodrome LP tokens are locked through PinkLock V2 until 2031-06-24 00:00 UTC |
| Staking / rewards | Requires the June 29, 2026 at 2:00 PM UTC trading launch and `incentivePool >= 1,000,000 GCAT`. If below target, rewards must be added through Safe execution |

The current published Safe configuration is 2-of-3 multisig. This configuration may be strengthened
later by adding signers, increasing the threshold, or both. Users should verify the current
[Safe app](https://app.safe.global/home?safe=base:0xFa5eE6e605642Dc3d4198D58Cb716E2d8eeF0803)
and
[Safe owner/threshold API record](https://api.safe.global/tx-service/base/api/v1/safes/0xFa5eE6e605642Dc3d4198D58Cb716E2d8eeF0803/)
before relying on any privileged-control claim.

<a id="public-lock-evidence"></a>

## 🔐 Public Lock Evidence

The team allocation lock, long-term treasury reserve lock, and project-owned LP lock are complete
through PinkLock. These records are lock evidence only; they are not a trading-live or
public-staking-live claim.

<TokenLockTable />

External PinkLock records are the final schedule evidence. The Basescan links identify the target
contract and execution transactions. Both visible PinkLock records use
`tgeBps=56`, `cycle=2592000`, and `cycleBps=163`, which correspond to 0.56% TGE and 1.63% every
30 days. The actual schedule reaches the 100% cap after 62 elapsed 30-day cycles. LP lock wording
must stay tied to the public lock transaction and lock page evidence.

<p class="lock-ui-label-note">
PinkLock UI labels: <code>GloveCat Team Allocation - 60 Cycle Vesting</code> and
<code>GloveCat Treasury Reserve - 61 Cycle Vesting</code>. These are manual labels and differ from
the actual 62-cycle schedule.
</p>

The Aerodrome LP position is locked through PinkLock V2 as a normal ERC20 token lock because
PinkLock's LP-token mode expects a Uniswap V2-style factory path. See [Liquidity and LP Lock Evidence](/guide/liquidity-lock-evidence).

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
