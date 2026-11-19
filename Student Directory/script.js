const loadBtn = document.querySelector("#loadBtn")
const statusMessage = document.querySelector("#status")
const studentContainer = document.querySelector("#studentContainer")
async function fetchStudents() {
    try {
        statusMessage.textContent = "Loading students.... "
        const response = await fetch("https://jsonplaceholder.typicode.com/users"); //return a promise
        if (response.ok) {
            statusMessage.textContent = "success"
        }
        const students = await response.json();
        console.log(students)
        //use an array method to display the students on the page
        //forEach
        students.forEach(student => {
            const studentCard = document.createElement("div")
            studentCard.innerHTML = `
              <h3> Name: ${student.name} </h3> 
              <p> Email:  ${student.email} </p>
              <p> Username: ${student.username} </p>  
              <p> City: ${student.address.city}       
            
            `
            studentContainer.appendChild(studentCard)
        });



    } catch (error) {
        console.log(error)
        statusMessage.textContent = "Something went wrong"
    }
}


loadBtn.addEventListener("click", fetchStudents)