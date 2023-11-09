// Conditional statements require an assertion inside the parenthesis to determine
// whether the code block (between { and }) should be run. If the assertion equates to
// `true`, then the code is run. Otherwise it is not, and if the conditional statement has
// an `else` clause, then that block of code is run instead.
//
// Take a look at the comparisons operators documentation again: https://www.w3schools.com/js/js_comparisons.asp
// and consider the "returns" column of each example. That's the key to which way the if-statement
// will go.
//
// This task requires you to use examples from that documentation to write if statements
// which either use a boolean value in the assertion, or compare two values to return
// either true or false.

// Task 1: Below is a variable which stores the word count of a blog post I'm writing.
//         Write an if-statement which logs (console.log) "Get writing!" if the number is 0.
const wordCount = 0;

if (wordCount === 0) {
  console.log("Get writing!");
}

// Task 2: Use the "and" logical operator (&&) to chain two assertions together. Below are two
//         variables; one which stores the current temperature, and one which stores whether
//         someone has gone for a run today. Write an if-statement which prints "Go for a run!"
//         if the current temperature is greater than 10, and the goneForARun is false.
const currentTemperature = 15;
const goneForARun = false;

if (currentTemperature > 10 && goneForARun === false) {
  console.log("Go for a run!");
}

// Task 3: Using .length() to get the length of a string and the `name` variable below,
//         write an "else if" statement which prints the following:
//         * "You have a long name!" if the length of the name is greater than 10 characters long
//         * "You have a short name!" if the length of the name is less than 5 characters long
//         * "You have a medium length name!" if neither of the other two assertions is true
//
// Documentation: https://www.w3schools.com/js/js_if_else.asp

const name = "marry";

if (name.length > 10) {
  console.log("You have a long name!");
} else if (name.length < 5) {
  console.log("You have a short name!");
} else {
  console.log("You have a medium length name!");
}
