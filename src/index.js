import './style.css';
import load from './functions/load'
import createHomePage from './functions/home'
import createMenuPage from './functions/menu';
import createContactPage from './functions/contact';

const contentDiv = document.getElementById("content")

const tabContainer = document.createElement("div");
tabContainer.id = "tabContainer"
const homeTab = document.createElement("button");
homeTab.innerText = "homeTab"
homeTab.classList.add("tab");
const menuTab = document.createElement("button");
menuTab.innerText = "menuTab"
menuTab.classList.add("tab");
const contactTab = document.createElement("button");
contactTab.innerText = "contactTab"
contactTab.classList.add("tab");

tabContainer.appendChild(homeTab);
tabContainer.appendChild(menuTab);
tabContainer.appendChild(contactTab);

homeTab.addEventListener("click", function () {
    contentDiv.innerText = "";
    homeTab.classList.add("chosen");
    contactTab.classList.remove("chosen");
    menuTab.classList.remove("chosen");
    load(tabContainer);
    load(createHomePage());
})

menuTab.addEventListener("click", function () {
    menuTab.classList.add("chosen");
    contactTab.classList.remove("chosen");
    homeTab.classList.remove("chosen");

    contentDiv.innerText = "";
    load(tabContainer);
    load(createMenuPage());
})

contactTab.addEventListener("click", function () {
    contactTab.classList.add("chosen");
    menuTab.classList.remove("chosen");
    homeTab.classList.remove("chosen");

    contentDiv.innerText = "";
    load(tabContainer);
    load(createContactPage());
})

load(tabContainer);


// load(createHomePage());