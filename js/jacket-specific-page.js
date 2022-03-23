const addToCartButton = document.querySelector(".add-to-cart_button");

addToCartButton.onclick = function() {
    addToCartButton.style.background = "green";
    addToCartButton.style.color = "#FFFFFF"
    addToCartButton.innerHTML = "Item added!"
    setTimeout(previousButtonState, 5000);
};

function previousButtonState() {
    addToCartButton.style.background = "#FFDD15";
    addToCartButton.style.color = "#113340"
    addToCartButton.innerHTML = "Add to Cart";
    addToCartButton.style.transition = "ease-in 0.3s"
}



