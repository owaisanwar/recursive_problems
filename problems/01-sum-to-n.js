/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

input : num;
goal : return sum of all num to that null for -num;
Examples:

sumToN(5) // returns 15
0 + 1 + 2 + 3 + 4 + 5;
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/

// your code here

let sumToN = (num) => {
  if (num === 0) {
    return 0;
  }
  if (num < 0) {
    return null;
  }
  return num + sumToN(num - 1);
}
console.log(sumToN(-8))  // returns null

console.log(sumToN(5)) // returns 15
console.log(sumToN(9))  // returns 45
console.log(sumToN(1))  // returns 1


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
