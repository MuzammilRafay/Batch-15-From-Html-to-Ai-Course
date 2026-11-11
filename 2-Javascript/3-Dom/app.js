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
    event.preventDefault();
    // console.log(event);
    // console.log(event.type);
    console.log(event.target); //jis par click kia hai wuhi element lado
    // console.log(event.currentTarget);
  });
}

// ======================================================
// 9. COMMON MOUSE EVENTS
// ======================================================
function showEventType(event) {
  console.log(`Event type: ${event.type}`);
}

// Example usage:
if (taskBtn) {
  taskBtn.addEventListener("mouseover", showEventType);
  taskBtn.addEventListener("mouseenter", showEventType);
  taskBtn.addEventListener("mouseout", showEventType);
  taskBtn.addEventListener("mousedown", showEventType);
  taskBtn.addEventListener("mouseup", showEventType);
  taskBtn.addEventListener("click", showEventType);
}

// mouseenter:
// Runs when the pointer enters the selected element.

// mouseover:
// Also runs when the pointer enters child elements.

// ======================================================
// 10. INPUT EVENTS
// ======================================================

if (taskInput) {
  taskInput.addEventListener("input", function (event) {
    console.log(event.target.value);
  });

  taskInput.addEventListener("focus", showEventType);
  taskInput.addEventListener("blur", showEventType);

  // Other useful input events:
  // keydown
  // keyup
  // copy
  // cut
  // paste
}

// ======================================================
// 11. DROPDOWN CHANGE EVENT
// ======================================================

if (dropdown) {
  dropdown.addEventListener("change", function (event) {
    event.preventDefault();
    console.log(event.target.value);
  });
}

// ======================================================
// 12. DOM TRAVERSING
// ======================================================

// Traversing means moving between related elements.

if (cardTitle) {
  // console.log(cardTitle.parentElement);
  // console.log(cardTitle.children);
  // console.log(cardTitle.parentElement.children);
  // console.log(cardTitle.nextElementSibling);
  // console.log(cardTitle.previousElementSibling);
  console.log(cardTitle.closest(".card"));
}

// ======================================================
// 13. EVENT BUBBLING
// ======================================================

// Events move from the clicked child to its parents.

//1st Example
taskCollection.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log("working");
  //event bubling me condition match karate ho isko kehte hien event delegaion
  if (e.target.className == "fa fa-remove") {
    console.log("delete item");
  }
});

// ======================================================
// 14. EVENT DELEGATION
// ======================================================

if (taskCollection) {
  taskCollection.addEventListener("click", function (event) {
    const deleteIcon = event.target.closest(".delete-item");

    if (!deleteIcon) {
      return;
    }

    event.preventDefault();

    const taskItem = deleteIcon.closest(".collection-item");

    if (taskItem) {
      taskItem.remove();
    }
  });
}

// ======================================================
// 15. CREATE A NEW ELEMENT
// ======================================================

const heading = document.createElement("h1");

heading.textContent = "My name is Muzammil";
heading.id = "main-heading";
heading.className = "custom-heading";

console.log(heading);

// ======================================================
// 16. ADD ELEMENT TO THE DOM
// ======================================================

if (taskCollection) {
  // taskCollection.append(heading);
  // Add at the beginning:
  taskCollection.prepend(heading);
}

// ======================================================
// 17. SET AND READ ATTRIBUTES
// ======================================================

const link = document.createElement("a");

link.setAttribute("href", "https://example.com");
link.setAttribute("target", "_blank");
link.textContent = "Visit website";

console.log(link.getAttribute("href"));
console.log(link);

// ======================================================
// 18. REMOVE AN ELEMENT
// ======================================================

// heading.remove();
