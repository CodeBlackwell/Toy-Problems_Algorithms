var expect = require('chai').expect

function permute(word) {

  if(word.length === 0){
    return []
  }

  if (word.length === 1) {

    return [word];

  } 

  var anagrams = [];
  var before, focus, after;
  var shortWord, subAnagrams, newEntry;

  for (var i = 0; i < word.length; i++) {

    before = word.slice(0, i);
    focus = word.slice(i, i + 1);
    after = word.slice(i + 1, word.length + 1);
    shortWord = before.concat(after)
    subAnagrams = permute(shortWord);

    console.log({
        before,
        focus,
        after,
        shortWord,
        subAnagrams
    })

    for (var j = 0; j < subAnagrams.length; j++){

      newEntry = focus.concat(subAnagrams[j])
      anagrams.push(newEntry)
      // console.log({
      //     anagrams,
      //     newEntry
      // })

    }
  }
  return anagrams;
}



describe("#permute", function(){
  it("returns permutations of a given string", function(){
    expect(permute('')).to.eql([])
    expect(permute('a')).to.eql(['a'])
    expect(permute('ab')).to.eql(['ab', 'ba'])
    expect(permute('abc')).to.eql(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])
  })
  it("returns permutations of a given array", function(){
    expect(permute([])).to.eql([])
    expect(permute(['a'])).to.eql([['a']])
    expect(permute(['a', 'b'])).to.eql([['a', 'b'], ['b', 'a']])
    expect(permute(['a', 'b', 'c'])).to.eql([['a', 'b', 'c'], ['a', 'c', 'b'], ['b', 'a', 'c'], ['b', 'c', 'a'], ['c', 'a', 'b'], ['c', 'b', 'a']])
  })
})





// console.log(permute("abc"))
