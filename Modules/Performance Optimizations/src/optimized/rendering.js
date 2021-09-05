const productListEl = document.getElementById('product-list');

function createElement(product, prodId, deleteProductFn) {
  const newListEl = document.createElement('li');
  newListEl.innerHTML = `
    <h2>${product.title}</h2>
    <p>${product.price}</p>
  `; // make sure to sanitize this content when we do this
  const prodDeleteButtonEl = document.createElement('button');

  prodDeleteButtonEl.textContent = 'DELETE';

  newListEl.id = prodId;

  prodDeleteButtonEl.addEventListener(
    'click',
    deleteProductFn.bind(null, prodId)
  );

  newListEl.appendChild(prodDeleteButtonEl);

  return newListEl;
}

export function renderProducts(products, deleteProductFn) {
  productListEl.innerHTML = '';
  const startTime = performance.now();
  products.forEach(product => {
    const newListEl = createElement(product, product.id, deleteProductFn);
    productListEl.appendChild(newListEl);
  });

  // according to jsperf, a normal for-loop is the fastest, but is that enough
  // to merit a change in our code?
  
  // for(let i = 0; i < products.length; i++) {
  //   const newListEl = createElement(products[i], products[i].id, deleteProductFn);
  //   productListEl.appendChild(newListEl);
  // }
  const endTime = performance.now();
  console.log(endTime - startTime);
}

export function updateProducts(product, prodId, deleteProductFn, isAdding) {
  if (isAdding) {
    const newProductEl = createElement(product, prodId, deleteProductFn);
    productListEl.insertAdjacentElement('afterbegin', newProductEl);
  } else {
    const productEl = document.getElementById(prodId);
    productEl.remove();
  }
}
