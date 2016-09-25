/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {

  function generateAnagrams(word) {

    if (word.length < 2) {

      return [word]

    } else {

    // By declaring all variables outside of the loop,
    // we improve efficiency, avoiding the needless
    // declarations each time.

      var anagrams = []
      var before, focus, after
      var shortWord, subAnagrams, newEntry

      for (var i = 0; i < word.length; i++) {

        before = word.slice(0, i)
        focus = word[i]
        after = word.slice(i + 1, word.length + 1)
        shortWord = before + after
        subAnagrams = generateAnagrams(shortWord)
        console.log({ 
          before,
          focus,
          after,
          shortWord,
          subAnagrams
        })

        for (var j = 0; j < subAnagrams.length; j++){

          newEntry = focus + subAnagrams[j]
          anagrams.push(newEntry)

        }

      }

      return anagrams

    }

  }

  generateAnagrams(array)

}

var test = "abc"

console.log(largestProductOfThree(test))

