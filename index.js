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
  const ageIsValid = true
} else {
  const ageIsValid = false
}
