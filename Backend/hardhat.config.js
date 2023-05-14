require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    polygon_mumbai: {
      url: "https://small-misty-glade.matic-testnet.discover.quiknode.pro/bbde2623698ec3a1ab12d1a7a19241b514960350/",
      accounts: ["5b7abb20353b6cdc64c125c49ba912552ff81ac1e2990d1e2ecaf921d5a66d74"],
    }
  },
};
