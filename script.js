let buttonBtn = document.querySelector("#clickBtn");

taskListArray = [];

function storeData() {
  // debugger;
  let inputItem = document.querySelector("#textItem").value;
  let itemList = document.querySelector(".items");

  let todoObject = {
    taskId: taskListArray.length + 1,
    inputItem: inputItem,
  };

  if (inputItem === "") {
    alert("Add item");
  } else {
    let newItem = document.createElement("li");
    itemList.appendChild(newItem);

    newItem.textContent = inputItem;

    newItem.classList.add("paragraph-styling");
  }

  taskListArray.push(todoObject);
  console.log(taskListArray);

  renderTask();
}

function renderTask() {
  taskListArray.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = "item";

    const textSpan = document.createElement("span")
    textSpan.textContent = item;

    let editItem = document.createElement('button')
    editItem.textContent = "edit";
    editItem.classList.add('editItem');


    let deleteItem = document.createElement('delete')
    deleteItem.textContent = "delete";
    deleteItem.classList.add(deleteItem);
  });
}

buttonBtn.addEventListener("click", storeData);

//lets create an object method for the data