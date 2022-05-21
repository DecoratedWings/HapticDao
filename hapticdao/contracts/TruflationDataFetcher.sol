// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";


contract TruflationDataFetcher is ChainlinkClient, ConfirmedOwner {
  using Chainlink for Chainlink.Request;
  
  string public yoyInflation;
  string public foodInflation;
  string public housingInflation;
  string public transportationInflation;
  string public medicalInflation;
  string public educationInflation;
  string public personalItemInflation;

  using Chainlink for Chainlink.Request;
  address public oracleId;
  string public jobId;
  uint256 public fee;

  mapping(string=>string) categoryToInflationRate;

  /**
    Network Details derived from Market.Chainlink Truflation Rinkeby
    https://market.link/nodes/969f6cd9-40f3-4dd6-aa02-4fa8c8421480/integrations
   */

  constructor() ConfirmedOwner(msg.sender) {
    setPublicChainlinkToken();
    oracleId = 0x17dED59fCd940F0a40462D52AAcD11493C6D8073;
    jobId = "b04c2a85143c43089c1befe7c41dea93";
    fee = 0.1 * 10 ** 18;
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