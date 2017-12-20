var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var TweetAccount = artifacts.require("./TweetAccount.sol");
var TweetRegistry = artifacts.require("./TweetRegistry.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(TweetAccount);
  deployer.deploy(TweetRegistry);
};
