/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  var length = array.length
  array = array.sort(function(a, b) { return a - b })
  return array[length - 1] * array[length - 2] * array[length - 3]

}

var test = [1, 3, 2, 6, 7]

console.log(largestProductOfThree(test))
