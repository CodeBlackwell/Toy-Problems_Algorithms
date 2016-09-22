/**
*Given an integer k and a list arr of positive integers the function consec_kprimes 
*(or its variants in other languages) returns how many times in the sequence 
*arr numbers come up twice in a row with exactly k prime factors?
**/

const consec_Kprimes = (k, arr) => {
  return doubleOccurence(arr.map(findPrimeFactors), k)
}

console.log(consec_Kprimes(2, [10123, 10122, 10132, 10129, 10145, 10148, 10147, 10135, 10146, 10134]))

//Returns an integer indicating how many double occurences of k were found within arr
function doubleOccurence(arr, k) {
  let result = 0
  for(let i = 0; i < arr.length; i++) {
    if(arr[i + 1]) {
      if(arr[i].length === k && arr[i + 1].length === k ) {
        result++
      }
      
    }
  }
  return result
}


//returns an [] of the prime factors of input
function findPrimeFactors(number) {

  for(let i = 2; i < number; i++) {
    if(number % i === 0) {
      return [i].concat(findPrimeFactors(number / i))
    }
  }
  return [number]
}

//return true boolean of prime numbers
isPrime = (num) => {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false
    }
  }
  return true
}


const { expect } = require('chai')

describe('#isPrime', function() {
  it('determines if the number is prime', function() {
    expect(isPrime(1)).to.equal(true)
    expect(isPrime(2)).to.equal(true)
    expect(isPrime(10)).to.equal(false)
    expect(isPrime(20)).to.equal(false)
    expect(isPrime(131)).to.equal(true)
    expect(isPrime(150)).to.equal(false)
  })
})

describe('#consec_Kprimes', function(){
  it('returns the number of times 2 numbers consecutively have k prime factors', function(){
      expect(consec_Kprimes(4, [10175, 10185, 10180, 10197])).to.equal(3)
      expect(consec_Kprimes(2, [10123, 10122, 10132, 10129, 10145, 10148, 10147, 10135, 10146, 10134])).to.equal(2)
  }) 
})

describe('#findPrimeFactors', function() {
  it('returns the prime factors of an integer', function() {
    expect(findPrimeFactors(1)).to.eql([1])
    expect(findPrimeFactors(2)).to.eql([2])
    expect(findPrimeFactors(3)).to.eql([3])
    expect(findPrimeFactors(4)).to.eql([2, 2])
    expect(findPrimeFactors(10)).to.eql([2, 5])
    expect(findPrimeFactors(25)).to.eql([5, 5])
    expect(findPrimeFactors(42)).to.eql([2, 3, 7])
    expect(findPrimeFactors(100)).to.eql([2, 2, 5, 5])
  })

})


// findPrimeFactors(1) => [1]
// findPrimeFactors(2) => [2]
// findPrimeFactors(3) => [3]
// findPrimeFactors(4) => [2, 2]