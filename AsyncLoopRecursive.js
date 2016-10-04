"use strict"

var expect = require('chai').expect

function asyncForLoop(params, callback, i) {
  i = typeof i === 'number' ? i : 0
  //base case
  if(i === params.length){
    return;
  }

  //call our async function
  return new Promise(callback(params[i])).then(function(model) {
    //recurse
    return asyncForLoop(params, callback, i+1);
  });
}


function addTwo(num){
  return num + 2
}


describe("#asyncForLoop", function(){
  it('asynchronously calls a function over an array', function(){
    expect(asyncForLoop([], addTwo)).to.equal([])
  })
})












    function asyncLoop(iterations, func, callback) {
    var index = 0;
    var done = false;
    var loop = {
        next: function() {
            if (done) {
                return;
            }

            if (index < iterations) {
                index++;
                func(loop);

            } else {
                done = true;
                callback();
            }
        },

        iteration: function() {
            return index - 1;
        },

        break: function() {
            done = true;
            callback();
        }
    };
    loop.next();
    return loop;
}


///// Testing / Usage

asyncLoop(iterations, function(loop) {
    someFunction(1, 2, function(result) {

        // log the iteration
        console.log(loop.iteration());

        // Okay, for cycle could continue
        loop.next();
    })
    
  },
    function(){console.log('cycle ended')}
);


