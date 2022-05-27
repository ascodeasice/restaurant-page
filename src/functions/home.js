import '../style.css';

//return homepage content
function createHomePage() {
    const homePage = document.createElement("div");
    homePage.id = "homePage";

    const aboutTitle = document.createElement("h1");
    aboutTitle.id = "aboutTitle";
    aboutTitle.innerText = "About"
    homePage.appendChild(aboutTitle);

    const aboutText = document.createElement("p");
    aboutText.innerText = `Abigail's bakery has the best cake and tarts in the world. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit.Quisque enim lectus, sodales et rhoncus quis, feugiat a velit.Suspendisse ultrices mollis
    ultrices.Phasellus congue maximus quam, in feugiat leo lacinia sed.Mauris facilisis, augue ut ornare
    auctor, urna sapien facilisis tellus, et dictum urna felis nec nulla.`
    aboutText.id = "aboutText";
    homePage.appendChild(aboutText);

    const hoursTitle = document.createElement("h1");
    hoursTitle.innerText = "Hours";
    homePage.appendChild(hoursTitle);

    const hoursText = document.createElement("p");
    hoursText.id = "hoursText";
    hoursText.innerText = `MON~FRI:10am~5pm\nClosed on SAT and SUN`;
    homePage.appendChild(hoursText);

    return homePage;
}

export default createHomePage;