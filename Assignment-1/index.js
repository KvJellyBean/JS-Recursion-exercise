// Assignment 1 - Fibonacci
// Iteration Function
function fibs(number) {
  let arr = [0, 1];
  // Base case
  if (number === 0) return [];
  else if (number === 1) return [arr[0]];
  else if (number === 2) return [arr[0], arr[1]];

  for (let i = 2; i < number; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
}

// Recursive Function
// function fibsRec(number) {
//   if (number === 0) return [];
//   else if (number === 1) return [0];
//   else if (number === 2) return [0, 1];
//   else
//     return [
//       ...fibsRec(number - 1),
//       fibsRec(number - 1)[number - 3] + fibsRec(number - 1)[number - 2],
//     ];
// }

// Another way
function fibsRec(number, arr = [0, 1]) {
  if (arr.length >= number) return arr.slice(0, number);

  let nextFibonacci = arr[arr.length - 2] + arr[arr.length - 1];
  arr.push(nextFibonacci);
  return fibsRec(number, arr);
}

console.log(fibs(0)); // []
console.log(fibs(1)); // [0]
console.log(fibs(2)); // [0, 1]
console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

console.log(fibsRec(0)); // []
console.log(fibsRec(1)); // [0]
console.log(fibsRec(2)); // [0, 1]
console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
