import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
const newNumbers = numbers.map((x) => x * 2);
console.log(newNumbers);

//////Filter - Create a new array by keeping the items that return true.
const filterAns = numbers.filter((num) => num < 10);
console.log(filterAns);

//Reduce - Accumulate a value by doing something to each item in an array.
var reduceAns = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log(reduceAns);

////Find - find the first item that matches from an array.
const findAns = numbers.find((num) => num > 10);
console.log(findAns);
////FindIndex - find the index of the first item that matches.
const findIndexAns = numbers.findIndex((num) => num > 10);
console.log(findIndexAns);
