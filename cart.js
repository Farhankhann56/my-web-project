// Wait for the document to load
document.addEventListener("DOMContentLoaded", function () {
  const cartItemsContainer = document.getElementById('cart-items-container');
  const totalPriceElement = document.getElementById('total-price-value');
  const checkoutButton = document.getElementById('checkout-btn');

  // Get the cart items from local storage
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Function to display the cart items
  function displayCartItems() {
    if (cartItems.length === 0) {
      cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
      totalPriceElement.textContent = '0.00';
      return;
    }

    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    cartItems.forEach((item, index) => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('cart-item');
      itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-info">
          <p class="cart-item-name">${item.name}</p>
          <p class="cart-item-price">${item.price}</p>
        </div>
        <button class="remove-btn" data-index="${index}">Remove</button>
      `;

      cartItemsContainer.appendChild(itemElement);

      // Add price to the total
      const price = parseFloat(item.price.replace('$', '').trim());
      totalPrice += price;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);

    // Add event listeners to all "Remove" buttons
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
      button.addEventListener('click', function () {
        const index = parseInt(this.getAttribute('data-index'));
        removeItemFromCart(index);
      });
    });
  }

  // Function to remove an item from the cart
  function removeItemFromCart(index) {
    cartItems.splice(index, 1); // Remove item at the specified index
    localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Update local storage
    displayCartItems(); // Refresh the cart display
  }

  // Display cart items on load
  displayCartItems();
// Checkout Button
checkoutButton.addEventListener('click', function () {
  // Ensure cart data is saved in localStorage (already handled during updates)
  if (cartItems.length === 0) {
    alert('Your cart is empty. Please add items before proceeding to checkout.');
    return;
  }

  // Redirect to the checkout page
  window.location.href = './checkout.html';
});


  // Checkout Button (just a placeholder for now)
  checkoutButton.addEventListener('click', function () {
    alert('Proceeding to checkout...');
  });
});
