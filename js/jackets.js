const container = document.querySelector(".product-list");

const databaseUrl =
  "https://stiankornbakk.online/wordpress/wp-json/wc/v3/products";

const consumerAndDeveloperKey =
  "?consumer_key=ck_3f0c413d964294d247e87393b91409f961b66d0e&consumer_secret=cs_789e23ccbfdee031a1568c8e25164bc3c7e2f24b";

const databaseUnlockedUrl = databaseUrl + consumerAndDeveloperKey;

console.log(databaseUnlockedUrl);

async function executeApiCall() {
  try {
    const response = await fetch(databaseUnlockedUrl);

    const results = await response.json();

    container.innerHTML = "";

    generateHtml(results);
  } catch (error) {
    console.log("An error has occured");
    container.innerHTML = "An error has occured";
  }
}

executeApiCall();

function generateHtml(name) {
  console.log(name);
  name.forEach(function (results) {
    container.innerHTML += `<a href="html/jackets-men.html?id=${results.id}">
        <img src="${results.images[0].src}" class="jackets-listed_image">                            
        <h3>${results.name}<h3>
        <p class="price">${results.price}</p>`;
  });
}

generateHtml();
