export type ContractKey =
  | "GloveCatCore"
  | "Staking"
  | "GloveCatNFT"
  | "GloveCatBadge"
  | "GamificationCore"
  | "GloveCatViewer";

export interface ContractInfo {
  name: ContractKey;
  description: string;
  address: `0x${string}` | null;
  verified: boolean;
  status: string;
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
  address: `0x${string}` | null;
}

export const baseNetwork = {
  name: "Base Mainnet",
  chainId: 8453,
  rpcUrl: "https://mainnet.base.org",
  explorerUrl: "https://basescan.org",
};

export const baseDeployment = {
  phase: "redeploy-preparation",
  status: "no-current-redeploy",
  compiler: "solc 0.8.34",
  deployer: null as `0x${string}` | null,
  updatedAt: "2026-06-09",
  note: "Publish fresh addresses only after a new manifest is generated and marked active.",
};

export const contracts: ContractInfo[] = [
  {
    name: "GloveCatCore",
    description: "GCAT ERC20 token with fixed sell fee and launch max-wallet limit",
    address: null,
    verified: false,
    status: "Pending redeploy",
  },
  {
    name: "Staking",
    description: "Lock-only staking with 90/180/365 day periods",
    address: null,
    verified: false,
    status: "Pending redeploy",
  },
  {
    name: "GloveCatNFT",
    description: "ERC721 tier NFT for staking boost and ERC2981 royalties",
    address: null,
    verified: false,
    status: "Pending redeploy",
  },
  {
    name: "GloveCatBadge",
    description: "ERC1155 badge contract with soulbound or transferable badge types",
    address: null,
    verified: false,
    status: "Pending redeploy",
  },
  {
    name: "GamificationCore",
    description: "Achievement rewards and staking-only leaderboard NFT claims",
    address: null,
    verified: false,
    status: "Pending redeploy",
  },
  {
    name: "GloveCatViewer",
    description: "Read-only frontend helper",
    address: null,
    verified: false,
    status: "Pending redeploy",
  },
];

export const wallets: WalletInfo[] = [
  {
    name: "Safe",
    description: "Production multiSig authority, published after fresh manifest review",
    address: null,
  },
  {
    name: "Deployer",
    description: "EOA used for the fresh broadcast, published in the active manifest",
    address: null,
  },
  {
    name: "Launch Liquidity Wallet",
    description: "Recipient for the 75% launch liquidity allocation",
    address: null,
  },
  {
    name: "Treasury Wallet",
    description: "Recipient for the 20% treasury and staking reserve allocation",
    address: null,
  },
  {
    name: "Team Wallet",
    description: "Recipient for the 5% team allocation",
    address: null,
  },
  {
    name: "Ecosystem Fee Wallet",
    description: "Recipient for the fixed 1% sell ecosystem fee",
    address: null,
  },
];

export const contractsByName = Object.fromEntries(
  contracts.map((contract) => [contract.name, contract])
) as Record<ContractKey, ContractInfo>;

export const walletsByName = Object.fromEntries(
  wallets.map((wallet) => [wallet.name, wallet])
) as Record<WalletKey, WalletInfo>;

export function addressUrl(address: string | null) {
  return address ? `${baseNetwork.explorerUrl}/address/${address}` : null;
}

export function tokenUrl(address: string | null) {
  return address ? `${baseNetwork.explorerUrl}/token/${address}` : null;
}
