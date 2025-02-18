let inputItem = document.querySelector("#textItem");
let buttonBtn = document.querySelector("#clickBtn");
let itemList = document.querySelector("#items")

taskListArray = [];


function renderTask() {
  //clear existing list ite
  itemList.innerHTML = "";
  //creating a new list structure
  taskListArray.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "item"; //combine classes

    //Task text
    const textSpan = document.createElement("span");
    textSpan.textContent = item;

    //Edit  button
    let editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    editBtn.className = "editBtn";
    editBtn.onclick = () => editItem(index);

    //Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.className = "deleteBtn";
    deleteBtn.onclick = () => deleteItem(index);

    //Assemble Elements
    li.appendChild(textSpan);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
  });
};

// function editItem(index) {

function addItem() {
  let value = inputItem.value;
  if (value === "") {
    alert('Please enter an item');
    return;
  }
  taskListArray.push(value);
  inputItem.value = "";
  renderTask();
}

function editItem(index) {
    const newText = prompt("Edit item:", taskListArray[index]);
    if (newText !== null && newText.trim() !== "") {
      taskListArray[index] = newText.trim();
      renderTask();
    }
}

// }
function deleteItem(index) {
  taskListArray.splice(index, 1);
  renderTask();
}

buttonBtn.addEventListener("click", addItem);

//lets create an object method for the data
