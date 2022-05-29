import Tel from "../images/telephone.svg"
import Mail from "../images/mail.svg"

//return contact page
function createContactPage() {
    const contactPage = document.createElement("div");
    contactPage.id = "contactPage";

    const contactTitle = document.createElement("h1");
    contactTitle.innerText = "Contact us";
    contactPage.appendChild(contactTitle);

    const srcList = [Tel, Mail];
    const textList = ["111-111-1111", "totallyReal@mail.com"];
    const infoContainer = document.createElement("div");
    for (let i = 0; i < srcList.length; i++) {
        infoContainer.classList.add("infoContainer");

        const icon = document.createElement("img");
        icon.src = srcList[i];
        infoContainer.appendChild(icon);

        const text = document.createElement("p");
        text.innerText = textList[i];
        infoContainer.appendChild(text);
    }
    contactPage.appendChild(infoContainer);

    return contactPage;
}

export default createContactPage;