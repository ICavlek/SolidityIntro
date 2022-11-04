const Spacebear = artifacts.require("Spacebear");

contract("Spacebear", (accounts) => {
    it("Should credit an NFT to a specific account", async () => {
        const SpacebearInstance = await Spacebear.deployed();
        await SpacebearInstance.safeMint(accounts[1], "spacebear_1.json");
        console.log(SpacebearInstance.ownerOf(0));
    })
})