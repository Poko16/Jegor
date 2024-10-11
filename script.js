
async function getMessages() {
    const url = "https://api.sampleapis.com/coffee/hot";
    const response = await fetch(url);
    const data = await response.json();
  
    const element = document.querySelector(".work");
    element.innerHTML = "";
  
    for (const item of data) {
      const title = item.title;
      const description = item.description;
      const ingredients = item.ingredients;
      const image = item.image;
      element.innerHTML += "<p>"  + title + "</p>";
      element.innerHTML += "<p>"  + description + "</p>";
      element.innerHTML += "<p>"  + ingredients + "</p>";
      element.innerHTML += "<img src='" + image + "'/>";
     
    }
    
  }
  getMessages();
  
  
   