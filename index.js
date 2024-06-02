//
document.addEventListener("DOMContentLoaded", function () {
  getMeme();
});

//Innercontainer to hold all new image element
const mainContainer = document.getElementById("imageContainer");
const innerContainer = document.createElement("div");
mainContainer.appendChild(innerContainer);
innerContainer.className = "innerContainer";

//array to add unique image urls
const uniqueUrls = [];
// function to fetch memes from api and display 10 memes
async function getMeme() {
  let currentOption = document.getElementById("selectMemes").value;

  innerContainer.innerHTML = "";
  // Reset uniqueImageUrls set
  uniqueImageUrls = new Set();

  for (let imageCount = 1; imageCount <= 3; imageCount++) {
    let response = await fetch(`https://meme-api.com/${currentOption}`);
    let data = await response.json();
    let newImageUrl = data.url;
    let author = data.author;
    let title = data.title;
    let subreddit = data.subreddit;

    //condition to check if the url is unique or not
    if (!uniqueUrls.includes(newImageUrl)) {
      //create cards if unique url found
      let cards = document.createElement("div");
      let cardTitle = document.createElement("h3");
      let cardAuthor = document.createElement("h5");
      let cardSubreddit = document.createElement("h5");
      let contentContainer = document.createElement("div");
      let newImageElement = document.createElement("img");

      //appending the child components
      innerContainer.appendChild(cards);
      cards.appendChild(cardTitle);
      cards.appendChild(newImageElement);
      cards.appendChild(contentContainer);
      contentContainer.appendChild(cardAuthor);
      contentContainer.appendChild(cardSubreddit);

      //Adding the necessary data
      cardTitle.textContent = title;
      newImageElement.src = newImageUrl;
      cardSubreddit.textContent = "#" + subreddit;
      cardAuthor.textContent = author;

      //classnames for each component to style them
      cards.className = "Cards";
      cardTitle.className = "memeTitle";
      cardAuthor.className = "memeAuthor";
      cardSubreddit.className = "memeSubreddit";
      contentContainer.className = "contentContainer";
      newImageElement.className = "memeImage";

      //push unique urls in the array
      uniqueUrls.push(newImageUrl);
    } else {
      imageCount--;
    }
  }
}
