document.addEventListener("DOMContentLoaded", function () {
    let cartItems = [];

    let cartList = document.getElementById("cart-items");
    let grandTotal = document.getElementById("grand-total");

    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const item = button.getAttribute("data-item");
            const price = parseInt(button.getAttribute("data-price"));
            const quantityInput = document.getElementById(`${item.toLowerCase()}-quantity`);
            const quantity = parseInt(quantityInput.value);

            if (quantity > 0) {
                const total = price * quantity;
                cartItems.push({ item, quantity, total });

                // Display the item in the cart
                const cartItem = document.createElement("li");
                cartItem.classList.add("cart-item");
                cartItem.innerHTML = `
                    <span>${item} (Quantity: ${quantity})</span>
                    <span>Total: Rs. ${total}</span>
                    <button class="remove-item">Remove</button>
                `;
                cartList.appendChild(cartItem);

                // Calculate and display the grand total
                let grandTotalAmount = 0;
                cartItems.forEach((cartItem) => {
                    grandTotalAmount += cartItem.total;
                });
                grandTotal.textContent = grandTotalAmount;

                // Clear the quantity input
                quantityInput.value = "";
            }
        });
    });

    // Remove item from cart
    cartList.addEventListener("click", function (e) {
        if (e.target.classList.contains("remove-item")) {
            const itemIndex = Array.from(cartList.children).indexOf(e.target.parentElement);
            cartItems.splice(itemIndex, 1);
            e.target.parentElement.remove();

            // Recalculate and display the grand total
            let grandTotalAmount = 0;
            cartItems.forEach((cartItem) => {
                grandTotalAmount += cartItem.total;
            });
            grandTotal.textContent = grandTotalAmount;
        }
    });
});




 
