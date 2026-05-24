export type ContractKey =
  | "GloveCatCore"
  | "Staking"
  | "GloveCatNFT"
  | "NFTLevelSystem"
  | "GamificationCore";

export interface ContractInfo {
  name: ContractKey;
  description: string;
  address: `0x${string}`;
  verified: boolean;
}

export type WalletKey =
  | "Safe"
  | "Deployer"
  | "Launch Liquidity Wallet"
  | "Treasury Wallet"
  | "Team Wallet"
  | "Ecosystem Fee Wallet";

export interface WalletInfo {
  name: WalletKey;
  description: string;
  address: `0x${string}`;
}

export const baseNetwork = {
  name: "Base Mainnet",
  chainId: 8453,
  rpcUrl: "https://mainnet.base.org",
  explorerUrl: "https://basescan.org",
};

export const baseDeployment = {
  phase: "full-redeploy-2026-05-23",
  status: "deployed, verified, pending Safe configuration execution",
  compiler: "solc 0.8.34",
  deployer: "0xf04a5FE7E719C62142A927C560e4C8DeD9c05629",
  updatedAt: "2026-05-23T11:41:03.655Z",
};

export const contracts: ContractInfo[] = [
  {
    name: "GloveCatCore",
    description: "GCAT ERC20 token",
    address: "0x7C154359AAaD5C5Bff50339Ad4EdD2752893bf20",
    verified: true,
  },
  {
    name: "Staking",
    description: "Flexible and lock-up staking",
    address: "0x51f3835b6D96Abb13569047F674857F652043d87",
    verified: true,
  },
  {
    name: "GloveCatNFT",
    description: "Tier NFT and badge contract",
    address: "0xf89a78Ac113518d82747C49E8167051a01e21D25",
    verified: true,
  },
  {
    name: "NFTLevelSystem",
    description: "NFT EXP and level system",
    address: "0x1e8908576d651b2b1a1B2d5fB6B9943601663627",
    verified: true,
  },
  {
    name: "GamificationCore",
    description: "Achievements and leaderboard rewards",
    address: "0x34AD8cD8d1233B5246A93c2D13cC2AAb74806f5b",
    verified: true,
  },
];

export const wallets: WalletInfo[] = [
  {
    name: "Safe",
    description: "MultiSig authority for admin operations",
    address: "0xFa5eE6e605642Dc3d4198D58Cb716E2d8eeF0803",
  },
  {
    name: "Deployer",
    description: "EOA used for the 2026-05-23 full redeploy broadcast",
    address: "0xf04a5FE7E719C62142A927C560e4C8DeD9c05629",
  },
  {
    name: "Launch Liquidity Wallet",
    description: "Constructor launch-liquidity allocation recipient",
    address: "0xa92C88dE90F3114A6bD0fFf8DE56139Dc3F27fda",
  },
  {
    name: "Treasury Wallet",
    description: "Constructor treasury allocation recipient",
    address: "0xFa5eE6e605642Dc3d4198D58Cb716E2d8eeF0803",
  },
  {
    name: "Team Wallet",
    description: "Constructor team allocation recipient",
    address: "0x5217a803350f004548Af9863712659458Fa5bCfC",
  },
  {
    name: "Ecosystem Fee Wallet",
    description: "Recipient for the fixed 1% sell ecosystem fee",
    address: "0x5217a803350f004548Af9863712659458Fa5bCfC",
  },
];

export const contractsByName = Object.fromEntries(
  contracts.map((contract) => [contract.name, contract])
) as Record<ContractKey, ContractInfo>;

export const walletsByName = Object.fromEntries(
  wallets.map((wallet) => [wallet.name, wallet])
) as Record<WalletKey, WalletInfo>;

export function addressUrl(address: string) {
  return `${baseNetwork.explorerUrl}/address/${address}`;
}

export function tokenUrl(address: string) {
  return `${baseNetwork.explorerUrl}/token/${address}`;
}
