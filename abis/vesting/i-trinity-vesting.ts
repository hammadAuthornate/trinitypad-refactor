export const iTrinityVesting = {
  _format: "hh-sol-artifact-1",
  contractName: "ITrinityVesting",
  sourceName: "contracts/vesting/ITrinityVesting.sol",
  abi: [
    {
      inputs: [
        {
          internalType: "address",
          name: "beneficiary",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "allocation",
          type: "uint256",
        },
      ],
      name: "allocate",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "claimDUEL",
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
      name: "withdrawToken",
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
