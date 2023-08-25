import createRestaurantHomePage from "./restaurant";
import createMenuPage from "./menu";
import createContactPage from "./contact";

const createTabs = () => {
  const content = document.querySelector("#content");

  //create tabs
  const home = document.createElement("button");
  const menu = document.createElement("button");
  const contact = document.createElement("button");

  //create ids
  home.setAttribute("id", "home-btn");
  menu.setAttribute("id", "menu-btn");
  contact.setAttribute("id", "contact-btn");

  //text content
  home.textContent = "Home";
  menu.textContent = "Menu";
  contact.textContent = "Contact";

  //append to content
  content.appendChild(home);
  content.appendChild(menu);
  content.appendChild(contact);

  //add event listener for each tab
  home.addEventListener("click", () => {
    clearContent();
    createRestaurantHomePage();
  });

  menu.addEventListener("click", () => {
    clearContent();
    createMenuPage();
  });

  contact.addEventListener("click", () => {
    clearContent();
    createContactPage();
  });
};

const clearContent = () => {
  const content = document.querySelector("#content");
  const pageContent = document.querySelector(".page-content");
  if (pageContent) {
    content.removeChild(pageContent);
  }
};

export default createTabs;
