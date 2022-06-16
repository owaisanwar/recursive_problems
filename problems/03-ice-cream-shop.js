/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.
// PseudoCode practise by me:

Examples:
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
iceCreamShop(['moose tracks'], 'moose tracks'); // true
iceCreamShop([], 'honey lavender'); // false
***********************************************************************/
['vanilla' , 'xyz'];


// your code here
let iceCreamShop = function (flavors, favorite) {
  console.log(flavors);
  if (flavors.length === 0) {
    return false;
  }
  if(flavors[0] === favorite) {
    return true;
  }

  return flavors[0] === favorite ||  iceCreamShop(flavors.slice(1), favorite)

}
console.log(iceCreamShop(['vanilla', 'strawberry'], 'blue moon')); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = iceCreamShop;
} catch (e) {
  module.exports = null;
}
