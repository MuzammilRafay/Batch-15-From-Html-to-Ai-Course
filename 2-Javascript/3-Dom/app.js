const taskList = document.querySelector(".card-title");

taskList.innerText = "My Name is Muzammil";
console.log(taskList);

// DOM stands for Document Object Model.
// javascript uses the dom to read & change the HTML.

// ======================================================
// 1. ACCESS THE DOCUMENT
// ======================================================

// console.log(document); //your html convert into one single object it is called dom

// document.body.innerHTML = "<h1>heading 1</h1>";

// console.log(document.head);
// console.log(document.body);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.characterSet); //UTF-8
// console.log(document.contentType); //text/html

// ======================================================
// 2. SELECT ONE ELEMENT
// ======================================================

const taskBtn = document.querySelector("#task-button");
const cardTitle = document.querySelector(".card-title");
const taskInput = document.querySelector("#task");
const clearTasksButton = document.querySelector(".clear-tasks");
const taskCollection = document.querySelector(".collection");
const dropdown = document.querySelector("#abc-dropdown");
// console.log(cardTitle, "cardTitle");

// ======================================================
// 3. SELECT MULTIPLE ELEMENTS
// ======================================================

// querySelectorAll returns a NodeList.
const collectionItems = document.querySelectorAll(".collection-item");

// const collectionItems = document.querySelectorAll(
//   ".collection li:nth-child(even)",
// );

// const collectionItems = document.querySelectorAll(
//   ".collection li:nth-child(odd)",
// );

const deleteButtons = document.querySelectorAll(".delete-item");

// ======================================================
// 4. LOOP THROUGH SELECTED ELEMENTS
// ======================================================
collectionItems.forEach(function (singleItem, index) {
  // console.log(singleItem, index);
  singleItem.style.color = "red";
  singleItem.style.backgroundColor = "yellow";
});

// ======================================================
// 5. READ AND CHANGE TEXT
// ======================================================

if (cardTitle) {
  // console.log(cardTitle.innerText); //read

  cardTitle.innerText = "TASK LIST"; //change

  // text content is usally better for plain text.
  cardTitle.textContent = "Task List";
}

// ======================================================
// 6. CHANGE STYLES
// ======================================================

if (cardTitle) {
  cardTitle.style.color = "black";
  cardTitle.style.backgroundColor = "lightgray";
  cardTitle.style.padding = "20px";
  cardTitle.style.marginBottom = "20px";

  //for class attribute changes
  cardTitle.classList.add("active-title");
  cardTitle.classList.remove("active-title");
  cardTitle.classList.toggle("active-title"); //add/remove
}
// ======================================================
// 8. EVENT OBJECT
// ======================================================

// event.target is the exact clicked element.
// event.currentTarget is the element with the listener.

if (taskBtn) {
  taskBtn.addEventListener("click", function (event) {
    // console.log(event);
    // console.log(event.type);
    // console.log(event.target); //jis par click kia hai wuhi element lado
    // console.log(event.currentTarget);
  });
}
