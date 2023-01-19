// get reference to the flip button
const flipButton = document.getElementById("flip-button");

// function to initiate a coin flip
async function flipCoin() {
    // prompt user for bet amount
    const bet = prompt("Enter the bet amount in SOL:");

    // call the flipCoin function in the smart contract
    await contract.flipCoin(bet)
}

// add an event listener to the flip button to initiate the coin flip when clicked
flipButton.addEventListener("click", flipCoin);
