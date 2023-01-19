// get reference to the result element
const resultElement = document.getElementById("result");

// function to display the flip result
async function displayFlipResult() {
    // query the smart contract for the flip result
    const flipResult = await contract.getFlipResult()
    // query the smart contract for the user's balance
    const balance = await contract.getBalance()

    // update the result element to display the flip result and outcome
    resultElement.innerHTML = `Flip Result: ${flipResult} <br> Balance: ${balance}`;
}

// function to listen to the FlipOutcome event and update the UI
async function listenToEvents() {
    const events = await contract.getPastEvents("FlipOutcome", {
        fromBlock: 0
    });
    events.forEach(event => {
        if (event.returnValues.user === account.publicKey) {
            resultElement.innerHTML = `Flip Result: ${event.returnValues.outcome} <br> Balance: ${balance}`;
        }
    });
}

// call the listenToEvents function to listen to FlipOutcome events
listenToEvents()
