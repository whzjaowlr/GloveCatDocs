export type ContractKey =
  | "GloveCatCore"
  | "Staking"
  | "GloveCatNFT"
  | "GamificationCore";

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
  phase: "full-redeploy",
  status: "deployed-pending-safe-config",
  compiler: "solc 0.8.34",
  deployer: "0xf04a5fe7e719c62142a927c560e4c8ded9c05629" as
    | `0x${string}`
    | null,
  updatedAt: "2026-06-10",
  note: "Contracts are deployed and Basescan verified. Safe wiring, liquidity setup, LP lock, and trading launch are still pending.",
};

export const contracts: ContractInfo[] = [
  {
    name: "GloveCatCore",
    description:
      "GCAT ERC20 token with fixed sell fee and launch max-wallet limit",
    address: "0xb92058fb3336a7191eb5817b9998caded46d208b",
    verified: true,
    status: "Verified; pending Safe config",
  },
  {
    name: "Staking",
    description:
      "Lock-only staking with 30/90/180 day periods and 2%/5%/8% annualized rates",
    address: "0x7f19cf580df2f2ad5a0f49482d993cbeb6f673a2",
    verified: true,
    status: "Verified; pending Safe config",
  },
  {
    name: "GloveCatNFT",
    description: "ERC721 tier NFT for staking boost and ERC2981 royalties",
    address: "0xfbd025366bc12339198c8267736b1414a5a8aca5",
    verified: true,
    status: "Verified; pending Safe config",
  },
  {
    name: "GamificationCore",
    description: "Staking-only leaderboard NFT claims",
    address: "0xa93f3ad1248bbcf74ad8eb392efb0990ad7a82cc",
    verified: true,
    status: "Verified; pending Safe config",
  },
];

export const wallets: WalletInfo[] = [
  {
    name: "Safe",
    description: "Production multiSig authority",
    address: "0xFa5eE6e605642Dc3d4198D58Cb716E2d8eeF0803",
  },
  {
    name: "Deployer",
    description: "EOA used for the fresh broadcast",
    address: "0xf04a5fe7e719c62142a927c560e4c8ded9c05629",
  },
  {
    name: "Launch Liquidity Wallet",
    description: "Recipient for the 75% launch liquidity allocation",
    address: "0xa92C88dE90F3114A6bD0fFf8DE56139Dc3F27fda",
  },
  {
    name: "Treasury Wallet",
    description:
      "Recipient for the 20% treasury and staking reserve allocation",
    address: "0xFa5eE6e605642Dc3d4198D58Cb716E2d8eeF0803",
  },
  {
    name: "Team Wallet",
    description: "Recipient for the 5% team allocation",
    address: "0x5217a803350f004548Af9863712659458Fa5bCfC",
  },
  {
    name: "Ecosystem Fee Wallet",
    description: "Recipient for the fixed 1% sell ecosystem fee",
    address: "0x228EDD1BFb7ec5E7A2b7284C1f3d6130c55B054a",
  },
];

export const contractsByName = Object.fromEntries(
  contracts.map((contract) => [contract.name, contract]),
) as Record<ContractKey, ContractInfo>;

export const walletsByName = Object.fromEntries(
  wallets.map((wallet) => [wallet.name, wallet]),
) as Record<WalletKey, WalletInfo>;

export function addressUrl(address: string | null) {
  return address ? `${baseNetwork.explorerUrl}/address/${address}` : null;
}

export function tokenUrl(address: string | null) {
  return address ? `${baseNetwork.explorerUrl}/token/${address}` : null;
}
