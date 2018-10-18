export default {
    "contractName": "AragonComments",
    "abi": [
      {
        "constant": true,
        "inputs": [],
        "name": "hasInitialized",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "KERNEL_APP_ID",
        "outputs": [
          {
            "name": "",
            "type": "bytes32"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "APP_ADDR_NAMESPACE",
        "outputs": [
          {
            "name": "",
            "type": "bytes32"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getRecoveryVault",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "EVMSCRIPT_REGISTRY_APP_ID",
        "outputs": [
          {
            "name": "",
            "type": "bytes32"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "CORE_NAMESPACE",
        "outputs": [
          {
            "name": "",
            "type": "bytes32"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "token",
            "type": "address"
          }
        ],
        "name": "allowRecoverability",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "appId",
        "outputs": [
          {
            "name": "",
            "type": "bytes32"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "ETH",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getInitializationBlock",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_token",
            "type": "address"
          }
        ],
        "name": "transferToVault",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_sender",
            "type": "address"
          },
          {
            "name": "_role",
            "type": "bytes32"
          },
          {
            "name": "_params",
            "type": "uint256[]"
          }
        ],
        "name": "canPerform",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "ACL_APP_ID",
        "outputs": [
          {
            "name": "",
            "type": "bytes32"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "kernel",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "APP_BASES_NAMESPACE",
        "outputs": [
          {
            "name": "",
            "type": "bytes32"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "isPetrified",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_script",
            "type": "bytes"
          }
        ],
        "name": "getExecutor",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "executor",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "script",
            "type": "bytes"
          },
          {
            "indexed": false,
            "name": "input",
            "type": "bytes"
          },
          {
            "indexed": false,
            "name": "returnData",
            "type": "bytes"
          }
        ],
        "name": "ScriptResult",
        "type": "event"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "initialize",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "test",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "bytecode": "0x60806040526200001d62000023640100000000026401000000009004565b6200015b565b60006200003e62000087640100000000026401000000009004565b1415156200004b57600080fd5b620000857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff620000d4640100000000026401000000009004565b565b6000620000cf7febb05b386a8d34882b8711d156f463690983dc47815980fb82aeeff1aa43579e60010260001916620001496401000000000262000f6e176401000000009004565b905090565b6000620000ef62000087640100000000026401000000009004565b141515620000fc57600080fd5b62000146817febb05b386a8d34882b8711d156f463690983dc47815980fb82aeeff1aa43579e600102600019166200015464010000000002620010f1179091906401000000009004565b50565b600081549050919050565b8082555050565b611124806200016b6000396000f300608060405260043610610107576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630803fac01461010c5780631113ed0d1461013b578063178e60791461016e57806332f0a3b5146101a157806360b1e057146101f8578063756f60491461022b5780637e7db6e11461025e57806380afdea8146102b95780638129fc1c146102ec5780638322fff2146103035780638b3dd7491461035a5780639d4941d814610385578063a1658fad146103c8578063cbcc65eb14610474578063d4aae0c4146104a7578063db8a61d4146104fe578063de4796ed14610531578063f8a8fd6d14610560578063f92a79ff1461058b575b600080fd5b34801561011857600080fd5b50610121610634565b604051808215151515815260200191505060405180910390f35b34801561014757600080fd5b5061015061065f565b60405180826000191660001916815260200191505060405180910390f35b34801561017a57600080fd5b50610183610686565b60405180826000191660001916815260200191505060405180910390f35b3480156101ad57600080fd5b506101b66106ad565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561020457600080fd5b5061020d61079c565b60405180826000191660001916815260200191505060405180910390f35b34801561023757600080fd5b506102406107c3565b60405180826000191660001916815260200191505060405180910390f35b34801561026a57600080fd5b5061029f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107ea565b604051808215151515815260200191505060405180910390f35b3480156102c557600080fd5b506102ce6107f5565b60405180826000191660001916815260200191505060405180910390f35b3480156102f857600080fd5b5061030161082c565b005b34801561030f57600080fd5b5061031861084c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561036657600080fd5b5061036f610851565b6040518082815260200191505060405180910390f35b34801561039157600080fd5b506103c6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610888565b005b3480156103d457600080fd5b5061045a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803560001916906020019092919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050509192919290505050610b12565b604051808215151515815260200191505060405180910390f35b34801561048057600080fd5b50610489610d24565b60405180826000191660001916815260200191505060405180910390f35b3480156104b357600080fd5b506104bc610d4b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561050a57600080fd5b50610513610d82565b60405180826000191660001916815260200191505060405180910390f35b34801561053d57600080fd5b50610546610da9565b604051808215151515815260200191505060405180910390f35b34801561056c57600080fd5b50610575610dda565b6040518082815260200191505060405180910390f35b34801561059757600080fd5b506105f2600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610de3565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60008061063f610851565b905060008114158015610659575080610656610f02565b10155b91505090565b7f3b4bf6bf3ad5000ecf0f989d5befde585c6860fea3e574a4fab4c49d1c177d9c60010281565b7fd6f028ca0e8edb4a8c9757ca4fdccab25fa1e0317da1188108f7d2dee14902fb60010281565b60008073ffffffffffffffffffffffffffffffffffffffff166106ce610d4b565b73ffffffffffffffffffffffffffffffffffffffff16141515156106f157600080fd5b6106f9610d4b565b73ffffffffffffffffffffffffffffffffffffffff166332f0a3b56040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15801561075c57600080fd5b505af1158015610770573d6000803e3d6000fd5b505050506040513d602081101561078657600080fd5b8101908080519060200190929190505050905090565b7fddbcfd564f642ab5627cf68b9b7d374fb4f8a36e941a75d89c87998cef03bd6160010281565b7fc681a85306374a5ab27f0bbc385296a54bcd314a1948b6cf61c4ea1bc44bb9f860010281565b600060019050919050565b60006108277fd625496217aa6a3453eecb9c3489dc5a53e6c67b444329ea2b2cbc9ff547639b60010260001916610f0a565b905090565b6000610836610851565b14151561084257600080fd5b61084a610f15565b565b600081565b60006108837febb05b386a8d34882b8711d156f463690983dc47815980fb82aeeff1aa43579e60010260001916610f6e565b905090565b600080610894836107ea565b151561089f57600080fd5b6108a76106ad565b91506108b282610f79565b15156108bd57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610955578173ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f1935050505015801561094f573d6000803e3d6000fd5b50610b0d565b8273ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1580156109f057600080fd5b505af1158015610a04573d6000803e3d6000fd5b505050506040513d6020811015610a1a57600080fd5b810190808051906020019092919050505090508273ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610ad057600080fd5b505af1158015610ae4573d6000803e3d6000fd5b505050506040513d6020811015610afa57600080fd5b8101908080519060200190929190505050505b505050565b60008060606000610b21610634565b1515610b305760009350610d1a565b610b38610d4b565b9250600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b785760009350610d1a565b600085511115610b9057602085510290508491508082525b8273ffffffffffffffffffffffffffffffffffffffff1663fdef9106883089866040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001836000191660001916815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610c8d578082015181840152602081019050610c72565b50505050905090810190601f168015610cba5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015610cdc57600080fd5b505af1158015610cf0573d6000803e3d6000fd5b505050506040513d6020811015610d0657600080fd5b810190808051906020019092919050505093505b5050509392505050565b7fe3262375f45a6e2026b7e7b18c2b807434f2508fe1a2a3dfb493c7df8f4aad6a60010281565b6000610d7d7f4172f0f7d2289153072b0a6ca36959e0cbe2efc3afe50fc81636caa96338137b60010260001916610fcb565b905090565b7ff1f3eb40f5bc1ad1344716ced8b8a0431d840b5783aea1fd01786bc26f35ac0f60010281565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610dd4610851565b14905090565b6000602a905090565b6000610ded610fd6565b73ffffffffffffffffffffffffffffffffffffffff166304bf2a7f836040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610e74578082015181840152602081019050610e59565b50505050905090810190601f168015610ea15780820380516001836020036101000a031916815260200191505b5092505050602060405180830381600087803b158015610ec057600080fd5b505af1158015610ed4573d6000803e3d6000fd5b505050506040513d6020811015610eea57600080fd5b81019080805190602001909291905050509050919050565b600043905090565b600081549050919050565b6000610f1f610851565b141515610f2b57600080fd5b610f6c610f36610f02565b7febb05b386a8d34882b8711d156f463690983dc47815980fb82aeeff1aa43579e600102600019166110f190919063ffffffff16565b565b600081549050919050565b600080600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610fba5760009150610fc5565b823b90506000811191505b50919050565b600081549050919050565b600080610fe1610d4b565b73ffffffffffffffffffffffffffffffffffffffff1663be00bbd87fd6f028ca0e8edb4a8c9757ca4fdccab25fa1e0317da1188108f7d2dee14902fb6001027fddbcfd564f642ab5627cf68b9b7d374fb4f8a36e941a75d89c87998cef03bd616001026040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808360001916600019168152602001826000191660001916815260200192505050602060405180830381600087803b1580156110ad57600080fd5b505af11580156110c1573d6000803e3d6000fd5b505050506040513d60208110156110d757600080fd5b810190808051906020019092919050505090508091505090565b80825550505600a165627a7a723058208800a4be38df62a896baa41e46820cf32d68d80510e8089bf510fdfe563b8f380029",
    "deployedBytecode": "0x608060405260043610610107576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630803fac01461010c5780631113ed0d1461013b578063178e60791461016e57806332f0a3b5146101a157806360b1e057146101f8578063756f60491461022b5780637e7db6e11461025e57806380afdea8146102b95780638129fc1c146102ec5780638322fff2146103035780638b3dd7491461035a5780639d4941d814610385578063a1658fad146103c8578063cbcc65eb14610474578063d4aae0c4146104a7578063db8a61d4146104fe578063de4796ed14610531578063f8a8fd6d14610560578063f92a79ff1461058b575b600080fd5b34801561011857600080fd5b50610121610634565b604051808215151515815260200191505060405180910390f35b34801561014757600080fd5b5061015061065f565b60405180826000191660001916815260200191505060405180910390f35b34801561017a57600080fd5b50610183610686565b60405180826000191660001916815260200191505060405180910390f35b3480156101ad57600080fd5b506101b66106ad565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561020457600080fd5b5061020d61079c565b60405180826000191660001916815260200191505060405180910390f35b34801561023757600080fd5b506102406107c3565b60405180826000191660001916815260200191505060405180910390f35b34801561026a57600080fd5b5061029f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107ea565b604051808215151515815260200191505060405180910390f35b3480156102c557600080fd5b506102ce6107f5565b60405180826000191660001916815260200191505060405180910390f35b3480156102f857600080fd5b5061030161082c565b005b34801561030f57600080fd5b5061031861084c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561036657600080fd5b5061036f610851565b6040518082815260200191505060405180910390f35b34801561039157600080fd5b506103c6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610888565b005b3480156103d457600080fd5b5061045a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803560001916906020019092919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050509192919290505050610b12565b604051808215151515815260200191505060405180910390f35b34801561048057600080fd5b50610489610d24565b60405180826000191660001916815260200191505060405180910390f35b3480156104b357600080fd5b506104bc610d4b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561050a57600080fd5b50610513610d82565b60405180826000191660001916815260200191505060405180910390f35b34801561053d57600080fd5b50610546610da9565b604051808215151515815260200191505060405180910390f35b34801561056c57600080fd5b50610575610dda565b6040518082815260200191505060405180910390f35b34801561059757600080fd5b506105f2600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610de3565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60008061063f610851565b905060008114158015610659575080610656610f02565b10155b91505090565b7f3b4bf6bf3ad5000ecf0f989d5befde585c6860fea3e574a4fab4c49d1c177d9c60010281565b7fd6f028ca0e8edb4a8c9757ca4fdccab25fa1e0317da1188108f7d2dee14902fb60010281565b60008073ffffffffffffffffffffffffffffffffffffffff166106ce610d4b565b73ffffffffffffffffffffffffffffffffffffffff16141515156106f157600080fd5b6106f9610d4b565b73ffffffffffffffffffffffffffffffffffffffff166332f0a3b56040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15801561075c57600080fd5b505af1158015610770573d6000803e3d6000fd5b505050506040513d602081101561078657600080fd5b8101908080519060200190929190505050905090565b7fddbcfd564f642ab5627cf68b9b7d374fb4f8a36e941a75d89c87998cef03bd6160010281565b7fc681a85306374a5ab27f0bbc385296a54bcd314a1948b6cf61c4ea1bc44bb9f860010281565b600060019050919050565b60006108277fd625496217aa6a3453eecb9c3489dc5a53e6c67b444329ea2b2cbc9ff547639b60010260001916610f0a565b905090565b6000610836610851565b14151561084257600080fd5b61084a610f15565b565b600081565b60006108837febb05b386a8d34882b8711d156f463690983dc47815980fb82aeeff1aa43579e60010260001916610f6e565b905090565b600080610894836107ea565b151561089f57600080fd5b6108a76106ad565b91506108b282610f79565b15156108bd57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610955578173ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f1935050505015801561094f573d6000803e3d6000fd5b50610b0d565b8273ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1580156109f057600080fd5b505af1158015610a04573d6000803e3d6000fd5b505050506040513d6020811015610a1a57600080fd5b810190808051906020019092919050505090508273ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610ad057600080fd5b505af1158015610ae4573d6000803e3d6000fd5b505050506040513d6020811015610afa57600080fd5b8101908080519060200190929190505050505b505050565b60008060606000610b21610634565b1515610b305760009350610d1a565b610b38610d4b565b9250600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b785760009350610d1a565b600085511115610b9057602085510290508491508082525b8273ffffffffffffffffffffffffffffffffffffffff1663fdef9106883089866040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001836000191660001916815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610c8d578082015181840152602081019050610c72565b50505050905090810190601f168015610cba5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015610cdc57600080fd5b505af1158015610cf0573d6000803e3d6000fd5b505050506040513d6020811015610d0657600080fd5b810190808051906020019092919050505093505b5050509392505050565b7fe3262375f45a6e2026b7e7b18c2b807434f2508fe1a2a3dfb493c7df8f4aad6a60010281565b6000610d7d7f4172f0f7d2289153072b0a6ca36959e0cbe2efc3afe50fc81636caa96338137b60010260001916610fcb565b905090565b7ff1f3eb40f5bc1ad1344716ced8b8a0431d840b5783aea1fd01786bc26f35ac0f60010281565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610dd4610851565b14905090565b6000602a905090565b6000610ded610fd6565b73ffffffffffffffffffffffffffffffffffffffff166304bf2a7f836040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610e74578082015181840152602081019050610e59565b50505050905090810190601f168015610ea15780820380516001836020036101000a031916815260200191505b5092505050602060405180830381600087803b158015610ec057600080fd5b505af1158015610ed4573d6000803e3d6000fd5b505050506040513d6020811015610eea57600080fd5b81019080805190602001909291905050509050919050565b600043905090565b600081549050919050565b6000610f1f610851565b141515610f2b57600080fd5b610f6c610f36610f02565b7febb05b386a8d34882b8711d156f463690983dc47815980fb82aeeff1aa43579e600102600019166110f190919063ffffffff16565b565b600081549050919050565b600080600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610fba5760009150610fc5565b823b90506000811191505b50919050565b600081549050919050565b600080610fe1610d4b565b73ffffffffffffffffffffffffffffffffffffffff1663be00bbd87fd6f028ca0e8edb4a8c9757ca4fdccab25fa1e0317da1188108f7d2dee14902fb6001027fddbcfd564f642ab5627cf68b9b7d374fb4f8a36e941a75d89c87998cef03bd616001026040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808360001916600019168152602001826000191660001916815260200192505050602060405180830381600087803b1580156110ad57600080fd5b505af11580156110c1573d6000803e3d6000fd5b505050506040513d60208110156110d757600080fd5b810190808051906020019092919050505090508091505090565b80825550505600a165627a7a723058208800a4be38df62a896baa41e46820cf32d68d80510e8089bf510fdfe563b8f380029",
    "sourceMap": "77:196:0:-;;;344:9:19;:7;;;:9;;;:::i;:::-;77:196:0;;590:84:28;490:1:26;462:24;:22;;;:24;;;:::i;:::-;:29;454:38;;;;;;;;637:30:28;277:2;637:13;;;:30;;;:::i;:::-;590:84::o;678:137:26:-;733:7;759:49;353:66;759:29;;:47;;;;;;;;:49;;;:::i;:::-;752:56;;678:137;:::o;1548:141::-;490:1;462:24;:22;;;:24;;;:::i;:::-;:29;454:38;;;;;;;;1621:61;1669:12;353:66;1621:29;;:47;;;;;;;;;:61;;;;;:::i;:::-;1548:141;:::o;519:134:31:-;587:12;636:8;630:15;622:23;;620:27;;;:::o;1028:119::-;1134:4;1124:8;1117:22;1115:26;;:::o;77:196:0:-;;;;;;;",
    "deployedSourceMap": "77:196:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;925:208:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;925:208:26;;;;;;;;;;;;;;;;;;;;;;;;;;;749:106:46;;8:9:-1;5:2;;;30:1;27;20:12;5:2;749:106:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;631:111;;8:9:-1;5:2;;;30:1;27;20:12;5:2;631:111:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2213:239:18;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2213:239:18;;;;;;;;;;;;;;;;;;;;;;;;;;;274:118:37;;8:9:-1;5:2;;;30:1;27;20:12;5:2;274:118:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;400:107:46;;8:9:-1;5:2;;;30:1;27;20:12;5:2;400:107:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1134:99:32;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1134:99:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;860:106:17;;8:9:-1;5:2;;;30:1;27;20:12;5:2;860:106:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;121:68:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;121:68:0;;;;;;229:40:23;;8:9:-1;5:2;;;30:1;27;20:12;5:2;229:40:23;;;;;;;;;;;;;;;;;;;;;;;;;;;678:137:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;678:137:26;;;;;;;;;;;;;;;;;;;;;;;532:402:32;;8:9:-1;5:2;;;30:1;27;20:12;5:2;532:402:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;1418:679:18;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1418:679:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;861:103:46;;8:9:-1;5:2;;;30:1;27;20:12;5:2;861:103:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;738:116:17;;8:9:-1;5:2;;;30:1;27;20:12;5:2;738:116:17;;;;;;;;;;;;;;;;;;;;;;;;;;;513:112:46;;8:9:-1;5:2;;;30:1;27;20:12;5:2;513:112:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;287:117:28;;8:9:-1;5:2;;;30:1;27;20:12;5:2;287:117:28;;;;;;;;;;;;;;;;;;;;;;;;;;;195:71:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;195:71:0;;;;;;;;;;;;;;;;;;;;;;;455:169:35;;8:9:-1;5:2;;;30:1;27;20:12;5:2;455:169:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;925:208:26;972:4;988:27;1018:24;:22;:24::i;:::-;988:54;;1082:1;1059:19;:24;;:67;;;;;1107:19;1087:16;:14;:16::i;:::-;:39;;1059:67;1052:74;;925:208;;:::o;749:106:46:-;789:66;749:106;;;:::o;631:111::-;676:66;631:111;;;:::o;2213:239:18:-;2262:7;2398:1;2369:31;;2377:8;:6;:8::i;:::-;2369:31;;;;2361:40;;;;;;;;2418:8;:6;:8::i;:::-;:25;;;:27;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2418:27:18;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2418:27:18;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2418:27:18;;;;;;;;;;;;;;;;2411:34;;2213:239;:::o;274:118:37:-;326:66;274:118;;;:::o;400:107:46:-;441:66;400:107;;;:::o;1134:99:32:-;1199:4;1222;1215:11;;1134:99;;;:::o;860:106:17:-;898:7;924:35;471:66;924:15;;:33;;;;:35::i;:::-;917:42;;860:106;:::o;121:68:0:-;490:1:26;462:24;:22;:24::i;:::-;:29;454:38;;;;;;;;169:13:0;:11;:13::i;:::-;121:68::o;229:40:23:-;267:1;229:40;:::o;678:137:26:-;733:7;759:49;353:66;759:29;;:47;;;;:49::i;:::-;752:56;;678:137;:::o;532:402:32:-;638:13;820:14;600:27;620:6;600:19;:27::i;:::-;592:36;;;;;;;;654:18;:16;:18::i;:::-;638:34;;690:17;701:5;690:10;:17::i;:::-;682:26;;;;;;;;267:1:23;723:13:32;;:6;:13;;;719:209;;;752:5;:14;;:37;775:4;767:21;;;752:37;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;752:37:32;719:209;;;843:6;837:23;;;861:4;837:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;837:29:32;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;837:29:32;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;837:29:32;;;;;;;;;;;;;;;;820:46;;886:6;880:22;;;903:5;910:6;880:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;880:37:32;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;880:37:32;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;880:37:32;;;;;;;;;;;;;;;;;719:209;532:402;;;:::o;1418:679:18:-;1510:4;1596:20;1725:16;1835:18;1531:16;:14;:16::i;:::-;1530:17;1526:60;;;1570:5;1563:12;;;;1526:60;1619:8;:6;:8::i;:::-;1596:31;;1674:1;1641:35;;1649:12;1641:35;;;1637:78;;;1699:5;1692:12;;;;1637:78;1818:1;1801:7;:14;:18;1797:215;;;1873:2;1856:7;:14;:19;1835:40;;1923:7;1916:14;;1977:10;1972:3;1965:23;1898:104;2028:12;:26;;;2055:7;2072:4;2079:5;2086:3;2028:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2028:62:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2028:62:18;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2028:62:18;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2028:62:18;;;;;;;;;;;;;;;;2021:69;;1418:679;;;;;;;;;:::o;861:103:46:-;898:66;861:103;;;:::o;738:116:17:-;777:7;811:35;309:66;811:15;;:33;;;;:35::i;:::-;796:51;;738:116;:::o;513:112:46:-;559:66;513:112;;;:::o;287:117:28:-;331:4;277:2;354:24;:22;:24::i;:::-;:43;347:50;;287:117;:::o;195:71:0:-;234:4;257:2;250:9;;195:71;:::o;455:169:35:-;512:18;568:21;:19;:21::i;:::-;:39;;;608:7;568:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;568:48:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;568:48:35;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;568:48:35;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;568:48:35;;;;;;;;;;;;;;;;542:75;;455:169;;;:::o;347:94:29:-;396:7;422:12;415:19;;347:94;:::o;379:134:31:-;447:12;496:8;490:15;482:23;;480:27;;;:::o;1244:123:26:-;490:1;462:24;:22;:24::i;:::-;:29;454:38;;;;;;;;1295:65;1343:16;:14;:16::i;:::-;353:66;1295:29;;:47;;;;;:65;;;;:::i;:::-;1244:123::o;519:134:31:-;587:12;636:8;630:15;622:23;;620:27;;;:::o;97:244:27:-;157:4;247:12;196:1;177:21;;:7;:21;;;173:64;;;221:5;214:12;;;;173:64;300:7;288:20;280:28;;333:1;326:4;:8;319:15;;97:244;;;;;:::o;239:134:31:-;307:12;356:8;350:15;342:23;;340:27;;;:::o;1308:225:35:-;1362:18;1392:20;1415:8;:6;:8::i;:::-;:15;;;676:66:46;1431:18:35;;326:66:37;1451:25:35;;1415:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1415:62:35;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1415:62:35;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1415:62:35;;;;;;;;;;;;;;;;1392:85;;1513:12;1487:39;;1308:225;;:::o;1028:119:31:-;1134:4;1124:8;1117:22;1115:26;;:::o",
    "source": "pragma solidity ^0.4.24;\n\nimport \"@aragon/os/contracts/apps/AragonApp.sol\";\n\ncontract AragonComments is AragonApp {\n\n    function initialize() onlyInit public {\n        initialized();\n    }\n\n    function test() external view returns (uint) {\n        return 42;\n    }\n    \n}",
    "sourcePath": "/home/mathew/workspace/datastore/aragon-comments/test-app/aragon-comments/contracts/AragonComments.sol",
    "ast": {
      "absolutePath": "/home/mathew/workspace/datastore/aragon-comments/test-app/aragon-comments/contracts/AragonComments.sol",
      "exportedSymbols": {
        "AragonComments": [
          22
        ]
      },
      "id": 23,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 1,
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".24"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:24:0"
        },
        {
          "absolutePath": "@aragon/os/contracts/apps/AragonApp.sol",
          "file": "@aragon/os/contracts/apps/AragonApp.sol",
          "id": 2,
          "nodeType": "ImportDirective",
          "scope": 23,
          "sourceUnit": 6008,
          "src": "26:49:0",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "baseContracts": [
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 3,
                "name": "AragonApp",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 6007,
                "src": "104:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_AragonApp_$6007",
                  "typeString": "contract AragonApp"
                }
              },
              "id": 4,
              "nodeType": "InheritanceSpecifier",
              "src": "104:9:0"
            }
          ],
          "contractDependencies": [
            5073,
            5867,
            6007,
            6020,
            6153,
            6195,
            6285,
            6313,
            6346,
            6393,
            6578,
            6992,
            7019,
            8211
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 22,
          "linearizedBaseContracts": [
            22,
            6007,
            5073,
            6992,
            8211,
            7019,
            6578,
            6313,
            6153,
            6195,
            6020,
            6346,
            6285,
            6393,
            5867
          ],
          "name": "AragonComments",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "body": {
                "id": 12,
                "nodeType": "Block",
                "src": "159:30:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 9,
                        "name": "initialized",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6270,
                        "src": "169:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                          "typeString": "function ()"
                        }
                      },
                      "id": 10,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "169:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 11,
                    "nodeType": "ExpressionStatement",
                    "src": "169:13:0"
                  }
                ]
              },
              "documentation": null,
              "id": 13,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [
                {
                  "arguments": null,
                  "id": 7,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 6,
                    "name": "onlyInit",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 6218,
                    "src": "143:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "143:8:0"
                }
              ],
              "name": "initialize",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 5,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "140:2:0"
              },
              "payable": false,
              "returnParameters": {
                "id": 8,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "159:0:0"
              },
              "scope": 22,
              "src": "121:68:0",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 20,
                "nodeType": "Block",
                "src": "240:26:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "3432",
                      "id": 18,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "257:2:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_42_by_1",
                        "typeString": "int_const 42"
                      },
                      "value": "42"
                    },
                    "functionReturnParameters": 17,
                    "id": 19,
                    "nodeType": "Return",
                    "src": "250:9:0"
                  }
                ]
              },
              "documentation": null,
              "id": 21,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "test",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 14,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "208:2:0"
              },
              "payable": false,
              "returnParameters": {
                "id": 17,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 16,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 21,
                    "src": "234:4:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 15,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "234:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "233:6:0"
              },
              "scope": 22,
              "src": "195:71:0",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "external"
            }
          ],
          "scope": 23,
          "src": "77:196:0"
        }
      ],
      "src": "0:273:0"
    },
    "legacyAST": {
      "absolutePath": "/home/mathew/workspace/datastore/aragon-comments/test-app/aragon-comments/contracts/AragonComments.sol",
      "exportedSymbols": {
        "AragonComments": [
          22
        ]
      },
      "id": 23,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 1,
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".24"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:24:0"
        },
        {
          "absolutePath": "@aragon/os/contracts/apps/AragonApp.sol",
          "file": "@aragon/os/contracts/apps/AragonApp.sol",
          "id": 2,
          "nodeType": "ImportDirective",
          "scope": 23,
          "sourceUnit": 6008,
          "src": "26:49:0",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "baseContracts": [
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 3,
                "name": "AragonApp",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 6007,
                "src": "104:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_AragonApp_$6007",
                  "typeString": "contract AragonApp"
                }
              },
              "id": 4,
              "nodeType": "InheritanceSpecifier",
              "src": "104:9:0"
            }
          ],
          "contractDependencies": [
            5073,
            5867,
            6007,
            6020,
            6153,
            6195,
            6285,
            6313,
            6346,
            6393,
            6578,
            6992,
            7019,
            8211
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 22,
          "linearizedBaseContracts": [
            22,
            6007,
            5073,
            6992,
            8211,
            7019,
            6578,
            6313,
            6153,
            6195,
            6020,
            6346,
            6285,
            6393,
            5867
          ],
          "name": "AragonComments",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "body": {
                "id": 12,
                "nodeType": "Block",
                "src": "159:30:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 9,
                        "name": "initialized",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6270,
                        "src": "169:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                          "typeString": "function ()"
                        }
                      },
                      "id": 10,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "169:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 11,
                    "nodeType": "ExpressionStatement",
                    "src": "169:13:0"
                  }
                ]
              },
              "documentation": null,
              "id": 13,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": false,
              "modifiers": [
                {
                  "arguments": null,
                  "id": 7,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 6,
                    "name": "onlyInit",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 6218,
                    "src": "143:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "143:8:0"
                }
              ],
              "name": "initialize",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 5,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "140:2:0"
              },
              "payable": false,
              "returnParameters": {
                "id": 8,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "159:0:0"
              },
              "scope": 22,
              "src": "121:68:0",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 20,
                "nodeType": "Block",
                "src": "240:26:0",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "3432",
                      "id": 18,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "257:2:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_42_by_1",
                        "typeString": "int_const 42"
                      },
                      "value": "42"
                    },
                    "functionReturnParameters": 17,
                    "id": 19,
                    "nodeType": "Return",
                    "src": "250:9:0"
                  }
                ]
              },
              "documentation": null,
              "id": 21,
              "implemented": true,
              "isConstructor": false,
              "isDeclaredConst": true,
              "modifiers": [],
              "name": "test",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 14,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "208:2:0"
              },
              "payable": false,
              "returnParameters": {
                "id": 17,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 16,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 21,
                    "src": "234:4:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 15,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "234:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "233:6:0"
              },
              "scope": 22,
              "src": "195:71:0",
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "external"
            }
          ],
          "scope": 23,
          "src": "77:196:0"
        }
      ],
      "src": "0:273:0"
    },
    "compiler": {
      "name": "solc",
      "version": "0.4.24+commit.e67f0147.Emscripten.clang"
    },
    "networks": {},
    "schemaVersion": "2.0.1",
    "updatedAt": "2018-10-18T14:42:55.811Z"
  }