/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
const newID = oldID + 1000000000

let ageIsValid;

if (Number.isInteger(currentAge)) {
  ageIsValid = true
} else {
  ageIsValid = false
}

const randomNumber = Math.random(0, 20)

const randomInteger = Math.floor(randomNumber)

const randomUserID = 1000000001 + randomInteger
console.log(randomUserID)
