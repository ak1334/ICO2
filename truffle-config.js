const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider")
require("dotenv").config({ path: "./.env" })
const AccountIndex = 0;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  //for ganache
  networks: {
    development: {
      port: 7545,
      host: "127.0.0.1",
      network_id: 5777
    },
    ganache_local: {
      provider: function () {
        return new HDWalletProvider(process.env.MNEMONIC, "https://127.0.0.1:7545", AccountIndex)
      },
      network_id: 5777
    }
    ,

    kovan_infura: {
      provider: function () {
        return new HDWalletProvider(process.env.MNEMONIC, "https://kovan.infura.io/v3/ca36721bb57f4b41a2ac55f66980d208", AccountIndex)
      },
      network_id: 42
    },

    rinkeby_infura: {
      provider: function () {
        return new HDWalletProvider(process.env.MNEMONIC, "https://rinkeby.infura.io/v3/ca36721bb57f4b41a2ac55f66980d208", AccountIndex)
      },
      network_id: 4
    },

    ropesten_infura: {
      provider: function () {
        return new HDWalletProvider(process.env.MNEMONIC, "https://ropsten.infura.io/v3/ca36721bb57f4b41a2ac55f66980d208", AccountIndex)
      },
      network_id: 3
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",
      //optimizer: {
      //  enabled: true,
      //  runs: 200
      //}
    }
  }
};
