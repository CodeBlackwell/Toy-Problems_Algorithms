function match(matchtype, left, right) {
    //initialize results variable
  var results = [];
    //initialize a switch statement to handle each type of match
  switch ( matchtype ) {
  case 'right':
    //first loop through the right array 
    for (var i = 0; i < right.length; i++) {
      //then loop through the left array for comparison
      for (var q = 0; q < left.length; q++) {
        var matches = 0;
        if (right[i] === left[q]) {
          //indicate that a match has been found for the currenct char
          matches++;
          var matchingIndices = [i, q];
          results.push(matchingIndices);
        } else if (q === left.length && matches === 0) {
          //push the current index with a -1 if no matches are found
          results.push([i, -1]);
        }
      }
    }
    break;

  case 'left':
    //first loop through the left array 
    for (var i = 0; i < left.length; i++) {
      //then loop through the right array for comparison
      for (var q = 0; q < right.length; q++) {
        var matches = 0;
        if (left[i] === right[q]) {
          //indicate that a match has been found for the currenct char
          matches++;
          var matchingIndices = [i, q];
          results.push(matchingIndices);
        } else if (q === right.length && !matches) {
          //push the current index with a -1 if no matches are found
          results.push([i, -1]);
        }
      }
    }
    break;

  case 'inner':
    //first loop through the right array 
    for (var i = 0; i < right.length; i++) {
      //then loop through the left array for comparison
      for ( var q = 0; q < left.length; q++) {
        if ( right[i] === left[q] ) {
          results.push([i, q]);
        }
      }
    }
    break;
  }

  return results;
}