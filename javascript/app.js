const inputBox = document.querySelector("#userEnteredTask");
const addBtn = document.querySelector("#addBtn");
const toDoList = document.querySelector("#ulTask");
const pendingTasks = document.querySelector("#pendingTasks");



addBtn.addEventListener('click', function(){
  let userEnteredValue = inputBox.value;

  let getLocalStorageData = JSON.parse(localStorage.getItem("todo")) || [];
  if(userEnteredValue == "") {
    alert("The entered value cannot be saved.");
  } else {
    getLocalStorageData.push(userEnteredValue);
  }
  
  localStorage.setItem("todo", JSON.stringify(getLocalStorageData));
  inputBox.value = "";
  showTasks()
  
});

showTasks()
function showTasks() {
  let getLocalStorageData = localStorage.getItem("todo");

  if(getLocalStorageData == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorageData);
  }

  let newTag = "";
  listArray.forEach((element, index) => {
    newTag += `<li>${element}<button class="trash-can-icon" onclick="deleteThisTask(${index})"><img src="Pics/trash-can-icon.PNG"></button></li>`;
  });
  toDoList.innerHTML = newTag;

  pendingTasks.innerHTML = listArray.length;

  if(getLocalStorageData == "[]" || JSON.parse(getLocalStorageData) == null) {
  toDoList.innerHTML = `<p class="no-task-err">You have no task</p>`;
}
}

function deleteThisTask(index) {
  let getLocalStorageData = localStorage.getItem("todo");
  listArray = JSON.parse(getLocalStorageData);

  listArray.splice(index, 1);
  localStorage.setItem("todo", JSON.stringify(listArray));

  showTasks();
}

function removeAllTasks() {
  localStorage.removeItem("todo");
  showTasks();
}

let getLocalStorageData = localStorage.getItem("todo");
if(getLocalStorageData == "[]" || JSON.parse(getLocalStorageData) == null) {
  toDoList.innerHTML = `<p class="no-task-err">You have no task</p>`;
}