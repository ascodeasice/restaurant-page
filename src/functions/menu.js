import Tart from "../images/tart.jpeg"
import Bear from "../images/bearCake.jpeg"
import Cat from "../images/catCake.jpeg"
import Deer from "../images/deerCake.jpeg"
import Eeyore from "../images/EeyoreCake.jpeg"
import Halloween from "../images/halloweenCake.jpeg"
import Monster from "../images/monsterCake.jpg"
import Pig from "../images/pigCake.jpeg"

const itemFactory = (name, src, price, description) => {

    const getPriceText = () => "$" + String(price) + " for each";
    return { name, src, getPriceText, description }
}


//return content of menu page
function createMenuPage() {
    const menuPage = document.createElement("div");
    menuPage.id = "menuPage"
    const itemList = [itemFactory("Tarts", Tart, 5, "Chocolate, macha and other flavors of tart."),
    itemFactory("Bear cake", Bear, 25, "Cake of winnie the pooh."),
    itemFactory("Cat cake", Cat, 20, "A cake of a cute gray cat."),
    itemFactory("Deer cake", Deer, 30, "A cake of an anime deer."),
    itemFactory("Dunkey cake", Eeyore, 2.5, "A cake of Eeyore."),
    itemFactory("Halloween cake", Halloween, 25, "A cake for Halloween."),
    itemFactory("Monster cake", Monster, 30, "The specialty of Abigail's bakery, one of the customer got this for birthday, and he loves it."),
    itemFactory("Pig cake", Pig, 15, "A cake of a pig in cartoon.")];

    itemList.forEach((item) => {
        const container = document.createElement("div");
        container.classList.add("menuContainer");

        const name = document.createElement("h1");
        name.innerText = item.name;
        name.classList.add("itemTitle");
        container.appendChild(name);

        const image = document.createElement("img");
        image.src = item.src;
        image.classList.add("itemImg");
        container.appendChild(image);

        const description = document.createElement("p");
        description.innerText = item.description + "\n\n" + item.getPriceText();
        description.classList.add("itemDescription");
        container.appendChild(description);
        menuPage.appendChild(container);

    })
    return menuPage;
}

export default createMenuPage;