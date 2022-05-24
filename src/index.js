import Tart from './images/tart.jpeg';

const contentDiv = document.getElementById("content")

//testing to add image to div
function component() {
    const element = document.createElement("div");

    const img = new Image();
    img.src = Tart;

    element.appendChild(img);
    return element
}

contentDiv.appendChild(component());
