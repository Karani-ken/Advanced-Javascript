//synchronous javascript
// A task execution must first finish before the next one starts
console.log("first")
console.log("second")
console.log("third")

//asynchronous some tasks can finish their execution later
/*console.log("start") //task 

setTimeout(() => {
    console.log("task Completed") //
}, 5000) //3000ms equivalent to 3s

console.log("end") //task 
*/
//setInterval()

/*setInterval(() => {
console.log("Hello there")
}, 2000);

const timer = setInterval(()=> {
    console.log("Stopped execution")
},500)

clearInterval(timer)*/



console.log("start") //task 

setTimeout(() => {
    console.log("task Completed") //
}, 0) //3000ms equivalent to 3s

console.log("end")