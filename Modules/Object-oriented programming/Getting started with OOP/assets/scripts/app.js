const productList = {
    products: [
        {
            title: 'Pillow',
            imageUrl: 'https://cf.shopee.ph/file/3202d1df80b4929c0fc595bd473eb842',
            price: 19.99,
            description: 'a soft pillow'
        },
        {
            title: 'Carpet',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Wollteppich_1.jpg/1200px-Wollteppich_1.jpg',
            price: 79.99,
            description: 'a nice carpet'
        }
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