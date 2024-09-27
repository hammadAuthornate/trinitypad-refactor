export const iTrinityPad = {
  _format: "hh-sol-artifact-1",
  contractName: "ITrinityPad",
  sourceName: "contracts/pad/ITrinityPad.sol",
  abi: [
    {
      inputs: [],
      name: "AccessForbidden",
      type: "error",
    },
    {
      inputs: [],
      name: "CampaignExpired",
      type: "error",
    },
    {
      inputs: [],
      name: "CampaignInactive",
      type: "error",
    },
    {
      inputs: [],
      name: "CampaignNotCancelled",
      type: "error",
    },
    {
      inputs: [],
      name: "CampaignNotClosed",
      type: "error",
    },
    {
      inputs: [],
      name: "CannotWithdrawRaisingCurrency",
      type: "error",
    },
    {
      inputs: [],
      name: "EtherNotAccepted",
      type: "error",
    },
    {
      inputs: [],
      name: "ExceedingRaiseGoal",
      type: "error",
    },
    {
      inputs: [],
      name: "InsufficientInvestment",
      type: "error",
    },
    {
      inputs: [],
      name: "NotInvestor",
      type: "error",
    },
    {
      inputs: [],
      name: "PullingNotAllowed",
      type: "error",
    },
    {
      inputs: [],
      name: "TransferFailed",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "investor",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "InvestmentMade",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "investor",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "InvestmentPulled",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "timestamp",
          type: "uint256",
        },
      ],
      name: "LaunchpadCancelled",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "vesting",
          type: "address",
        },
      ],
      name: "LaunchpadClosed",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "msgsender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "RefundClaimed",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "tokenAddress",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "receiver",
          type: "address",
        },
      ],
      name: "TokenRecovered",
      type: "event",
    },
    {
      inputs: [],
      name: "cancelLaunchpad",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "claimRefund",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "claimTokenAllocation",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "invest",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "pullInvestment",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  bytecode: "0x",
  deployedBytecode: "0x",
  linkReferences: {},
  deployedLinkReferences: {},
};
