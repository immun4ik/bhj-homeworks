document.addEventListener('DOMContentLoaded', function() {
    // Получаем контейнер корзины
    const cartProducts = document.querySelector('.cart__products');
    
    // Обработчик для кнопок управления количеством товара
    document.addEventListener('click', function(event) {
      
      if (event.target.classList.contains('product__quantity-control')) {
        const quantityControl = event.target;
        const quantityValue = quantityControl.parentElement.querySelector('.product__quantity-value');
        let value = parseInt(quantityValue.textContent);
        
        if (quantityControl.classList.contains('product__quantity-control_dec')) {
          // Уменьшаем количество, но не меньше 1
          value = Math.max(1, value - 1);
        } else if (quantityControl.classList.contains('product__quantity-control_inc')) {
          // Увеличиваем количество
          value += 1;
        }
        
        quantityValue.textContent = value;
      }
      
      
      if (event.target.classList.contains('product__add')) {
        const product = event.target.closest('.product');
        const productId = product.dataset.id;
        const productImg = product.querySelector('.product__image').src;
        const productQuantity = parseInt(product.querySelector('.product__quantity-value').textContent);
        
        // Проверяем, есть ли уже такой товар в корзине
        const cartProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);
        
        if (cartProduct) {
          // Если товар уже в корзине, увеличиваем количество
          const cartProductCount = cartProduct.querySelector('.cart__product-count');
          const currentCount = parseInt(cartProductCount.textContent);
          cartProductCount.textContent = currentCount + productQuantity;
        } else {
          // Если товара нет в корзине, добавляем новый элемент
          const cartProductHTML = `
            <div class="cart__product" data-id="${productId}">
              <img class="cart__product-image" src="${productImg}">
              <div class="cart__product-count">${productQuantity}</div>
            </div>
          `;
          cartProducts.insertAdjacentHTML('beforeend', cartProductHTML);
        }
      }
    });
  });