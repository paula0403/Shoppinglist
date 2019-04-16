const toShopList = [];

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const productNumber = document.querySelector('h1 span');
const shoppingList = document.getElementsByClassName('product');
const input = document.querySelector('input');

const removeProduct = (e) => {
 e.target.parentNode.remove();
 const index = e.target.parentNode.dataset.key;
 toShopList.splice(index, 1)
 console.log(toShopList);
 productNumber.textContent = shoppingList.length;
 renderList();
}


const addProduct = (e) => {
 e.preventDefault()
 const nameProduct = input.value;
 if (nameProduct === "") return;
 const product = document.createElement('li');
 product.className = 'product';
 product.innerHTML = nameProduct + "<button>Delete</button>";
 toShopList.push(product)
 renderList()

 ul.appendChild(product);
 input.value = "";
 productNumber.textContent = shoppingList.length;
 product.querySelector('button').addEventListener('click', removeProduct);

}

const renderList = () => {
 ul.textContent = "";
 toShopList.forEach((toShopElement, key) => {
  toShopElement.dataset.key = key;
  ul.appendChild(toShopElement);
 })
}
form.addEventListener('submit', addProduct)