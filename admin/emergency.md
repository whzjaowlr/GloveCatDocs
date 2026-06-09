# Emergency Response

Emergency response must focus on verification, Safe-controlled configuration, public communication,
and external liquidity or reward operations.

## First Response

1. Stop planned launches, campaigns, or reward distributions.
2. Preserve logs, transaction hashes, manifests, and Safe transaction records.
3. Identify affected contracts and wallets.
4. Check whether the issue is contract code, Safe wiring, liquidity operations, reward pool funding,
   metadata, or documentation.
5. Publish a short status update without exploit details if users may be affected.

## Possible Safe Actions

Depending on the issue, Safe may be able to:

- Disable launch max-wallet checks.
- Change official pair settings.
- Update ecosystem wallet.
- Rewire staking, NFT, or gamification references.
- Remove an NFT or badge minter.
- Remove a gamification verifier.
- Correct a leaderboard Merkle root before the first successful claim.
- Replenish or stop funding reward pools.

Safe cannot pause token transfers in the active redeploy surface.

## Liquidity Incidents

Liquidity creation and LP locking happen outside the token contract. For liquidity incidents,
preserve:

- Pair address.
- Router transactions.
- LP token holder address.
- LP lock transaction and lock provider evidence.
- Any Safe transactions related to official pair setup.

## Security Reports

Do not discuss exploit details publicly before triage. Use private maintainer channels for suspected
vulnerabilities, key compromise, or unsafe operational state.
