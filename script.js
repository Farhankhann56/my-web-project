// Event listener for "Source Now" button
const sourceNowBtn = document.querySelector('.cta-btn');
if (sourceNowBtn) {
    sourceNowBtn.addEventListener('click', function() {
        window.location.href = 'product.html';
    });
}

// Event listener for "View Details" button
const viewDetailsBtn = document.querySelector('.view-details-btn');
if (viewDetailsBtn) {
    viewDetailsBtn.addEventListener('click', function() {
        window.location.href = 'product-details.html';
    });
}
//  
          
// Wait for the document to load
document.addEventListener("DOMContentLoaded", function() {
  // Select the cart button and all the product add buttons
  const cartButton = document.querySelector('.header-links a[href="cart.html"]');
  const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
  const viewDetailsButtons = document.querySelectorAll('.view-details-btn');
  const cartItemsCount = document.querySelector('.cart-items-count');

  // Initialize the cart items array
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Show cart item count
  function updateCartCount() {
    cartItemsCount.textContent = cartItems.length;
  }

  // Show the top message (e.g., "Item added to cart")
  function showMessage(message) {
    const messageBox = document.createElement('div');
    messageBox.classList.add('message-box');
    messageBox.textContent = message;

    // Append the message to the body
    document.body.appendChild(messageBox);

    // Remove the message after 3 seconds
    setTimeout(() => {
      messageBox.remove();
    }, 3000);
  }

  // Add item to cart function
  function addItemToCart(product) {
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartCount();
  }

  // Handle "Add to Cart" button click
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      const productCard = event.target.closest('.product-card');
      const product = {
        name: productCard.querySelector('.product-description').textContent,
        price: productCard.querySelector('.product-price').textContent,
        image: productCard.querySelector('img').src
      };

      // Show confirmation message
      if (confirm('Do you want to add this item to your cart?')) {
        addItemToCart(product);
        showMessage('Item added to cart');
      }
    });
  });

  // View Details Button (just a simple log for now, you can expand as needed)
  viewDetailsButtons.forEach(button => {
    button.addEventListener('click', function() {
      alert('Product details will be shown.');
    });
  });

  // Update the cart count on page load
  updateCartCount();
});

// Select the hamburger button and header-links container
const hamburger = document.querySelector('.hamburger');
const headerLinks = document.querySelector('.header-links');

// Add a click event listener to the hamburger button
hamburger.addEventListener('click', () => {
    // Toggle the 'active' class to show/hide the links
    headerLinks.classList.toggle('active');
});

// Get all sidebar list items
const sidebarItems = document.querySelectorAll('.sidebar ul li');

// Add click event listeners to each item
sidebarItems.forEach(item => {
  item.addEventListener('click', function() {
    // Redirect to the same product page
    window.location.href = 'product.html';
  });
});
