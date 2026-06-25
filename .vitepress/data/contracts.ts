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
  status: string;
  amountGcat: string;
  target: `0x${string}`;
  txHash: `0x${string}`;
  uiLabel: string;
  schedule: string;
}

export interface PublicEvidenceLink {
  name: string;
  description: string;
  href: string;
  value?: string;
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
  updatedAt: "2026-06-24",
  note: "Contracts are deployed and Basescan verified. Phase 1 Safe wiring, PinkLock token locks, official pair setup, liquidity seeding, and project-owned LP locking are complete. Trading is not open. Public staking is not live.",
};

export const lockTargetSetTxHash =
  "0x6b7cd6aea6a36c595be64d6047fad032421785155166527be0473cda9445261d" as const;

export const liquidityEvidence = {
  poolName: "Aerodrome Classic Volatile WETH/GCAT",
  poolAddress: "0x6330Bb184d90D78F336270485C3d17AB8AE8dD54",
  lpTokenAddress: "0x6330Bb184d90D78F336270485C3d17AB8AE8dD54",
  aerodromeRouter: "0xcF77a3Ba9A5CA399B7c97c74d54e5b1Beb874E43",
  aerodromePoolFactory: "0x420DD381b31aEf6683db6B902084cB0FFECe40Da",
  lpSafe: "0xa92C88dE90F3114A6bD0fFf8DE56139Dc3F27fda",
  wethAddress: "0x4200000000000000000000000000000000000006",
  gcatAmount: "375,000,000 GCAT",
  wethAmount: "5.51 WETH",
  liquidityAddTxHash: "0xa4268463f1cfaa6d8e3eb3c315c2d54da5cd6dfae015ffd276cd18c42e0fb7a0",
  liquidityAddedAt: "2026-06-23 17:22:55 UTC",
  lpTokenAmount: "45,456.02270326782560651 vAMM-WETH/GCAT",
  lpLockContract: "0xdD6E31A046b828CbBAfb939C2a394629aff8BBdC",
  lpLockTxHash: "0xd0afe05c7e64a7113c3b8b48e17cf06211ae65d9da8389267009c6e603e2554b",
  lpLockId: "1046390",
  lpLockOwner: "0xa92C88dE90F3114A6bD0fFf8DE56139Dc3F27fda",
  lpUnlockDate: "2031-06-24 00:00:00 UTC",
} as const;

export const contracts: ContractInfo[] = [
  {
    name: "GloveCatCore",
    description:
      "GCAT ERC20 token with fixed sell fee and launch max-wallet limit",
    address: "0x59df0577c7a5014954c0d6cc12616e92e34d9ff4",
    verified: true,
    status: "Basescan verified and Safe wired",
  },
  {
    name: "Staking",
    description:
      "Lock-only staking with 30-, 90-, and 180-day periods and base APRs of 2%, 5%, and 8%, respectively",
    address: "0x2ab642c747d4568f916fbe4f0556ca28802162ab",
    verified: true,
    status: "Basescan verified and Safe wired",
  },
  {
    name: "GloveCatNFT",
    description: "ERC721 tier NFT for staking boost and ERC2981 royalties",
    address: "0x23d398f039cede09cd2a63f359c7052753919f82",
    verified: true,
    status: "Basescan verified and minter wired",
  },
  {
    name: "GamificationCore",
    description: "Staking-only leaderboard NFT claims",
    address: "0x96935bde10b5c4b9e671482416754fd69401f3f7",
    verified: true,
    status: "Basescan verified and NFT wired",
  },
];

export const tokenLocks: TokenLockInfo[] = [
  {
    name: "Team allocation lock",
    status: "PinkLock vesting",
    amountGcat: "25,000,000 GCAT",
    target: "0xdD6E31A046b828CbBAfb939C2a394629aff8BBdC",
    txHash: "0x9c0feb497e0d96da551aa3f7d556ee5501ede05718a47bb4c6e38484703b634c",
    uiLabel: "GloveCat Team Allocation - 60 Cycle Vesting",
    schedule:
      "Actual schedule: 62 elapsed 30-day cycles to the 100% cap. Starts 2026-06-28 02:00 UTC with 0.56% TGE and 1.63% release per cycle.",
  },
  {
    name: "Long-term treasury reserve lock",
    status: "PinkLock vesting",
    amountGcat: "95,000,000 GCAT",
    target: "0xdD6E31A046b828CbBAfb939C2a394629aff8BBdC",
    txHash: "0xe2a17dc1cb1300a9c26c6ec77cf036c1f38c3ff6ccb3163a5e77ffed43942d48",
    uiLabel: "GloveCat Treasury Reserve - 61 Cycle Vesting",
    schedule:
      "Actual schedule: 62 elapsed 30-day cycles to the 100% cap. Starts 2026-06-28 02:00 UTC with 0.56% TGE and 1.63% release per cycle.",
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

export function contractCodeUrl(address: string | null) {
  return address ? `${baseNetwork.explorerUrl}/address/${address}#code` : null;
}

export function tokenUrl(address: string | null) {
  return address ? `${baseNetwork.explorerUrl}/token/${address}` : null;
}

export function txUrl(txHash: string | null) {
  return txHash ? `${baseNetwork.explorerUrl}/tx/${txHash}` : null;
}

export function shortPublicValue(value?: string | null, head = 10, tail = 8) {
  if (!value) {
    return "Published";
  }

  return value.length > head + tail + 3
    ? `${value.slice(0, head)}...${value.slice(-tail)}`
    : value;
}

export function safeAppUrl(address: string | null) {
  return address ? `https://app.safe.global/home?safe=base:${address}` : null;
}

export function safeApiUrl(address: string | null) {
  return address
    ? `https://api.safe.global/tx-service/base/api/v1/safes/${address}/`
    : null;
}

function requiredUrl(url: string | null, label: string) {
  if (!url) {
    throw new Error(`Missing public evidence URL: ${label}`);
  }
  return url;
}

export const publicEvidenceLinks: PublicEvidenceLink[] = [
  {
    name: "GCAT token",
    description: "Basescan ERC20 token page",
    href: requiredUrl(tokenUrl(contractsByName.GloveCatCore.address), "GCAT token"),
    value: contractsByName.GloveCatCore.address ?? undefined,
  },
  {
    name: "GloveCatCore source",
    description: "Verified Basescan source code",
    href: requiredUrl(
      contractCodeUrl(contractsByName.GloveCatCore.address),
      "GloveCatCore source",
    ),
    value: contractsByName.GloveCatCore.address ?? undefined,
  },
  {
    name: "Staking source",
    description: "Verified Basescan source code",
    href: requiredUrl(
      contractCodeUrl(contractsByName.Staking.address),
      "Staking source",
    ),
    value: contractsByName.Staking.address ?? undefined,
  },
  {
    name: "GloveCatNFT source",
    description: "Verified Basescan source code",
    href: requiredUrl(
      contractCodeUrl(contractsByName.GloveCatNFT.address),
      "GloveCatNFT source",
    ),
    value: contractsByName.GloveCatNFT.address ?? undefined,
  },
  {
    name: "GamificationCore source",
    description: "Verified Basescan source code",
    href: requiredUrl(
      contractCodeUrl(contractsByName.GamificationCore.address),
      "GamificationCore source",
    ),
    value: contractsByName.GamificationCore.address ?? undefined,
  },
  {
    name: "Safe app",
    description: "Base Safe UI",
    href: requiredUrl(safeAppUrl(walletsByName.Safe.address), "Safe app"),
    value: walletsByName.Safe.address ?? undefined,
  },
  {
    name: "Safe owner/threshold record",
    description: "Safe public API record for owners and threshold",
    href: requiredUrl(safeApiUrl(walletsByName.Safe.address), "Safe API record"),
    value: walletsByName.Safe.address ?? undefined,
  },
  {
    name: "PinkLock target",
    description: "PinkLock target contract on Basescan",
    href: requiredUrl(addressUrl(tokenLocks[0]?.target ?? null), "PinkLock target"),
    value: tokenLocks[0]?.target,
  },
  {
    name: "PinkLock target set tx",
    description: "Basescan transaction that set the PinkLock target",
    href: requiredUrl(txUrl(lockTargetSetTxHash), "PinkLock target set tx"),
    value: lockTargetSetTxHash,
  },
  {
    name: "Official Aerodrome pool",
    description: "Registered Classic Volatile WETH/GCAT pool and LP token",
    href: requiredUrl(addressUrl(liquidityEvidence.poolAddress), "Official Aerodrome pool"),
    value: liquidityEvidence.poolAddress,
  },
  {
    name: "Liquidity seed tx",
    description: "Aerodrome addLiquidity execution transaction",
    href: requiredUrl(txUrl(liquidityEvidence.liquidityAddTxHash), "Liquidity seed tx"),
    value: liquidityEvidence.liquidityAddTxHash,
  },
  {
    name: "Project LP lock contract",
    description: "PinkLock V2 contract holding the project-owned Aerodrome LP tokens",
    href: requiredUrl(addressUrl(liquidityEvidence.lpLockContract), "Project LP lock contract"),
    value: liquidityEvidence.lpLockContract,
  },
  {
    name: "Project LP lock tx",
    description: "PinkLock V2 transaction that locked the project-owned Aerodrome LP tokens",
    href: requiredUrl(txUrl(liquidityEvidence.lpLockTxHash), "Project LP lock tx"),
    value: liquidityEvidence.lpLockTxHash,
  },
  ...tokenLocks.map((lock) => ({
    name: `${lock.name} tx`,
    description: "Basescan lock execution transaction",
    href: requiredUrl(txUrl(lock.txHash), `${lock.name} tx`),
    value: lock.txHash,
  })),
];
