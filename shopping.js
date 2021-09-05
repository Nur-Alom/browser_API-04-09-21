console.log('shopping korbo');

const displayLSCard = () => {
    const cart = getCart();
    for (const product in cart) {
        displayProduct(product);
    }
}


const addItem = () => {
    const userInput = document.getElementById('product-name');
    const name = userInput.value;
    if (!name) {
        return;
    }
    // add to local storage.
    addProductToCart(name);

    // display product.
    displayProduct(name);

    // clear input Field
    userInput.value = '';
}

const displayProduct = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}


const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObject;
    if (cart) {
        cartObject = JSON.parse(cart);
    }
    else {
        cartObject = {};
    }
    return cartObject;
}

const addProductToCart = name => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    }
    else {
        cart[name] = 1;
    }
    // cart[name] = 1;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}

displayLSCard();


