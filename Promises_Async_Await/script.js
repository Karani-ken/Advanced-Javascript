//Promise is an object the represent the actual event of success or failure of an asynchronous function and it's result

//without functions
//cookFood()
function cookFood() {

    //let introduce promises
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cookedFood = true;
            if (cookedFood) {
                resolve("Food is ready");
            } else {
                reject("Has not cooked food")
            }

        }, 3000) //time is in milliseconds
    })

}
//washDishes()
function washDishes() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const washedDishes = true;
            if (washedDishes) {
                resolve("Dishes are clean")
            } else {
                reject("Dishes not clean")
            }

        }, 2500)
    })

}
//takeOutTrash()
function takeOutTrash() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const tookOutTrash = true;
            if (tookOutTrash) {
                resolve("Trash bin is empty")
            } else {
                reject("Trash bin is not empty!!")
            }

        }, 1500)
    })

}

//callhell => is list of nested callback
/*function doChores() {
    cookFood(() => {
        washDishes(() => {
            takeOutTrash(() => {
                console.log("All chores are done!!")
            })
        })
    }
    )
}*/
//doChores()


//using a promise chaining
/*cookFood().then((value) => { console.log(value); return washDishes() })
    .then((value) => { console.log(value); return takeOutTrash() })
    .then((value) => { console.log(value); return console.log("All chores done!!") })
    .catch((error) => {console.log(error); return console.log("All chores not done")})*/


//Async & Await
async function doChores() {
    console.log("Doing Chores......")
    try {
        //contains that code that we expect to run and the code can have errors
        const cook = await cookFood()
        console.log(cook)
        const wash = await washDishes();
        console.log(wash)
        const trash = await takeOutTrash();
        console.log(trash)

        console.log("All chores done!!")
    } catch (error) {
        //this block catches the errors
        console.log(error)
        console.log("All chores not done")
    }

}

doChores()