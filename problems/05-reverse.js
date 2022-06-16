/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

// your code here
// let reverse = function (str) {
//   if(str.length === 0) {
//     return '';
//   }
//   return [str[str.length - 1], ...reverse(str.slice(0, str.length - 1))].join('');
// }
let reverse = function (str) {
  let newStr = '';
  if(str.length === newStr.length) {
    return '';
  }
  return newStr += str[str.length - 1] + reverse(str.slice(0 , str.length - 1));
}


console.log(reverse("house")); // "esuoh"

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
