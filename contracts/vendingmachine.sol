pragma solidity ^0.8.17;

contract vendingMachine {
    address public owner;
    mapping (address => uint256) public balances;

    constructor() {
        owner = msg.sender;
        balances[address(this)] = 100;
    }

    function getMachineBalnce() public view returns (uint) {
        return balances[address(this)];
    }

    function restock(uint amount) public {
        require(msg.sender == owner, "Only the owner can restock this machine");
        balances[address(this)] += amount;
    }

    function purchase(uint amount) public payable {
        require(msg.value >= amount * 2 ether, "You must pay 2 ethers");
        require(balances[address(this)] >= amount, "Not enough balance in Machine");
        balances[address(this)] -= amount;
        balances[msg.sender] += amount;
    }
}