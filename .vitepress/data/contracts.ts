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

export interface TokenLockInfo {
  name: string;
  amountGcat: string;
  target: `0x${string}`;
  txHash: `0x${string}`;
  schedule: string;
}

export const baseNetwork = {
  name: "Base Mainnet",
  chainId: 8453,
  rpcUrl: "https://mainnet.base.org",
  explorerUrl: "https://basescan.org",
};

export const baseDeployment = {
  phase: "full-redeploy",
  status: "active",
  compiler: "solc 0.8.34",
  deployer: "0xf04a5fe7e719c62142a927c560e4c8ded9c05629" as
    | `0x${string}`
    | null,
  updatedAt: "2026-06-15",
  note: "Contracts are deployed and Basescan verified. Phase 1 Safe wiring and PinkLock token locks are complete. Official pair setup, liquidity, LP locking, trading, reward-pool funding, and public staking remain separate launch gates.",
};

export const contracts: ContractInfo[] = [
  {
    name: "GloveCatCore",
    description:
      "GCAT ERC20 token with fixed sell fee and launch max-wallet limit",
    address: "0x59df0577c7a5014954c0d6cc12616e92e34d9ff4",
    verified: true,
    status: "Verified; Safe wired",
  },
  {
    name: "Staking",
    description:
      "Lock-only staking with 30-, 90-, and 180-day periods and base APRs of 2%, 5%, and 8%, respectively",
    address: "0x2ab642c747d4568f916fbe4f0556ca28802162ab",
    verified: true,
    status: "Verified; Safe wired",
  },
  {
    name: "GloveCatNFT",
    description: "ERC721 tier NFT for staking boost and ERC2981 royalties",
    address: "0x23d398f039cede09cd2a63f359c7052753919f82",
    verified: true,
    status: "Verified; minter wired",
  },
  {
    name: "GamificationCore",
    description: "Staking-only leaderboard NFT claims",
    address: "0x96935bde10b5c4b9e671482416754fd69401f3f7",
    verified: true,
    status: "Verified; NFT wired",
  },
];

export const tokenLocks: TokenLockInfo[] = [
  {
    name: "Team allocation",
    amountGcat: "25,000,000 GCAT",
    target: "0xdD6E31A046b828CbBAfb939C2a394629aff8BBdC",
    txHash: "0x9c0feb497e0d96da551aa3f7d556ee5501ede05718a47bb4c6e38484703b634c",
    schedule:
      "Starts 2026-06-28 02:00 UTC; 0.56% TGE; 1.63% every 30 days; description: 60 Cycle Vesting; bps math reaches the 100% cap at 62 cycles",
  },
  {
    name: "Treasury/staking reserve vesting",
    amountGcat: "95,000,000 GCAT",
    target: "0xdD6E31A046b828CbBAfb939C2a394629aff8BBdC",
    txHash: "0xe2a17dc1cb1300a9c26c6ec77cf036c1f38c3ff6ccb3163a5e77ffed43942d48",
    schedule:
      "Starts 2026-06-28 02:00 UTC; 0.56% TGE; 1.63% every 30 days; description: 61 Cycle Vesting; bps math reaches the 100% cap at 62 cycles",
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
