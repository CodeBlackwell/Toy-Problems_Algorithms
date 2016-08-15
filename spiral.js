/**
 * Create an array of arrays which spirals integers 
 * in a clockwise fashion.
 * [[1, 2, 3]
 *  [8, 9, 4]
 *  [7, 6, 5]]
 * 
 * @param rows int The number of rows desired in the spiral
 * @param columns int The number of coulumns desired in the spiral
 * 
 * @return Array The spiral matrix
*/



function spiral(rows, columns) {
  var count = 1;
  var currentRow = 0;
  var currentColumn = 0;
  var results = [];
  //The number of times All 4 functions were called to complete
  var currentRotation = 1;


  for (var i = 0; i < rows; i++) {
    var newArr = [];
    newArr.length = columns;
    results.push(newArr);
  }
console.log(results);
  function fullBoardCheck(matrix) {
    for (var q = 0; q < matrix.length; q++) {
      for (var t = 0; t < matrix[0].length; t++) {
        if (!matrix[q][t]) {
          return false;
        }
      }
    }
    return true;
  }

  function moveRight () {

    //After each rotation of movement functions, check if the matrix is complete
    if (fullBoardCheck(results)) {
      console.log('This is your requested spiral', results);
      //if the matrix is complete, return it 
      return results;
    } 
    //if this isnt the 1st time moveRight() is called, move current index to the appropriate undefined space
    if (currentRotation > 1) {
      currentRow++;
    }
    //start at the current CC (currentColumn)
    for (var r = currentColumn; r < columns; r++) {
      //if the current index is undefined
      if (!results[currentRow][currentColumn]) {
        console.log('moving Right');
        //set current index to equal count
        results[currentRow][currentColumn] = count;
        //move index to the right
        currentColumn++;
        //increase the count
        count++;
      }
    }
    // console.log("results after moving Right: ", results);

    //initialize Downward movement function.
    return moveDown();
  }

  function moveDown () {

    //move the current index to the appropriate undefined space
    currentColumn--;
    currentRow++;

    for (var c = currentRow; c < rows; c++) {
      //if the current index is undefined
      if (!results[currentRow][currentColumn]) {
        console.log("moving down");
        //set current index to equal count
        results[currentRow][currentColumn] = count;

        count++;
        currentRow++;
      }
    }
    // console.log("results after moving Down: ", results);

    //initialize leftward movement
    return moveLeft();
  }

  function moveLeft () {

    //move the current index to the appropriate undefined space
    currentColumn--;
    currentRow--;

    for (var y = currentColumn; y >= 0; y--) {
            //if the current index is undefined
      if (!results[currentRow][currentColumn]) {
        console.log("moving left");
        // set current index equal to count
        results[currentRow ][currentColumn] = count;
        count++;
        currentColumn--;
      }
    }
    // console.log("results after moving Left: ", results);
    
    //initialize upward movement
    return moveUp();
  }

  function moveUp () {

    //move the current index to the appropriate undefined space
    currentColumn++;
    currentRow--;

    for (var x = currentRow; x > 0; x--) {
      //if the current index is undefined
      if (!results[currentRow][currentColumn]) {
        console.log("moving up");
        results[currentRow][currentColumn] = count;
        count++;
        currentRow--;
      }
    }
    // console.log("results after moving Up: ", results);

    //make adjustments to current index needed to call moveRight()
    currentColumn++;
    currentRotation++;

    //initialize next movement function
    return moveRight();
  }
  
  moveRight();
}

spiral(13, 13);




