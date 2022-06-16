/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.
paramenters : startNum, endNum
[startNum .... endNum];
baseCase : arr.length - 1 === endNum ;
recursiveCase : arr.length < endNum;
arr.psuh(startNum , startNum + 1);
Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/
// startNum , startNum + 1, startNum + 1,

// your code here
let range = (startNum, endNum) => {
    if(startNum === endNum || startNum > endNum) {
      return [];
    }
    return [startNum, ...range(startNum + 1, endNum)];
}
console.log(range(1, 5)); // [1, 2, 3, 4]
console.log(range(3, 4)); // [3]
console.log(range(7, 6)); // []


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
