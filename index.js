
//Innercontainer to hold all new image element
const mainContainer = document.getElementById("imageContainer");
const innerContainer = document.createElement("div");
mainContainer.appendChild(innerContainer);
innerContainer.className = "innerContainer";
console.log(mainContainer);


//array to add unique image urls
const uniqueUrls = [];
// function to fetch memes from api and display 10 memes
async function getMeme(){
    
    let currentOption = document.getElementById("selectMemes").value;
    console.log(currentOption);
    // Clear previous content
    innerContainer.innerHTML = '';
    // Reset uniqueImageUrls set
    uniqueImageUrls = new Set();

    for(let imageCount=1; imageCount<=3;imageCount++){   
    let response = await fetch(`https://meme-api.com/${currentOption}`);
    let data = await response.json();
    console.log(data.url);
    let newImageUrl = data.url;

    //condition to check if the url is unique or not
    if(!uniqueUrls.includes(newImageUrl)){
            let newImageElement = document.createElement("img");
            innerContainer.appendChild(newImageElement);
            newImageElement.src = newImageUrl;
            newImageElement.className = "memeImage";
            uniqueUrls.push(newImageUrl);
    }
    else{
        imageCount--;
    }

    }
}
