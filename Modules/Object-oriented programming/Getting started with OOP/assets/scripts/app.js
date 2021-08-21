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

const productList = {
    products: [
        new Product('Pillow', 'https://cf.shopee.ph/file/3202d1df80b4929c0fc595bd473eb842', 19.99, 'a soft pillow'),
        new Product('Carpet', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Wollteppich_1.jpg/1200px-Wollteppich_1.jpg', 89.99, 'a nice carpet'),
    ],
    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
                <div>
                    <img src="${prod.imageUrl}" />
                    <div class="product-item__content" alt="${prod.title}">
                        <h2>${prod.title}</h2>
                        <h3>${prod.price}</h3>
                        <p>${prod.description}</p>
                    </div>
                </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
}

productList.render();