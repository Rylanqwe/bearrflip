// get references to the flip button and result elements
const flipButton = document.getElementById("flip-button");
const result = document.getElementById("result");

// create a function to generate a random number between 0 and 1
function generateRandomNumber() {
  return Math.random();
}

// create a function to perform the coin flip and update the result
function flipCoin() {
  // generate a random number
  const randomNumber = generateRandomNumber();

  // use the random number to determine the flip result
  if (randomNumber < 0.5) {
    result.innerHTML = "Heads";
  } else {
    result.innerHTML = "Tails";
  }
}

// add an event listener to the flip button to perform the coin flip when clicked
flipButton.addEventListener("click", flipCoin);
