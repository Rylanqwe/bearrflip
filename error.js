// function to handle errors
function handleError(error) {
    console.error(error);
    alert(`An error occurred: ${error.message}`);
}

// function to initiate a coin flip
async function flipCoin() {
    try {
        // prompt user for bet amount
        const bet = prompt("Enter the bet amount in SOL:");

        // call the flipCoin function in the smart contract
        await contract.flipCoin(bet)
    } catch (error) {
        handleError(error);
    }
}

// function to connect the user's wallet
async function connectWallet() {
    try {
        // check if the user's browser supports Solana
        if (!Solana.isSupported()) {
            throw new Error("Solana is not supported by your browser");
        }

        // request the user to connect their wallet
        const wallet = await Solana.connect();
        // get the user's account
        const account = await wallet.getAccount();

        // approve the contract
        await contract.approve(account)
        console.log("Wallet connected and contract approved")
    } catch (error) {
        handleError(error);
    }
}
