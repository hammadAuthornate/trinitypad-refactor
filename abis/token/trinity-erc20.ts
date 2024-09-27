export const TrinityERC20 = {
  _format: "hh-sol-artifact-1",
  contractName: "TrinityERC20",
  sourceName: "contracts/token/TrinityERC20.sol",
  abi: [
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          internalType: "string",
          name: "symbol",
          type: "string",
        },
        {
          internalType: "address",
          name: "_lzEndpoint",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "target",
          type: "address",
        },
      ],
      name: "AddressEmptyCode",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "AddressInsufficientBalance",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "allowance",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "needed",
          type: "uint256",
        },
      ],
      name: "ERC20InsufficientAllowance",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "balance",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "needed",
          type: "uint256",
        },
      ],
      name: "ERC20InsufficientBalance",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "approver",
          type: "address",
        },
      ],
      name: "ERC20InvalidApprover",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "receiver",
          type: "address",
        },
      ],
      name: "ERC20InvalidReceiver",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "ERC20InvalidSender",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
      ],
      name: "ERC20InvalidSpender",
      type: "error",
    },
    {
      inputs: [],
      name: "FailedInnerCall",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidDelegate",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidEndpointCall",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidLocalDecimals",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "options",
          type: "bytes",
        },
      ],
      name: "InvalidOptions",
      type: "error",
    },
    {
      inputs: [],
      name: "LzTokenUnavailable",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint32",
          name: "eid",
          type: "uint32",
        },
      ],
      name: "NoPeer",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "msgValue",
          type: "uint256",
        },
      ],
      name: "NotEnoughNative",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "addr",
          type: "address",
        },
      ],
      name: "OnlyEndpoint",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint32",
          name: "eid",
          type: "uint32",
        },
        {
          internalType: "bytes32",
          name: "sender",
          type: "bytes32",
        },
      ],
      name: "OnlyPeer",
      type: "error",
    },
    {
      inputs: [],
      name: "OnlySelf",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "OwnableInvalidOwner",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "OwnableUnauthorizedAccount",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
      ],
      name: "SafeERC20FailedOperation",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "result",
          type: "bytes",
        },
      ],
      name: "SimulationResult",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amountLD",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "minAmountLD",
          type: "uint256",
        },
      ],
      name: "SlippageExceeded",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          components: [
            {
              internalType: "uint32",
              name: "eid",
              type: "uint32",
            },
            {
              internalType: "uint16",
              name: "msgType",
              type: "uint16",
            },
            {
              internalType: "bytes",
              name: "options",
              type: "bytes",
            },
          ],
          indexed: false,
          internalType: "struct EnforcedOptionParam[]",
          name: "_enforcedOptions",
          type: "tuple[]",
        },
      ],
      name: "EnforcedOptionSet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "inspector",
          type: "address",
        },
      ],
      name: "MsgInspectorSet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "guid",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "uint32",
          name: "srcEid",
          type: "uint32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "toAddress",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amountReceivedLD",
          type: "uint256",
        },
      ],
      name: "OFTReceived",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "guid",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "uint32",
          name: "dstEid",
          type: "uint32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "fromAddress",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amountSentLD",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amountReceivedLD",
          type: "uint256",
        },
      ],
      name: "OFTSent",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint32",
          name: "eid",
          type: "uint32",
        },
        {
          indexed: false,
          internalType: "bytes32",
          name: "peer",
          type: "bytes32",
        },
      ],
      name: "PeerSet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "preCrimeAddress",
          type: "address",
        },
      ],
      name: "PreCrimeSet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [],
      name: "SEND",
      outputs: [
        {
          internalType: "uint16",
          name: "",
          type: "uint16",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "SEND_AND_CALL",
      outputs: [
        {
          internalType: "uint16",
          name: "",
          type: "uint16",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint32",
              name: "srcEid",
              type: "uint32",
            },
            {
              internalType: "bytes32",
              name: "sender",
              type: "bytes32",
            },
            {
              internalType: "uint64",
              name: "nonce",
              type: "uint64",
            },
          ],
          internalType: "struct Origin",
          name: "origin",
          type: "tuple",
        },
      ],
      name: "allowInitializePath",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
      ],
      name: "allowance",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "approvalRequired",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint32",
          name: "_eid",
          type: "uint32",
        },
        {
          internalType: "uint16",
          name: "_msgType",
          type: "uint16",
        },
        {
          internalType: "bytes",
          name: "_extraOptions",
          type: "bytes",
        },
      ],
      name: "combineOptions",
      outputs: [
        {
          internalType: "bytes",
          name: "",
          type: "bytes",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "decimalConversionRate",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "endpoint",
      outputs: [
        {
          internalType: "contract ILayerZeroEndpointV2",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint32",
          name: "eid",
          type: "uint32",
        },
        {
          internalType: "uint16",
          name: "msgType",
          type: "uint16",
        },
      ],
      name: "enforcedOptions",
      outputs: [
        {
          internalType: "bytes",
          name: "enforcedOption",
          type: "bytes",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "circulatingSupply",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "vestedSupply",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "vestingContract",
          type: "address",
        },
      ],
      name: "initialize",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint32",
              name: "srcEid",
              type: "uint32",
            },
            {
              internalType: "bytes32",
              name: "sender",
              type: "bytes32",
            },
            {
              internalType: "uint64",
              name: "nonce",
              type: "uint64",
            },
          ],
          internalType: "struct Origin",
          name: "",
          type: "tuple",
        },
        {
          internalType: "bytes",
          name: "",
          type: "bytes",
        },
        {
          internalType: "address",
          name: "_sender",
          type: "address",
        },
      ],
      name: "isComposeMsgSender",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint32",
          name: "_eid",
          type: "uint32",
        },
        {
          internalType: "bytes32",
          name: "_peer",
          type: "bytes32",
        },
      ],
      name: "isPeer",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint32",
              name: "srcEid",
              type: "uint32",
            },
            {
              internalType: "bytes32",
              name: "sender",
              type: "bytes32",
            },
            {
              internalType: "uint64",
              name: "nonce",
              type: "uint64",
            },
          ],
          internalType: "struct Origin",
          name: "_origin",
          type: "tuple",
        },
        {
          internalType: "bytes32",
          name: "_guid",
          type: "bytes32",
        },
        {
          internalType: "bytes",
          name: "_message",
          type: "bytes",
        },
        {
          internalType: "address",
          name: "_executor",
          type: "address",
        },
        {
          internalType: "bytes",
          name: "_extraData",
          type: "bytes",
        },
      ],
      name: "lzReceive",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              components: [
                {
                  internalType: "uint32",
                  name: "srcEid",
                  type: "uint32",
                },
                {
                  internalType: "bytes32",
                  name: "sender",
                  type: "bytes32",
                },
                {
                  internalType: "uint64",
                  name: "nonce",
                  type: "uint64",
                },
              ],
              internalType: "struct Origin",
              name: "origin",
              type: "tuple",
            },
            {
              internalType: "uint32",
              name: "dstEid",
              type: "uint32",
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "guid",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "executor",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "message",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "extraData",
              type: "bytes",
            },
          ],
          internalType: "struct InboundPacket[]",
          name: "_packets",
          type: "tuple[]",
        },
      ],
      name: "lzReceiveAndRevert",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint32",
              name: "srcEid",
              type: "uint32",
            },
            {
              internalType: "bytes32",
              name: "sender",
              type: "bytes32",
            },
            {
              internalType: "uint64",
              name: "nonce",
              type: "uint64",
            },
          ],
          internalType: "struct Origin",
          name: "_origin",
          type: "tuple",
        },
        {
          internalType: "bytes32",
          name: "_guid",
          type: "bytes32",
        },
        {
          internalType: "bytes",
          name: "_message",
          type: "bytes",
        },
        {
          internalType: "address",
          name: "_executor",
          type: "address",
        },
        {
          internalType: "bytes",
          name: "_extraData",
          type: "bytes",
        },
      ],
      name: "lzReceiveSimulate",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "msgInspector",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint32",
          name: "",
          type: "uint32",
        },
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      name: "nextNonce",
      outputs: [
        {
          internalType: "uint64",
          name: "nonce",
          type: "uint64",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "oApp",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "oAppVersion",
      outputs: [
        {
          internalType: "uint64",
          name: "senderVersion",
          type: "uint64",
        },
        {
          internalType: "uint64",
          name: "receiverVersion",
          type: "uint64",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [],
      name: "oftVersion",
      outputs: [
        {
          internalType: "bytes4",
          name: "interfaceId",
          type: "bytes4",
        },
        {
          internalType: "uint64",
          name: "version",
          type: "uint64",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint32",
          name: "eid",
          type: "uint32",
        },
      ],
      name: "peers",
      outputs: [
        {
          internalType: "bytes32",
          name: "peer",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "preCrime",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint32",
              name: "dstEid",
              type: "uint32",
            },
            {
              internalType: "bytes32",
              name: "to",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "amountLD",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "minAmountLD",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "extraOptions",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "composeMsg",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "oftCmd",
              type: "bytes",
            },
          ],
          internalType: "struct SendParam",
          name: "_sendParam",
          type: "tuple",
        },
      ],
      name: "quoteOFT",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "minAmountLD",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "maxAmountLD",
              type: "uint256",
            },
          ],
          internalType: "struct OFTLimit",
          name: "oftLimit",
          type: "tuple",
        },
        {
          components: [
            {
              internalType: "int256",
              name: "feeAmountLD",
              type: "int256",
            },
            {
              internalType: "string",
              name: "description",
              type: "string",
            },
          ],
          internalType: "struct OFTFeeDetail[]",
          name: "oftFeeDetails",
          type: "tuple[]",
        },
        {
          components: [
            {
              internalType: "uint256",
              name: "amountSentLD",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountReceivedLD",
              type: "uint256",
            },
          ],
          internalType: "struct OFTReceipt",
          name: "oftReceipt",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint32",
              name: "dstEid",
              type: "uint32",
            },
            {
              internalType: "bytes32",
              name: "to",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "amountLD",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "minAmountLD",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "extraOptions",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "composeMsg",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "oftCmd",
              type: "bytes",
            },
          ],
          internalType: "struct SendParam",
          name: "_sendParam",
          type: "tuple",
        },
        {
          internalType: "bool",
          name: "_payInLzToken",
          type: "bool",
        },
      ],
      name: "quoteSend",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "nativeFee",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "lzTokenFee",
              type: "uint256",
            },
          ],
          internalType: "struct MessagingFee",
          name: "msgFee",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint32",
              name: "dstEid",
              type: "uint32",
            },
            {
              internalType: "bytes32",
              name: "to",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "amountLD",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "minAmountLD",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "extraOptions",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "composeMsg",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "oftCmd",
              type: "bytes",
            },
          ],
          internalType: "struct SendParam",
          name: "_sendParam",
          type: "tuple",
        },
        {
          components: [
            {
              internalType: "uint256",
              name: "nativeFee",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "lzTokenFee",
              type: "uint256",
            },
          ],
          internalType: "struct MessagingFee",
          name: "_fee",
          type: "tuple",
        },
        {
          internalType: "address",
          name: "_refundAddress",
          type: "address",
        },
      ],
      name: "send",
      outputs: [
        {
          components: [
            {
              internalType: "bytes32",
              name: "guid",
              type: "bytes32",
            },
            {
              internalType: "uint64",
              name: "nonce",
              type: "uint64",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "nativeFee",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "lzTokenFee",
                  type: "uint256",
                },
              ],
              internalType: "struct MessagingFee",
              name: "fee",
              type: "tuple",
            },
          ],
          internalType: "struct MessagingReceipt",
          name: "msgReceipt",
          type: "tuple",
        },
        {
          components: [
            {
              internalType: "uint256",
              name: "amountSentLD",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountReceivedLD",
              type: "uint256",
            },
          ],
          internalType: "struct OFTReceipt",
          name: "oftReceipt",
          type: "tuple",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_delegate",
          type: "address",
        },
      ],
      name: "setDelegate",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint32",
              name: "eid",
              type: "uint32",
            },
            {
              internalType: "uint16",
              name: "msgType",
              type: "uint16",
            },
            {
              internalType: "bytes",
              name: "options",
              type: "bytes",
            },
          ],
          internalType: "struct EnforcedOptionParam[]",
          name: "_enforcedOptions",
          type: "tuple[]",
        },
      ],
      name: "setEnforcedOptions",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_msgInspector",
          type: "address",
        },
      ],
      name: "setMsgInspector",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint32",
          name: "_eid",
          type: "uint32",
        },
        {
          internalType: "bytes32",
          name: "_peer",
          type: "bytes32",
        },
      ],
      name: "setPeer",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_preCrime",
          type: "address",
        },
      ],
      name: "setPreCrime",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "sharedDecimals",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "token",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  bytecode:
    "0x60c0604090808252346200047a5760006200318480380380916200002482866200047f565b8439820160808382031262000476576200003e83620004b9565b60208481015190946001600160401b039492909185811162000456578462000068918401620004ce565b938783015186811162000472576200008962000091926060928601620004ce565b9301620004b9565b6001600160a01b03918216919082156200045a5784546001600160a01b0319811684178655839083167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08780a31680608052803b1562000456578390818951809263ca5eb5e160e01b8252600495868301528160249889925af180156200044c5762000429575b509064e8d4a5100060a0528451938685116200033457600854946001968787811c971680156200041e575b8a8810146200040c578190601f97888111620003b8575b508a908883116001146200035157869262000345575b5050600019600383901b1c191690871b176008555b83519687116200033457600954918683811c9316801562000329575b8984101462000318575050838111620002cf575b5085928511600114620002665793945084929190836200025a575b50501b916000199060031b1c1916176009555b60ff19600a5416600a5551612c3f90816200054582396080518181816106fb01528181610bbd01528181610ee8015281816117b6015281816118c4015281816126b901526129ea015260a051818181610b070152818161117b0152818161166b01528181611ef60152818161210c01526127c10152f35b015192503880620001d0565b6009815285812093958591601f198316915b88838310620002b457505050106200029a575b505050811b01600955620001e3565b015160001960f88460031b161c191690553880806200028b565b85870151885590960195948501948793509081019062000278565b600982528682208480880160051c8201928989106200030e575b0160051c019085905b82811062000302575050620001b5565b838155018590620002f2565b92508192620002e9565b634e487b7160e01b84526022905282fd5b92607f1692620001a1565b634e487b7160e01b83526041825282fd5b01519050388062000170565b600887528b87208a94509190601f198416888e5b828210620003a0575050841162000386575b505050811b0160085562000185565b015160001960f88460031b161c1916905538808062000377565b8385015186558d979095019493840193018e62000365565b909150600886528a86208880850160051c8201928d861062000402575b918b91869594930160051c01915b828110620003f35750506200015a565b8881558594508b9101620003e3565b92508192620003d5565b634e487b7160e01b8552602284528285fd5b96607f169662000143565b8681116200043a5788523862000118565b5060418492634e487b7160e01b835252fd5b89513d84823e3d90fd5b8380fd5b8851631e4fbdf760e01b815260048101869052602490fd5b8480fd5b5080fd5b600080fd5b601f909101601f19168101906001600160401b03821190821017620004a357604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036200047a57565b919080601f840112156200047a5782516001600160401b038111620004a357602090604051926200050983601f19601f85011601856200047f565b8184528282870101116200047a5760005b8181106200053057508260009394955001015290565b85810183015184820184015282016200051a56fe6080604052600436101561001257600080fd5b60003560e01c806306fdde03146102c2578063095ea7b3146102bd5780630d35b415146102b8578063111ecdad146102b357806313137d65146102ae578063134d4f25146102a9578063156a0d0f146102a457806317442b701461029f57806318160ddd1461029a5780631f5e13341461029557806323b872dd14610290578063313ce5671461028b5780633400288b146102865780633b6f743b1461028157806352ae2879146101fa5780635535d4611461027c5780635a0dfe4d146102775780635e280f11146102725780636fc1b31e1461026d57806370a0823114610268578063715018a6146102635780637d25a05e1461025e57806382413eac14610259578063857749b0146102545780638da5cb5b1461024f57806395d89b411461024a578063963efcaa146102455780639e3d87cd146102405780639f68b9641461023b578063a9059cbb14610236578063b731ea0a14610231578063b98bd0701461022c578063bb0b6a5314610227578063bc70b35414610222578063bd815db01461021d578063c7c7f5b314610218578063ca5eb5e114610213578063d045a0dc1461020e578063d424388514610209578063dd62ed3e14610204578063f2fde38b146101ff578063fc0c546a146101fa5763ff7bd03d146101f557600080fd5b611a84565b610c51565b611a2e565b6119db565b61196b565b61181e565b611785565b6115ff565b611484565b611430565b6113f5565b61131a565b6112a4565b61126f565b611253565b61119e565b611163565b6110d7565b6110ae565b611092565b611034565b61100d565b610fc4565b610f87565b610f17565b610ed2565b610e9d565b610e2c565b610aaa565b610a1c565b6109f2565b61094c565b610930565b610912565b6108f0565b6108c9565b6108ad565b6106e0565b610613565b61056d565b610406565b610333565b60009103126102d257565b600080fd5b60005b8381106102ea5750506000910152565b81810151838201526020016102da565b90602091610313815180928185528580860191016102d7565b601f01601f1916010190565b9060206103309281815201906102fa565b90565b346102d2576000806003193601126103f2576040518160085461035581610c9f565b908184526020926001916001811690816000146103d05750600114610395575b6103918561038581890382610e09565b6040519182918261031f565b0390f35b929450600883528483205b8284106103bd575050508161039193610385928201019338610375565b80548585018701529285019281016103a0565b60ff191686860152505050151560051b82010191506103858161039138610375565b80fd5b6001600160a01b038116036102d257565b346102d25760403660031901126102d257600435610423816103f5565b60243533156104a1576001600160a01b03821691821561048857610450829161044b33611b4e565b611b82565b556040519081527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560203392a3602060405160018152f35b604051634a1406b160e11b815260006004820152602490fd5b60405163e602df0560e01b815260006004820152602490fd5b908160e09103126102d25790565b60208091805184520151910152565b9392916104e88560a08101936104c8565b60409160a06040870152815180915260c086019160c08260051b880101936020809201936000915b84831061052e5750505050505090606061052c929401906104c8565b565b909192939495848061055d6001938d60bf1990820301875285838c5180518452015191818582015201906102fa565b9801930193019194939290610510565b346102d25760203660031901126102d2576001600160401b036004358181116102d25761059e9036906004016104ba565b906105a7611ae4565b506105b0611ae4565b50604051906105be82610d85565b6000825260208201526103916105f7604051936105da85610dd3565b600085526105e781611b14565b5060406060820135910135611eed565b6105ff611aca565b9182526020820152604051938493846104d7565b346102d25760003660031901126102d2576004546040516001600160a01b039091168152602090f35b60609060031901126102d257600490565b9181601f840112156102d2578235916001600160401b0383116102d257602083818601950101116102d257565b600319810160e081126102d2576060136102d257600491606435916001600160401b03906084358281116102d257816106b59160040161064d565b9390939260a4356106c5816103f5565b9260c4359182116102d2576106dc9160040161064d565b9091565b6106e93661067a565b50929492506001600160a01b039190507f0000000000000000000000000000000000000000000000000000000000000000821633810361089557833561072e81610a0e565b61073781611f47565b90602086013580920361086c57505061075f610753838861279d565b6001600160a01b031690565b91610785610775610770838a6127a9565b6127bb565b61077e87611b14565b50846127ef565b8097602883116107c3575b505050506107be6107af600080516020612baa83398151915294611b14565b95604051938493169683611b1e565b0390a3005b906107ee92916107e86107d860408a01611f7f565b936107e28a611b14565b92612813565b9261282f565b90803b156102d257604051633e5ac80960e11b815291600091839182908490829061081e908c8a60048501611f89565b03925af1801561086757600080516020612baa833981519152946107be926107af9261084e575b88919650610790565b8061085b61086192610dc0565b806102c7565b38610845565b611e13565b61087581610a0e565b61089160405192839263309afaf360e21b845260048401611b1e565b0390fd5b6040516391ac5e4f60e01b8152336004820152602490fd5b346102d25760003660031901126102d257602060405160028152f35b346102d25760003660031901126102d2576040805162b9270b60e21b815260016020820152f35b346102d25760003660031901126102d257604080516001815260026020820152f35b346102d25760003660031901126102d2576020600754604051908152f35b346102d25760003660031901126102d257602060405160018152f35b346102d25760603660031901126102d257600435610969816103f5565b602435610975816103f5565b6044359060018060a01b0383166000526006602052610998336040600020611b82565b5492600184016109b9575b6109ad9350611fd2565b60405160018152602090f35b8284106109d5576109d0836109ad9503338361272d565b6109a3565b604051637dc7a0d960e11b81528061089185873360048501611fb4565b346102d25760003660031901126102d257602060405160128152f35b63ffffffff8116036102d257565b346102d25760403660031901126102d2577f238399d427b947898edb290f5ff0f9109849b1c3ba196a42e35f00c50a54b98b600435610a5a81610a0e565b60243590610a66612095565b63ffffffff8116600052600160205281604060002055610a8b60405192839283611b1e565b0390a1005b801515036102d257565b60408101929161052c91906104c8565b346102d2576040806003193601126102d2576004356001600160401b0381116102d257610adb9036906004016104ba565b90602435610ae881610a90565b610af0611ae4565b506060830135833593610b0285610a0e565b610b387f0000000000000000000000000000000000000000000000000000000000000000610b33818785013561276a565b61278a565b91808310610c3457508392610b54610bb99693610b9e936120fb565b90610b5e85610a0e565b610b66611ae4565b50610b7085611f47565b610b87610b7b611ad7565b63ffffffff9097168752565b602086015285850152606084015215156080830152565b815180948192631bb8518b60e31b8352309060048401612246565b03817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa9081156108675761039192600092610c05575b505191829182610a9a565b81610c269293503d8411610c2d575b610c1e8183610e09565b810190612232565b9038610bfa565b503d610c14565b826044918651916371c4efed60e01b835260048301526024820152fd5b346102d25760003660031901126102d2576020604051308152f35b6024359061ffff821682036102d257565b359061ffff821682036102d257565b9061ffff16600052602052604060002090565b90600182811c92168015610ccf575b6020831014610cb957565b634e487b7160e01b600052602260045260246000fd5b91607f1691610cae565b805460009392610ce882610c9f565b91828252602093600191600181169081600014610d505750600114610d0f575b5050505050565b90939495506000929192528360002092846000945b838610610d3c57505050500101903880808080610d08565b805485870183015294019385908201610d24565b60ff19168685015250505090151560051b010191503880808080610d08565b634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610da057604052565b610d6f565b606081019081106001600160401b03821117610da057604052565b6001600160401b038111610da057604052565b602081019081106001600160401b03821117610da057604052565b60a081019081106001600160401b03821117610da057604052565b601f909101601f19168101906001600160401b03821190821017610da057604052565b346102d25760403660031901126102d257610391610e82610e89610e76600435610e5581610a0e565b63ffffffff610e62610c6c565b911660005260036020526040600020610c8c565b60405192838092610cd9565b0382610e09565b6040519182916020835260208301906102fa565b346102d25760403660031901126102d2576020610ec8600435610ebf81610a0e565b60243590611b36565b6040519015158152f35b346102d25760003660031901126102d2576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b346102d25760203660031901126102d2577ff0be4f1e87349231d80c36b33f9e8639658eeaf474014dee15a3e6a4d44141976020600435610f57816103f5565b610f5f612095565b600480546001600160a01b0319166001600160a01b03929092169182179055604051908152a1005b346102d25760203660031901126102d257600435610fa4816103f5565b60018060a01b031660005260056020526020604060002054604051908152f35b346102d2576000806003193601126103f257610fde612095565b80546001600160a01b03198116825581906001600160a01b0316600080516020612bca8339815191528280a380f35b346102d25760403660031901126102d257611029600435610a0e565b602060405160008152f35b346102d25760a03660031901126102d25761104e3661063c565b506064356001600160401b0381116102d25761106e90369060040161064d565b5050602060843561107e816103f5565b6040516001600160a01b0390911630148152f35b346102d25760003660031901126102d257602060405160068152f35b346102d25760003660031901126102d2576000546040516001600160a01b039091168152602090f35b346102d2576000806003193601126103f257604051816009546110f981610c9f565b908184526020926001916001811690816000146103d05750600114611128576103918561038581890382610e09565b929450600983528483205b828410611150575050508161039193610385928201019338610375565b8054858501870152928501928101611133565b346102d25760003660031901126102d25760206040517f00000000000000000000000000000000000000000000000000000000000000008152f35b346102d25760803660031901126102d2576004356111bb816103f5565b604435906064356111cb816103f5565b6111d3612095565b600a549260ff84166112185760016112069460ff191617600a5580611208575b5050611201602435826122e9565b611ecd565b005b611211916122e9565b38806111f3565b60405162461bcd60e51b815260206004820152601360248201527243414e4e4f545f5245494e495449414c495a4560681b6044820152606490fd5b346102d25760003660031901126102d257602060405160008152f35b346102d25760403660031901126102d25761129960043561128f816103f5565b6024359033611fd2565b602060405160018152f35b346102d25760003660031901126102d2576002546040516001600160a01b039091168152602090f35b9060206003198301126102d2576001600160401b0391600435908382116102d257806023830112156102d25781600401359384116102d25760248460051b830101116102d2576024019190565b346102d257611328366112cd565b90611331612095565b61133a82611afd565b90604061134a6040519384610e09565b8383526020938484019060051b8301923684116102d25780915b8483106113745761120686612508565b6001600160401b039083358281116102d2578301916060833603126102d25785519261139f84610da5565b80356113aa81610a0e565b84526113b78a8201610c7d565b8a850152868101359182116102d257019036601f830112156102d25788926113e6849336908581359101611bb4565b87820152815201920191611364565b346102d25760203660031901126102d25763ffffffff60043561141781610a0e565b1660005260016020526020604060002054604051908152f35b346102d25760603660031901126102d25760043561144d81610a0e565b611455610c6c565b604435906001600160401b0382116102d2576103919261147c610e8993369060040161064d565b929091611c76565b61148d366112cd565b60005b8181106114fc57604051638e9e709960e01b8152600081600481335afa801561086757610891916000916114d9575b50604051638351eea760e01b81529182916004830161031f565b6114f691503d806000833e6114ee8183610e09565b810190611e1f565b826114bf565b611507818385611d24565b9061152661152261151784611b14565b602085013590611b36565b1590565b6115bb57611538610100830183611d4c565b9261154560e08201611d7e565b90611554610120820182611d4c565b959095303b156102d25760009461158a60c092604051998a9788968795633411683760e21b875260a08a01358a60048901611d99565b03920135305af1918215610867576001926115a8575b505b01611490565b8061085b6115b592610dc0565b386115a0565b600191506115a2565b91608061052c9294936115f8604060c083019780518452600180831b036020820151166020850152015160408301906104c8565b01906104c8565b60803660031901126102d2576004356001600160401b0381116102d25761162a9036906004016104ba565b6040806023193601126102d25760643590611644826103f5565b61164c611e7d565b50611655611ae4565b506060830135916116668435610a0e565b6116977f0000000000000000000000000000000000000000000000000000000000000000610b33818588013561276a565b928084106117685750331561175057906116db610391926116b88533612889565b6116c285876120fb565b6116cb88611b14565b916116d536611ea5565b9261263c565b926116e4611aca565b948186528160208701527f85496b760a4b7f8d66384b9df21b381f5d1b1e79f229a47aaf4c232edc2fe59a61174361171d875193611b14565b9385519181839233978460409194939263ffffffff606083019616825260208201520152565b0390a351928392836115c4565b8151634b637e8f60e11b815260006004820152602490fd5b836044918451916371c4efed60e01b835260048301526024820152fd5b346102d257600060203660031901126103f2576004356117a4816103f5565b6117ac612095565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811691839190833b1561181a5760249083604051958694859363ca5eb5e160e01b85521660048401525af180156108675761180e575080f35b61181790610dc0565b80f35b8280fd5b6118273661067a565b505050929030330361195957611840610753858361279d565b9361186161185161077083856127a9565b61185a85611b14565b50866127ef565b91602882116118a2575b5050611885600080516020612baa83398151915292611b14565b6040516001600160a01b03909516949182916107be919083611b1e565b90826118c1926107e86118b760408801611f7f565b936107e288611b14565b917f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316803b156102d257604051633e5ac80960e11b815293600091859182908490829061191b908b8d60048501611f89565b03925af190811561086757600080516020612baa8339815191529361188592611946575b509261186b565b8061085b61195392610dc0565b3861193f565b60405163029a949d60e31b8152600490fd5b346102d25760203660031901126102d2577fd48d879cef83a1c0bdda516f27b13ddb1b3f8bbac1c9e1511bb2a659c242776060206004356119ab816103f5565b6119b3612095565b600280546001600160a01b0319166001600160a01b03929092169182179055604051908152a1005b346102d25760403660031901126102d2576020611a256004356119fd816103f5565b60243590611a0a826103f5565b6001600160a01b031660009081526006845260409020611b82565b54604051908152f35b346102d25760203660031901126102d257600435611a4b816103f5565b611a53612095565b6001600160a01b03811615611a6b57611206906122b4565b604051631e4fbdf760e01b815260006004820152602490fd5b346102d25760603660031901126102d2576020611aa03661063c565b63ffffffff8135611ab081610a0e565b166000526001825260406000205482604051920135148152f35b6040519061052c82610d85565b6040519061052c82610dee565b60405190611af182610d85565b60006020838281520152565b6001600160401b038111610da05760051b60200190565b3561033081610a0e565b6020909392919363ffffffff60408201951681520152565b63ffffffff1660005260016020526040600020541490565b6001600160a01b0316600090815260066020526040902090565b6001600160a01b0316600090815260056020526040902090565b9060018060a01b0316600052602052604060002090565b6001600160401b038111610da057601f01601f191660200190565b929192611bc082611b99565b91611bce6040519384610e09565b8294818452818301116102d2578281602093846000960137010152565b90929192836002116102d25783116102d257600201916001190190565b6020908361052c939594956040519683611c2b89955180928880890191016102d7565b8401918583013701600083820152038085520183610e09565b908060209392818452848401376000828201840152601f01601f1916010190565b916020610330938181520191611c44565b610e76610e829263ffffffff611c9d93979596971660005260036020526040600020610c8c565b805115611d00578315611cfa576002841015611cd1575050610891604051928392639a6d49cd60e01b845260048401611c65565b909280611cf49161033094611cef611cea368484611bb4565b6125c2565b611beb565b91611c08565b92509050565b509190610330913691611bb4565b634e487b7160e01b600052603260045260246000fd5b9190811015611d475760051b8101359061013e19813603018212156102d2570190565b611d0e565b903590601e19813603018212156102d257018035906001600160401b0382116102d2576020019181360383136102d257565b35610330816103f5565b6001600160401b038116036102d257565b929093611df59260406103309997989663ffffffff8135611db981610a0e565b168752602081013560208801520135611dd181611d88565b6001600160401b03166040860152606085015260e060808501819052840191611c44565b6001600160a01b0390941660a082015280840360c090910152611c44565b6040513d6000823e3d90fd5b6020818303126102d2578051906001600160401b0382116102d2570181601f820112156102d2578051611e5181611b99565b92611e5f6040519485610e09565b818452602082840101116102d25761033091602080850191016102d7565b60405190611e8a82610da5565b8160008152600060208201526040611ea0611ae4565b910152565b60409060231901126102d25760405190611ebe82610d85565b60243582526044356020830152565b611ed5612095565b6001600160a01b03811615611a6b5761052c906122b4565b611f1c90610b337f0000000000000000000000000000000000000000000000000000000000000000809261276a565b918291808410611f295750565b83604491604051916371c4efed60e01b835260048301526024820152fd5b63ffffffff16806000526001602052604060002054908115611f67575090565b6024906040519063f6ff4fb760e01b82526004820152fd5b3561033081611d88565b610330939260809260018060a01b0316825260208201526000604082015281606082015201906102fa565b604091949392606082019560018060a01b0316825260208201520152565b916001600160a01b038084169290831561207c57811693841561206357611ff881611b68565b5483811061204557612040928492612024600080516020612bea8339815191529661202a940391611b68565b55611b68565b8054820190556040519081529081906020820190565b0390a3565b906108918460405193849363391434e360e21b855260048501611fb4565b60405163ec442f0560e01b815260006004820152602490fd5b604051634b637e8f60e11b815260006004820152602490fd5b6000546001600160a01b031633036120a957565b60405163118cdaa760e01b8152336004820152602490fd5b908160209103126102d2575161033081610a90565b90916120ed610330936040845260408401906102fa565b9160208184039101526102fa565b909161215f61213d612131612186957f00000000000000000000000000000000000000000000000000000000000000009061276a565b6001600160401b031690565b61215461214d60a0860186611d4c565b3691611bb4565b90602085013561292c565b9390928394600014612202576002905b61147c61217b82611b14565b916080810190611d4c565b60045490926001600160a01b039091169083826121a257505050565b60405163043a78eb60e01b8152926020928492839182916121c691600484016120d6565b03915afa8015610867576121d75750565b6121f89060203d6020116121fb575b6121f08183610e09565b8101906120c1565b50565b503d6121e6565b60019061216f565b91908260409103126102d25760405161222281610d85565b6020808294805184520151910152565b906040828203126102d2576103309161220a565b906020909392936040835263ffffffff8151166040840152818101516060840152608061229a612284604084015160a08488015260e08701906102fa565b6060840151868203603f190160a08801526102fa565b910151151560c08401526001600160a01b03909416910152565b600080546001600160a01b039283166001600160a01b0319821681178355921690600080516020612bca8339815191529080a3565b6001600160a01b0381169190821561206357600754908282018092116123395760009261232a602092600080516020612bea83398151915294600755611b68565b818154019055604051908152a3565b612754565b8051821015611d475760209160051b010190565b90601f811161236057505050565b6000916000526020600020906020601f850160051c8301941061239e575b601f0160051c01915b82811061239357505050565b818155600101612387565b909250829061237e565b81519192916001600160401b038111610da0576123cf816123c98454610c9f565b84612352565b602080601f831160011461241257508190612403939495600092612407575b50508160011b916000199060031b1c19161790565b9055565b0151905038806123ee565b90601f1983169561242885600052602060002090565b926000905b8882106124655750508360019596971061244c575b505050811b019055565b015160001960f88460031b161c19169055388080612442565b8060018596829496860151815501950193019061242d565b6020808201908083528351809252604092604081018260408560051b8401019601946000925b8584106124b4575050505050505090565b9091929394959685806124f7600193603f198682030188528b518760609163ffffffff815116845261ffff868201511686850152015191818982015201906102fa565b9901940194019295949391906124a3565b9060009160005b81518110156125885760019061258260406125368161252e858861233e565b5101516125c2565b61257d81612544858861233e565b5101519163ffffffff612557868961233e565b515116895261ffff602091600383528a2091612573878a61233e565b5101511690610c8c565b6123a8565b0161250f565b507fbe4864a8e820971c0247f5992e2da559595f7bf076a21cb5928d443d2a13b6749192506125bd906040519182918261247d565b0390a1565b600361ffff600283015116036125d55750565b604051639a6d49cd60e01b8152602060048201529081906108919060248301906102fa565b906080828203126102d25761263490604080519361261785610da5565b80518552602081015161262981611d88565b60208601520161220a565b604082015290565b612699608094926126b59694612650611e7d565b50602061265d86516129b1565b95019182518061271e575b5061267285611f47565b9251151592612682610b7b611ad7565b602086015260408501526060840152151585830152565b6040518095819482936302637a4560e41b845260048401612246565b03917f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165af1908115610867576000916126f5575090565b610330915060803d608011612717575b61270f8183610e09565b8101906125fa565b503d612705565b612727906129d3565b38612668565b906001600160a01b03808316156104a1578116156104885761044b61275192611b4e565b55565b634e487b7160e01b600052601160045260246000fd5b8115612774570490565b634e487b7160e01b600052601260045260246000fd5b8181029291811591840414171561233957565b906020116102d2573590565b906028116102d2576020013560c01c90565b610330907f0000000000000000000000000000000000000000000000000000000000000000906001600160401b031661278a565b816001600160a01b03821615612809575b610330916122e9565b61dead9150612800565b90806028116102d2576103309136916027190190602801611bb4565b604c91936103309360405195869360018060c01b03199060c01b16602085015263ffffffff60e01b9060e01b166028840152602c83015261287981518092602086860191016102d7565b810103602c810184520182610e09565b6001600160a01b03811690816128d2575060075491808301809311612339576020600080516020612bea833981519152916000946007555b8060075403600755604051908152a3565b92916128dd84611b68565b549381851061290e5781602091612908600080516020612bea83398151915294600097980391611b68565b556128c1565b610891859260405193849363391434e360e21b855260048501611fb4565b825115801593906129875761298491606891604051948592602084015260018060c01b03199060c01b16604083015233604883015261297481518092602086860191016102d7565b8101036048810184520182610e09565b91565b509060405191602083015260018060c01b03199060c01b1660408201526028815261298481610da5565b8034036129bb5790565b6040516304fb820960e51b8152346004820152602490fd5b60405163393f876560e21b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116926020929091908381600481885afa90811561086757600091612b10575b5016928315612afe5760008091612a9e9360405190868201926323b872dd60e01b84523360248401526044830152606482015260648152612a6981610dee565b519082875af13d15612af6573d90612a8082611b99565b91612a8e6040519384610e09565b82523d60008584013e5b84612b46565b908151918215159182612ada575b50509050612ab75750565b604051635274afe760e01b81526001600160a01b03919091166004820152602490fd5b611522925080612aee9483010191016120c1565b803880612aac565b606090612a98565b6040516329b99a9560e11b8152600490fd5b90508381813d8311612b3f575b612b278183610e09565b810103126102d25751612b39816103f5565b38612a29565b503d612b1d565b90612b6d5750805115612b5b57805190602001fd5b604051630a12f52160e11b8152600490fd5b81511580612ba0575b612b7e575090565b604051639996b31560e01b81526001600160a01b039091166004820152602490fd5b50803b15612b7656feefed6d3500546b29533b128a29e3a94d70788727f0507505ac12eaf2e578fd9c8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220e22daa028e703068b4544ffcb7894b39197efd28c68cfae72b2b0dcffb4cfa2d64736f6c63430008180033",
  deployedBytecode:
    "0x6080604052600436101561001257600080fd5b60003560e01c806306fdde03146102c2578063095ea7b3146102bd5780630d35b415146102b8578063111ecdad146102b357806313137d65146102ae578063134d4f25146102a9578063156a0d0f146102a457806317442b701461029f57806318160ddd1461029a5780631f5e13341461029557806323b872dd14610290578063313ce5671461028b5780633400288b146102865780633b6f743b1461028157806352ae2879146101fa5780635535d4611461027c5780635a0dfe4d146102775780635e280f11146102725780636fc1b31e1461026d57806370a0823114610268578063715018a6146102635780637d25a05e1461025e57806382413eac14610259578063857749b0146102545780638da5cb5b1461024f57806395d89b411461024a578063963efcaa146102455780639e3d87cd146102405780639f68b9641461023b578063a9059cbb14610236578063b731ea0a14610231578063b98bd0701461022c578063bb0b6a5314610227578063bc70b35414610222578063bd815db01461021d578063c7c7f5b314610218578063ca5eb5e114610213578063d045a0dc1461020e578063d424388514610209578063dd62ed3e14610204578063f2fde38b146101ff578063fc0c546a146101fa5763ff7bd03d146101f557600080fd5b611a84565b610c51565b611a2e565b6119db565b61196b565b61181e565b611785565b6115ff565b611484565b611430565b6113f5565b61131a565b6112a4565b61126f565b611253565b61119e565b611163565b6110d7565b6110ae565b611092565b611034565b61100d565b610fc4565b610f87565b610f17565b610ed2565b610e9d565b610e2c565b610aaa565b610a1c565b6109f2565b61094c565b610930565b610912565b6108f0565b6108c9565b6108ad565b6106e0565b610613565b61056d565b610406565b610333565b60009103126102d257565b600080fd5b60005b8381106102ea5750506000910152565b81810151838201526020016102da565b90602091610313815180928185528580860191016102d7565b601f01601f1916010190565b9060206103309281815201906102fa565b90565b346102d2576000806003193601126103f2576040518160085461035581610c9f565b908184526020926001916001811690816000146103d05750600114610395575b6103918561038581890382610e09565b6040519182918261031f565b0390f35b929450600883528483205b8284106103bd575050508161039193610385928201019338610375565b80548585018701529285019281016103a0565b60ff191686860152505050151560051b82010191506103858161039138610375565b80fd5b6001600160a01b038116036102d257565b346102d25760403660031901126102d257600435610423816103f5565b60243533156104a1576001600160a01b03821691821561048857610450829161044b33611b4e565b611b82565b556040519081527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560203392a3602060405160018152f35b604051634a1406b160e11b815260006004820152602490fd5b60405163e602df0560e01b815260006004820152602490fd5b908160e09103126102d25790565b60208091805184520151910152565b9392916104e88560a08101936104c8565b60409160a06040870152815180915260c086019160c08260051b880101936020809201936000915b84831061052e5750505050505090606061052c929401906104c8565b565b909192939495848061055d6001938d60bf1990820301875285838c5180518452015191818582015201906102fa565b9801930193019194939290610510565b346102d25760203660031901126102d2576001600160401b036004358181116102d25761059e9036906004016104ba565b906105a7611ae4565b506105b0611ae4565b50604051906105be82610d85565b6000825260208201526103916105f7604051936105da85610dd3565b600085526105e781611b14565b5060406060820135910135611eed565b6105ff611aca565b9182526020820152604051938493846104d7565b346102d25760003660031901126102d2576004546040516001600160a01b039091168152602090f35b60609060031901126102d257600490565b9181601f840112156102d2578235916001600160401b0383116102d257602083818601950101116102d257565b600319810160e081126102d2576060136102d257600491606435916001600160401b03906084358281116102d257816106b59160040161064d565b9390939260a4356106c5816103f5565b9260c4359182116102d2576106dc9160040161064d565b9091565b6106e93661067a565b50929492506001600160a01b039190507f0000000000000000000000000000000000000000000000000000000000000000821633810361089557833561072e81610a0e565b61073781611f47565b90602086013580920361086c57505061075f610753838861279d565b6001600160a01b031690565b91610785610775610770838a6127a9565b6127bb565b61077e87611b14565b50846127ef565b8097602883116107c3575b505050506107be6107af600080516020612baa83398151915294611b14565b95604051938493169683611b1e565b0390a3005b906107ee92916107e86107d860408a01611f7f565b936107e28a611b14565b92612813565b9261282f565b90803b156102d257604051633e5ac80960e11b815291600091839182908490829061081e908c8a60048501611f89565b03925af1801561086757600080516020612baa833981519152946107be926107af9261084e575b88919650610790565b8061085b61086192610dc0565b806102c7565b38610845565b611e13565b61087581610a0e565b61089160405192839263309afaf360e21b845260048401611b1e565b0390fd5b6040516391ac5e4f60e01b8152336004820152602490fd5b346102d25760003660031901126102d257602060405160028152f35b346102d25760003660031901126102d2576040805162b9270b60e21b815260016020820152f35b346102d25760003660031901126102d257604080516001815260026020820152f35b346102d25760003660031901126102d2576020600754604051908152f35b346102d25760003660031901126102d257602060405160018152f35b346102d25760603660031901126102d257600435610969816103f5565b602435610975816103f5565b6044359060018060a01b0383166000526006602052610998336040600020611b82565b5492600184016109b9575b6109ad9350611fd2565b60405160018152602090f35b8284106109d5576109d0836109ad9503338361272d565b6109a3565b604051637dc7a0d960e11b81528061089185873360048501611fb4565b346102d25760003660031901126102d257602060405160128152f35b63ffffffff8116036102d257565b346102d25760403660031901126102d2577f238399d427b947898edb290f5ff0f9109849b1c3ba196a42e35f00c50a54b98b600435610a5a81610a0e565b60243590610a66612095565b63ffffffff8116600052600160205281604060002055610a8b60405192839283611b1e565b0390a1005b801515036102d257565b60408101929161052c91906104c8565b346102d2576040806003193601126102d2576004356001600160401b0381116102d257610adb9036906004016104ba565b90602435610ae881610a90565b610af0611ae4565b506060830135833593610b0285610a0e565b610b387f0000000000000000000000000000000000000000000000000000000000000000610b33818785013561276a565b61278a565b91808310610c3457508392610b54610bb99693610b9e936120fb565b90610b5e85610a0e565b610b66611ae4565b50610b7085611f47565b610b87610b7b611ad7565b63ffffffff9097168752565b602086015285850152606084015215156080830152565b815180948192631bb8518b60e31b8352309060048401612246565b03817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa9081156108675761039192600092610c05575b505191829182610a9a565b81610c269293503d8411610c2d575b610c1e8183610e09565b810190612232565b9038610bfa565b503d610c14565b826044918651916371c4efed60e01b835260048301526024820152fd5b346102d25760003660031901126102d2576020604051308152f35b6024359061ffff821682036102d257565b359061ffff821682036102d257565b9061ffff16600052602052604060002090565b90600182811c92168015610ccf575b6020831014610cb957565b634e487b7160e01b600052602260045260246000fd5b91607f1691610cae565b805460009392610ce882610c9f565b91828252602093600191600181169081600014610d505750600114610d0f575b5050505050565b90939495506000929192528360002092846000945b838610610d3c57505050500101903880808080610d08565b805485870183015294019385908201610d24565b60ff19168685015250505090151560051b010191503880808080610d08565b634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610da057604052565b610d6f565b606081019081106001600160401b03821117610da057604052565b6001600160401b038111610da057604052565b602081019081106001600160401b03821117610da057604052565b60a081019081106001600160401b03821117610da057604052565b601f909101601f19168101906001600160401b03821190821017610da057604052565b346102d25760403660031901126102d257610391610e82610e89610e76600435610e5581610a0e565b63ffffffff610e62610c6c565b911660005260036020526040600020610c8c565b60405192838092610cd9565b0382610e09565b6040519182916020835260208301906102fa565b346102d25760403660031901126102d2576020610ec8600435610ebf81610a0e565b60243590611b36565b6040519015158152f35b346102d25760003660031901126102d2576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b346102d25760203660031901126102d2577ff0be4f1e87349231d80c36b33f9e8639658eeaf474014dee15a3e6a4d44141976020600435610f57816103f5565b610f5f612095565b600480546001600160a01b0319166001600160a01b03929092169182179055604051908152a1005b346102d25760203660031901126102d257600435610fa4816103f5565b60018060a01b031660005260056020526020604060002054604051908152f35b346102d2576000806003193601126103f257610fde612095565b80546001600160a01b03198116825581906001600160a01b0316600080516020612bca8339815191528280a380f35b346102d25760403660031901126102d257611029600435610a0e565b602060405160008152f35b346102d25760a03660031901126102d25761104e3661063c565b506064356001600160401b0381116102d25761106e90369060040161064d565b5050602060843561107e816103f5565b6040516001600160a01b0390911630148152f35b346102d25760003660031901126102d257602060405160068152f35b346102d25760003660031901126102d2576000546040516001600160a01b039091168152602090f35b346102d2576000806003193601126103f257604051816009546110f981610c9f565b908184526020926001916001811690816000146103d05750600114611128576103918561038581890382610e09565b929450600983528483205b828410611150575050508161039193610385928201019338610375565b8054858501870152928501928101611133565b346102d25760003660031901126102d25760206040517f00000000000000000000000000000000000000000000000000000000000000008152f35b346102d25760803660031901126102d2576004356111bb816103f5565b604435906064356111cb816103f5565b6111d3612095565b600a549260ff84166112185760016112069460ff191617600a5580611208575b5050611201602435826122e9565b611ecd565b005b611211916122e9565b38806111f3565b60405162461bcd60e51b815260206004820152601360248201527243414e4e4f545f5245494e495449414c495a4560681b6044820152606490fd5b346102d25760003660031901126102d257602060405160008152f35b346102d25760403660031901126102d25761129960043561128f816103f5565b6024359033611fd2565b602060405160018152f35b346102d25760003660031901126102d2576002546040516001600160a01b039091168152602090f35b9060206003198301126102d2576001600160401b0391600435908382116102d257806023830112156102d25781600401359384116102d25760248460051b830101116102d2576024019190565b346102d257611328366112cd565b90611331612095565b61133a82611afd565b90604061134a6040519384610e09565b8383526020938484019060051b8301923684116102d25780915b8483106113745761120686612508565b6001600160401b039083358281116102d2578301916060833603126102d25785519261139f84610da5565b80356113aa81610a0e565b84526113b78a8201610c7d565b8a850152868101359182116102d257019036601f830112156102d25788926113e6849336908581359101611bb4565b87820152815201920191611364565b346102d25760203660031901126102d25763ffffffff60043561141781610a0e565b1660005260016020526020604060002054604051908152f35b346102d25760603660031901126102d25760043561144d81610a0e565b611455610c6c565b604435906001600160401b0382116102d2576103919261147c610e8993369060040161064d565b929091611c76565b61148d366112cd565b60005b8181106114fc57604051638e9e709960e01b8152600081600481335afa801561086757610891916000916114d9575b50604051638351eea760e01b81529182916004830161031f565b6114f691503d806000833e6114ee8183610e09565b810190611e1f565b826114bf565b611507818385611d24565b9061152661152261151784611b14565b602085013590611b36565b1590565b6115bb57611538610100830183611d4c565b9261154560e08201611d7e565b90611554610120820182611d4c565b959095303b156102d25760009461158a60c092604051998a9788968795633411683760e21b875260a08a01358a60048901611d99565b03920135305af1918215610867576001926115a8575b505b01611490565b8061085b6115b592610dc0565b386115a0565b600191506115a2565b91608061052c9294936115f8604060c083019780518452600180831b036020820151166020850152015160408301906104c8565b01906104c8565b60803660031901126102d2576004356001600160401b0381116102d25761162a9036906004016104ba565b6040806023193601126102d25760643590611644826103f5565b61164c611e7d565b50611655611ae4565b506060830135916116668435610a0e565b6116977f0000000000000000000000000000000000000000000000000000000000000000610b33818588013561276a565b928084106117685750331561175057906116db610391926116b88533612889565b6116c285876120fb565b6116cb88611b14565b916116d536611ea5565b9261263c565b926116e4611aca565b948186528160208701527f85496b760a4b7f8d66384b9df21b381f5d1b1e79f229a47aaf4c232edc2fe59a61174361171d875193611b14565b9385519181839233978460409194939263ffffffff606083019616825260208201520152565b0390a351928392836115c4565b8151634b637e8f60e11b815260006004820152602490fd5b836044918451916371c4efed60e01b835260048301526024820152fd5b346102d257600060203660031901126103f2576004356117a4816103f5565b6117ac612095565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811691839190833b1561181a5760249083604051958694859363ca5eb5e160e01b85521660048401525af180156108675761180e575080f35b61181790610dc0565b80f35b8280fd5b6118273661067a565b505050929030330361195957611840610753858361279d565b9361186161185161077083856127a9565b61185a85611b14565b50866127ef565b91602882116118a2575b5050611885600080516020612baa83398151915292611b14565b6040516001600160a01b03909516949182916107be919083611b1e565b90826118c1926107e86118b760408801611f7f565b936107e288611b14565b917f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316803b156102d257604051633e5ac80960e11b815293600091859182908490829061191b908b8d60048501611f89565b03925af190811561086757600080516020612baa8339815191529361188592611946575b509261186b565b8061085b61195392610dc0565b3861193f565b60405163029a949d60e31b8152600490fd5b346102d25760203660031901126102d2577fd48d879cef83a1c0bdda516f27b13ddb1b3f8bbac1c9e1511bb2a659c242776060206004356119ab816103f5565b6119b3612095565b600280546001600160a01b0319166001600160a01b03929092169182179055604051908152a1005b346102d25760403660031901126102d2576020611a256004356119fd816103f5565b60243590611a0a826103f5565b6001600160a01b031660009081526006845260409020611b82565b54604051908152f35b346102d25760203660031901126102d257600435611a4b816103f5565b611a53612095565b6001600160a01b03811615611a6b57611206906122b4565b604051631e4fbdf760e01b815260006004820152602490fd5b346102d25760603660031901126102d2576020611aa03661063c565b63ffffffff8135611ab081610a0e565b166000526001825260406000205482604051920135148152f35b6040519061052c82610d85565b6040519061052c82610dee565b60405190611af182610d85565b60006020838281520152565b6001600160401b038111610da05760051b60200190565b3561033081610a0e565b6020909392919363ffffffff60408201951681520152565b63ffffffff1660005260016020526040600020541490565b6001600160a01b0316600090815260066020526040902090565b6001600160a01b0316600090815260056020526040902090565b9060018060a01b0316600052602052604060002090565b6001600160401b038111610da057601f01601f191660200190565b929192611bc082611b99565b91611bce6040519384610e09565b8294818452818301116102d2578281602093846000960137010152565b90929192836002116102d25783116102d257600201916001190190565b6020908361052c939594956040519683611c2b89955180928880890191016102d7565b8401918583013701600083820152038085520183610e09565b908060209392818452848401376000828201840152601f01601f1916010190565b916020610330938181520191611c44565b610e76610e829263ffffffff611c9d93979596971660005260036020526040600020610c8c565b805115611d00578315611cfa576002841015611cd1575050610891604051928392639a6d49cd60e01b845260048401611c65565b909280611cf49161033094611cef611cea368484611bb4565b6125c2565b611beb565b91611c08565b92509050565b509190610330913691611bb4565b634e487b7160e01b600052603260045260246000fd5b9190811015611d475760051b8101359061013e19813603018212156102d2570190565b611d0e565b903590601e19813603018212156102d257018035906001600160401b0382116102d2576020019181360383136102d257565b35610330816103f5565b6001600160401b038116036102d257565b929093611df59260406103309997989663ffffffff8135611db981610a0e565b168752602081013560208801520135611dd181611d88565b6001600160401b03166040860152606085015260e060808501819052840191611c44565b6001600160a01b0390941660a082015280840360c090910152611c44565b6040513d6000823e3d90fd5b6020818303126102d2578051906001600160401b0382116102d2570181601f820112156102d2578051611e5181611b99565b92611e5f6040519485610e09565b818452602082840101116102d25761033091602080850191016102d7565b60405190611e8a82610da5565b8160008152600060208201526040611ea0611ae4565b910152565b60409060231901126102d25760405190611ebe82610d85565b60243582526044356020830152565b611ed5612095565b6001600160a01b03811615611a6b5761052c906122b4565b611f1c90610b337f0000000000000000000000000000000000000000000000000000000000000000809261276a565b918291808410611f295750565b83604491604051916371c4efed60e01b835260048301526024820152fd5b63ffffffff16806000526001602052604060002054908115611f67575090565b6024906040519063f6ff4fb760e01b82526004820152fd5b3561033081611d88565b610330939260809260018060a01b0316825260208201526000604082015281606082015201906102fa565b604091949392606082019560018060a01b0316825260208201520152565b916001600160a01b038084169290831561207c57811693841561206357611ff881611b68565b5483811061204557612040928492612024600080516020612bea8339815191529661202a940391611b68565b55611b68565b8054820190556040519081529081906020820190565b0390a3565b906108918460405193849363391434e360e21b855260048501611fb4565b60405163ec442f0560e01b815260006004820152602490fd5b604051634b637e8f60e11b815260006004820152602490fd5b6000546001600160a01b031633036120a957565b60405163118cdaa760e01b8152336004820152602490fd5b908160209103126102d2575161033081610a90565b90916120ed610330936040845260408401906102fa565b9160208184039101526102fa565b909161215f61213d612131612186957f00000000000000000000000000000000000000000000000000000000000000009061276a565b6001600160401b031690565b61215461214d60a0860186611d4c565b3691611bb4565b90602085013561292c565b9390928394600014612202576002905b61147c61217b82611b14565b916080810190611d4c565b60045490926001600160a01b039091169083826121a257505050565b60405163043a78eb60e01b8152926020928492839182916121c691600484016120d6565b03915afa8015610867576121d75750565b6121f89060203d6020116121fb575b6121f08183610e09565b8101906120c1565b50565b503d6121e6565b60019061216f565b91908260409103126102d25760405161222281610d85565b6020808294805184520151910152565b906040828203126102d2576103309161220a565b906020909392936040835263ffffffff8151166040840152818101516060840152608061229a612284604084015160a08488015260e08701906102fa565b6060840151868203603f190160a08801526102fa565b910151151560c08401526001600160a01b03909416910152565b600080546001600160a01b039283166001600160a01b0319821681178355921690600080516020612bca8339815191529080a3565b6001600160a01b0381169190821561206357600754908282018092116123395760009261232a602092600080516020612bea83398151915294600755611b68565b818154019055604051908152a3565b612754565b8051821015611d475760209160051b010190565b90601f811161236057505050565b6000916000526020600020906020601f850160051c8301941061239e575b601f0160051c01915b82811061239357505050565b818155600101612387565b909250829061237e565b81519192916001600160401b038111610da0576123cf816123c98454610c9f565b84612352565b602080601f831160011461241257508190612403939495600092612407575b50508160011b916000199060031b1c19161790565b9055565b0151905038806123ee565b90601f1983169561242885600052602060002090565b926000905b8882106124655750508360019596971061244c575b505050811b019055565b015160001960f88460031b161c19169055388080612442565b8060018596829496860151815501950193019061242d565b6020808201908083528351809252604092604081018260408560051b8401019601946000925b8584106124b4575050505050505090565b9091929394959685806124f7600193603f198682030188528b518760609163ffffffff815116845261ffff868201511686850152015191818982015201906102fa565b9901940194019295949391906124a3565b9060009160005b81518110156125885760019061258260406125368161252e858861233e565b5101516125c2565b61257d81612544858861233e565b5101519163ffffffff612557868961233e565b515116895261ffff602091600383528a2091612573878a61233e565b5101511690610c8c565b6123a8565b0161250f565b507fbe4864a8e820971c0247f5992e2da559595f7bf076a21cb5928d443d2a13b6749192506125bd906040519182918261247d565b0390a1565b600361ffff600283015116036125d55750565b604051639a6d49cd60e01b8152602060048201529081906108919060248301906102fa565b906080828203126102d25761263490604080519361261785610da5565b80518552602081015161262981611d88565b60208601520161220a565b604082015290565b612699608094926126b59694612650611e7d565b50602061265d86516129b1565b95019182518061271e575b5061267285611f47565b9251151592612682610b7b611ad7565b602086015260408501526060840152151585830152565b6040518095819482936302637a4560e41b845260048401612246565b03917f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165af1908115610867576000916126f5575090565b610330915060803d608011612717575b61270f8183610e09565b8101906125fa565b503d612705565b612727906129d3565b38612668565b906001600160a01b03808316156104a1578116156104885761044b61275192611b4e565b55565b634e487b7160e01b600052601160045260246000fd5b8115612774570490565b634e487b7160e01b600052601260045260246000fd5b8181029291811591840414171561233957565b906020116102d2573590565b906028116102d2576020013560c01c90565b610330907f0000000000000000000000000000000000000000000000000000000000000000906001600160401b031661278a565b816001600160a01b03821615612809575b610330916122e9565b61dead9150612800565b90806028116102d2576103309136916027190190602801611bb4565b604c91936103309360405195869360018060c01b03199060c01b16602085015263ffffffff60e01b9060e01b166028840152602c83015261287981518092602086860191016102d7565b810103602c810184520182610e09565b6001600160a01b03811690816128d2575060075491808301809311612339576020600080516020612bea833981519152916000946007555b8060075403600755604051908152a3565b92916128dd84611b68565b549381851061290e5781602091612908600080516020612bea83398151915294600097980391611b68565b556128c1565b610891859260405193849363391434e360e21b855260048501611fb4565b825115801593906129875761298491606891604051948592602084015260018060c01b03199060c01b16604083015233604883015261297481518092602086860191016102d7565b8101036048810184520182610e09565b91565b509060405191602083015260018060c01b03199060c01b1660408201526028815261298481610da5565b8034036129bb5790565b6040516304fb820960e51b8152346004820152602490fd5b60405163393f876560e21b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116926020929091908381600481885afa90811561086757600091612b10575b5016928315612afe5760008091612a9e9360405190868201926323b872dd60e01b84523360248401526044830152606482015260648152612a6981610dee565b519082875af13d15612af6573d90612a8082611b99565b91612a8e6040519384610e09565b82523d60008584013e5b84612b46565b908151918215159182612ada575b50509050612ab75750565b604051635274afe760e01b81526001600160a01b03919091166004820152602490fd5b611522925080612aee9483010191016120c1565b803880612aac565b606090612a98565b6040516329b99a9560e11b8152600490fd5b90508381813d8311612b3f575b612b278183610e09565b810103126102d25751612b39816103f5565b38612a29565b503d612b1d565b90612b6d5750805115612b5b57805190602001fd5b604051630a12f52160e11b8152600490fd5b81511580612ba0575b612b7e575090565b604051639996b31560e01b81526001600160a01b039091166004820152602490fd5b50803b15612b7656feefed6d3500546b29533b128a29e3a94d70788727f0507505ac12eaf2e578fd9c8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220e22daa028e703068b4544ffcb7894b39197efd28c68cfae72b2b0dcffb4cfa2d64736f6c63430008180033",
  linkReferences: {},
  deployedLinkReferences: {},
};
