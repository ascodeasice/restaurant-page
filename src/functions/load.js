import '../style.css';

//TODO a function that append title,tab to the page(every page needs that)

function load(content) {
    const contentDiv = document.getElementById("content");
    //TODO contentDiv.appendChild("tab");
    contentDiv.appendChild(content);
}

export default load;