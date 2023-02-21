require("@nomicfoundation/hardhat-toolbox");
let secret = require('./secret.json');


const config = {
  solidity: {
    compilers: [
      {
        version: '0.8.17',
      }
    ],
  },
  networks: {
    testnet: {
      url: secret.url,
      accounts: [secret.key],
    },
  },
  etherscan: {
    apiKey: {
      bscTestnet: secret.bscscan_api
    },
  },
};


module.exports = config