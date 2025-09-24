const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const image = document.createElement("img");
image.setAttribute("src", "https://picsum.photos/200");
image.setAttribute("alt", "Some image from picsum?");
document.body.appendChild(image);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const section = document.createElement("section");
const heading = document.createElement("h2");
const paragraph = document.createElement("p");

heading.innerText = "DOM Basics";
paragraph.innerText = "This was added through Javascript";

section.appendChild(heading);
section.appendChild(paragraph);
document.body.appendChild(section);