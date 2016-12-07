/*

Dylan Tucker
Arrays and Objects
Dec. 5, 2016

*/

//vars
//ARRAYS

var numbers = [1,2,3,4,5,6,7,8,9,1234567890];
var names = ["Senor TAN", "Zakattack", "Yolo Baggins", "Ohai", "Basic Jeff"];
var colors = ["black", "ron burgandy", "highlighter"];
var adj = ["smart", "special case", "yummy", "tiny whiny", "ferocious"];
var slang = ["Scrap", "beef", "dakine", "li dat", "pau hana"];

//OBJEX Trolool

var donut = {
  boolean : [true, false],
  toppings : ["Sprinkles", "Chocolate frosting", "o'hare air"],
  fillings : "jelly",
  shape : "square",
  count : 12
};

//Function

/*
  Create and name a function with one parameter. Create a for loop and set the length to the parameter's key with the value of the array.* Console.log a sentence for each value.

    Invoke your function and pass one of your objects

    *hint: use parameter.length

  // ----------------- //

  Create and name a function with one parameters.
  reate a conditional that checks the first parameter for true or false.
  If true, console.log a sentence that uses values from the parameter's strings and numbers.
  Else console.log a sentence that uses different values from the parameter that are strings and numbers.

    Invoke your function and pass one of your objects
*/

function Dylan(awesome) {
  console.log(awesome[1] + " " + awesome[2]);
}

Dylan(numbers);

function butWhy(one) {
  if (one == donut.boolean[0]) {
    console.log(donut.toppings[2] + " " + donut.toppings[1]);
  } else if (one == donut.boolean[1]) {
    console.log("There are " + donut.count + " donuts with " + donut.toppings[0]);
  }
}

butWhy(donut.boolean[1])