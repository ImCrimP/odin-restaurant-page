//restaurant.js

const createRestaurantHomePage = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  //create header
  const header = document.createElement("h1");
  header.textContent = "Best Restaurant Ever";
  pageContent.appendChild(header);

  //create image
  const img = document.createElement("img");
  img.src =
    "https://fastfoodinusa.com/fast-food-in-usa.php?src=templates/uploads/address/mcdonalds/840-park-ave.jpg&w=409&h=276";
  pageContent.appendChild(img);

  //create description
  const description = document.createElement("p");
  description.textContent = "Yummy Burgers";
  pageContent.appendChild(description);

  //add pageContent to content
  content.appendChild(pageContent);
};

export default createRestaurantHomePage;
