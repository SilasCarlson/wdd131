/*
    Naviation
*/
function handleResize() {
    const navigation = document.getElementById("navigation");

    if (window.innerWidth >= 1000) {
        navigation.classList.remove("hide");
    } else {
        navigation.classList.add("hide");
    }
}

function toggleNavigation() {
    const navigation = document.getElementById("navigation");
    navigation.classList.toggle("hide");
}

document.getElementById("navigationToggle").addEventListener("click", toggleNavigation);
window.addEventListener("resize", handleResize);

handleResize();

/*
    Gallery
*/
// this function is to remove the URL from the src of the image
// and just return the file path of the element
function getImageSource(element) {
    const split = element.src.split("/");
    return split[split.length - 1];
}

function viewerTemplate(imageSource, altText) {
    return `<img src="${imageSource}" alt="${altText}"><button class="closeViewer">X</button>`;
}

function galleryOnClick(event) {
    // Make sure this clicks on an image, if not then exit
    if (event.target.tagName !== "IMG") return;

    // Get the image source
    const imageSource = getImageSource(event.target);
    const largeImageSource = imageSource.split("-")[0] + "-full.jpeg";

    // Update the dialog
    const modal = document.getElementById("imageViewer");
    modal.innerHTML = viewerTemplate(largeImageSource, event.target.altText);

    // Also for this function, don't forget to add the modal to the screen with the .showModal();
    modal.showModal();
}

// Add a function that will handle the close button of the dialog being clicked.
function closeModal(event) {
    // Get the modal
    const modal = document.getElementById("imageViewer");

    // Close it
    modal.close();
}

// When the gallery is clicked (or any of it's subimages)
document.querySelector(".gallery").addEventListener("click", galleryOnClick);

// Add a function that will close the modal if the user clicks outside of the modal image.
// Add a function that will handle the close button of the dialog being clicked.
const modal = document.getElementById("imageViewer");
modal.addEventListener("click", function(event) {
    if (event.target === modal || event.target.classList.contains("closeViewer")) {
        closeModal(event);
    }
});