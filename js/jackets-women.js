const categoryWomen = "category=22"

const womenUrl = databaseUrl + "?" + categoryWomen + consumerAndDeveloperKey;

async function executeApiCall() {
  try {
    const response = await fetch(womenUrl);

    const results = await response.json();

    container.innerHTML = "";

    generateHtml(results);
  } catch (error) {
    console.log("An error has occured");
    container.innerHTML = "An error has occured";
  }
}

executeApiCall();