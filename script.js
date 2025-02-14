let buttonBtn = document.querySelector('#clickBtn');

taskListArray = [];


function storeData () {
    debugger;
    let inputItem = document.querySelector('#textItem').value.trim(); 
    let itemList = document.querySelector('.items');

    let todoObject = {
        taskId: taskListArray.length + 1,
        inputItem: inputItem,
    }

    let newItem = document.createElement('p');
    itemList.appendChild(newItem);

    newItem.textContent = inputItem  b ;

    newItem.classList.add('paragraph-styling');


    taskListArray.push(todoObject);
    console.log(taskListArray);

    renderTask();
}

function renderTask () {

    taskListArray.forEach((item, index) => {
       
    });
  

}

buttonBtn.addEventListener('click', storeData);

//lets create an object method for the data 




    