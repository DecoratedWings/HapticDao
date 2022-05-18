// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract USDPriceConverter {

 AggregatorV3Interface internal priceFeed;

    /**
     * Network: Rinkeby
     * Aggregator: ETH/USD
     * Address: 0x8A753747A1Fa494EC906cE90E9f37563A8AF630e
     */
    constructor() {
        priceFeedEthUSD = AggregatorV3Interface(0x8A753747A1Fa494EC906cE90E9f37563A8AF630e);
        priceFeedEnjUSD = AggregatorV3Interface();
        priceFeedDogeUSD = AggregatorV3Interface();
        priceFeedBtcUSD = AggregatorV3Interface();
        priceFeedXrpUSD = AggregatorV3Interface();
        priceFeedBnbUSD = AggregatorV3Interface();
        priceFeedAdaUSD = AggregatorV3Interface();
        priceFeedSolUSD = AggregatorV3Interface();
        priceFeedDotUSD = AggregatorV3Interface();
        priceFeedTrxUSD = AggregatorV3Interface();
        priceFeedAvaxUSD = AggregatorV3Interface();
        priceFeedShibUSD = AggregatorV3Interface();
        priceFeedMaticUSD = AggregatorV3Interface();
        priceFeedOkbUSD = AggregatorV3Interface();
    }

    /**
     * Returns the latest price
     */
    function getLatestPriceEth() public view returns (int) {
        (
            /*uint80 roundID*/,
            int price,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = priceFeedEthUSD.latestRoundData();
        return price;
    }
}