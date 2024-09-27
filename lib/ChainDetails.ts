export const CHAIN_DETAILS = {
  sepolia: {
    //used for ethereum testnet
    chainId: 11155111, //evmId and chainId are same
    lzId: 40161,
    lzEndpoint: "0x6EDCE65403992e310A62460808c4b910D972f10f",
    trinityFactoryAddress: "0x124D033ec11B8C74148EE5c56c339Ec1d38F5aA0",
    trinityFactoryExtensionAddress:
      "0xA5875eBCf51Ef72C9Ab1717a481A87dA3EFf1967",
    tokenNvestingDeployerInstance: "0x7AfC2d67aa54FcB1dA118fc7360141ce9B4BF37C",
    raisingCurrency: "0x1B60e616aDbDF2d2769B5A8ED5666E7499E680d3",
    currency: "USDT ETH",
    icon: "/assets/chains/ethereum.png",
  },
  amoy: {
    // used for base testnet
    chainId: 80002,
    lzId: 40267,
    lzEndpoint: "0x6EDCE65403992e310A62460808c4b910D972f10f",
    trinityFactoryAddress: "0x734f6C0C643f7662Fb33350AbF05A9dE30d72595",
    trinityFactoryExtensionAddress:
      "0x6BB0Ca2d7656A8804c623F5017B92233509FA990",
    tokenNvestingDeployerInstance: "0xd009D3635ef213B79F73E1b9BfD48174ce38C745",
    raisingCurrency: "0x46a5Cc2E3fC70AE93C20166e78AB72E822EFae2c",
    currency: "USDC BASE",
    icon: "/assets/chains/base-blue.svg",
  },
  bsc: {
    // used for BNB Binance testnet
    chainId: 97,
    lzId: 40102,
    lzEndpoint: "0x6EDCE65403992e310A62460808c4b910D972f10f",
    trinityFactoryAddress: "0x1B60e616aDbDF2d2769B5A8ED5666E7499E680d3",
    trinityFactoryExtensionAddress:
      "0x015428ea5956571dA03f662F14C3a3CDE4e3aF5b",
    tokenNvestingDeployerInstance: "0xb65B000eD0673448bD281f2B8F1578727e525E72",
    raisingCurrency: "0x08612c2C1Cb534Be0D48dE27406c9Bd32877D834",
    currency: "USDT BNB",
    icon: "/assets/chains/bnb-chain.png",
  },
  ethereum: {
    // for ethereum mainnet
    chainId: 1,
    lzId: 30101,
    lzEndpoint: "0x1a44076050125825900e736c501f859c50fE728c",
    trinityFactoryAddress: "",
    trinityFactoryExtensionAddress: "",
    tokenNvestingDeployerInstance: "",
    raisingCurrency: "",
    currency: "USDT ETH",
    icon: "/assets/chains/ethereum.png",
  },
  bnb: {
    // for bnb mainnet
    chainId: 56,
    lzId: 30102,
    lzEndpoint: "0x1a44076050125825900e736c501f859c50fE728c",
    trinityFactoryAddress: "",
    trinityFactoryExtensionAddress: "",
    tokenNvestingDeployerInstance: "",
    raisingCurrency: "",
    currency: "USDT BNB",
    icon: "/assets/chains/bnb-chain.png",
  },
  base: {
    // for base mainnet
    chainId: 8453,
    lzId: 30184,
    lzEndpoint: "0x1a44076050125825900e736c501f859c50fE728c",
    trinityFactoryAddress: "",
    trinityFactoryExtensionAddress: "",
    tokenNvestingDeployerInstance: "",
    raisingCurrency: "",
    currency: "USDC BASE",
    icon: "/assets/chains/base-blue.svg",
  },
};

export type ChainTypes =
  | "unknown"
  | "sepolia"
  | "amoy"
  | "bsc"
  | "ethereum"
  | "bnb"
  | "base";

export function getChainDetailsByChainName(chain: ChainTypes) {
  switch (chain) {
    case "sepolia":
      return CHAIN_DETAILS.sepolia;
    case "amoy":
      return CHAIN_DETAILS.amoy;
    case "bsc":
      return CHAIN_DETAILS.bsc;
    case "ethereum":
      return CHAIN_DETAILS.ethereum;
    case "base":
      return CHAIN_DETAILS.base;
    case "bnb":
      return CHAIN_DETAILS.bnb;
    default:
      break;
  }
}

