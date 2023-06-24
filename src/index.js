// ITERATION 1

function updateSubtotal(product) {
  //... your code goes here

  console.log('Calculating subtotal, yey!');
  
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');

  const price = priceElement.innerHTML;
  const quantity = quantityElement.value;

  const subTotalElement = product.querySelector('.subtotal span');
  const subtotal = price * quantity;

  subTotalElement.innerHTML = subtotal;

  return subtotal;
  
}

function calculateAll() {
  const totalProducts = document.querySelectorAll('.product');
  totalProducts.forEach((product) => {
    product.onClick = () => console.log(product.innerHTML)
  })
  let total = 0;
  for (let product of totalProducts) {
    total += updateSubtotal(product);
  }
  const totalPrice = document.querySelector('#total-value span');
  
  totalPrice.innerHTML = total;

  // end of test

  // ITERATION 2 
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  //... your code goes here

  const target = event.currentTarget;
  const productElement = target.parentElement.parentElement;
  const tableBodyElement = productElement.parentElement;
  tableBodyElement.removeChild(productElement);
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  
  const tableBodyElem = document.querySelector('#cart tbody');
  const createProductNameElem = document.querySelector(
    '.create-product input[type="text"]'
  );
  const createProductPriceElem = document.querySelector(
    '.create-product input[type="number"]'
  );
  const name = createProductNameElem.value;
  const price = createProductPriceElem.valueAsNumber;
  const productElem = document.createElement('tr');
  productElem.classList.add('product');
  productElem.innerHTML = `
    <td class="name">
        <span>${name}</span>
    </td>
    <td class="price">$<span>${price}.00</span></td>
    <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
        <button class="btn btn-remove">Remove</button>
    </td>
    
  `;
    const productRemoveButtonElem = productElem.querySelector('button');
    productRemoveButtonElem.addEventListener('click', removeProduct);
    tableBodyElem.appendChild(productElem);
    createProductNameElem.value = '';
    createProductPriceElem.valueAsNumber = 0;
}
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

    const removeButtonElements = document.querySelectorAll('.btn-remove');

    for (const removeButtonElem of removeButtonElements)
      removeButtonElem.addEventListener('click', removeProduct);

    const createProductElement = document.getElementById('create');
    createProductElement.addEventListener('click', createProduct);
});
