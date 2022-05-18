const hre = require("hardhat");
const { ethers } = require("ethers");

const NODE_URL = "https://speedy-nodes-nyc.moralis.io/2d7fe6505d73560506ea63b1/eth/rinkeby";
const provider = new ethers.providers.JsonRpcProvider(NODE_URL);
// provider is read-only get a signer for on-chain transactions
const signer = provider.getSigner();

async function main() {

  
}



main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });