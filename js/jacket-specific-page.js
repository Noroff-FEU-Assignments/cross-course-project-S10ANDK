// const addToCartButton = document.querySelector(".add-to-cart_button");

// addToCartButton.onclick = function() {
//     addToCartButton.style.background = "green";
//     addToCartButton.style.color = "#FFFFFF"
//     addToCartButton.innerHTML = "Item added!"
//     setTimeout(previousButtonState, 5000);
// };

// function previousButtonState() {
//     addToCartButton.style.background = "#FFDD15";
//     addToCartButton.style.color = "#113340"
//     addToCartButton.innerHTML = "Add to Cart";
//     addToCartButton.style.transition = "ease-in 0.3s"
// }

const queryString = document.location.search;

console.log(queryString);

const parameters = new URLSearchParams(queryString);

console.log(parameters);

const id = parameters.get("id");

const url =
  "https://stiankornbakk.online/wordpress/wp-json/wc/store/products/" + id;

const detailsContainer = document.querySelector(".product-container");

async function fetchProduct() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    detailsContainer.innerHTML = "";

    //   titleContainer.innerHTML = `${details.name}`;

    detailsContainer.innerHTML = `<section class="main-headings">
                                    <h1>${details.name}</h1>
                                    </section>
                                      <div class="main-content">
                                      <img src="${details.images[0].src}" class="jacket-specific_image">
                                      <p>Price: ${details.prices.price}</p>
                                      </div>`;
  } catch {
    console.log("An error has occured");
    detailsContainer.innerHTML = "An error has occured";
  }
}

fetchProduct();
