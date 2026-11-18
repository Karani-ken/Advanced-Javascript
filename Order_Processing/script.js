//Select the html elements that we shall need
const orderForm = document.getElementById("orderForm");
const customerName = document.getElementById("customerName")
const food = document.getElementById("food")
const orderBtn = document.getElementById("orderBtn");
const welcomeMessage = document.getElementById("welcomeMessage")
const orderDetails = document.getElementById("orderDetails")
const displayName = document.getElementById("displayName")
const displayFood = document.getElementById("displayFood")
const statusMessage = document.getElementById("statusMessage");
const newOrderBtn = document.getElementById("newOrderBtn")

//a function to update the steps
function updateSteps(stepNumber, message) {

    //loop through all the 5 steps
    for (i = 1; i <= 5; i++) {
        const step = document.getElementById(`step${i}`)
        step.classList.remove("active", "completed")
    }

    //mark the previous steps as complete
    for (i = 1; i < stepNumber; i++) {
        const step = document.getElementById(`step${i}`)
        step.classList.add("completed")

    }

    //highlight the current step
     // Highlight current step
    document
        .getElementById(`step${stepNumber}`)
        .classList.add("active");
    statusMessage.textContent = message;
}

//Order processing functions
function processPayment(callback) {
    updateSteps(2, "processing your payment...")
    setTimeout(() => {
        console.log("Payment successfull!!")
        callback()
    }, 3000)
}

function prepareFood(callback) {
    updateSteps(3, "Our chef is preparing your food")
    setTimeout(() => {
        console.log("Your food is ready");
        callback()
    }, 3000)
}

function readyForDelivery(callback) {
    updateSteps(4, "Your food is ready for delivery!")
    setTimeout(() => {
        console.log("Order is ready")
        callback()
    }, 3000)
}

function deliveryOrder(callback) {
    updateSteps(5, "Your order is on it's way...")
    setTimeout(() => {
        console.log("Order Delivered")
        callback();
    }, 3000)
}

//Callback hell

function placeOrder() {
    updateSteps(1, "your order has been recieved");
    processPayment(() => {
        prepareFood(() => {
            readyForDelivery(() => {
                deliveryOrder(() => {
                    statusMessage.textContent = "Your Order has been delivered enjoy your meal"
                    newOrderBtn.hidden = false;
                    orderBtn.disabled = false;

                    console.log("Order Process completed!!")
                })
            })
        })
    })
}

orderForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = customerName.value.trim();
    const selectedFood = food.value;

     //check if user input is empty
    if (!name || !selectedFood) {
        return;
    }
    displayName.textContent = name;
    displayFood.textContent = selectedFood;

    welcomeMessage.textContent = `
    Thank you ${name}! Your order is being processed.`;
    orderBtn.disabled = true;
    newOrderBtn.hidden = true;
    placeOrder();
})

newOrderBtn.addEventListener("click", function () {
    //reset the form
    orderForm.reset();
    //reset the progress steps
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`step${i}`).classList.remove("active", "completed");
    }

    //reset displayed information
    displayName.textContent = "-";
    displayFood.textContent = "-";
    welcomeMessage.textContent = "Your order updates will appear here.";
    statusMessage.textContent = "No active order";
    newOrderBtn.hidden = true;
})
