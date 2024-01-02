require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",

  networks: {
    mainnet: {
      url: "https://mainnet.infura.io/v3/" + process.env.INFURA_KEY,
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    hardhat: {
      accounts: {
        count: 5
      }
    }
  }, 
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
  }
};

// command to deploy with arguments
// # npx hardhat run --network goerli scripts/deploy_mgp.js

// command to verify
// # npx hardhat verify <Contract Address> --network goerli <arg1> <arg2>