import faker from 'faker';

const cartText = `<div>You have ${faker.random.number()} items in the cart.`

document.querySelector('#dev-cart').innerHTML = cartText;