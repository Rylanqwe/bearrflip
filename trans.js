// import the web3 library
import Web3 from 'web3';

// create a new web3 instance
const web3 = new Web3(new Web3.providers.HttpProvider('https://testnet.solana.com'));

// get the address of the deployed smart contract
const contractAddress = '<contract-address>';

// abi of the smart contract
const abi = [{...}];

// create a new contract instance
const contract = new web3.eth.Contract(abi, contractAddress);

// function to initiate a coin flip
async function flipCoin() {
    // prompt user for bet amount
    const bet = prompt("Enter the bet amount in SOL:");

    // call the flipCoin function in the smart contract
    await contract.methods.flipCoin(bet).send({from: account, value: web3.utils.toWei(bet, 'ether')});
}
