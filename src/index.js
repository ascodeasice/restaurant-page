import './style.css';
import load from './functions/load'
import createHomePage from './functions/home'
import createMenuPage from './functions/menu';
import createContactPage from './functions/contact';

const contentDiv = document.getElementById("content")

//SECTION switching tabs
const tabContainer = document.createElement("div");
tabContainer.id = "tabContainer"
const homeTab = document.createElement("button");
homeTab.innerText = "Home"
homeTab.classList.add("tab");
const menuTab = document.createElement("button");
menuTab.innerText = "Menu"
menuTab.classList.add("tab");
const contactTab = document.createElement("button");
contactTab.innerText = "Contact"
contactTab.classList.add("tab");

tabContainer.appendChild(homeTab);
tabContainer.appendChild(menuTab);
tabContainer.appendChild(contactTab);

//SECTION heading
const header = document.createElement("div");
header.id = "header"
const heading = document.createElement("h1");
heading.id = "heading";
heading.innerText = "Abigail's Bakery"

header.appendChild(heading);
header.appendChild(tabContainer);


homeTab.addEventListener("click", function () {
    contentDiv.innerText = "";
    homeTab.classList.add("chosen");
    contactTab.classList.remove("chosen");
    menuTab.classList.remove("chosen");
    load(header);
    load(createHomePage());
})

menuTab.addEventListener("click", function () {
    menuTab.classList.add("chosen");
    contactTab.classList.remove("chosen");
    homeTab.classList.remove("chosen");

    contentDiv.innerText = "";
    load(header);
    load(createMenuPage());
})

contactTab.addEventListener("click", function () {
    contactTab.classList.add("chosen");
    menuTab.classList.remove("chosen");
    homeTab.classList.remove("chosen");

    contentDiv.innerText = "";
    load(header);
    load(createContactPage());
})

load(header);
homeTab.classList.add("chosen");//open home page by default
load(createHomePage());