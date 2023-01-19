import { Connection } from '@solana/web3.js'

const connection = new Connection('https://testnet.solana.com')
const account = new Account() //replace with user's account

// function to initiate a coin flip
async function flipCoin(bet) {
    // create the flipCoin transaction
    const transaction = new SystemProgramOperation(account)
      .transfer(bet)
      .freeze()
      .transact()
      .then(() => {
        console.log("Coin flip transaction sent")
      })
      .catch(err => {
        console.error(err)
      });

    // send the transaction
    const response = await connection.sendTransaction(transaction)
    console.log("Transaction response: ", response)
  }
