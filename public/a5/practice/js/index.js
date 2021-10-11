alert('Hello World!');
console.log('Hello World!');
//---------------------------------------------------------
console.log('Variables and constants');
var global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
const constant1 = global1 + functionScoped - blockScoped;
console.log(global1);
console.log(functionScoped);
console.log(blockScoped);
console.log(constant1);
//---------------------------------------------------------
console.log('Variable types')
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = 'Hello World!';
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;
console.log(isNumber);
console.log(isString);
console.log(isBoolean);
//---------------------------------------------------------
console.log('Boolean');
let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointNumber !== 321.432;
let false3 = numberVariable < 100;
console.log(Boolean);
console.log(true1);
console.log(false1);
console.log(false2);
console.log(true2);
console.log(true3);
console.log(true4);
console.log(true5);
console.log(false3);
//---------------------------------------------------------
console.log("if else");
if(true1){
    console.log(true);
}

if(!false1){
    console.log("!false1");
}else{
    console.log("false1");
}
//---------------------------------------------------------
console.log('Ternary');
const loggedIn = true;
const greeting = loggedIn? "Welcome!" : "Please login";
console.log(greeting);
//ES5 Function----------------------------------------------
function add (a, b){
    return a + b;
}
const twoPlusFour = add(2,4);
console.log(twoPlusFour);
//ES6 Function-----------------------------------------------
const substract = (a, b) =>{
    return a - b;
}
const threeMinusOne = substract(3,1);
console.log(threeMinusOne);
//ES6 Function feature: returns stmt is optional----------------------
const multiply = (a,b) => a * b;
const fourTimesFive = multiply(4,5);
console.log(fourTimesFive);
//ES6 Function feature: parenthesis is optional if the function have only one parameter---
const square = a =>a * a;
const plusOne= a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);
//Array---------------------------------------------------------
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [functionScoped, blockScoped, constant1, numberArray1, stringArray1];
console.log(numberArray1);
console.log(stringArray1);
console.log(variableArray1);
//---------------------------------------------------------
console.log("Array index and length");
const length1 = numberArray1.length;
const index1 = numberArray1.indexOf(1);
console.log(length1);
console.log(index1);
//---------------------------------------------------------
console.log("Add data to array");
numberArray1.push(6);
stringArray1.push("string3");
console.log(numberArray1);
console.log(stringArray1);
//---------------------------------------------------------
console.log("Remove data to array");
numberArray1.splice(2,1);
numberArray1.splice(1,1);
//---------------------------------------------------------
console.log("foor loops");
for(let i = 0; i < stringArray1.length; i++){
    const string1 = stringArray1[i];
    console.log(string1);
}
//---------------------------------------------------------
console.log("-_-");
console.log("Map");
const squares = numberArray1.map(square);
const cubes = numberArray1.map(a => a * a * a);
//---------------------------------------------------------
console.log("Find");
console.log("this is numberArray1: ", numberArray1);          //[1,4,5,6]
const four = numberArray1.find(a => a === 4);
console.log("find ele in numberArray1 === 4: ", four);
console.log("this is stringArray1: ", stringArray1);
const string3 = stringArray1.find(a => a === 'string3');
console.log("find ele in stringArray1 === 'string3': ",string3);
//---------------------------------------------------------
console.log("Find index");
console.log("this is numberArray1: ", numberArray1);          //[1,4,5,6]
const fourIndex = numberArray1.findIndex(a => a === 4);
console.log("index of ele === 4 is: ", fourIndex, " in numberArray1. ;>");
console.log("this is stringArray1: ", stringArray1);
const string3Index = stringArray1.findIndex(a => a === 'string3');
console.log("index of ele === string3 is: ", string3Index, " in stringArray1. ;>> ");
//---------------------------------------------------------
console.log("Filter");
console.log("this is numberArray1: ", numberArray1);
const numbersGreaterThan2 = numberArray1.filter(a => a>2);
console.log("these numbers are greater than two: ", numbersGreaterThan2);
const evenNumber = numberArray1.filter(a => a%2 === 0);
console.log("these numbers are even numbers: ", evenNumber);
const oddNumber = numberArray1.filter(a => a%2 !== 0);
console.log("these numbers are odd numbers: ", oddNumber);
console.log("=-=");
//---------------------------------------------------------
//string concatenation is used:
console.log("Template strings with ``(backtick)");
const five = 2 + 3;
const result1 = "2+3 = " + five;
console.log(result1);
//string interpolation with ` `:
const result2 = `2 + 3 = $(2+3)`;
console.log(result2);

const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);

const loggedLn = false;
const greeting2 = `Logged in: ${loggedIn ? "Yes":"No"}`;
//---------------------------------------------------------
document.write("Welcome to JavaScript!");