export function getChainNameFromChainId(chainId: string): ChainTypes {
  if (chainId?.endsWith("11155111")) {
    return "sepolia";
  } else if (chainId?.endsWith("80002")) {
    return "amoy";
  } else if (chainId?.endsWith("97")) {
    return "bsc";
  } else if (chainId?.endsWith("8453")) {
    return "base";
  } else if (chainId?.endsWith("56")) {
    return "bnb";
  } else if (chainId?.endsWith("1")) {
    return "ethereum";
  } else {
    return "unknown";
  }
}

export function getChainNameFromRaisingCurrency(chainName: string) {
  switch (chainName) {
    case CHAIN_DETAILS.sepolia.raisingCurrency:
      return "sepolia";
    case CHAIN_DETAILS.amoy.raisingCurrency:
      return "amoy";
    case CHAIN_DETAILS.bsc.raisingCurrency:
      return "bsc";
    case CHAIN_DETAILS.base.raisingCurrency:
      return "base";
    case CHAIN_DETAILS.bnb.raisingCurrency:
      return "bnb";
    case CHAIN_DETAILS.ethereum.raisingCurrency:
      return "ethereum";
    default:
      break;
  }
}

export function getChainDetailsFromRaisingCurrency(chain?: string) {
  switch (chain) {
    case CHAIN_DETAILS.sepolia.raisingCurrency:
      return CHAIN_DETAILS.sepolia;
    case CHAIN_DETAILS.amoy.raisingCurrency:
      return CHAIN_DETAILS.amoy;
    case CHAIN_DETAILS.bsc.raisingCurrency:
      return CHAIN_DETAILS.bsc;
    case CHAIN_DETAILS.base.raisingCurrency:
      return CHAIN_DETAILS.base;
    case CHAIN_DETAILS.bnb.raisingCurrency:
      return CHAIN_DETAILS.bnb;
    case CHAIN_DETAILS.ethereum.raisingCurrency:
      return CHAIN_DETAILS.ethereum;
    default:
      return null;
  }
}

export function getChainIconFromChainId(chainId?: number) {
  switch (chainId) {
    case CHAIN_DETAILS.sepolia.chainId:
      return CHAIN_DETAILS.sepolia.icon;
    case CHAIN_DETAILS.amoy.chainId:
      return CHAIN_DETAILS.amoy.icon;
    case CHAIN_DETAILS.bsc.chainId:
      return CHAIN_DETAILS.bsc.icon;
    case CHAIN_DETAILS.base.chainId:
      return CHAIN_DETAILS.base.icon;
    case CHAIN_DETAILS.bnb.chainId:
      return CHAIN_DETAILS.bnb.icon;
    case CHAIN_DETAILS.ethereum.chainId:
      return CHAIN_DETAILS.ethereum.icon;
    default:
      return "/assets/chains/default_icon_chain.png";
  }
}

export const chainsLogos = [
  {
    logo: "/assets/chains/ethereum-chain.png",
    alt: "Ethereum",
  },
  {
    logo: "/assets/chains/bnb.svg",
    alt: "BNB",
  },
  {
    logo: "/assets/chains/base.svg",
    alt: "base",
  },
  // {
  //   logo: "/assets/chains/ton.svg",
  //   alt: "TON",
  // },
  {
    logo: "/assets/chains/layerzero-chain.png",
    alt: "LayerZero",
  },
  {
    logo: "/assets/chains/privy-chain-logo.svg",
    alt: "Privy",
  },
  {
    logo: "/assets/chains/synapse-chain-logo.png",
    alt: "Synaps",
  },
];

export const chainLogosSmall = [
  {
    name: "ethereum",
    logo: "/assets/chains/ethereum.png",
    symbol: "ETH",
    chainId: 1,
  },
  {
    name: "privy",
    logo: "/assets/chains/privy-icon-logo.png",
    symbol: "Privy",
    chainId: 1, //not confirmed
  },
  {
    name: "binance",
    logo: "/assets/chains/bnb-chain.png",
    symbol: "BNB",
    chainId: 56,
  },
  {
    name: "layerzero",
    logo: "/assets/chains/layer-zero-chain.svg",
    symbol: "LayerZero",
    chainId: 4, //not confirmed
  },
  {
    name: "synapse",
    logo: "/assets/chains/synapse-logo.png",
    symbol: "SYN",
    chainId: 444,
  },
  {
    name: "base",
    logo: "/assets/chains/base-blue.svg",
    symbol: "BASE",
    chainId: 8453,
  },
];

export const chainExplorers: Record<any, string> = {
  1: "https://etherscan.io",
  ETH: "https://etherscan.io",
  56: "https://bscscan.com",
  BSC: "https://bscscan.com",
  8543: "https://basescan.org",
  BASE: "https://basescan.org",
};
