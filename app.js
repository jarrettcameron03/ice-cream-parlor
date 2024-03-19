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

let vesselLocked = false

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

    vesselLocked = false

    drawCart();
}

function drawCart() {
    let cartInject = '';
    let total = 0

    iceCream.forEach((i) => {
        if (i.quantity > 0) {
            cartInject += prepareHTML(i)
            total += i.quantity * i.price
        }
    });

    toppings.forEach((i) => {
        if (i.quantity > 0) {
            cartInject += prepareHTML(i)
            total += i.quantity * i.price
        }
    });

    vessel.forEach((i) => {
        if (i.quantity > 0) {
            cartInject += prepareHTML(i)
            total += i.quantity * i.price
        }
    });

    document.getElementById('cart').innerHTML = cartInject;
    document.getElementById('price').innerText = `$${total.toFixed(2)}`;
}

function addItem(cat, iname) {
    let catArray
    switch (cat) {
        case 'toppings':
            catArray = toppings
            break
        case 'vessel':
            catArray = vessel
            if (vesselLocked) {
                alert("You cannot have more than one vessel!")
                return
            }
            vesselLocked = true
            break
        case 'icecream':
            catArray = iceCream
            break
    }

    Array.from(catArray).forEach((i) => {
        if (i.name == iname) {
            i.quantity++;
        }
    })

    drawCart()
}

function prepareHTML(item) {
    return `<div class="col-6">${item.name}</div><div class="col-2 text-center">${item.quantity}</div><div class="col-2 text-center">$${item.price.toFixed(2)}</div><div class="col-2 text-center">$${(item.quantity * item.price).toFixed(2)}</div>`;
}