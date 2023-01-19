pragma solidity ^0.8.0;

contract CoinFlip {
    // mapping to store the user's bets
    mapping(address => uint) public bets;
    // event to notify the outcome of the coin flip
    event FlipOutcome(address user, bool outcome);

    // function to initiate a coin flip
    function flipCoin(uint bet) public payable {
        // check if the user has enough balance to place the bet
        require(msg.value >= bet, "Insufficient balance");

        // generate a random number
        uint randomNumber = uint(keccak256(abi.encodePacked(block.timestamp, block.difficulty)));

        // determine the flip result
        bool result = randomNumber < (2**256 / 2);

        // update the user's bet
        bets[msg.sender] = bet;

        // notify the outcome of the coin flip
        emit FlipOutcome(msg.sender, result);

        // handle the payout
        if (result) {
            msg.sender.transfer(2 * bet);
        }
    }

    // function to get the user's bet
    function getBet() public view returns (uint) {
        return bets[msg.sender];
    }
}
