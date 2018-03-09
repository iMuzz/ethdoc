/* eslint-disable */

export default {
    "_id" : "5a9ce561c1ddd44848455ebd",
    "contracts" : {
        "../../blockchain/incentive-layer/contracts/DepositsManager.sol:DepositsManager" : {
            "abi" : [ 
                {
                    "constant" : false,
                    "inputs" : [ 
                        {
                            "name" : "amount",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "withdrawDeposit",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "uint256"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [],
                    "name" : "makeDeposit",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "uint256"
                        }
                    ],
                    "payable" : true,
                    "stateMutability" : "payable",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [],
                    "name" : "jackpot",
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
                    "constant" : true,
                    "inputs" : [],
                    "name" : "owner",
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
                            "name" : "who",
                            "type" : "address"
                        }
                    ],
                    "name" : "getDeposit",
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
                    "constant" : true,
                    "inputs" : [ 
                        {
                            "name" : "",
                            "type" : "address"
                        }
                    ],
                    "name" : "deposits",
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
                    "inputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "constructor"
                }, 
                {
                    "payable" : true,
                    "stateMutability" : "payable",
                    "type" : "fallback"
                }, 
                {
                    "anonymous" : false,
                    "inputs" : [ 
                        {
                            "indexed" : false,
                            "name" : "who",
                            "type" : "address"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "amount",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "DepositMade",
                    "type" : "event"
                }, 
                {
                    "anonymous" : false,
                    "inputs" : [ 
                        {
                            "indexed" : false,
                            "name" : "who",
                            "type" : "address"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "amount",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "DepositWithdrawn",
                    "type" : "event"
                }, 
                {
                    "anonymous" : false,
                    "inputs" : [ 
                        {
                            "indexed" : false,
                            "name" : "amount",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "JackpotIncreased",
                    "type" : "event"
                }
            ],
            "devdoc" : {
                "methods" : {
                    "getDeposit(address)" : {
                        "details" : "Returns an account's deposit",
                        "params" : {
                            "who" : "The account's address."
                        },
                        "return" : "The account's deposit."
                    },
                    "makeDeposit()" : {
                        "details" : "Allows a user to deposit eth.",
                        "return" : "The user's updated deposit amount."
                    },
                    "withdrawDeposit(uint256)" : {
                        "details" : "Allows a user to withdraw eth from their deposit.",
                        "params" : {
                            "amount" : "How much eth to withdraw"
                        },
                        "return" : "The user's updated deposit amount."
                    }
                }
            }
        },
        "../../blockchain/incentive-layer/contracts/IncentiveLayer.sol:IncentiveLayer" : {
            "abi" : [ 
                {
                    "constant" : false,
                    "inputs" : [ 
                        {
                            "name" : "taskID",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "runVerificationGame",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [],
                    "name" : "getCurrentJackpotID",
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
                            "name" : "taskID",
                            "type" : "uint256"
                        }, 
                        {
                            "name" : "randomBitsHash",
                            "type" : "bytes32"
                        }
                    ],
                    "name" : "registerForTask",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "bool"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [ 
                        {
                            "name" : "amount",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "withdrawDeposit",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "uint256"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [],
                    "name" : "makeDeposit",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "uint256"
                        }
                    ],
                    "payable" : true,
                    "stateMutability" : "payable",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [ 
                        {
                            "name" : "taskID",
                            "type" : "uint256"
                        }, 
                        {
                            "name" : "solution0Correct",
                            "type" : "bool"
                        }, 
                        {
                            "name" : "originalRandomBits",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "revealSolution",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [ 
                        {
                            "name" : "taskID",
                            "type" : "uint256"
                        }, 
                        {
                            "name" : "intentHash",
                            "type" : "bytes32"
                        }
                    ],
                    "name" : "commitChallenge",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "bool"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [ 
                        {
                            "name" : "jackpotID",
                            "type" : "uint256"
                        }, 
                        {
                            "name" : "receiverGroup",
                            "type" : "uint256"
                        }, 
                        {
                            "name" : "index",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "receiveJackpotPayment",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [ 
                        {
                            "name" : "taskID",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "unbondDeposit",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "uint256"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [],
                    "name" : "jackpot",
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
                    "constant" : true,
                    "inputs" : [ 
                        {
                            "name" : "taskID",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "getTaskFinality",
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
                            "name" : "taskID",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "finalizeTask",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [ 
                        {
                            "name" : "taskID",
                            "type" : "uint256"
                        }, 
                        {
                            "name" : "account",
                            "type" : "address"
                        }
                    ],
                    "name" : "getBondedDeposit",
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
                            "name" : "taskID",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "taskGiverTimeout",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [],
                    "name" : "owner",
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
                    "inputs" : [],
                    "name" : "donateToJackpot",
                    "outputs" : [],
                    "payable" : true,
                    "stateMutability" : "payable",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [ 
                        {
                            "name" : "taskID",
                            "type" : "uint256"
                        }, 
                        {
                            "name" : "newState",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "changeTaskState",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "bool"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [ 
                        {
                            "name" : "minDeposit",
                            "type" : "uint256"
                        }, 
                        {
                            "name" : "taskData",
                            "type" : "bytes32"
                        }, 
                        {
                            "name" : "numBlocks",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "createTask",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "bool"
                        }
                    ],
                    "payable" : true,
                    "stateMutability" : "payable",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [ 
                        {
                            "name" : "taskID",
                            "type" : "uint256"
                        }, 
                        {
                            "name" : "solutionHash0",
                            "type" : "bytes32"
                        }, 
                        {
                            "name" : "solutionHash1",
                            "type" : "bytes32"
                        }
                    ],
                    "name" : "commitSolution",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "bool"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [ 
                        {
                            "name" : "who",
                            "type" : "address"
                        }
                    ],
                    "name" : "getDeposit",
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
                            "name" : "taskID",
                            "type" : "uint256"
                        }, 
                        {
                            "name" : "intent",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "revealIntent",
                    "outputs" : [ 
                        {
                            "name" : "",
                            "type" : "bool"
                        }
                    ],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [],
                    "name" : "getJackpotAmount",
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
                    "constant" : true,
                    "inputs" : [ 
                        {
                            "name" : "",
                            "type" : "address"
                        }
                    ],
                    "name" : "deposits",
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
                    "payable" : true,
                    "stateMutability" : "payable",
                    "type" : "fallback"
                }, 
                {
                    "anonymous" : false,
                    "inputs" : [ 
                        {
                            "indexed" : false,
                            "name" : "taskID",
                            "type" : "uint256"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "account",
                            "type" : "address"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "amount",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "DepositBonded",
                    "type" : "event"
                }, 
                {
                    "anonymous" : false,
                    "inputs" : [ 
                        {
                            "indexed" : false,
                            "name" : "taskID",
                            "type" : "uint256"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "account",
                            "type" : "address"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "amount",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "DepositUnbonded",
                    "type" : "event"
                }, 
                {
                    "anonymous" : false,
                    "inputs" : [ 
                        {
                            "indexed" : false,
                            "name" : "taskID",
                            "type" : "uint256"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "account",
                            "type" : "address"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "amount",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "BondedDepositMovedToJackpot",
                    "type" : "event"
                }, 
                {
                    "anonymous" : false,
                    "inputs" : [ 
                        {
                            "indexed" : false,
                            "name" : "taskID",
                            "type" : "uint256"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "minDeposit",
                            "type" : "uint256"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "blockNumber",
                            "type" : "uint256"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "reward",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "TaskCreated",
                    "type" : "event"
                }, 
                {
                    "anonymous" : false,
                    "inputs" : [ 
                        {
                            "indexed" : true,
                            "name" : "taskID",
                            "type" : "uint256"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "solver",
                            "type" : "address"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "taskData",
                            "type" : "bytes32"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "minDeposit",
                            "type" : "uint256"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "randomBitsHash",
                            "type" : "bytes32"
                        }
                    ],
                    "name" : "SolverSelected",
                    "type" : "event"
                }, 
                {
                    "anonymous" : false,
                    "inputs" : [ 
                        {
                            "indexed" : false,
                            "name" : "taskID",
                            "type" : "uint256"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "minDeposit",
                            "type" : "uint256"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "taskData",
                            "type" : "bytes32"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "solver",
                            "type" : "address"
                        }
                    ],
                    "name" : "SolutionsCommitted",
                    "type" : "event"
                }, 
                {
                    "anonymous" : false,
                    "inputs" : [ 
                        {
                            "indexed" : false,
                            "name" : "taskID",
                            "type" : "uint256"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "randomBits",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "SolutionRevealed",
                    "type" : "event"
                }, 
                {
                    "anonymous" : false,
                    "inputs" : [ 
                        {
                            "indexed" : false,
                            "name" : "taskID",
                            "type" : "uint256"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "state",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "TaskStateChange",
                    "type" : "event"
                }, 
                {
                    "anonymous" : false,
                    "inputs" : [ 
                        {
                            "indexed" : false,
                            "name" : "verifier",
                            "type" : "address"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "jackpotID",
                            "type" : "uint256"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "solutionID",
                            "type" : "uint256"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "index",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "VerificationCommitted",
                    "type" : "event"
                }, 
                {
                    "anonymous" : false,
                    "inputs" : [ 
                        {
                            "indexed" : false,
                            "name" : "who",
                            "type" : "address"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "amount",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "DepositMade",
                    "type" : "event"
                }, 
                {
                    "anonymous" : false,
                    "inputs" : [ 
                        {
                            "indexed" : false,
                            "name" : "who",
                            "type" : "address"
                        }, 
                        {
                            "indexed" : false,
                            "name" : "amount",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "DepositWithdrawn",
                    "type" : "event"
                }, 
                {
                    "anonymous" : false,
                    "inputs" : [ 
                        {
                            "indexed" : false,
                            "name" : "amount",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "JackpotIncreased",
                    "type" : "event"
                }
            ],
            "devdoc" : {
                "methods" : {
                    "changeTaskState(uint256,uint256)" : {
                        "details" : "Changes a tasks state.",
                        "params" : {
                            "newState" : "The new state.",
                            "taskID" : "The task id."
                        },
                        "return" : "boolean"
                    },
                    "commitChallenge(uint256,bytes32)" : {
                        "params" : {
                            "intentHash" : "Submit hash of even or odd number to designate which solution is correct/incorrect.",
                            "taskID" : "The task id."
                        },
                        "return" : "– boolean"
                    },
                    "commitSolution(uint256,bytes32,bytes32)" : {
                        "params" : {
                            "solutionHash0" : "The hash of the solution (could be true or false solution)",
                            "solutionHash1" : "The hash of the solution (could be true or false solution)",
                            "taskID" : "The task id."
                        },
                        "return" : "boolean"
                    },
                    "createTask(uint256,bytes32,uint256)" : {
                        "details" : "taskGiver creates tasks to be solved.",
                        "params" : {
                            "minDeposit" : "The minimum deposit required for engaging with a task as a solver or verifier.",
                            "numBlocks" : "The number of blocks to adjust for task difficulty.",
                            "taskData" : "Tbd could be hash of the wasm file on a filesystem."
                        },
                        "return" : "– boolean"
                    },
                    "getBondedDeposit(uint256,address)" : {
                        "details" : "returns The user's bonded deposits for a task.",
                        "params" : {
                            "account" : "The user's address.",
                            "taskID" : "The task id."
                        },
                        "return" : "The user's bonded deposits for a task."
                    },
                    "getDeposit(address)" : {
                        "details" : "Returns an account's deposit",
                        "params" : {
                            "who" : "The account's address."
                        },
                        "return" : "The account's deposit."
                    },
                    "makeDeposit()" : {
                        "details" : "Allows a user to deposit eth.",
                        "return" : "The user's updated deposit amount."
                    },
                    "registerForTask(uint256,bytes32)" : {
                        "params" : {
                            "randomBitsHash" : "Hash of random bits to commit to task",
                            "taskID" : "The task id."
                        },
                        "return" : "– boolean"
                    },
                    "revealIntent(uint256,uint256)" : {
                        "details" : "Verifiers can call this until task giver changes state or timeout",
                        "params" : {
                            "intent" : "Submit 0 to challenge solution0, 1 to challenge solution1, anything else challenges both",
                            "taskID" : "The task id."
                        },
                        "return" : "boolean"
                    },
                    "revealSolution(uint256,bool,uint256)" : {
                        "params" : {
                            "originalRandomBits" : "Original random bits for sake of commitment.",
                            "solution0Correct" : "Determines if solution0Hash is the correct solution",
                            "taskID" : "The task id."
                        },
                        "return" : "boolean"
                    },
                    "unbondDeposit(uint256)" : {
                        "details" : "Unlocks a user's bonded deposits from a task.",
                        "params" : {
                            "taskID" : "The task id."
                        },
                        "return" : "The user's deposit which was unbonded from the task."
                    },
                    "withdrawDeposit(uint256)" : {
                        "details" : "Allows a user to withdraw eth from their deposit.",
                        "params" : {
                            "amount" : "How much eth to withdraw"
                        },
                        "return" : "The user's updated deposit amount."
                    }
                }
            }
        },
        "../../blockchain/incentive-layer/contracts/JackpotManager.sol:JackpotManager" : {
            "abi" : [ 
                {
                    "constant" : true,
                    "inputs" : [],
                    "name" : "getCurrentJackpotID",
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
                            "name" : "jackpotID",
                            "type" : "uint256"
                        }, 
                        {
                            "name" : "receiverGroup",
                            "type" : "uint256"
                        }, 
                        {
                            "name" : "index",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "receiveJackpotPayment",
                    "outputs" : [],
                    "payable" : false,
                    "stateMutability" : "nonpayable",
                    "type" : "function"
                }, 
                {
                    "constant" : false,
                    "inputs" : [],
                    "name" : "donateToJackpot",
                    "outputs" : [],
                    "payable" : true,
                    "stateMutability" : "payable",
                    "type" : "function"
                }, 
                {
                    "constant" : true,
                    "inputs" : [],
                    "name" : "getJackpotAmount",
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
                    "anonymous" : false,
                    "inputs" : [ 
                        {
                            "indexed" : false,
                            "name" : "amount",
                            "type" : "uint256"
                        }
                    ],
                    "name" : "JackpotIncreased",
                    "type" : "event"
                }
            ],
            "devdoc" : {
                "methods" : {}
            }
        },
        "../../blockchain/incentive-layer/contracts/SafeMath.sol:SafeMath" : {
            "abi" : [],
            "devdoc" : {
                "methods" : {},
                "title" : "SafeMath"
            }
        }
    },
    "version" : "0.4.20+commit.3155dd80.Darwin.appleclang"
}