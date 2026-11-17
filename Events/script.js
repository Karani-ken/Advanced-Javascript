const btn = document.querySelector("#btn");
const msg = document.querySelector("#msg");
const btn2 = document.querySelector("#btn-2")
const input = document.querySelector("#name");
const list = document.querySelector("#names");
const form = document.querySelector("#signup")
function showMessage() {
    msg.textContent = "Hello Welcome to javascript Events"
};

function greetings() {
    msg.textContent = "Good morning!!"
}

//element.addEventListener('eventName', callbackFunction)
btn.addEventListener('click', showMessage);

//attaching an event using the DOM property
btn2.onclick = greetings;

//Event Object

/*input.addEventListener('input', (event) => {
    console.log(event.type); //'input'
    console.log(event.target) //'<input>'
    console.log(event.target.value) // typed text
})

document.addEventListener('click', (e) => {
    console.log(e.clientX, e.clientY) // position of the pointer
})*/

//preventDefault();
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = input.value.trim();
    if (name === "") return;
    const li = document.createElement('li')
    li.textContent = name;
    list.appendChild(li)
})
