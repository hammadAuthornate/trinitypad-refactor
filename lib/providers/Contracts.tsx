"use client";
import { ConnectedWallet, usePrivy, useWallets } from "@privy-io/react-auth";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
  useMemo,
} from "react";
import { ethers, JsonRpcSigner } from "ethers";
import { trinityFactory } from "@/abis/factory/trinity-factory";
import { trinityFactoryExtension } from "@/abis/factory/trinity-factory-extension";
import { trinityICOABI } from "@/abis/trinity-ico";
import { trinityPad } from "@/abis/pad/trinity-pad";
import { stakeABI } from "@/abis/stake/contract";

import { TrinityERC20 } from "@/abis/token/trinity-erc20";
import useCheckUserLocation from "@/helpers/checkUserLocation";
import { useQuery } from "@tanstack/react-query";
import { ChainTypes, getChainDetailsByChainName } from "@/lib/constants";

interface ContractsContextType {
  myProvider: ethers.BrowserProvider | null;
  chainId: any;
  mySigner: ethers.JsonRpcSigner | null;
  trinityFactoryContract: ethers.Contract | null;
  trinityPadContract: ethers.Contract | null;
  triFactoryExtContract: ethers.Contract | null;
  trinityICOContract: ethers.Contract | null;
  sepoliaStakingContract: ethers.Contract | null;
  usdtContract: ethers.Contract | null;
  usdcContract: ethers.Contract | null;
  setActiveAccount: (value: any) => void;
  activeAccount: ConnectedWallet | null;
  chainType: ChainTypes;
  setChainType: (val: ChainTypes) => void;
  sepoliaStakeContractAddress: string;
}

const ContractsContext = createContext<ContractsContextType | undefined>(
  undefined,
);
const trinityFactoryContractAddressAmoy =
  "0xa0DE95DD738B6768412c727d7e58094e7EFceCA1";
const trinityFactoryContractAddressSepolia =
  "0x02CBC841267E40a28a0b161C002cbF629CCFe643";

const trinityFactoryExtAddressAmoy =
  "0xAE731aB85dBA85b1a631170648A2C38333cdC2f2"; // extension
const trinityFactoryExtAddressSepolia =
  "0x4C7c32F2f7249D01D3865923A710a14AC642b7a0"; // extension

const trinityTokenAndVestingAddressAmoy =
  "0x1bEC3AB9eaBD30A45Ff8E50134c18A5e3466AFB8"; // token deployer
const trinityTokenAndVestingAddressSepolia =
  "0xa7555bcd1d9788DC7375Aa49B51b42e2FFEEEE84"; // token deployer

const trinityICOContractAddress = "0xD9E213E90fa75A81e8D5679Bb8208C610EF37d8A";

const sepoliaStakeContractAddress =
  "0x402BBAE7db03a47104A65d810D40E8C001cF55e9";

// TODO: CHANGE HERE. MAKE THIS DYNAMIC
// This address is associated to the approved campaigns
const makeItDynamicLaunchpad = "0xf4c44012a79323EC6e030bf5c66Bc47244Cd9C92";

const USDT_DEPLOYMENTS: Record<number, string> = {
  1: "0xdac17f958d2ee523a2206206994597c13d831ec7", // USDT ETH
  56: "0x55d398326f99059ff775485246999027b3197955", // USDT BNB
  8453: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", // USDC, BASE
  11155111: "0x1B60e616aDbDF2d2769B5A8ED5666E7499E680d3", // USDT sepolia
};

const USDC_DEPLOYMENTS: Record<number, string> = {
  1: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", // USDT ETH
  56: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d", // USDT BNB
  8453: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", // USDC, BASE
  11155111: "0x1B60e616aDbDF2d2769B5A8ED5666E7499E680d3", // USDT sepolia
};

