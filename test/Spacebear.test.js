const Spacebear = artifacts.require("Spacebear");
const truffleAssert = require("truffle-assertions");

contract("Spacebear", (accounts) => {
    it("Should credit an NFT to a specific account", async () => {
        const SpacebearInstance = await Spacebear.deployed();
        let txResult = await SpacebearInstance.safeMint(accounts[1], "spacebear_1.json");
        //assert.equal(txResult.logs[0].event, "Transfer", "Event is not the transfer Event");
        //assert.equal(txResult.logs[0].args.from, "0x0000000000000000000000000000000000000000", "From is not the zero address");
        console.log(txResult.logs[0].args);
        truffleAssert.eventEmitted(txResult, "Transfer", { from: '0x0000000000000000000000000000000000000000', to: accounts[1], tokenId: web3.utils.toBN("0") })
        assert.equal(await SpacebearInstance.ownerOf(0), accounts[1], "Owner of Token 1 is not equal to account 2");
    })
})