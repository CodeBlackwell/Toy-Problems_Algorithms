/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {

  function swap(chars, i, j) {
    var tmp = chars[i]
    chars[i] = chars[j]
    chars[j] = tmp
  }

  function getAnagrams(input) {
      var counter = [],
          anagrams = [],
          chars = input.split(''),
          length = chars.length,
          i

      for (i = 0; i < length; i++) {
          counter[i] = 0
      }

      anagrams.push(input)
      i = 0
      while (i < length) {
          if (counter[i] < i) {
              swap(chars, i % 2 === 1 ? counter[i] : 0, i)
              counter[i]++
              i = 0
              anagrams.push(chars.join(''))
          } else {
              counter[i] = 0
              i++
          }
      }

      return anagrams
  }

  return getAnagrams(array)

}

var test = "abc"

console.log(largestProductOfThree(test))

