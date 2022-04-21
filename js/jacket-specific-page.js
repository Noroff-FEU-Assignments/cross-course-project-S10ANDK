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

const queryString = document.location.search;

console.log(queryString);

const parameters = new URLSearchParams(queryString);

console.log(parameters);

const id = parameters.get("id");

const consumerAndDeveloperKey = "?consumer_key=ck_3f0c413d964294d247e87393b91409f961b66d0e&consumer_secret=cs_789e23ccbfdee031a1568c8e25164bc3c7e2f24b";

const url = "https://stiankornbakk.online/wordpress/wp-json/wc/v3/products/" + id + consumerAndDeveloperKey;


