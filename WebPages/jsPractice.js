//  Exercise 1
// On the line below, create a variable named onMarsRightNow and assign it the boolean value of false
// For more on variables, see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables

let onMarsRightNow = false;



// Exercise 2
// For more on arrays, see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
// Create a variable named fruits and assign it an array of strings containing the following fruits.
// mango, banana, guava, kiwi, and strawberry.

let fruits = ["mango", "banana", "guava", "kiwi", "strawberry"]



// Exercise 3
// Create a variable named vegetables and assign it an array of strings containing the following vegetables.
// eggplant, broccoli, carrot, cauliflower, and zucchini

let vegetables = ["eggplant", "broccoli", "carrot", "cauliflower", "zucchini"]


// Exercise 4
// Create a variable named numbers and assign it an array of numbers, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Exercise 5
// Add the string "tomato" to the end of the fruits array. 
// *Hint* Recommend finding and using a built-in JS operation to add to an array rather than recreating the array.

fruits.push("tomato")


// Exercise 6
// add the string "tomato" onto the end of the vegetables array. 
// Recommend using the built-in JS operation to add to an array.

vegetables.push("tomato")


// Exercise 7
// Given the array of numbers defined below, reverse the array of numbers that you created above. 
var someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

someNumbers.reverse()


// Exercise 8
// Sort the vegetables in alphabetical order. Recommend finding a way to sort the array with a built-in method

vegetables.sort()


// Exercise 9
// Write the code necessary to sort the fruits in reverse alphabetical order

fruits.sort().reverse()


// Exercise 10
// Write the code necessary to produce a single array that holds all fruits then all vegetables in the order as they were sorted above.
// Assign the result to a variable named fruitsAndVeggies. 
// *hint* the search engine search here would be "how to combine two arrays in JavaScript", for example.


let fruitsAndVeggies = fruits.concat(vegetables)



// Exercise 11
// Write a function definition for a function named addOne that takes in a number and returns that number plus one

let addOne = num => num + 1;



// The next exercises will be focusing on basic operators in JS
// Exercise 12
// Write a function definition named isPositive that takes in a number and returns true or false if that number is positive.
// Think about the definition of a number that is positive. 
// Is 5 positive? Is 0.25 positive? Is 0.00001 positive? Is -0.001 positive? 
// Is zero itself positive? What about infinity? What about negative infinity?
// Documentation for comparison operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#relational_operators
// HINT - here are example functions using comparison operators https://gist.github.com/ryanorsinger/e843c7d0966993bd8193f0afabe16ae0
// If you get stuck, be sure to check the example code and documentation listed above

// let isPositive = num => (num % 2 !== 0) ? true : false

// function isPositive (num) {
//     if(num % 2 !== 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

function isPositive(i){
    if(i>0){
      return true;
    }
    return false;
  }

  



  // Exercise 13
// Write a function definition named isNegative that takes in a number and returns true or False if that number is negative.

function isNegative(i){
    if(i<0){
      return true;
    }
    return false;
  }

  

// Exercise 14
// Write a function definition named isOdd that takes in a number and returns true or false if that number is odd.

let isOdd = num => (num % 2 !== 0) ? true : false;



// Exercise 15
// Write a function definition named isEven that takes in a number and returns true or false if that number is even.

let isEven = num => (num % 2 === 0) ? true : false;



// Exercise 16
// Write a function definition named identity that takes in any input and returns that input. Don't overthink this one!

let identity = id => id;





// Exercise 17
// Write a function definition named isPositiveOdd that takes in a number and returns true or false if the value is both greater than zero and odd

let isPositiveOdd = num => (num > 0 && num % 2 !== 0) ? true : false;



// Exercise 18
// Write a function definition named isPositiveEven that takes in a number and returns true or false if the value is both greater than zero and even


let isPositiveEven = num => (num > 0 && num % 2 === 0) ? true : false;





// Exercise 19
// Write a function definition named isNegativeOdd that takes in a number and returns true or false if the value is both less than zero and odd.


let isNegativeOdd = num => (num < 0 && num % 2 !== 0) ? true : false;




// Exercise 20
// Write a function definition named isNegativeEven that takes in a number and returns true or false if the value is both less than zero and even.

let isNegativeEven = num => (num < 0 && num % 2 === 0) ? true : false;



// Exercise 21
// Write a function definition named half that takes in a number and returns half the provided number.

let half = num => (num * .5);




// Exercise 22
// Write a function definition named double that takes in a number and returns double the provided number.


let double = num => (num * 2);



// Exercise 23
// Write a function definition named triple that takes in a number and returns triple the provided number.

let triple = num => (num * 3);

