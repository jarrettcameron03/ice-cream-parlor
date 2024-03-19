const iceCream = [{
    name: 'Cookie Dough',
    price: 1.25,
    quantity: 0
},
{
    name: 'Vanilla',
    price: 1,
    quantity: 0
},
{
    name: 'Strawberry',
    price: 1.25,
    quantity: 0
}]

const toppings = [{
    name: 'Sprinkles',
    quantity: 0,
    price: .25
},
{
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0
},
{
    name: 'Gummy Worms',
    price: .5,
    quantity: 0
}]

const vessel = [{
    name: 'Waffle Cone',
    price: 3,
    quantity: 0
},
{
    name: 'Waffle Bowl',
    price: 4,
    quantity: 0
},
{
    name: 'Dipped Cone',
    price: 5,
    quantity: 0
}]

function resetCart() {
    iceCream.forEach((i) => {
        i.quantity = 0;
    });

    toppings.forEach((i) => {
        i.quantity = 0;
    });

    vessel.forEach((i) => {
        i.quantity = 0;
    });

    drawCart();
}

function drawCart() {
    let cartInject = '';

    iceCream.forEach((i) => {
        if (i.quantity > 0) {
            cartInject += prepareHTML(i);
        }
    });

    toppings.forEach((i) => {
        if (i.quantity > 0) {
            cartInject += prepareHTML(i);
        }
    });

    vessel.forEach((i) => {
        if (i.quantity > 0) {
            cartInject += prepareHTML(i);
        }
    });

    document.getElementById('cart').innerHTML = cartInject;
}

function prepareHTML(item) {
    return `<div class="col-6">${item.name}</div><div class="col-2 text-center">${item.quantity}</div><div class="col-2 text-center">${item.price}</div><div class="col-2 text-center">${item.quantity * item.price}</div>`;
}