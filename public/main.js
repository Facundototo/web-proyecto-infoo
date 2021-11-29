
/*function addToCart(e) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let producto = e.currentTarget.parentElement.children[0].innerHTML;
  console.log(producto);
  console.log(cart);
  cart.push(producto);
  console.log(cart);
  localStorage.setItem('cart', JSON.stringify(cart));

}*/

 const addToShoppingCartButtons = document.querySelectorAll('.addToCart');   // Selecciona todos los botones de aniadir al carro (tienen la clase addToCart)
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);               // Por cada 'click' del boton, llama a la funcion addToCartClicked 
});
const shoppingCartItemsContainer = document.querySelector(                   // Esta clase es donde se va a dirigir el div creado en la linea 31
  '.shoppingCartItemsContainer');
 
function addToCartClicked(event) {                                           
  const button = event.target;                                                  
  const item = button.closest('.item');                                      // Captura el evento mas cercano con la clase item(div)
                                                                             
  const itemTitle = item.querySelector('.item-title').textContent;
  const itemPrice = item.querySelector('.item-price').textContent;           // Se agarra de la card clickeada, mediante la clase, el titulo,precio y imagen
  const itemImage = item.querySelector('.item-image').src;                   // .textContent para que aparezca solo el contenido dentro de la etiqueta
  addItemToShoppingCart(itemTitle, itemPrice, itemImage);                    // Aniade los items de la card a la funcion addItemToShoppingCart     
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
  const shoppingCartRow = document.createElement('div');                     // Variable que crea un div, donde ira metida la info de la card seleccionada en el carro
                                                                             // shoppingCartContent, cada vez que el usuario clickea una card se crea el div donde estara contenido los items (titulo,precio,imagen)
  const shoppingCartContent = `                                              
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                 <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>      
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">                   
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
  shoppingCartRow.innerHTML = shoppingCartContent;                          // Mete en el div la variable shoppingCartContent adentro del HTML.
  shoppingCartItemsContainer.append(shoppingCartRow);                     
  }