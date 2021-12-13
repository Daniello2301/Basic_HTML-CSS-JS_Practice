const products = [
        {
            image: "/assets/ControlGamer.png",
            tittle: "Control Gamer Fantech GP12",
            price: 150000,
            quantity: 2
        },
        {
            image: "/assets/Diadema Corsair.png",
            tittle: "Diadema Corsair Virtuoso Inalambricas",
            price: 830000,
            quantity: 1
        },
        {
            image: "/assets/Mouse Logitech.png",
            tittle: "Teclado Logitech K835 TKL",
            price: 250000,
            quantity: 3
        },
        {
            image: "/assets/Teclado Logitech.png",
            tittle: "Mouse Logitech G502 KDA Edition",
            price: 190000,
            quantity: 2
        },
        {
            image: "/assets/Diademas G435.png",
            tittle: "Diadema Logitech G435 inalambricas",
            price: 450000,
            quantity: 1
        },
        {
            image: "/assets/ParlantesGamer.png",
            tittle: "Parlantes Gamer Fantech GS301",
            price: 70000,
            quantity: 1
        }
];

function total(price, quantity) {
    let total = price * quantity
    return total
}

function productItem(product) {
    return `
        <div class="product-item">        
            <div class="image-product">
                <img src=" ${product.image}">
            </div>

            <div class="name-product">
                <h2> ${product.tittle} </h2>
            </div>

            <div class="price-product">
                <p> ${product.price} </p>
            </div>

            <div class="quantity-product">
                <p> ${product.quantity} </p>
            </div>

            <div class="total-product">
                <p> ${total(product.price, product.quantity)} </p>
            </div>
            <div class="button-remove">
                <button class="btn btn-danger">borrar</button>
            </div>    
        </div>
    `
}

document.getElementById("car-item").innerHTML = `
    ${products.map(productItem).join("\n")}
`


