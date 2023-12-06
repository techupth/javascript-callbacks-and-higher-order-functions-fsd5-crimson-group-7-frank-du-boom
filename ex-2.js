//Exercise #2: At Least Five Function

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

function atLeastFive(array, operation) {
  // Start coding here
  let countScore = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 70) {
      countScore = countScore + 1;
    }
  }
  return operation(countScore);
}

// Using `atLeastFive` function here
function amountCheck(amount) {
  if (amount >= 5) {
    return true;
  } else {
    return false;
  }
}

let scoreRoom1Result = atLeastFive(studentScoresRoom1, amountCheck);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, amountCheck);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, amountCheck);
console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
