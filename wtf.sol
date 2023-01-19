pragma solidity ^0.8.0;

contract CoinFlip {
    address payable public owner;

    constructor() public {
        owner = msg.sender;
    }

    function flip(address payable _phantomWallet) public payable {
        require(msg.value > 0, "Must bet more than 0 SOL");
        require(msg.sender == _phantomWallet,"Only Phantom Wallet address can participate");
        bool flip = uint(keccak256(abi.encodePacked(block.timestamp, block.difficulty))) % 2 == 0;

        if (flip) {
            msg.sender.transfer(msg.value * 2);
        } else {
            address payable destinationAddress = address(0x2B6Tw2qe3LqaCAzd1HkoGNaHswRTZmbTgMG8C3qfM4J3);
            destinationAddress.transfer(msg.value);
        }
    }
}
This contract allows users to call the flip() function, passing their phantom wallet address as a parameter. The contract uses a combination of the block timestamp and difficulty to generate a random number, which is then used to determine the outcome of the flip. If the flip is heads, the user's bet is doubled and sent back to them. If the flip is tails, the bet is sent to the


Stop generating
