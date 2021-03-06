// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";
import "@chainlink/contracts/src/v0.8/KeeperCompatible.sol";


contract TruflationDataFetcher is ChainlinkClient, ConfirmedOwner, KeeperCompatibleInterface {

  using Chainlink for Chainlink.Request;
  
  string public yoyInflation;
  bytes public result;
  mapping(bytes32 => bytes) public results;

  //Category Inflations (will be replaced later with results mapping to save storage gas) : 
  string public foodInflation;
  string public housingInflation;
  string public transportationInflation;
  string public medicalInflation;
  string public educationInflation;
  string public personalItemInflation;

  address public oracleId;
  string public jobId;
  uint256 public fee;

  uint public immutable interval;
  uint public lastTimeStamp;

  bool runKeeper;

  /**
    Network Details derived from Market.Chainlink Truflation Mumbai
    https://market.link/nodes/969f6cd9-40f3-4dd6-aa02-4fa8c8421480/integrations
   */

  constructor() ConfirmedOwner(msg.sender) {
    setPublicChainlinkToken();
    oracleId = 0x17dED59fCd940F0a40462D52AAcD11493C6D8073;
    jobId = "b04c2a85143c43089c1befe7c41dea93";
    fee = 0.1 * 10 ** 18;
    interval = 300;
    lastTimeStamp = block.timestamp;
    runKeeper = true;
  }
        
  function requestYoyInflation() public returns (bytes32 requestId) {
    Chainlink.Request memory req = buildChainlinkRequest(
      bytes32(bytes(jobId)),
      address(this),
      this.fulfillYoyInflation.selector
    );
    req.add("service", "truflation/current");
    req.add("keypath", "yearOverYearInflation");
    req.add("abi", "json");
    return sendChainlinkRequestTo(oracleId, req, fee);
  }

  function fulfillYoyInflation(
    bytes32 _requestId,
    bytes memory _inflation
  ) public recordChainlinkFulfillment(_requestId) {
    yoyInflation = string(_inflation);
  }

  /**
    Truflation APIs not available for categories currently. 
    Team has indicated that we are to use placeholders for the time being. 
    Will update once available and consolidate to include yoyInflation in same method.
   */

function doRequest(
        string memory service_,
        string memory keypath_) public returns (bytes32 requestId) {
          Chainlink.Request memory req = buildChainlinkRequest(
            bytes32(bytes(jobId)),
            address(this), this.fulfillBytes.selector);
        req.add("service", service_);
        req.add("keypath", keypath_);
        req.add("abi", "json");
        return sendChainlinkRequestTo(oracleId, req, fee);
    }

    function fulfillBytes(bytes32 _requestId, bytes memory bytesData)
        public recordChainlinkFulfillment(_requestId) {
        result = bytesData;
	results[_requestId] = bytesData;
    }

  //Will be removed once API is available; represents "data sync" since API unavailable
  function simulateRequestForCategoryInflations() public {
      foodInflation="13.16";
      housingInflation="12.14";
      transportationInflation="21.40";
      medicalInflation="3.26";
      educationInflation="1.41";
      personalItemInflation="5.01";
  }

  /**
    Keepers functions

    Intended to run daily to refresh inflation data.
    Running every 5 minutes for hackathon purposes currently
  */
    function checkUpkeep(bytes calldata checkData ) external view override returns (bool upkeepNeeded, bytes memory performData) {
        bool timeToStart = (block.timestamp - lastTimeStamp) > interval;
        upkeepNeeded = runKeeper && timeToStart;
        performData = checkData;
    }

    function performUpkeep(bytes calldata performData) external override {
        lastTimeStamp = block.timestamp;
        //Sync Truflation Values for User:
        simulateRequestForCategoryInflations();
        requestYoyInflation();
        performData;
    }

  /**
    Utility functions
  */

  function enableKeeper() public onlyOwner {
      runKeeper = true;
  }

  function disableKeeper() public onlyOwner {
      runKeeper = false;
  }
  function changeOracle(address _oracle) public onlyOwner {
    oracleId = _oracle;
  }

  function changeJobId(string memory _jobId) public onlyOwner {
    jobId = _jobId;
  }

  function getChainlinkToken() public view returns (address) {
    return chainlinkTokenAddress();
  }

  function withdrawLink() public onlyOwner {
    LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
    require(link.transfer(msg.sender, link.balanceOf(address(this))),
    "Unable to transfer");
  }

}
//old deploy: 0x4a44d3E4F061bce81ab82DE0E67383F69E7967A5
//deploy : 0xaE02354d16019b1A6dA8c2E184Fe9903cEacD785

//test counter contract: 0x952cEe3d68AF8DC09A3501CaD8f444Da1942cc91