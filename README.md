# GloveCat Docs

[![Tests](https://img.shields.io/badge/tests-passing-brightgreen)]()
[![Security](https://img.shields.io/badge/security-A%20grade-brightgreen)]()

**GloveCat Official Documentation** - Base Chain Meme Token

---

## 📊 Project Status

- ✅ **Tests Passing** - Foundry test suite
- ✅ **Contract Verified** - Basescan source verification

**GloveCatCore Address**:
[`0x2489E6892f94a692ae71dC2d43878F8d8A4a5581`](https://basescan.org/address/0x2489E6892f94a692ae71dC2d43878F8d8A4a5581)

---

## ✨ Core Features

### Token (GloveCatCore)

| Feature | Description |
|---------|-------------|
| **Token Tax** | Buy 0%, Sell 2% (Liquidity 1% + Ecosystem 1%) |
| **Limits** | MaxTx 0.3%, MaxWallet 3% |
| **Auto-LP** | Tax token → ETH/GCAT liquidity conversion |
| **MEV Protection** | 15 min cooldown |

### Staking APY

| Period | APY |
|--------|-----|
| Flexible | 1% |
| 90 days | 2% |
| 180 days | 5% |
| 365 days | 8% |
| 730 days (2yr) | 12% |
| 1460 days (4yr) | 15% |

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
| **Contract** | [BaseScan](https://basescan.org/token/0x2489E6892f94a692ae71dC2d43878F8d8A4a5581) |
| **Twitter** | [@glovecatcoin](https://twitter.com/glovecatcoin) |
| **Telegram** | [GloveCatOfficial](https://t.me/GloveCatOfficial) |

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
- **Solidity** 0.8.28 - Smart contracts
- **Base** (Chain ID: 8453)

---

**Last Updated**: 2026-01-02
