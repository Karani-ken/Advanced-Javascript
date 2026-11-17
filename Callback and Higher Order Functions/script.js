const btn = document.querySelector("#btn")
//callback
function sayHi(name) {
    console.log(`Hi ${name}`)
    alert(`Hello ${name}`)
}

//higher order function
function greeting(action) {
    action("John")
}

//console.log(greeting(sayHi))

//Login is a callback
function logIn() {
    alert("You have logged in")
}

//addEventListener is a higher order function
btn.addEventListener("click", logIn)


