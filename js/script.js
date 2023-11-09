const container = document.querySelector(".product-list");

const databaseUrl =
  "https://stiankornbakk.com/databases/wp-json/wc/store/products";

const consumerAndDeveloperKey =
  "?consumer_key=ck_3f0c413d964294d247e87393b91409f961b66d0e&consumer_secret=cs_789e23ccbfdee031a1568c8e25164bc3c7e2f24b";

const databaseUnlockedUrl = databaseUrl + consumerAndDeveloperKey;

function generateHtml(name) {
  console.log(name);
  name.forEach(function (results) {
    container.innerHTML += `<a href="../products/jacket-specific-page.html?id=${results.id}">
        <img src="${results.images[0].src}" class="jackets-listed_image">                            
        <h3>${results.name}</h3>
        <div class="price-stock-container">
        <p class="price price-flex">${results.prices.price} kr</p>
        <p class="stock stock-flex">${results.is_in_stock}</p>
        </div>
        </a>`;

    if (results.is_in_stock === true) {
      const stock = document.querySelector(".stock");
      stock.innerHTML = "";
      stock.innerHTML = "In stock";
      stock.style.color = "green";
    } else {
      const stock = document.querySelector(".stock");
      stock.innerHTML = "";
      stock.innerHTML = "Out of stock";
      stock.style.color = "red";
    }
  });
}

generateHtml();
