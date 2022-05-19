require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const  SPEEDY_RINKEBY_NODE  = process.env.SPEEDY_RINKEBY_NODE;
const  PRIVATE_KEY = process.env.PRIVATE_KEY;

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.7",
  networks: {
  	rinkeby: {
      url: SPEEDY_RINKEBY_NODE,
      accounts: [PRIVATE_KEY],
  	},
  }
};
