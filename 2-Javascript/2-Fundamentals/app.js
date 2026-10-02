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
// console.log(developer["name"]); //Mohsineen
// console.log(developer.name);
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

// console.log(userName); //it will not work outside of the function

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
const totalCourseStudentsCount = 20;

// Valid, but less common in JavaScript:
const company_name = "Squad Coders Dev";

// PascalCase is normally used for classes/components.
const JavaScriptCourse = "Beginner Course";

// ========================================
//  REFERENCE COPY PROBLEM
// ========================================

const originalMarks = {
  math: 80,
};

const testVar = originalMarks;
// const testVar = { ...originalMarks }; // ... = spread operator

testVar.math = 70;

console.log(originalMarks.math); // 70 (wrong it should be 80 because we did not change it)
console.log(testVar.math); //70

// ========================================
//  SHALLOW COPY
// ========================================

// Spread creates a new top-level object.

const musaddiqMarks = {
  math: 80,
};

const muzammilMarks = {
  ...musaddiqMarks,
};

musaddiqMarks.math = 70;

console.log(musaddiqMarks); // { math: 70 }
console.log(muzammilMarks); // { math: 80 }

// Array shallow copy

const firstValues = [1, 2, 3];
const secondValues = [...firstValues];

secondValues.push(4);

console.log(firstValues); // [1, 2, 3]
console.log(secondValues); // [1, 2, 3, 4]

// ========================================
// 6. SHALLOW COPY LIMITATION
// ========================================

// Nested arrays and objects are still shared.

const userA = {
  name: "John",
  skills: ["HTML", "CSS", "JavaScript"],
};

const userB = {
  ...userA,
};

userB.skills.push("React"); //add karra hn array me ek or Value "React"

console.log(userA.skills); // React is also added here.
console.log(userB.skills);

// ========================================
// 7. DEEP COPY
// ========================================

// structuredClone creates a complete independent copy.

const developerA = {
  name: "John",
  designation: "Developer",
  skills: ["HTML", "CSS", "JavaScript", "React", "Python", "AI"],
};

// JSON.parse(JSON.stringify(developer))
const developerB = structuredClone(developerA);

developerB.skills.push("AI Agents");

console.log(developerA);
console.log(developerB);

// Older JSON deep-copy method:
// const developerB = JSON.parse(JSON.stringify(developerA));

// JSON copying does not properly support:
// undefined, Date, Map, Set, Symbol and functions.

// ======================================================
// 12. TYPE CHECKING
// ======================================================

const productPrice = "200";

console.log(typeof productPrice); // string

// ======================================================
// 13. TYPE CONVERSION
// ======================================================

//string to number

const mousePrice = "200"; //string
const convertMousePrice = Number(mousePrice); //200 blue color mean

// console.log(mousePrice);
// console.log(convertMousePrice);

// Decimal string to number

const keyboardPrice = "2.5";
const convertedKyeboardPrice = Number(keyboardPrice);

// console.log(keyboardPrice + 2); //2.52
// console.log(convertedKyeboardPrice + 2); //2.52

// parseFloat keeps the decimal part.

console.log(parseFloat("10.9")); // 10.9

// parseInt removes the decimal part.

console.log(parseInt("10.9")); // 10

//Invalid number conversion return Nan
// Nan stands for not a number
console.log(Number("asdfsadfasdf")); //Nan

// Value to string

const orderId = 123;
console.log(String(orderId)); // "123"
console.log(orderId.toString()); // "123"

// Value to boolean

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("Hello")); // true
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false

// ======================================================
// 14. TRUTHY AND FALSY VALUES
// ======================================================
// Common falsy values:
// false, 0, "", null, undefined, NaN

if (true) {
  console.log("it is true");
}

if (false) {
  console.log("it is false");
}

// ======================================================
// 16. ARITHMETIC OPERATORS
// ======================================================

console.log(5 + 5); // addition
console.log(5 - 5); // subtraction
console.log(5 * 5); // multiplication
console.log(5 / 5); // division
console.log(5 % 2); // remainder
console.log(2 ** 3); // power

// ======================================================
// 17. MATH OBJECT
// ======================================================

console.log(Math.PI);
console.log(Math.round(2.5)); // 3
console.log(Math.floor(2.9)); // 2
console.log(Math.ceil(2.1)); // 3
console.log(Math.pow(2, 3)); // 8 (2x2x2) = 8
console.log(Math.min(1, 5, 2, 20, 30, 40)); // 1
console.log(Math.max(1, 5, 2)); // 5

// Random number from 1 to 20

const randomNumber = Math.floor(Math.random() * 20) + 1;

console.log(randomNumber);
// ======================================================
// 18. STRINGS
// ======================================================

const firstName = "Muzammil";
const lastName = "Mustaqeem";

// String concatenation (plus karne ko)

const fullName = firstName + " " + lastName; //Muzammil Mustaqeem

//problem

const fullName2 = firstName + " '\n " + lastName; //Muzammil Mustaqeem

// ======================================================
// 19. TEMPLATE LITERAL
// ======================================================

const fullName3 = `${firstName} ${lastName}`;
console.log(fullName3); //Muzammil Mustaqeem

//line break
//single quotation4

// ======================================================
// 20. COMMON STRING METHODS
// ======================================================

const message = "javascript is easy to LEARN";

console.log(message.toUpperCase()); // JAVASCRIPT IS EASY TO LEARN
console.log(message.toLowerCase()); //javascript is easy to learn
console.log(message.includes("easy")); //true
console.log(message.includes("phone")); //false
console.log(message.replace("easy", "powerful")); //javascript is powerful to LEARN
console.log(message.length); //27

// ======================================================
// 19. COMPARISON OPERATORS
// ======================================================

// Always prefer strict comparison.

console.log(1 === 1); // true (match/data type bhi same hai)
console.log(1 === "1"); // false (because type is different)
console.log(1 !== "1"); // true (because it is checking the type also)

console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(5 <= 10); // true

// Avoid loose comparison when possible.
console.log(1 == "1"); // true because type conversion happens
console.log(1 != "1"); // false because type conversion happens

// ======================================================
// 20. IF, ELSE IF, AND ELSE
// ======================================================
// const customerLocation = "nazimabad";
// const customerLocation = "North Karachi";
// const customerLocation = "Orangi Town";

const customerLocation = "Qaidabad";
let deliveryCharges = 0;

if (customerLocation === "North Karachi") {
  deliveryCharges = 90;
} else if (customerLocation === "Orangi Town") {
  deliveryCharges = 300;
} else if (customerLocation === "Qaidabad") {
  deliveryCharges = 350;
} else {
  deliveryCharges = 200;
}

console.log(customerLocation);
console.log(deliveryCharges);

// ======================================================
// 21. LOGICAL OPERATORS
// ======================================================

// const laptopBrand = "HP";
const laptopBrand = "DELL";
const laptopRam = "8GB";

// AND: both conditions must be true.

if (laptopBrand === "HP" && laptopRam === "8GB") {
  console.log("Buy this laptop");
} else {
  console.log("I will not buy this laptop");
}

// OR: at least one condition must be true.

if (laptopBrand === "HP" || laptopBrand === "Dell") {
  console.log("Approved brand");
}

// NOT: reverses a boolean value.

const isOutOfStock = false;

if (!isOutOfStock) {
  console.log("Product is available");
}
