class Product {
    title = 'DEFAULT';
    imageUrl;
    description;
    price;

    // this method is called when we create a new instance of this class
    constructor(title, image, descr, price) {
        this.title = title;
        this.imageUrl = image;
        this.description = descr;
        this.price = price;
    }
}

class ShoppingCart {
    items = [];

    addProduct(product) {
        this.items.push(product);
        this.totalOutput.innerHTML = `
            <h2>Total \$${1}</h2>
        `
    }

    render() {
        const cartEl = document.createElement('section');
        cartEl.innerHTML = `
            <h2>Total \$${0}</h2>
            <button>Order now!</button>
        `;
        cartEl.className = 'cart';
        this.totalOutput = cartEl.querySelector('h2'); // we can add properties to our class anywhere
        return cartEl;
    }
}

class ProductItem {
    constructor(product) {
        this.product = product;
    }

    addToCart() {
        App.addProductToCart(this.product);
    }

    render() {
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
        prodEl.innerHTML = `
            <div>
                <img src="${this.product.imageUrl}" />
                <div class="product-item__content" alt="${this.product.title}">
                    <h2>${this.product.title}</h2>
                    <h3>${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        `;
        const addToCartBtn = prodEl.querySelector('button');
        addToCartBtn.addEventListener('click', this.addToCart.bind(this)); // "this" refers to the entire object
        return prodEl;
    }
}

class ProductList {
    products = [
        new Product('Pillow', 'https://cf.shopee.ph/file/3202d1df80b4929c0fc595bd473eb842', 19.99, 'a soft pillow'),
        new Product('Carpet', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Wollteppich_1.jpg/1200px-Wollteppich_1.jpg', 89.99, 'a nice carpet'),
    ];

    constructor() {}

    render() {
        
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl);
        }
        return prodList;
    }
}

class Shop {
    render() {
        const renderHook = document.getElementById('app');
        
        this.cart = new ShoppingCart();
        const cartEl = this.cart.render();

        const productList = new ProductList();
        const prodListEl = productList.render();

        renderHook.append(cartEl);
        renderHook.append(prodListEl);
    }
}

class App {
    static cart;

    static init() {
        const shop = new Shop(); // this is a regular JS object / reference to that object
        shop.render();
        this.cart = shop.cart; // when you use "this" in a static method, it always refers to the class itself
    }

    static addProductToCart(product) {
        this.cart.addProduct(product);
    }
}

App.init();