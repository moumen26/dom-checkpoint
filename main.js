var panier = document.querySelector(".panier");
var items = document.querySelector(".items");

var panierArray=[]

panier.addEventListener("click", ()=>{
    items.classList.toggle("active");
})


var productsContainer = document.querySelector(".products");
var products = [];
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(res => {
    products = res.products
    products.forEach( (e,i) => {
        productsContainer.innerHTML += `
            <div id="${i}" class="product">
                <div class="pic">
                    <img src= ${e.thumbnail} alt="">
                </div>
                <div class="titre">
                    <h2>${e.title}</h2>
                </div>
                <div class="price">
                    ${e.price}
                </div>
                <button class="add">Add Button</button>
            </div>
        `;
    });
    var addButtons = document.querySelectorAll(".add");

    addButtons.forEach((e) => {
        e.addEventListener("click", function (event) {
            let parent = event.target.parentNode;
            let clickedID = event.target.parentNode.getAttribute("id");
            let clickedProduct = products[clickedID];
            console.log(products[clickedID]);
            console.log(clickedProduct);
            let exist = false;
            panierArray.forEach( (e) => {
                if(e.title == clickedProduct.title){
                    exist = true;
                }
            });
            if (exist == true) {
                alert("lelement existe deja");
            }else{
                let count = document.querySelector(".count");
                count.innerHTML++;
                items.innerHTML += ` 
                <div class="model-item">
                    <div class="title">${clickedProduct.title}</div>
                    <div class="unite-price">${clickedProduct.price}</div>
                    <div class="quantitiy">
                        <i class="fa-solid fa-minus minus"></i>
                        <div class="amount">1</div>
                        <i class="fa-solid fa-plus plus"></i>
                    </div>
                    <div class="total-item-price">${clickedProduct.price}</div>
                    <div class="delete">
                        <i class="fa-solid fa-trash"></i>
                    </div>
                </div>
            `;
            panierArray.push(clickedProduct);
            let pluses = document.querySelectorAll(".plus");
            let minus = document.querySelectorAll(".minus");
            pluses.forEach( (e) => {
                e.addEventListener("click", (event) => {
                    console.log(event);
                    let quantitiyToUpdate =
                        event.target.parentNode.querySelector(".amount");
                        quantitiyToUpdate.innerHTML++;
                })
            })
            }
            minus.forEach( (e) => {
                    e.addEventListener("click", (event) => {
                        let quantitiyTodowndate =
                            event.target.parentNode.querySelector(".card-amount span");
                            quantitiyTodowndate.innerHTML--;
                        if (quantitiyTodowndate.innerHTML < 0){
                            quantitiyTodowndate.innerHTML = 0;
                        }
                    
                    })
                })
            

            

        })
    });
});
















/*
var products = [
    {   
        title: "Product 1",
        price: 10,
    },
    {   
        title: "Product 2",
        price: 10,
    },
    {   
        title: "Product 3",
        price: 10,
    }

];
*/