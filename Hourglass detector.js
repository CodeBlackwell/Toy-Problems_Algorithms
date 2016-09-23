function valid (index) {
    if(index) {
        return true;
    } else {
        return false;
    }
}

function hourglassDetector( arrayOfArrays ) {
  var champion = 0;
  for (var q = 0; q < arrayOfArrays.length; q++) {
    for (var p = 0; p < arrayOfArrays[q].length; p++) {
      //Validate all positions of the hourglass
      if ( arrayOfArrays[q][p] !== undefined && 
           arrayOfArrays[q][p + 1] !== undefined && 
           arrayOfArrays[q][p + 2] !== undefined && 
           //middle of hourglass
           arrayOfArrays[q + 1][p + 1] !== undefined &&
           //bottom row
           arrayOfArrays[q + 2][p] !== undefined &&
           arrayOfArrays[q + 2][p + 1] !== undefined &&
           arrayOfArrays[q + 2][p + 2] !== undefined) {
        //if all positions are valid, set the contending hourglass and compare
        var contender = 
                        //top row
                        arrayOfArrays[q][p] + 
                        arrayOfArrays[q][p + 1] + 
                        arrayOfArrays[q][p + 2] + 
                        //middle of hourglass
                        arrayOfArrays[q + 1][p + 1] +
                        //bottom row
                        arrayOfArrays[q + 2][p] +
                        arrayOfArrays[q + 2][p + 1] +
                        arrayOfArrays[q + 2][p + 2];
        if (contender > champion) {
          champion = contender;
        }  
      } else {
        console.log('invalid set');
      }
    }
  }
  console.log(champion);
}