const categoryMen = "category=23"

const menUrl = databaseUrl + "?" + categoryMen + consumerAndDeveloperKey;

async function executeApiCall() {
  try {
    const response = await fetch(menUrl);

    const results = await response.json();

    container.innerHTML = "";

    generateHtml(results);
  } catch (error) {
    console.log("An error has occured");
    container.innerHTML = "An error has occured";
  }
}

executeApiCall();