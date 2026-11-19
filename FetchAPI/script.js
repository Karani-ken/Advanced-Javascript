fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
        return data;F
    })


async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/user");
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
        console.log("Something happened")
    }


}

getUsers()