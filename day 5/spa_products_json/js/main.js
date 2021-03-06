"use strict";

// =========== Product functionality =========== //
/*
global variables: _products
*/
let _products = [];

/*
Fetches json data from the file products.json
*/
function loadProducts(){
fetch('json/products.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    _products = json
    appendProducts(json);
  });
}
function loadpersons(){
fetch('json/persons.json')
.then(function(response){
return response.json();
})
.then(function(json){
console.log("person: ");
console.log(json);
appendpersons(json);
});
}
function appendProducts(products) {
  let htmlTemplate = "";
  for (let product of products) {
    htmlTemplate += `
      <article>
        <img src="${product.img}">
        <h2>${product.model}</h2>
        <h3>${product.brand}</h3>
        <p>Price: ${product.price} kr.</p>
        <p class="${product.status}">Status: ${product.status}</p>
      </article>
    `;
  }
  document.querySelector('#products-container').innerHTML = htmlTemplate;
}
function appendpersons(persons){
let htmlTemplate ="";
for (let person of persons){
htmlTemplate += `
<aticel>
<h4>${person.name}</h4>
<a href='mailto':${person.mail}'>${person.mail}</a>
</article>
`;
}
document.querySelector("#persons-container").innerHTML= htmlTemplate;
}
function addNewProduct() {
  let brand = document.querySelector('#brand').value;
  let model = document.querySelector('#model').value;
  let price = document.querySelector('#price').value;
  let img = document.querySelector('#img').value;

  if (brand && model && price && img) {
    products.push({
      brand,
      model,
      price,
      img,
      status: 'inStock'
    });

    appendProducts(products);
    navigateTo('products');
  } else {
    alert('Please fill out all fields');
  }
}

function search(value) {
  let searchQuery = value.toLowerCase();
  let filteredProducts = [];
  for (let product of _products) {
    let model = product.model.toLowerCase();
    let brand = product.brand.toLowerCase();
    if (model.includes(searchQuery) || brand.includes(searchQuery)) {
      filteredProducts.push(product);
    }
  }
  console.log(filteredProducts);
  appendProducts(filteredProducts);
}