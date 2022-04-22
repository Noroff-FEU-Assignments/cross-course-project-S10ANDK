

const queryString = document.location.search;

// console.log(queryString);

const parameters = new URLSearchParams(queryString);

// console.log(parameters);

const consumerAndDeveloperKey = "?consumer_key=ck_3f0c413d964294d247e87393b91409f961b66d0e&consumer_secret=cs_789e23ccbfdee031a1568c8e25164bc3c7e2f24b";

const id = parameters.get("id");

const url =
  "https://stiankornbakk.online/wordpress/wp-json/wc/store/products/" + id + consumerAndDeveloperKey;

const detailsContainer = document.querySelector(".product-container");

const titleContainer = document.querySelector(".title-container");

async function fetchProduct() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    // console.log(details);

    detailsContainer.innerHTML = "";

    titleContainer.innerHTML = "";

    titleContainer.innerHTML = `${details.name}`;

    detailsContainer.innerHTML = `<section class="main-headings">
                                    <h1>${details.name}</h1>
                                    </section>
                                      <div class="main-content jacket-specific-container">
                                        <div class="jacket-specific">
                                        <img src="${details.images[0].src}" class="jacket-specific_image">
                                        </div>
                                        <div class="jacket-specific">
                                        <p>${details.description}</p>
                                        <p class="price">Price: <span>${details.prices.price} kr</span></p>
                                        <p>${details.is_in_stock}</p>
                                        <p>${details.variations[0].attributes[0].value}</p>
                                        <p>${details.add_to_cart.text}</p>
                                        </div>
                                      </div>`;
  } catch {
    console.log("An error has occured");
    detailsContainer.innerHTML = errorMessage("An error has occured");
  }
}

fetchProduct();

// window.onload = function() {
//   const addToCartButton = document.querySelector(".add-to-cart_button");

//   addToCartButton.onclick = function() {
//       addToCartButton.style.background = "green";
//       addToCartButton.style.color = "#FFFFFF"
//       addToCartButton.innerHTML = "Item added!"
//       setTimeout(previousButtonState, 5000);
//   };
  
//   function previousButtonState() {
//       addToCartButton.style.background = "#FFDD15";
//       addToCartButton.style.color = "#113340"
//       addToCartButton.innerHTML = "Add to Cart";
//       addToCartButton.style.transition = "ease-in 0.3s"
//   }
// }




// const infoUrl = "https://stiankornbakk.online/wordpress/wp-json/wc/v3/products/" + id + "variations" + consumerAndDeveloperKey;

// const infoContainer = document.querySelector(".info-container");

// async function fetchProductInfo() {
//   try {
//     const responseInfo = await fetch(infoUrl);
//     const info = await responseInfo.json();

//     console.log(info);

//     infoContainer.innerHTML = "";

//     infoContainer.innerHTML = `<p>Stock: ${info.id.stock_quantity}</p>`;
//   } catch {
//     console.log("An error has occured");
//     detailsContainer.innerHTML = "An error has occured";
//   }
// }