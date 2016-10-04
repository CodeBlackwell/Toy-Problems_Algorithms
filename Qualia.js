//return all children from a directed graph


// aNode = {
//   integer: x
//   children: []
// }

function treeNodes(node) {
  var results = []
  results.push(node.id)

  function gather(aNode) {

    for(var i = 0; i < aNode.children.length; i++) {
      
    }
  }

  return results
}




var testNode4 = {
  id: 4,
  children: []
}

var testNode3 = {
  id: 5,
  children: []
}

var testNode1 = {
  id: 2,
  children: []
}

var testNode2 = {
  id: 3,
  children: [testNode3, testNode4]
}

var testNode = {
  id: 1,
  children: [testNode1, testNode2]
}

console.log(treeNodes(testNode).toString())