/*
    Navigation Functions
*/
const links = document.querySelectorAll(".link");
const navigationToggle = document.getElementById("toggle-navigation");

navigationToggle.addEventListener("click", () => {
    // Get whether the links are active or not
    let isNavigationActive = links[0].classList.contains("active");

    // If the links are active then hide them
    // If they aren't then display them
    if (isNavigationActive) {
        links.forEach((link) => {
            link.classList.remove("active");
        });
    } else {
        links.forEach((link) => {
            link.classList.add("active");
        });
    }
});