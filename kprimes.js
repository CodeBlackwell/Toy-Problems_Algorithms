/**
*Given an integer k and a list arr of positive integers the function consec_kprimes 
*(or its variants in other languages) returns how many times in the sequence 
*arr numbers come up twice in a row with exactly k prime factors?
**/








factorcount = (arr) => {
  for(var i = 0; i < arr.length; i++) {
    
  }
} 

findPrimeFactors = (number) => {

  for(var i = 2; i < number; i++) {
    if(number % i === 0) {
      // [i].concat(number / i)
      return [i].concat(findPrimeFactors(number / i))
    }
  }
  return [number]
}

isPrime = (num) => {
  for(var i = 2; i < num; i++) {
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