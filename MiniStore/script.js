//Mini Store Project
const list = document.querySelector("#list")
const filterPrice = document.querySelector("#price_filter")
const filterBtn = document.querySelector("#filterBtn")
let isFiltered = false;
//All the products
const products = [
    { id: 1, name: "Notebook", price: 300, stock: 12, productImg: "https://cdn.pixabay.com/photo/2026/10/27/13/08/13-08-12-3_1280.jpg" },
    { id: 2, name: "Pen Pack", price: 150, stock: 0 },
    { id: 3, name: "Backpack", price: 2500, stock: 5 },
    { id: 4, name: "Water Bottle", price: 700, stock: 8 },
    { id: 5, name: "Calculator", price: 1200, stock: 3 },
];

const isStock = products.some((p) => p.stock === 0)
console.log(isStock)
/*function displayList(product) {
    const li = document.createElement("li");
    li.textContent = product.name
    list.append(li)
}
products.forEach((product) => displayList(product))
*/
function displayProducts() {
    if (isFiltered) {
        const filteredProducts = products.filter((p) => p.price <= filterPrice.value.trim())
        filteredProducts.forEach((product) => {
            const li = document.createElement("li");
            li.textContent = `${product.name} : KES ${product.price} `
            list.append(li)
        })
    } else {
        products.forEach((product) => {
            const li = document.createElement("li");
            li.textContent = `${product.name} : KES ${product.price} `
            list.append(li)
        })
    }
}


//a map()
//get all the product names
/*function displayName(product){
    return product.name
}
const productNames = products.map((p) => displayName(p))
*/

const names = products.map((p) => p.name)
console.log(names)

//Filter Method


filterBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (filterPrice.value.trim() === "") {
        alert("Enter a price to filter")
    } else {
        isFiltered = true;
        const filteredProducts = products.filter((p) => p.price <= filterPrice.value.trim())
        filteredProducts.forEach((product) => {
            const li = document.createElement("li");
            li.textContent = `${product.name} : KES ${product.price} `
            list.append(li)
        })
    }

})

displayProducts()



//Products Display 
//Filter by price
//filter by stock
// select one product
//Try to design a Product Card for the products