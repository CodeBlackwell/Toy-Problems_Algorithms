function blastoff () {
  for(var i = 10; i > -1; i--) {
    console.log(i)
  }
  console.log('Blastoff')
}
// blastoff()

function recuBlastoff(i) {
  i = typeof i === 'number' ? i : 10
  console.log(i)
  if(i === 0){
    console.log('Blastoff')
    return
  }
  recuBlastoff(i - 1)
}
// recuBlastoff()



function map(array, callback) {
  var results = [];
  for(var i = 0; i < array.length; i++) {
    results.push(callback(array[i]))
  }
  return results
}


function recursiveMap(array, callback, i) {
  if(i > array.length - 1) {
    return []
  }
  i = typeof i === 'number' ? i : 0
  return [callback(array[i])].concat(recursiveMap(array, callback, i + 1))
}

test = [1, 2, 3, 4, 5]




function recMap2(array, callback) {
  if(array.length === 0) {
    return []
  }
  console.log(array)
  return [callback(array[0])].concat(recMap2(array.slice(1), callback))
}


// console.log(recursiveMap(test, function(a) {
//   return a * 3
// }))

console.log(recMap2(test, function(a) {
  return a * 3
}))




