const hre = require("hardhat");

async function main() {
        //Deploy Domain Contract 
        const truflationDataFetcherFactory = await hre.ethers.getContractFactory('TruflationDataFetcher');
        const truflationDataFetcherContract = await truflationDataFetcherFactory.deploy();
        await truflationDataFetcherContract.deployed();
    
        console.log("Contract deployed to:", truflationDataFetcherContract.address);
  
}
//Contract deployed to: 0x067fC1B6aab213a961d82B5B28f892F9b5Bc14e2



main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });