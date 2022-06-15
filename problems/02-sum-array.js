/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:


input :  array of integers;
goal return sum;

sumArray([1, 2, 3]); //  6

sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

// your code here
// Base Case : when array is empty (len === 0);
// take every arr element and then move toward last ele;

function sumArray(arr) {
  if(arr.length === 0) {
    return 0;
  }
  return arr[0] +  sumArray(arr.slice(1));

}
console.log(sumArray([1, 2, 3])); //  6
console.log(sumArray([0, 1, -3])); //  -2
console.log(sumArray([1, 2, 3, 4, 5])); // 15

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
