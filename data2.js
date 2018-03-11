/* eslint-disable */

export default {
    "_id" : "5aa44ef67c00e68ffd5d6423",
    "contracts" : {
        "ERC721Draft.sol:ERC721" : {
            "abi" : [ 
                {
                    "constant" : false,
                    "inputs" : [ 
                        {
                            "name" : "_to",
                            "type" : "address"
                        }, 
                        {
                            "name" : "_tokenId",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "approve",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [],
                    "name" : "implementsERC721",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "bool"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "pure",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [],
                    "name" : "totalSupply",
                    "outputs" : [ 
                        {
                            "name" : "total",
                            "type" : "uint256"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "view",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [ 
                        {
                            "name" : "_from",
                            "type" : "address"
                        }, 
                        {
                            "name" : "_to",
                            "type" : "address"
                        }, 
                        {
                            "name" : "_tokenId",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "transferFrom",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [ 
                        {
                            "name" : "_tokenId",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "ownerOf",
                    "outputs" : [ 
                        {
                            "name" : "owner",
                            "type" : "address"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "view",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [ 
                        {
                            "name" : "_owner",
                            "type" : "address"
                        }
                    ],
                    "name" : "balanceOf",
                    "outputs" : [ 
                        {
                            "name" : "balance",
                            "type" : "uint256"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "view",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [ 
                        {
                            "name" : "_to",
                            "type" : "address"
                        }, 
                        {
                            "name" : "_tokenId",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "transfer",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "anonymous" : false,
                    "inputs" : [ 
                        {
                            "indexed" : true,
                            "name" : "from",
                            "type" : "address"
                        }, 
                        {
                            "indexed" : true,
                            "name" : "to",
                            "type" : "address"
                        }, 
                        {
                            "indexed" : true,
                            "name" : "tokenId",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "Transfer",
                    "type" : "event"
                }, 
                {
                    "anonymous" : false,
                    "inputs" : [ 
                        {
                            "indexed" : true,
                            "name" : "owner",
                            "type" : "address"
                        }, 
                        {
                            "indexed" : true,
                            "name" : "approved",
                            "type" : "address"
                        }, 
                        {
                            "indexed" : true,
                            "name" : "tokenId",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "Approval",
                    "type" : "event"
                }
            ],
            "devdoc" : {
                "author" : "Dieter Shirley <dete@axiomzen.co> (https://github.com/dete)",
                "methods" : {},
                "title" : "Interface for contracts conforming to ERC-721: Non-Fungible Tokens"
            }
        },
        "KittyAccessControl.sol:KittyAccessControl" : {
            "abi" : [ 
                {
                    "constant" : true,
                    "inputs" : [],
                    "name" : "cfoAddress",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "address"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "view",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [],
                    "name" : "ceoAddress",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "address"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "view",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [ 
                        {
                            "name" : "_newCEO",
                            "type" : "address"
                        }
                    ],
                    "name" : "setCEO",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [ 
                        {
                            "name" : "_newCOO",
                            "type" : "address"
                        }
                    ],
                    "name" : "setCOO",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [],
                    "name" : "unpause",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [ 
                        {
                            "name" : "_newCFO",
                            "type" : "address"
                        }
                    ],
                    "name" : "setCFO",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [],
                    "name" : "paused",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "bool"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "view",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [],
                    "name" : "withdrawBalance",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [],
                    "name" : "pause",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [],
                    "name" : "cooAddress",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "address"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "view",
                    "type" : "function"
                }, 
                {
                    "anonymous" : false,
                    "inputs" : [ 
                        {
                            "indexed" : false,
                            "name" : "newContract",
                            "type" : "address"
                        }
                    ],
                    "name" : "ContractUpgrade",
                    "type" : "event"
                }
            ],
            "devdoc" : {
                "author" : "Axiom Zen (https://www.axiomzen.co)",
                "methods" : {
                    "pause()" : {
                        "details" : "Called by any \"C-level\" role to pause the contract. Used only when  a bug or exploit is detected and we need to limit damage."
                    },
                    "setCEO(address)" : {
                        "details" : "Assigns a new address to act as the CEO. Only available to the current CEO.",
                        "params" : {
                            "_newCEO" : "The address of the new CEO"
                        }
                    },
                    "setCFO(address)" : {
                        "details" : "Assigns a new address to act as the CFO. Only available to the current CEO.",
                        "params" : {
                            "_newCFO" : "The address of the new CFO"
                        }
                    },
                    "setCOO(address)" : {
                        "details" : "Assigns a new address to act as the COO. Only available to the current CEO.",
                        "params" : {
                            "_newCOO" : "The address of the new COO"
                        }
                    },
                    "unpause()" : {
                        "details" : "Unpauses the smart contract. Can only be called by the CEO, since  one reason we may pause the contract is when CFO or COO accounts are  compromised."
                    }
                },
                "title" : "A facet of KittyCore that manages special access privileges."
            }
        },
        "KittyBase.sol:KittyBase" : {
            "abi" : [ 
                {
                    "constant" : true,
                    "inputs" : [],
                    "name" : "cfoAddress",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "address"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "view",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [],
                    "name" : "ceoAddress",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "address"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "view",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [ 
                        {
                            "name" : "_newCEO",
                            "type" : "address"
                        }
                    ],
                    "name" : "setCEO",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [ 
                        {
                            "name" : "_newCOO",
                            "type" : "address"
                        }
                    ],
                    "name" : "setCOO",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [],
                    "name" : "unpause",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [ 
                        {
                            "name" : "",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "sireAllowedToAddress",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "address"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "view",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [ 
                        {
                            "name" : "",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "kittyIndexToApproved",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "address"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "view",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [ 
                        {
                            "name" : "_newCFO",
                            "type" : "address"
                        }
                    ],
                    "name" : "setCFO",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [],
                    "name" : "paused",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "bool"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "view",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [],
                    "name" : "withdrawBalance",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [],
                    "name" : "pause",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [ 
                        {
                            "name" : "",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "cooldowns",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "uint32"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "view",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [ 
                        {
                            "name" : "",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "kittyIndexToOwner",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "address"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "view",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [],
                    "name" : "cooAddress",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "address"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "view",
                    "type" : "function"
                }, 
                {
                    "anonymous" : false,
                    "inputs" : [ 
                        {
                            "indexed" : true,
                            "name" : "owner",
                            "type" : "address"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "kittyId",
                            "type" : "uint256"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "matronId",
                            "type" : "uint256"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "sireId",
                            "type" : "uint256"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "genes",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "Birth",
                    "type" : "event"
                }, 
                {
                    "anonymous" : false,
                    "inputs" : [ 
                        {
                            "indexed" : true,
                            "name" : "from",
                            "type" : "address"
                        }, 
                        {
                            "indexed" : true,
                            "name" : "to",
                            "type" : "address"
                        }, 
                        {
                            "indexed" : true,
                            "name" : "tokenId",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "Transfer",
                    "type" : "event"
                }, 
                {
                    "anonymous" : false,
                    "inputs" : [ 
                        {
                            "indexed" : false,
                            "name" : "newContract",
                            "type" : "address"
                        }
                    ],
                    "name" : "ContractUpgrade",
                    "type" : "event"
                }
            ],
            "devdoc" : {
                "author" : "Axiom Zen (https://www.axiomzen.co)",
                "methods" : {
                    "pause()" : {
                        "details" : "Called by any \"C-level\" role to pause the contract. Used only when  a bug or exploit is detected and we need to limit damage."
                    },
                    "setCEO(address)" : {
                        "details" : "Assigns a new address to act as the CEO. Only available to the current CEO.",
                        "params" : {
                            "_newCEO" : "The address of the new CEO"
                        }
                    },
                    "setCFO(address)" : {
                        "details" : "Assigns a new address to act as the CFO. Only available to the current CEO.",
                        "params" : {
                            "_newCFO" : "The address of the new CFO"
                        }
                    },
                    "setCOO(address)" : {
                        "details" : "Assigns a new address to act as the COO. Only available to the current CEO.",
                        "params" : {
                            "_newCOO" : "The address of the new COO"
                        }
                    },
                    "unpause()" : {
                        "details" : "Unpauses the smart contract. Can only be called by the CEO, since  one reason we may pause the contract is when CFO or COO accounts are  compromised."
                    }
                },
                "title" : "Base contract for CryptoKitties. Holds all common structs, events and base variables."
            }
        },
        "KittyOwnership.sol:KittyOwnership" : {
            "abi" : [ 
                {
                    "constant" : false,
                    "inputs" : [ 
                        {
                            "name" : "_kittyId",
                            "type" : "uint256"
                        }, 
                        {
                            "name" : "_recipient",
                            "type" : "address"
                        }
                    ],
                    "name" : "rescueLostKitty",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [],
                    "name" : "cfoAddress",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "address"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "view",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [],
                    "name" : "name",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "string"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "view",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [ 
                        {
                            "name" : "_to",
                            "type" : "address"
                        }, 
                        {
                            "name" : "_tokenId",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "approve",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [],
                    "name" : "ceoAddress",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "address"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "view",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [],
                    "name" : "implementsERC721",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "bool"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "pure",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [],
                    "name" : "totalSupply",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "uint256"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "view",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [ 
                        {
                            "name" : "_from",
                            "type" : "address"
                        }, 
                        {
                            "name" : "_to",
                            "type" : "address"
                        }, 
                        {
                            "name" : "_tokenId",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "transferFrom",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [ 
                        {
                            "name" : "_newCEO",
                            "type" : "address"
                        }
                    ],
                    "name" : "setCEO",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [ 
                        {
                            "name" : "_newCOO",
                            "type" : "address"
                        }
                    ],
                    "name" : "setCOO",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [],
                    "name" : "unpause",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [ 
                        {
                            "name" : "",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "sireAllowedToAddress",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "address"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "view",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [ 
                        {
                            "name" : "_owner",
                            "type" : "address"
                        }, 
                        {
                            "name" : "_index",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "tokensOfOwnerByIndex",
                    "outputs" : [ 
                        {
                            "name" : "tokenId",
                            "type" : "uint256"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "view",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [ 
                        {
                            "name" : "",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "kittyIndexToApproved",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "address"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "view",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [ 
                        {
                            "name" : "_newCFO",
                            "type" : "address"
                        }
                    ],
                    "name" : "setCFO",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [],
                    "name" : "paused",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "bool"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "view",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [],
                    "name" : "withdrawBalance",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [ 
                        {
                            "name" : "_tokenId",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "ownerOf",
                    "outputs" : [ 
                        {
                            "name" : "owner",
                            "type" : "address"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "view",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [ 
                        {
                            "name" : "_owner",
                            "type" : "address"
                        }
                    ],
                    "name" : "balanceOf",
                    "outputs" : [ 
                        {
                            "name" : "count",
                            "type" : "uint256"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "view",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [],
                    "name" : "pause",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [],
                    "name" : "symbol",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "string"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "view",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [ 
                        {
                            "name" : "",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "cooldowns",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "uint32"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "view",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [ 
                        {
                            "name" : "",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "kittyIndexToOwner",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "address"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "view",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [ 
                        {
                            "name" : "_to",
                            "type" : "address"
                        }, 
                        {
                            "name" : "_tokenId",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "transfer",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [],
                    "name" : "cooAddress",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "address"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "view",
                    "type" : "function"
                }, 
                {
                    "anonymous" : false,
                    "inputs" : [ 
                        {
                            "indexed" : true,
                            "name" : "from",
                            "type" : "address"
                        }, 
                        {
                            "indexed" : true,
                            "name" : "to",
                            "type" : "address"
                        }, 
                        {
                            "indexed" : true,
                            "name" : "tokenId",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "Transfer",
                    "type" : "event"
                }, 
                {
                    "anonymous" : false,
                    "inputs" : [ 
                        {
                            "indexed" : true,
                            "name" : "owner",
                            "type" : "address"
                        }, 
                        {
                            "indexed" : true,
                            "name" : "approved",
                            "type" : "address"
                        }, 
                        {
                            "indexed" : true,
                            "name" : "tokenId",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "Approval",
                    "type" : "event"
                }, 
                {
                    "anonymous" : false,
                    "inputs" : [ 
                        {
                            "indexed" : true,
                            "name" : "owner",
                            "type" : "address"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "kittyId",
                            "type" : "uint256"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "matronId",
                            "type" : "uint256"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "sireId",
                            "type" : "uint256"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "genes",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "Birth",
                    "type" : "event"
                }, 
                {
                    "anonymous" : false,
                    "inputs" : [ 
                        {
                            "indexed" : false,
                            "name" : "newContract",
                            "type" : "address"
                        }
                    ],
                    "name" : "ContractUpgrade",
                    "type" : "event"
                }
            ],
            "devdoc" : {
                "author" : "Axiom Zen (https://www.axiomzen.co)",
                "methods" : {
                    "approve(address,uint256)" : {
                        "notice": "Grant another address the right to transfer a specific Kitty via transferFrom(). This is the preferred flow for transfering NFTs to contracts.",
                        "details" : "Required for ERC-721 compliance.",
                        "params" : {
                            "_to" : "The address to be granted transfer approval. Pass address(0) to  clear all approvals.",
                            "_tokenId" : "The ID of the Kitty that can be transferred if this call succeeds."
                        }
                    },
                    "balanceOf(address)" : {
                        "details" : "Required for ERC-721 compliance",
                        "params" : {
                            "_owner" : "The owner address to check."
                        }
                    },
                    "ownerOf(uint256)" : {
                        "details" : "Required for ERC-721 compliance."
                    },
                    "pause()" : {
                        "details" : "Called by any \"C-level\" role to pause the contract. Used only when  a bug or exploit is detected and we need to limit damage."
                    },
                    "rescueLostKitty(uint256,address)" : {
                        "details" : "Transfers a kitty owned by this contract to the specified address.  Used to rescue lost kitties. (There is no \"proper\" flow where this contract  should be the owner of any Kitty. This function exists for us to reassign  the ownership of Kitties that users may have accidentally sent to our address.)",
                        "params" : {
                            "_kittyId" : "- ID of kitty",
                            "_recipient" : "- Address to send the cat to"
                        }
                    },
                    "setCEO(address)" : {
                        "details" : "Assigns a new address to act as the CEO. Only available to the current CEO.",
                        "params" : {
                            "_newCEO" : "The address of the new CEO"
                        }
                    },
                    "setCFO(address)" : {
                        "details" : "Assigns a new address to act as the CFO. Only available to the current CEO.",
                        "params" : {
                            "_newCFO" : "The address of the new CFO"
                        }
                    },
                    "setCOO(address)" : {
                        "details" : "Assigns a new address to act as the COO. Only available to the current CEO.",
                        "params" : {
                            "_newCOO" : "The address of the new COO"
                        }
                    },
                    "tokensOfOwnerByIndex(address,uint256)" : {
                        "details" : "This method MUST NEVER be called by smart contract code. It will almost  certainly blow past the block gas limit once there are a large number of  Kitties in existence. Exists only to allow off-chain queries of ownership.  Optional method for ERC-721.",
                        "params" : {
                            "_index" : "The zero-based index of the cat within the owner's list of cats.  Must be less than balanceOf(_owner).",
                            "_owner" : "The owner whose Kitties we are interested in."
                        }
                    },
                    "totalSupply()" : {
                        "details" : "Required for ERC-721 compliance."
                    },
                    "transfer(address,uint256)" : {
                        "details" : "Required for ERC-721 compliance.",
                        "params" : {
                            "_to" : "The address of the recipient, can be a user or contract.",
                            "_tokenId" : "The ID of the Kitty to transfer."
                        }
                    },
                    "transferFrom(address,address,uint256)" : {
                        "details" : "Required for ERC-721 compliance.",
                        "params" : {
                            "_from" : "The address that owns the Kitty to be transfered.",
                            "_to" : "The address that should take ownership of the Kitty. Can be any address,  including the caller.",
                            "_tokenId" : "The ID of the Kitty to be transferred."
                        }
                    },
                    "unpause()" : {
                        "details" : "Unpauses the smart contract. Can only be called by the CEO, since  one reason we may pause the contract is when CFO or COO accounts are  compromised."
                    }
                },
                "title" : "The facet of the CryptoKitties core contract that manages ownership, ERC-721 (draft) compliant."
            }
        }
    },
    "version" : "0.4.20+commit.3155dd80.Darwin.appleclang"
}