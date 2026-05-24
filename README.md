# GloveCat Docs

[![Tests](https://img.shields.io/badge/tests-passing-brightgreen)]()
[![Security](https://img.shields.io/badge/security-A%20grade-brightgreen)]()

**GloveCat Official Documentation** - Base Chain Meme Token

---

## 📊 Project Status

- ✅ **Tests Passing** - Foundry test suite
- ✅ **Contract Verified** - Basescan source verification

**GloveCatCore Address**:
See the centralized deployment registry in `.vitepress/data/contracts.ts`.

---

## ✨ Core Features

### Token (GloveCatCore)

| Feature | Description |
|---------|-------------|
| **Token Fee** | Buy 0%, Sell 1% ecosystem fee 🔒 Immutable |
| **Limits** | Initial max wallet launch limit |
| **Liquidity** | Added and locked manually outside the token contract |
| **Governance** | Snapshot off-chain community participation |

### Staking APY

| Period | APY |
|--------|-----|
| Flexible | 1% |
| 90 days | 2% |
| 180 days | 5% |
| 365 days | 8% |

---

## 📚 Documentation Sections

| Section | Description |
|---------|-------------|
| [Guide](/guide/) | Project intro, tokenomics, feature guides |
| [Admin](/admin/) | Contract management, security protocols |

---

## 🔗 Links

| Item | URL |
|------|-----|
| **dApp** | [glovecatcoin.com](https://glovecatcoin.com) |
| **Contract** | See `.vitepress/data/contracts.ts` |
| **Twitter** | [@GCATstudio](https://twitter.com/GCATstudio) |
| **Telegram** | [glovecatcoin](https://t.me/glovecatcoin) |

---

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Dev server
npm run docs:dev

# Build
npm run docs:build
```

---

## 📦 Tech Stack

- **VitePress** - Static docs site
- **GitHub Pages** - Hosting
- **Solidity** 0.8.34 - Smart contracts
- **Base** (Chain ID: 8453)

---

**Last Updated**: 2026-05-23
