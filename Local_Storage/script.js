const input = document.querySelector("#input")
const btnAdd = document.querySelector("#add")
const btnRemove = document.querySelector("#remove")
const displayArea = document.querySelector("#display-area")
const list = document.querySelector("#list")
//adds a todo to local storage
btnAdd.addEventListener('click', (e) => {
    e.preventDefault()
    let todoItem = input.value.trim()
    if (todoItem === "") return
    let todoId = Math.random();
//creating a todo Object
    let todoObject = { id: todoId, name: todoItem }
    //converted the Object to a string using Json stringfy method
    localStorage.setItem("todo", JSON.stringify(todoObject))
    let storedTodo = localStorage.getItem("todo") 
    //change back to an object
    let changedBackToObject = JSON.parse(storedTodo)
    console.log(`I want to ${changedBackToObject.name}`);
})

btnRemove.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem("todo")
})


