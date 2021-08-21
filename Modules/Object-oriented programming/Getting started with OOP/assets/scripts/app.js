class Product {
    title = 'DEFAULT';
    imageUrl;
    price;
    description;

    // this method is called when we create a new instance of this class
    constructor(title, image, price, descr) {
        this.title = title;
        this.imageUrl = image;
        this.price = price;
        this.description = descr;
    }
}

class ElementAttribute {
    constructor(attrName, attrValue) {
        this.name = attrName;
        this.value = attrValue;
    }
}

class Component {
    constructor(renderHookId) {
        this.hookId = renderHookId;
        // it will do this in the sub-class, because "this" always refers to whatever called the constructor
        // in this case, it will be the sub-classes
        this.render(); 
    }

    render() {}

    createRootElement(tag, cssClasses, attributes) {
        const rootElement = document.createElement(tag);
        if (cssClasses) {
            rootElement.className = cssClasses;
        }

        if (attributes && attributes.length > 0) {
            for (const attr of attributes) {
                rootElement.setAttribute(attr.name, attr.value);
            }
        }

        document.getElementById(this.hookId).append(rootElement);
        return rootElement;
    }
}

class ShoppingCart extends Component {
    items = [];

    get totalAmount() {
        const sum = this.items.reduce((prevValue, currItem) => prevValue + currItem.price, 0);
        return sum;
    }

    set cartItems(value) {
        this.items = value;
        this.totalOutput.innerHTML = `
            <h2>Total \$${this.totalAmount.toFixed(2)}</h2>
        `;
    }

    constructor(renderHookId) {
        // allows us to call the parent constructor, in this case the constructor of Component
        super(renderHookId); 
    }

    addProduct(product) {
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;
    }

    render() {
        const cartEl = this.createRootElement('section', 'cart');
        cartEl.innerHTML = `
            <h2>Total \$${0}</h2>
            <button>Order now!</button>
        `;
        
        this.totalOutput = cartEl.querySelector('h2'); // we can add properties to our class anywhere
    }
}

class ProductItem extends Component {
    constructor(product, renderHookId) {
        super(renderHookId); // do this first before using "this"
        this.product = product;
    }

    addToCart() {
        App.addProductToCart(this.product);
    }

    render() {
        const prodEl = this.createRootElement('li', 'product-item');
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
    }
}

class ProductList extends Component {
    products = [
        new Product('Pillow', 'https://cf.shopee.ph/file/3202d1df80b4929c0fc595bd473eb842', 19.99, 'a soft pillow'),
        new Product('Carpet', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Wollteppich_1.jpg/1200px-Wollteppich_1.jpg', 89.99, 'a nice carpet'),
    ];

    constructor(renderHookId) {
        super(renderHookId);
    }

    render() {
        this.createRootElement('ul', 'product-list', [new ElementAttribute('id', 'prod-list')]);
        for (const prod of this.products) {
            new ProductItem(prod, 'prod-list'); 
        }
    }
}

class Shop {
    constructor() {
        this.render();
    }

    render() {
        this.cart = new ShoppingCart('app');new ProductList('app');
        new ProductList('app');
    }
}

class App {
    static cart;

    static init() {
        new Shop(); // this is a regular JS object / reference to that object
        this.cart = shop.cart; // when you use "this" in a static method, it always refers to the class itself
    }

    static addProductToCart(product) {
        this.cart.addProduct(product);
    }
}

App.init();