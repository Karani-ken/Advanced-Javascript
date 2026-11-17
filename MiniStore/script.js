//Mini Store Project
const list = document.querySelector("#list")
const filterPrice = document.querySelector("#price_filter")
const filterBtn = document.querySelector("#filterBtn")
const resetBtn = document.querySelector("#resetBtn")
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
function displayList(product) {
    const card = document.createElement("div");
    card.classList.add("product-card")
    card.innerHTML = `
     <h3>${product.name}</h3>
     <p>Price: KES ${product.price} </p>
     <p> Stock: ${product.stock}</p>
     <p class="${product.stock > 0 ? "in-stock" : "out-of-stock"}"
        ${product.stock > 0 ? "Available" : "Out of Stock"}
    </p>

    <button class="select-product" data-id="${product.id}">
       view Product
    </button>
    `
    list.append(card)
}
/*
products.forEach((product) => displayList(product))
*/
function displayProducts() {
    list.innerHTML = ""
    let price = Number(filterPrice.value.trim())
    if (isFiltered && price !== "") {
        const filteredProducts = products.filter((p) => p.price <= price)
        filteredProducts.forEach((p) => displayList(p))
    } else {
        products.filter((p) => displayList(p))
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

    if (filterPrice === "") {
        console.log(filterPrice)
        alert("Enter a price to filter")
    } else {
        isFiltered = true;
        displayProducts()
    }

})

resetBtn.addEventListener("click", () => {
    isFiltered = false;
    filterPrice.value = "";
    displayProducts();
})

//initial display
displayProducts()



//Products Display
//Filter by price
//filter by stock
function getAvailableProducts() {
    //use filter method to get available products
    let avaibleProducts = products.filter((p) => p.stock > 0)

    return avaibleProducts;
}
function OutOfStock() {
    const needRestock = products.filter((p) => p.stock === 0)
    return needRestock;
}
// select one product
function selectOneProduct(id) {
    const product = products.find((p) => p.id === Number(id))
    return product;
}
//Try to design a Product Card for the products