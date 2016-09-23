function sumOf100Primes(){
  var isPrime = function (value) {
    for (var i = 2; i < value; i++) {
      if (value % i === 0) {
        return false;
      }
    }
    return value > 1;
  };


  
  var primes = [];
  var count = 0;
  do {
    if (isPrime(count)) {
      primes.push(count);  
    }
    count++;
  } while (primes.length);
  return primes;
}





do {
  if ( isPrime(count) ) {
    result.push(count);
    count++;
  } 
}
while (result.length < 100);