export const ContractsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { ready, authenticated, user } = usePrivy();
  const { wallets } = useWallets();
  const [trinityFactoryContract, setTrinityFactoryContract] =
    useState<ethers.Contract | null>(null);
  const [triFactoryExtContract, setTriFactoryExtContract] =
    useState<ethers.Contract | null>(null);
  const [trinityPadContract, setTrinityPadContract] =
    useState<ethers.Contract | null>(null);
  // const [trinityTokenAndVestContract, setTrinityTokenAndVestContract] =
  //   useState(null);
  const [trinityICOContract, setTrinityICOContract] =
    useState<ethers.Contract | null>(null);
  const [sepoliaStakingContract, setSepoliaStakingContract] =
    useState<ethers.Contract | null>(null);

  const [usdtContract, setUsdtContract] = useState<ethers.Contract | null>(
    null,
  );
  const [usdcContract, setUsdcContract] = useState<ethers.Contract | null>(
    null,
  );
  const [chainId, setChainId] = useState<Number | null>(null);
  const [myProvider, setMyProvider] = useState<any | null>(null);
  const [mySigner, setMySigner] = useState<any | null>(null);
  const [activeAccount, setActiveAccount] = useState<ConnectedWallet | null>(
    null,
  );
  const [chainType, setChainType] = useState<ChainTypes>("unknown");

  useQuery({
    queryKey: [
      "setting-account",
      wallets?.at(0)?.address,
      wallets?.at(0)?.chainId,
    ],
    queryFn: async () => {
      if (!ready) throw Error("Privy is not ready");
      if (!authenticated) throw Error("Privy is not authenticated");
      const currentUserWallet = wallets?.at(0);
      if (!currentUserWallet) throw Error("user wallet is not connected");
      setActiveAccount(wallets?.at(0)!);

      if (currentUserWallet.chainId.endsWith("11155111")) {
        setChainType("sepolia");
      } else if (currentUserWallet.chainId.endsWith("80002")) {
        setChainType("amoy");
      } else if (currentUserWallet.chainId.endsWith("97")) {
        setChainType("bsc");
      } else if (currentUserWallet.chainId.endsWith("1")) {
        setChainType("ethereum");
      } else {
        setChainType("unknown");
      }
      return true;
    },
  });

  useQuery({
    queryKey: [
      "setting-provider-for-address",
      activeAccount?.address,
      wallets?.at(0)?.address,
      "-with-chain",
      activeAccount?.chainId,
      wallets?.at(0)?.chainId,
    ],
    queryFn: async () => {
      if (!activeAccount?.address) throw Error("address not provided");
      if (!activeAccount?.chainId) throw Error("chain id not provided");
      if (typeof window.ethereum !== "undefined") {
        const eth = window?.ethereum;

        const provider = new ethers.BrowserProvider(eth);

        // const provider = await activeAccount?.getEthersProvider();
        const { chainId } = await provider.getNetwork();
        if (chainId) {
          const chainIdNumber: Number = Number(chainId);
          setChainId(chainIdNumber);
        }
        setMyProvider(provider);
        const signer = await provider.getSigner();
        setMySigner(signer);
        return true;
      } else {
        throw Error("unable to setup provider");
      }
    },
  });

  useQuery({
    queryKey: [
      "setting-contracts-for-signer-",
      myProvider,
      "-with-provider",
      mySigner,
      wallets?.at(0)?.address,
      wallets?.at(0)?.chainId,
    ],
    queryFn: async () => {
      if (!myProvider) throw Error("Provider not set");
      if (!mySigner) throw Error("Signer not set");
      if (!chainType) throw Error("Chain Type not set");

      const chainMeta = getChainDetailsByChainName(chainType);
      if (!chainMeta) throw Error("Chain Metadata not set");

      if (chainMeta.trinityFactoryAddress != "") {
        const tFactoryContractInstance = new ethers.Contract(
          chainMeta.trinityFactoryAddress as string,
          trinityFactory?.abi,
          mySigner,
        );
        setTrinityFactoryContract(tFactoryContractInstance);
      }

      if (chainMeta.trinityFactoryExtensionAddress != "") {
        const triFacExtInstance = new ethers.Contract(
          chainMeta.trinityFactoryExtensionAddress as string,
          trinityFactoryExtension.abi,
          mySigner,
        );
        setTriFactoryExtContract(triFacExtInstance);
      }

      const triICOInstance = new ethers.Contract(
        trinityICOContractAddress,
        trinityICOABI.abi,
        mySigner,
      );
      setTrinityICOContract(triICOInstance);

      const sepoliaStakingICOInstance = new ethers.Contract(
        sepoliaStakeContractAddress,
        stakeABI.abi,
        mySigner,
      );
      setSepoliaStakingContract(sepoliaStakingICOInstance);

      const dynamicLaunchpad = new ethers.Contract(
        makeItDynamicLaunchpad,
        trinityPad.abi,
        mySigner,
      );
      setTrinityPadContract(dynamicLaunchpad);

      if (USDT_DEPLOYMENTS?.[Number(chainId)]) {
        const triUSDInstance = new ethers.Contract(
          USDT_DEPLOYMENTS?.[Number(chainId)],
          TrinityERC20.abi,
          mySigner,
        );
        setUsdtContract(triUSDInstance);
      }

      if (USDC_DEPLOYMENTS?.[Number(chainId)]) {
        const triUSDInstance = new ethers.Contract(
          USDC_DEPLOYMENTS?.[Number(chainId)],
          TrinityERC20.abi,
          mySigner,
        );
        setUsdcContract(triUSDInstance);
      }
      return true;
    },
  });

  return (
    <ContractsContext.Provider
      value={{
        myProvider,
        chainId,
        mySigner,
        trinityFactoryContract,
        trinityPadContract,
        triFactoryExtContract,
        trinityICOContract,
        sepoliaStakingContract,
        usdtContract,
        usdcContract,
        setActiveAccount,
        activeAccount,
        chainType,
        setChainType,
        sepoliaStakeContractAddress,
      }}
    >
      {children}
    </ContractsContext.Provider>
  );
};

export const ContractStatesContext = () => {
  const context = useContext(ContractsContext);
  if (context === undefined) {
    throw new Error(
      "Contract Context must be used within a Contract Context Provider",
    );
  }
  return context;
};
