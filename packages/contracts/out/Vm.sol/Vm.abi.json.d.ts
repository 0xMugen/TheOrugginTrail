declare const abi: [
  {
    "type": "function",
    "name": "accesses",
    "inputs": [
      {
        "name": "target",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "readSlots",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      },
      {
        "name": "writeSlots",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "activeFork",
    "inputs": [],
    "outputs": [
      {
        "name": "forkId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "addr",
    "inputs": [
      {
        "name": "privateKey",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "keyAddr",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "allowCheatcodes",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "assume",
    "inputs": [
      {
        "name": "condition",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "breakpoint",
    "inputs": [
      {
        "name": "char",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "breakpoint",
    "inputs": [
      {
        "name": "char",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "value",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "broadcast",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "broadcast",
    "inputs": [
      {
        "name": "signer",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "broadcast",
    "inputs": [
      {
        "name": "privateKey",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "chainId",
    "inputs": [
      {
        "name": "newChainId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "clearMockedCalls",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "closeFile",
    "inputs": [
      {
        "name": "path",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "coinbase",
    "inputs": [
      {
        "name": "newCoinbase",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "createDir",
    "inputs": [
      {
        "name": "path",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "recursive",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "createFork",
    "inputs": [
      {
        "name": "urlOrAlias",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "forkId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "createFork",
    "inputs": [
      {
        "name": "urlOrAlias",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "blockNumber",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "forkId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "createFork",
    "inputs": [
      {
        "name": "urlOrAlias",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "txHash",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "forkId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "createSelectFork",
    "inputs": [
      {
        "name": "urlOrAlias",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "blockNumber",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "forkId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "createSelectFork",
    "inputs": [
      {
        "name": "urlOrAlias",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "txHash",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "forkId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "createSelectFork",
    "inputs": [
      {
        "name": "urlOrAlias",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "forkId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "deal",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "newBalance",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "deriveKey",
    "inputs": [
      {
        "name": "mnemonic",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "index",
        "type": "uint32",
        "internalType": "uint32"
      }
    ],
    "outputs": [
      {
        "name": "privateKey",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "deriveKey",
    "inputs": [
      {
        "name": "mnemonic",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "derivationPath",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "index",
        "type": "uint32",
        "internalType": "uint32"
      }
    ],
    "outputs": [
      {
        "name": "privateKey",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "difficulty",
    "inputs": [
      {
        "name": "newDifficulty",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "envAddress",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "value",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "envAddress",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "delim",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "value",
        "type": "address[]",
        "internalType": "address[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "envBool",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "value",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "envBool",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "delim",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "value",
        "type": "bool[]",
        "internalType": "bool[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "envBytes",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "value",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "envBytes",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "delim",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "value",
        "type": "bytes[]",
        "internalType": "bytes[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "envBytes32",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "delim",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "value",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "envBytes32",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "value",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "envInt",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "delim",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "value",
        "type": "int256[]",
        "internalType": "int256[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "envInt",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "value",
        "type": "int256",
        "internalType": "int256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "envOr",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "delim",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "defaultValue",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      }
    ],
    "outputs": [
      {
        "name": "value",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "envOr",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "delim",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "defaultValue",
        "type": "int256[]",
        "internalType": "int256[]"
      }
    ],
    "outputs": [
      {
        "name": "value",
        "type": "int256[]",
        "internalType": "int256[]"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "envOr",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "defaultValue",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [
      {
        "name": "value",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "envOr",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "defaultValue",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "value",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "envOr",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "defaultValue",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "value",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "envOr",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "delim",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "defaultValue",
        "type": "bytes[]",
        "internalType": "bytes[]"
      }
    ],
    "outputs": [
      {
        "name": "value",
        "type": "bytes[]",
        "internalType": "bytes[]"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "envOr",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "delim",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "defaultValue",
        "type": "uint256[]",
        "internalType": "uint256[]"
      }
    ],
    "outputs": [
      {
        "name": "value",
        "type": "uint256[]",
        "internalType": "uint256[]"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "envOr",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "delim",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "defaultValue",
        "type": "string[]",
        "internalType": "string[]"
      }
    ],
    "outputs": [
      {
        "name": "value",
        "type": "string[]",
        "internalType": "string[]"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "envOr",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "defaultValue",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "name": "value",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "envOr",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "defaultValue",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "value",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "envOr",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "defaultValue",
        "type": "int256",
        "internalType": "int256"
      }
    ],
    "outputs": [
      {
        "name": "value",
        "type": "int256",
        "internalType": "int256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "envOr",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "delim",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "defaultValue",
        "type": "address[]",
        "internalType": "address[]"
      }
    ],
    "outputs": [
      {
        "name": "value",
        "type": "address[]",
        "internalType": "address[]"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "envOr",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "defaultValue",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "value",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "envOr",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "delim",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "defaultValue",
        "type": "bool[]",
        "internalType": "bool[]"
      }
    ],
    "outputs": [
      {
        "name": "value",
        "type": "bool[]",
        "internalType": "bool[]"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "envString",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "delim",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "value",
        "type": "string[]",
        "internalType": "string[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "envString",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "value",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "envUint",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "value",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "envUint",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "delim",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "value",
        "type": "uint256[]",
        "internalType": "uint256[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "etch",
    "inputs": [
      {
        "name": "target",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "newRuntimeBytecode",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "expectCall",
    "inputs": [
      {
        "name": "callee",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "msgValue",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "gas",
        "type": "uint64",
        "internalType": "uint64"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "expectCall",
    "inputs": [
      {
        "name": "callee",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "msgValue",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "gas",
        "type": "uint64",
        "internalType": "uint64"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "count",
        "type": "uint64",
        "internalType": "uint64"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "expectCall",
    "inputs": [
      {
        "name": "callee",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "msgValue",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "count",
        "type": "uint64",
        "internalType": "uint64"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "expectCall",
    "inputs": [
      {
        "name": "callee",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "expectCall",
    "inputs": [
      {
        "name": "callee",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "count",
        "type": "uint64",
        "internalType": "uint64"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "expectCall",
    "inputs": [
      {
        "name": "callee",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "msgValue",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "expectCallMinGas",
    "inputs": [
      {
        "name": "callee",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "msgValue",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "minGas",
        "type": "uint64",
        "internalType": "uint64"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "expectCallMinGas",
    "inputs": [
      {
        "name": "callee",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "msgValue",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "minGas",
        "type": "uint64",
        "internalType": "uint64"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "count",
        "type": "uint64",
        "internalType": "uint64"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "expectEmit",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "expectEmit",
    "inputs": [
      {
        "name": "checkTopic1",
        "type": "bool",
        "internalType": "bool"
      },
      {
        "name": "checkTopic2",
        "type": "bool",
        "internalType": "bool"
      },
      {
        "name": "checkTopic3",
        "type": "bool",
        "internalType": "bool"
      },
      {
        "name": "checkData",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "expectEmit",
    "inputs": [
      {
        "name": "checkTopic1",
        "type": "bool",
        "internalType": "bool"
      },
      {
        "name": "checkTopic2",
        "type": "bool",
        "internalType": "bool"
      },
      {
        "name": "checkTopic3",
        "type": "bool",
        "internalType": "bool"
      },
      {
        "name": "checkData",
        "type": "bool",
        "internalType": "bool"
      },
      {
        "name": "emitter",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "expectEmit",
    "inputs": [
      {
        "name": "emitter",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "expectRevert",
    "inputs": [
      {
        "name": "revertData",
        "type": "bytes4",
        "internalType": "bytes4"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "expectRevert",
    "inputs": [
      {
        "name": "revertData",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "expectRevert",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "expectSafeMemory",
    "inputs": [
      {
        "name": "min",
        "type": "uint64",
        "internalType": "uint64"
      },
      {
        "name": "max",
        "type": "uint64",
        "internalType": "uint64"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "expectSafeMemoryCall",
    "inputs": [
      {
        "name": "min",
        "type": "uint64",
        "internalType": "uint64"
      },
      {
        "name": "max",
        "type": "uint64",
        "internalType": "uint64"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "fee",
    "inputs": [
      {
        "name": "newBasefee",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "ffi",
    "inputs": [
      {
        "name": "commandInput",
        "type": "string[]",
        "internalType": "string[]"
      }
    ],
    "outputs": [
      {
        "name": "result",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "fsMetadata",
    "inputs": [
      {
        "name": "path",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "metadata",
        "type": "tuple",
        "internalType": "struct VmSafe.FsMetadata",
        "components": [
          {
            "name": "isDir",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "isSymlink",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "length",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "readOnly",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "modified",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "accessed",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "created",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getCode",
    "inputs": [
      {
        "name": "artifactPath",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "creationBytecode",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getDeployedCode",
    "inputs": [
      {
        "name": "artifactPath",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "runtimeBytecode",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getLabel",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "currentLabel",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getNonce",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "nonce",
        "type": "uint64",
        "internalType": "uint64"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getRecordedLogs",
    "inputs": [],
    "outputs": [
      {
        "name": "logs",
        "type": "tuple[]",
        "internalType": "struct VmSafe.Log[]",
        "components": [
          {
            "name": "topics",
            "type": "bytes32[]",
            "internalType": "bytes32[]"
          },
          {
            "name": "data",
            "type": "bytes",
            "internalType": "bytes"
          },
          {
            "name": "emitter",
            "type": "address",
            "internalType": "address"
          }
        ]
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "isPersistent",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "persistent",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "label",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "newLabel",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "load",
    "inputs": [
      {
        "name": "target",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "slot",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "data",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "makePersistent",
    "inputs": [
      {
        "name": "accounts",
        "type": "address[]",
        "internalType": "address[]"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "makePersistent",
    "inputs": [
      {
        "name": "account0",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "account1",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "makePersistent",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "makePersistent",
    "inputs": [
      {
        "name": "account0",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "account1",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "account2",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "mockCall",
    "inputs": [
      {
        "name": "callee",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "msgValue",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "returnData",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "mockCall",
    "inputs": [
      {
        "name": "callee",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "returnData",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "mockCallRevert",
    "inputs": [
      {
        "name": "callee",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "msgValue",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "revertData",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "mockCallRevert",
    "inputs": [
      {
        "name": "callee",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "revertData",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "parseAddress",
    "inputs": [
      {
        "name": "stringifiedValue",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "parsedValue",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "parseBool",
    "inputs": [
      {
        "name": "stringifiedValue",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "parsedValue",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "parseBytes",
    "inputs": [
      {
        "name": "stringifiedValue",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "parsedValue",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "parseBytes32",
    "inputs": [
      {
        "name": "stringifiedValue",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "parsedValue",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "parseInt",
    "inputs": [
      {
        "name": "stringifiedValue",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "parsedValue",
        "type": "int256",
        "internalType": "int256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "parseJson",
    "inputs": [
      {
        "name": "json",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "abiEncodedData",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "parseJson",
    "inputs": [
      {
        "name": "json",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "key",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "abiEncodedData",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "parseJsonAddress",
    "inputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "parseJsonAddressArray",
    "inputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "address[]",
        "internalType": "address[]"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "parseJsonBool",
    "inputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "parseJsonBoolArray",
    "inputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool[]",
        "internalType": "bool[]"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "parseJsonBytes",
    "inputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "parseJsonBytes32",
    "inputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "parseJsonBytes32Array",
    "inputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "parseJsonBytesArray",
    "inputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bytes[]",
        "internalType": "bytes[]"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "parseJsonInt",
    "inputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "int256",
        "internalType": "int256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "parseJsonIntArray",
    "inputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "int256[]",
        "internalType": "int256[]"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "parseJsonString",
    "inputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "parseJsonStringArray",
    "inputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "string[]",
        "internalType": "string[]"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "parseJsonUint",
    "inputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "parseJsonUintArray",
    "inputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256[]",
        "internalType": "uint256[]"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "parseUint",
    "inputs": [
      {
        "name": "stringifiedValue",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "parsedValue",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "pauseGasMetering",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "prank",
    "inputs": [
      {
        "name": "msgSender",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "txOrigin",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "prank",
    "inputs": [
      {
        "name": "msgSender",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "prevrandao",
    "inputs": [
      {
        "name": "newPrevrandao",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "projectRoot",
    "inputs": [],
    "outputs": [
      {
        "name": "path",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "readCallers",
    "inputs": [],
    "outputs": [
      {
        "name": "callerMode",
        "type": "uint8",
        "internalType": "enum VmSafe.CallerMode"
      },
      {
        "name": "msgSender",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "txOrigin",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "readDir",
    "inputs": [
      {
        "name": "path",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "maxDepth",
        "type": "uint64",
        "internalType": "uint64"
      }
    ],
    "outputs": [
      {
        "name": "entries",
        "type": "tuple[]",
        "internalType": "struct VmSafe.DirEntry[]",
        "components": [
          {
            "name": "errorMessage",
            "type": "string",
            "internalType": "string"
          },
          {
            "name": "path",
            "type": "string",
            "internalType": "string"
          },
          {
            "name": "depth",
            "type": "uint64",
            "internalType": "uint64"
          },
          {
            "name": "isDir",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "isSymlink",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "readDir",
    "inputs": [
      {
        "name": "path",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "maxDepth",
        "type": "uint64",
        "internalType": "uint64"
      },
      {
        "name": "followLinks",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [
      {
        "name": "entries",
        "type": "tuple[]",
        "internalType": "struct VmSafe.DirEntry[]",
        "components": [
          {
            "name": "errorMessage",
            "type": "string",
            "internalType": "string"
          },
          {
            "name": "path",
            "type": "string",
            "internalType": "string"
          },
          {
            "name": "depth",
            "type": "uint64",
            "internalType": "uint64"
          },
          {
            "name": "isDir",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "isSymlink",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "readDir",
    "inputs": [
      {
        "name": "path",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "entries",
        "type": "tuple[]",
        "internalType": "struct VmSafe.DirEntry[]",
        "components": [
          {
            "name": "errorMessage",
            "type": "string",
            "internalType": "string"
          },
          {
            "name": "path",
            "type": "string",
            "internalType": "string"
          },
          {
            "name": "depth",
            "type": "uint64",
            "internalType": "uint64"
          },
          {
            "name": "isDir",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "isSymlink",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "readFile",
    "inputs": [
      {
        "name": "path",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "data",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "readFileBinary",
    "inputs": [
      {
        "name": "path",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "readLine",
    "inputs": [
      {
        "name": "path",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "line",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "readLink",
    "inputs": [
      {
        "name": "linkPath",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "targetPath",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "record",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "recordLogs",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "rememberKey",
    "inputs": [
      {
        "name": "privateKey",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "keyAddr",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "removeDir",
    "inputs": [
      {
        "name": "path",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "recursive",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "removeFile",
    "inputs": [
      {
        "name": "path",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "resetNonce",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "resumeGasMetering",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "revertTo",
    "inputs": [
      {
        "name": "snapshotId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "success",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "revokePersistent",
    "inputs": [
      {
        "name": "accounts",
        "type": "address[]",
        "internalType": "address[]"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "revokePersistent",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "roll",
    "inputs": [
      {
        "name": "newHeight",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "rollFork",
    "inputs": [
      {
        "name": "txHash",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "rollFork",
    "inputs": [
      {
        "name": "forkId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "blockNumber",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "rollFork",
    "inputs": [
      {
        "name": "blockNumber",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "rollFork",
    "inputs": [
      {
        "name": "forkId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "txHash",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "rpcUrl",
    "inputs": [
      {
        "name": "rpcAlias",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "json",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "rpcUrlStructs",
    "inputs": [],
    "outputs": [
      {
        "name": "urls",
        "type": "tuple[]",
        "internalType": "struct VmSafe.Rpc[]",
        "components": [
          {
            "name": "key",
            "type": "string",
            "internalType": "string"
          },
          {
            "name": "url",
            "type": "string",
            "internalType": "string"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "rpcUrls",
    "inputs": [],
    "outputs": [
      {
        "name": "urls",
        "type": "string[2][]",
        "internalType": "string[2][]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "selectFork",
    "inputs": [
      {
        "name": "forkId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "serializeAddress",
    "inputs": [
      {
        "name": "objectKey",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "valueKey",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "values",
        "type": "address[]",
        "internalType": "address[]"
      }
    ],
    "outputs": [
      {
        "name": "json",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "serializeAddress",
    "inputs": [
      {
        "name": "objectKey",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "valueKey",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "value",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "json",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "serializeBool",
    "inputs": [
      {
        "name": "objectKey",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "valueKey",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "values",
        "type": "bool[]",
        "internalType": "bool[]"
      }
    ],
    "outputs": [
      {
        "name": "json",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "serializeBool",
    "inputs": [
      {
        "name": "objectKey",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "valueKey",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "value",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [
      {
        "name": "json",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "serializeBytes",
    "inputs": [
      {
        "name": "objectKey",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "valueKey",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "values",
        "type": "bytes[]",
        "internalType": "bytes[]"
      }
    ],
    "outputs": [
      {
        "name": "json",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "serializeBytes",
    "inputs": [
      {
        "name": "objectKey",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "valueKey",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "value",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "name": "json",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "serializeBytes32",
    "inputs": [
      {
        "name": "objectKey",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "valueKey",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "values",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      }
    ],
    "outputs": [
      {
        "name": "json",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "serializeBytes32",
    "inputs": [
      {
        "name": "objectKey",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "valueKey",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "value",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "json",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "serializeInt",
    "inputs": [
      {
        "name": "objectKey",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "valueKey",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "value",
        "type": "int256",
        "internalType": "int256"
      }
    ],
    "outputs": [
      {
        "name": "json",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "serializeInt",
    "inputs": [
      {
        "name": "objectKey",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "valueKey",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "values",
        "type": "int256[]",
        "internalType": "int256[]"
      }
    ],
    "outputs": [
      {
        "name": "json",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "serializeString",
    "inputs": [
      {
        "name": "objectKey",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "valueKey",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "values",
        "type": "string[]",
        "internalType": "string[]"
      }
    ],
    "outputs": [
      {
        "name": "json",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "serializeString",
    "inputs": [
      {
        "name": "objectKey",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "valueKey",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "value",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "json",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "serializeUint",
    "inputs": [
      {
        "name": "objectKey",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "valueKey",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "value",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "json",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "serializeUint",
    "inputs": [
      {
        "name": "objectKey",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "valueKey",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "values",
        "type": "uint256[]",
        "internalType": "uint256[]"
      }
    ],
    "outputs": [
      {
        "name": "json",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setEnv",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "value",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setNonce",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "newNonce",
        "type": "uint64",
        "internalType": "uint64"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setNonceUnsafe",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "newNonce",
        "type": "uint64",
        "internalType": "uint64"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "sign",
    "inputs": [
      {
        "name": "privateKey",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "digest",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "v",
        "type": "uint8",
        "internalType": "uint8"
      },
      {
        "name": "r",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "s",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "skip",
    "inputs": [
      {
        "name": "skipTest",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "snapshot",
    "inputs": [],
    "outputs": [
      {
        "name": "snapshotId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "startBroadcast",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "startBroadcast",
    "inputs": [
      {
        "name": "signer",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "startBroadcast",
    "inputs": [
      {
        "name": "privateKey",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "startPrank",
    "inputs": [
      {
        "name": "msgSender",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "startPrank",
    "inputs": [
      {
        "name": "msgSender",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "txOrigin",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "stopBroadcast",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "stopPrank",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "store",
    "inputs": [
      {
        "name": "target",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "slot",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "value",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "toString",
    "inputs": [
      {
        "name": "value",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "stringifiedValue",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "toString",
    "inputs": [
      {
        "name": "value",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "stringifiedValue",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "toString",
    "inputs": [
      {
        "name": "value",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "name": "stringifiedValue",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "toString",
    "inputs": [
      {
        "name": "value",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [
      {
        "name": "stringifiedValue",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "toString",
    "inputs": [
      {
        "name": "value",
        "type": "int256",
        "internalType": "int256"
      }
    ],
    "outputs": [
      {
        "name": "stringifiedValue",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "toString",
    "inputs": [
      {
        "name": "value",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "stringifiedValue",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "transact",
    "inputs": [
      {
        "name": "forkId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "txHash",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "transact",
    "inputs": [
      {
        "name": "txHash",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "txGasPrice",
    "inputs": [
      {
        "name": "newGasPrice",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "warp",
    "inputs": [
      {
        "name": "newTimestamp",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "writeFile",
    "inputs": [
      {
        "name": "path",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "data",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "writeFileBinary",
    "inputs": [
      {
        "name": "path",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "writeJson",
    "inputs": [
      {
        "name": "json",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "path",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "valueKey",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "writeJson",
    "inputs": [
      {
        "name": "json",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "path",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "writeLine",
    "inputs": [
      {
        "name": "path",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "data",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  }
]; export default abi;
