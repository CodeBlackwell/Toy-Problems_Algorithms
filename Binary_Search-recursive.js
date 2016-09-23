function binarySearch (array, target, min, max) {
  var min = min ? min : 0;
  var max = max ? max : array.length - 1;
  var midpoint = Math.floor((min + max) / 2);
  //round up in case of a decimal
  var guess = array[midpoint];
 
  switch (true) {
  case (max < min):
    return -1;
    break;
  case (guess === target):
    return midpoint;
    break;
  case (guess > target):
    max = midpoint;
    return binarySearch(array, target, min, max);
    break;
  case (guess < target):
    min = midpoint;
    return binarySearch(array, target, min, max);
    break;
  }
}