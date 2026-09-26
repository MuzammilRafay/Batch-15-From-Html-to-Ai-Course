// console.log("working");

// ========================================
// 1. VARIABLES
// ========================================

// A variable stores a value with a name.
let store = null;

// store = "hello"; //string or text
// store = 1234; //number
// store = undefined;
// store = true; //boolean
// store = false; //boolean
// store = null;

// console.log(store);

// ========================================
// 2. PRIMITIVE DATA TYPES
// ========================================

// Primitive values:
// string, number, boolean, undefined, null, bigint and symbol.

// Primitive values are immutable (not changeable).
// Assigning a new value replaces the previous value.

let mohsineen = 123; //123
mohsineen = 344; //344

// console.log(mohsineen);

// ========================================
// 3. REFERENCE DATA TYPES
// ========================================

// Reference types can store multiple values.
// Examples: arrays, objects and functions.

//Array
let skills = ["Hafiz", "Naat", "Cricket", "Teaching"];

// console.log(skills);
// console.log(skills[0]); //Hafiz

//Object
const developer = {
  name: "Mohsineen",
  designation: "Student",
  skills: ["Hafiz", "Naat", "Cricket", "Teaching"],
};

// console.log(developer);
// console.log(developer["name"]);
// console.table(developer);

// let student=0
// const student=0
// var student=0

// ========================================
//  LET
// ========================================

// let is block-scoped.
// Its value can be reassigned.

// scope = {}

{
  let status = "Pending";
  status = "Completed";
  // console.log(status);
}
// console.log(status); //error

// Error: status is not available outside the block.

// ========================================
//  CONST
// ========================================

// const is block-scoped.
// It cannot be reassigned.

{
  const brandName = "Apple";
  // brandName = "Kuch Or";
}
// console.log(brandName);
// cannot accesss this variable outside of the block scoped

// ========================================
// GLOBAL VARIABLES
// ========================================

const globalMessage = "Available everywhere below";

{
  // console.log(globalMessage);
}

function showMessage() {
  console.log(globalMessage);
}

// showMessage();

// ========================================
//  VAR
// ========================================

// var is function-scoped, not block-scoped.
// Avoid var in modern JavaScript.
// ye bs function wale bracket ko manta hai is ke bahar ap use nai karsakte

{
  var headphone = "Sony";
}

console.log(headphone); // Works outside the block.

function createUser() {
  var userName = "John";

  // console.log(userName); // Works inside the function.
}

// createUser();

console.log(userName); //it will not work outside of the function

// ========================================
//  BEST PRACTICE
// ========================================

// Use const by default.
// Use let when the value needs to change.
// Avoid var.

const applicationName = "Learning JavaScript";

let currentLesson = 1;
currentLesson = 2;

console.log(applicationName);
console.log(currentLesson);

// ======================================================
// VARIABLE NAMING
// ======================================================

// JavaScript is case-sensitive.
const studentname = "asdasd"; //ye alag variable ha
const studentName = "Ali"; //ye alag vairable ha
const StudentName = "Ahmed";

// console.log(studentName);
// console.log(StudentName);

// Recommended style: camelcase
const companyName = "Squad Coders Dev";
const totalCourseStudents = 20;

// Valid, but less common in JavaScript:
const company_name = "Squad Coders Dev";

// PascalCase is normally used for classes/components.
const JavaScriptCourse = "Beginner Course";
