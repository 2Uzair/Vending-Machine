require('dotenv').config()
const HDWalletProvider = require("@truffle/hdwallet-provider")


const private_keys = [
  process.env.PRIVATE_KEY_0,
  process.env.PRIVATE_KEY_1
] 

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
      gas: 5000000
    },
    goerli: {
      provider: () => new HDWalletProvider({
        privateKeys: private_keys,
        providerOrUrl: 'https://goerli.infura.io/v3/672e149c32674bc1ba0f4aba9758b519',
        numberOfAddress: 2
      }
      ),
      network_id: 5,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version: "0.8.17",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  }
};
