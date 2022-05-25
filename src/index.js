import Tart from './images/tart.jpeg';
import './style.css';
import createHomePage from './functions/home'
import load from './functions/load'
import createMenuPage from './functions/menu';

const contentDiv = document.getElementById("content")

//testing to add image to div
function component() {
    const element = document.createElement("div");

    const img = new Image();
    img.src = Tart;

    element.appendChild(img);
    return element
}

// load(createHomePage());