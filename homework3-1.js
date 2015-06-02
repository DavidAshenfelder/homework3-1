/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
    return array.forEach(callback);
};

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var total = 0;
          args.forEach(function(value, idx, list){
            total += value;
          });
          return total
    };

    // .. do something with each element of args
    // YOUR CODE HERE

console.assert( sum(1, 2, 3, 4, 5) === 15 )

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var avg = 0;
          args.forEach(function(value, idx, list){
            avg += value/args.length;
          });
          return avg

    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var lar = 0

    // args.forEach(function(value, idx, list) {
    for (var i = 0; i < args.length; i++) {

      if (args[i] > lar) {
        lar = args[i]
      };
    };
    return lar

    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var long = ""
    var str = args[""]
    args.forEach(function(str) {
      if (str.length > long.length) {
        long = str;
      }
    });

    return long
    // .. do something with each element of args
    // YOUR CODE HERE
}

 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()
    var celeb = ["jim", "jennifer", "mark", "robert"];
     celeb.sort();


// .concat()
    var celeb = ["robert", "downey", "jr"]
      celeb.concat()

// .indexOf()
    var food = ["bread", "fruit", "meat"]
      food.indexOf()

// .split()
    var food = ["bread", "fruit", "meat"]
      food.split()

// .join()
    var food = ["bread", "fruit", "meat"]
      food.join()
// .pop()
    var food = ["bread", "fruit", "meat"]
      food..pop()
// .push()
    var food = ["bread", "fruit", "meat"]
      food.push()
// .slice()
    var food = ["bread", "fruit", "meat"]
      food.slice()
// .splice()
    var food = ["bread", "fruit", "meat"]
      food.splice()
// .shift()
    var food = ["bread", "fruit", "meat"]
      food.shift()
// .unshift()
    var food = ["bread", "fruit", "meat"]
      food.unshift()
// .filter()
    var food = ["bread", "fruit", "meat"]
      food.filter()
// .map()
    var food = ["bread", "fruit", "meat"]
      food.map()
