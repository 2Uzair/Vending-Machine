const vendingMachine = artifacts.require("vendingMachine");

contract("vendingMachine", (accounts) => {
    before(async () => {
        instance = await vendingMachine.deployed()
    })

    it('ensure that the starting balance of the vending machine is 100', async () => {
        let balance = await instance.getMachineBalncee()
        assert.equal(balance, 100, "The initial balance should be 100")
    })

    it('ensure that the balance of vending machine is updated', async () => {
        await instance.restock(100)
        let balance = await instance.getMachineBalncee()
        assert.equal(balance, 200, "The balance should be 200 after restock")
    })

    it('allow users to be purchased', async () => {
        await instance.purchase(1, {from: accounts[0], value: web3.utils.towei('3','ether')})
        let balance = await instance.getMachineBalncee()
        assert.equal(balance, 199, "The balance should be 199 after sale")
    })
})