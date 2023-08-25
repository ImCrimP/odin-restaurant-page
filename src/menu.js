const createMenuPage = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");
  content.appendChild(pageContent);

  //create menue header and menu items
  const menuHeader = document.createElement("h1");
  menuHeader.textContent = "Menu";
  pageContent.appendChild(menuHeader);

  //main course
  const mainCourse = document.createElement("h2");
  mainCourse.textContent = "Main Course";
  const mainList = document.createElement("ul");

  //append to pageContent
  pageContent.appendChild(mainCourse);
  pageContent.appendChild(mainList);

  //add main list items
  const burger = document.createElement("li");
  burger.textContent = "Cheeseburger";
  const chickenNugs = document.createElement("li");
  chickenNugs.textContent = "Chicken Nuggets";

  //append to mainList
  mainList.appendChild(burger);
  mainList.appendChild(chickenNugs);

  //sides
  const sides = document.createElement("h2");
  sides.textContent = "Sides";
  const sidesList = document.createElement("ul");

  //append to pageContent
  pageContent.appendChild(sides);
  pageContent.appendChild(sidesList);

  //add sides list items
  const fries = document.createElement("li");
  fries.textContent = "Fries";
  const cheeseCurds = document.createElement("li");
  cheeseCurds.textContent = "Cheese Curds";

  //append to sidesList
  sidesList.appendChild(fries);
  sidesList.appendChild(cheeseCurds);

  //desserts
  const desserts = document.createElement("h2");
  desserts.textContent = "Desserts";
  const dessertsList = document.createElement("ul");

  //append to pageContent
  pageContent.appendChild(desserts);
  pageContent.appendChild(dessertsList);

  //add desserts list items
  const iceCream = document.createElement("li");
  iceCream.textContent = "Ice Cream";
  const shake = document.createElement("li");
  shake.textContent = "Shake";

  //append to dessertsList
  dessertsList.appendChild(iceCream);
  dessertsList.appendChild(shake);
};

export default createMenuPage;
