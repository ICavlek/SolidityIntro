const Spacebear = artifacts.require("Spacebear"); //loads Spacebear.json from contracts into variable 

module.exports = function(deployer, network, accounts) {
    // console.log(network, accounts);
    // deployer.deploy(Spacebear, arg1, arg2) if there are arguments needed for Spacebear contract
    // deployer.deploy(Spacebear, {from: account1, gas:}) if we want to choose from which account it is loaded, the amount of gas, etc.
    // deployer.deploy(Spacebear, {replace: true}) it replaces when it reloads, by default is true
    // deployer.deploy(Spacebear, {replace: network == "develop"})
    deployer.deploy(Spacebear);
}