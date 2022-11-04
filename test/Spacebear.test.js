const Spacebear = artifacts.require("Spacebear");

contract("Spacebear", (accounts) => {
    it("Should credit an NFT to a specific account", async () => {
        const SpacebearInstance = await Spacebear.deployed();
        await SpacebearInstance.safeMint(accounts[1], "spacebear_1.json");
        assert.equal(await SpacebearInstance.ownerOf(0), accounts[1], "Owner of Token 1 is not equal to account 2");
    })
})